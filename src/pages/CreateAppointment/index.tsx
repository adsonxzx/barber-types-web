import React, { useState, useEffect, useCallback } from 'react';
import { MdArrowBack, MdDone } from 'react-icons/md';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { useParams, Link } from 'react-router-dom';
import { setHours, setMinutes, setSeconds, formatISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';
import history from '../../utils/history';
import { useAuth } from '../../hooks/AuthContext';
import Footer from '../../components/Footer';

import Avatar from '../../components/Avatar';
import {
  Container,
  Header,
  Content,
  ListProvider,
  Provider,
  SelectDate,
  SelectHour,
  Hour,
  Button,
  Done,
} from './styles';
import userAvatar from '../../assets/provider.jpg';
import api from '../../services/api';

interface IProvider {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  selected: boolean;
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

interface IMonthAvailable {
  day: number;
  available: boolean;
}

interface IHourAvailable {
  hour: number;
  available: boolean;
}

const CreateAppointment: React.FC = () => {
  const { provider_id } = useParams();
  const { user } = useAuth();

  const [dateSelected, setDateSelected] = useState(new Date());
  const [providers, setProviders] = useState<IProvider[]>([]);
  const [providerSelected, setProviderSelected] = useState(provider_id);
  const [timeDayAvailable, setTimeDayAvailable] = useState<ITimeDayAvailable>();
  const [appointmentCreated, setAppointmentCreated] = useState(false);
  const [hourSelected, setHourSelected] = useState(8);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [daysUnavailable, setDaysUnavailable] = useState([]);

  useEffect(() => {
    api.get('/providers').then(response => setProviders(response.data));
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${providerSelected}/day-available`, {
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
  }, [dateSelected, providerSelected]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    setDateSelected(day);
  }, []);

  const createAppointment = useCallback(async () => {
    const dateFormatted = setHours(
      setMinutes(setSeconds(dateSelected, 0), 0),
      hourSelected,
    );

    try {
      const result = await api.post('/appointments', {
        date: formatISO(dateFormatted),
        provider_id: providerSelected,
      });

      setAppointmentCreated(true);
    } catch (error) {
      toast.error('Error ao criar agendamento!');
    }
  }, [dateSelected, hourSelected, providerSelected]);

  const handleMonthChange = useCallback((date: Date) => {
    setCurrentMonth(date);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${providerSelected}/month-available`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => {
        const getDaysUnavailable = response.data.filter(
          (month: IMonthAvailable) => month.available === false,
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
  }, [currentMonth, providerSelected]);

  return (
    <Container>
      <Header>
        <div>
          <MdArrowBack
            color="#999591"
            size={24}
            onClick={() => history.back()}
          />
          <span>Agendamento</span>
          <Avatar size={56} img={user.avatar_url} />
        </div>
      </Header>

      <Content>
        <ListProvider
          initialFirstItem={2}
          itemsToScroll={1}
          itemPadding={[0, 15, 0, 0]}
          itemsToShow={2}
        >
          {providers.map(provider => (
            <Provider
              key={provider.id}
              selected={provider.id === providerSelected}
              onClick={() => setProviderSelected(provider.id)}
            >
              <Avatar size={32} img={provider.avatar_url} />
              <span>{provider.name}</span>
            </Provider>
          ))}
        </ListProvider>

        <SelectDate>
          <h3>Escolha a Data</h3>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            disabledDays={[
              ...daysUnavailable,
              {
                daysOfWeek: [0, 6],
              },
            ]}
            fromMonth={new Date()}
            onDayClick={handleDateChange}
            onMonthChange={handleMonthChange}
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

        <Button onClick={createAppointment}>Agendar</Button>
      </Content>

      <Done active={appointmentCreated}>
        <MdDone size={56} color="#04D361" />
        <span>Agendamento Criado</span>
        <p>
          {format(dateSelected, "EEEE ', dia' ii 'de' LLLL 'às' hh':00h'", {
            locale: pt,
          })}
        </p>
        <Link to="/c/appointments">
          <Button>Ok</Button>
        </Link>
      </Done>

      <Footer />
    </Container>
  );
};

export default CreateAppointment;
