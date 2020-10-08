import React, { useCallback, useState, useEffect, HTMLAttributes } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { MdDelete } from 'react-icons/md';
import { setHours, setMinutes, setSeconds, formatISO } from 'date-fns';
import { toast } from 'react-toastify';

import Avatar from '../Avatar';
import api from '../../services/api';
import {
  Container,
  Content,
  SelectDate,
  SelectHour,
  Hour,
  Client,
} from './styles';
import { useAuth } from '../../hooks/AuthContext';
import Button from '../Button';

interface IProps extends HTMLAttributes<HTMLElement> {
  open: boolean;
}

interface IClient {
  id: string;
  name: string;
  avatar_url: string;
  email: string;
}

interface IMonthAvailable {
  day: number;
  available: boolean;
  isPast: boolean;
}

interface IHourAvailable {
  hour: number;
  available: boolean;
}

interface IDayAvailable {
  hour: number;
  available: boolean;
}

interface ITimeDayAvailable {
  moning: IDayAvailable[];
  afternoon: IDayAvailable[];
  night: IDayAvailable[];
}

const ModalCreateAppointment: React.FC<IProps> = ({ open, onClick }) => {
  const { user } = useAuth();

  const [clientEmail, setClientEmail] = useState();
  const [findClientError, setFindClientError] = useState('');
  const [client, setClient] = useState<IClient | null>();
  const [loadClient, setLoadClient] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dateSelected, setDateSelected] = useState(new Date());

  const [daysUnavailable, setDaysUnavailable] = useState([]);

  const [timeDayAvailable, setTimeDayAvailable] = useState<ITimeDayAvailable>();
  const [hourSelected, setHourSelected] = useState(8);

  const [loadCreateAppointment, setLoadCreateAppointment] = useState(false);

  /**
   * Get days of month available and put in calendar
   */
  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-available`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => {
        const getDaysUnavailable = response.data.filter(
          (month: IMonthAvailable) =>
            month.available === false || month.isPast === true,
        );

        const daysUnavailableFormatted = getDaysUnavailable.map(
          (month: IMonthAvailable) =>
            new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              month.day,
            ),
        );

        setDaysUnavailable(daysUnavailableFormatted);
      });
  }, [currentMonth, user.id]);

  /**
   * Get hour of day available
   */
  useEffect(() => {
    api
      .get(`/providers/${user.id}/day-available`, {
        params: {
          day: dateSelected.getDate(),
          month: dateSelected.getMonth() + 1,
          year: dateSelected.getFullYear(),
        },
      })
      .then(response => {
        const hoursAvailable = response.data.filter(
          (appointment: IHourAvailable) => appointment.available === true,
        );
        const moning = hoursAvailable.slice(0, 4);
        const afternoon = hoursAvailable.slice(4, 10);
        const night = hoursAvailable.slice(10, 13);

        setTimeDayAvailable({ moning, afternoon, night });
      });
  }, [dateSelected, user.id]);

  const findUserByEmail = useCallback(() => {
    setLoadClient(true);
    api
      .get('/users', {
        params: {
          email: clientEmail,
        },
      })
      .then(response => {
        setClient(response.data);
        setFindClientError('');
        setLoadClient(false);
      })
      .catch(error => {
        setFindClientError('Cliente não encontrado!');
        setLoadClient(false);
      });
  }, [clientEmail]);

  const createAppointment = useCallback(async () => {
    try {
      setLoadCreateAppointment(true);
      const dateFormatted = setHours(
        setMinutes(setSeconds(dateSelected, 0), 0),
        hourSelected,
      );

      await api.post('/appointments', {
        date: formatISO(dateFormatted),
        provider_id: user.id,
        user_id: client?.id,
      });

      toast.success('Agendamento criado com sucesso!');
    } catch (error) {
      toast.error('Error ao criar agendamento!');
    } finally {
      setLoadCreateAppointment(false);
    }
  }, [dateSelected, hourSelected, user.id, client?.id]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setDateSelected(day);
    }
  }, []);

  return (
    <Container open={open} id="container" onClick={onClick}>
      <Content>
        {client ? (
          <>
            <h3>Cliente</h3>
            <Client>
              <Avatar size={55} img={client.avatar_url} />
              <div className="info">
                <h3>{client.name}</h3>
                <span>{client.email}</span>
              </div>
              <button type="button" onClick={() => setClient(null)}>
                <MdDelete size={24} color="#ccc" />
              </button>
            </Client>
          </>
        ) : (
          <form>
            <label>Buscar cliente</label>
            <input
              type="text"
              name="email"
              placeholder="example@client.com"
              onChange={event => setClientEmail(event.target.value)}
            />
            <Button
              height={42}
              color="#ff9000"
              width={94}
              onClick={findUserByEmail}
              loading={loadClient}
            >
              Buscar
            </Button>
            <span>{findClientError && findClientError}</span>
          </form>
        )}

        <SelectDate>
          <h3>Escolha a Data</h3>
          <DayPicker
            selectedDays={dateSelected}
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            onDayClick={handleDateChange}
            onMonthChange={date => setCurrentMonth(date)}
            disabledDays={[
              ...daysUnavailable,
              {
                daysOfWeek: [0, 6],
              },
            ]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
          />
        </SelectDate>

        <SelectHour>
          <h3>Escolha o Horário</h3>

          {!!timeDayAvailable?.moning.length && (
            <>
              <span>Manhã</span>
              <ul>
                {timeDayAvailable.moning.map(({ hour }) => (
                  <Hour
                    key={hour}
                    onClick={() => setHourSelected(hour)}
                    selected={hourSelected === hour}
                  >
                    {`${hour}:00`}
                  </Hour>
                ))}
              </ul>
            </>
          )}

          {!!timeDayAvailable?.afternoon.length && (
            <>
              <span>Tarde</span>
              <ul>
                {timeDayAvailable.afternoon.map(({ hour }) => (
                  <Hour
                    key={hour}
                    onClick={() => setHourSelected(hour)}
                    selected={hourSelected === hour}
                  >
                    {`${hour}:00`}
                  </Hour>
                ))}
              </ul>
            </>
          )}

          {!!timeDayAvailable?.night.length && (
            <>
              <span>Noite</span>
              <ul>
                {timeDayAvailable.night.map(({ hour }) => (
                  <Hour
                    key={hour}
                    onClick={() => setHourSelected(hour)}
                    selected={hourSelected === hour}
                  >
                    {`${hour}:00`}
                  </Hour>
                ))}
              </ul>
            </>
          )}
        </SelectHour>

        <Button
          width={340}
          color="#ff9000"
          onClick={createAppointment}
          loading={loadCreateAppointment}
        >
          Agendar
        </Button>
      </Content>
    </Container>
  );
};

export default ModalCreateAppointment;
