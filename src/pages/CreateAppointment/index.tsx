import React, { useState, useEffect, useCallback } from 'react';
import { MdArrowBack, MdDone } from 'react-icons/md';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { useParams, Link } from 'react-router-dom';
import { setHours, setMinutes, setSeconds, formatISO } from 'date-fns';
import { toast } from 'react-toastify';
import history from '../../utils/history';

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
  avatar: string;
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

const CreateAppointment: React.FC = () => {
  const { provider_id } = useParams();

  const [dateSelected, setDateSelected] = useState(new Date());
  const [providers, setProviders] = useState<IProvider[]>([]);
  const [providerSelected, setProviderSelected] = useState(provider_id);
  const [timeDayAvailable, setTimeDayAvailable] = useState<ITimeDayAvailable>();
  const [appointmentCreated, setAppointmentCreated] = useState(false);
  const [hourSelected, setHourSelected] = useState(8);

  useEffect(() => {
    api.get('/providers').then(response => setProviders(response.data));
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${providerSelected}/day-available`, {
        params: {
          day: 30,
          month: 8,
          year: 2020,
        },
      })
      .then(response => {
        const moning = response.data.slice(0, 4);
        const afternoon = response.data.slice(4, 10);
        const night = response.data.slice(10, 13);

        setTimeDayAvailable({ moning, afternoon, night });
      });
  }, [dateSelected]);

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
          <Avatar size={56} />
        </div>
      </Header>

      <Content>
        <ListProvider>
          {providers.map(provider => (
            <Provider
              key={provider.id}
              selected={provider.id === providerSelected}
              onClick={() => setProviderSelected(provider.id)}
            >
              <Avatar size={32} img={provider.avatar} />
              <span>{provider.name}</span>
            </Provider>
          ))}
        </ListProvider>

        <SelectDate>
          <h3>Escolha a Data</h3>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            fromMonth={new Date()}
            onDayClick={handleDateChange}
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
        <span>Agendamento Concluído</span>
        <p>Terça, dia 14 de maio de 2020 às 12:00h com Adson Souza</p>
        <Link to="/c/appointment/select-provider">
          <Button>Ok</Button>
        </Link>
      </Done>
    </Container>
  );
};

export default CreateAppointment;
