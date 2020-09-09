import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import {
  getDaysInMonth,
  setDate,
  format,
  getHours,
  getDate,
  getMonth,
  parseISO,
  isToday,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdContentCut, MdMoreHoriz } from 'react-icons/md';
import { motion } from 'framer-motion';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import {
  Container,
  Content,
  SiderBar,
  ContentHeader,
  CalendarMonth,
  Month,
  CalendarDay,
  Day,
  Appointments,
  AvatarService,
  ClienteAvatar,
  Appointment,
} from './styles';

import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';
import providerAvatar from '../../assets/provider-avatar.png';
import providerImage from '../../assets/provider.jpg';

interface IDaysOfMonth {
  number: number;
  day: string;
}

interface Appointment {
  date: string;
}

interface ListAppoitment {
  hour: number;
  hourStart: string;
  hourEnd: string;
  isCurrent: boolean;
  isFuture: boolean;
  appointment: Appointment | undefined;
}

interface ISelectDate {
  day?: number;
  month?: number;
}

const Dashboard: React.FC = () => {
  const constraintsRef = useRef(null);
  const { user } = useAuth();

  const [months, setMonths] = useState([
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]);
  const [dateSelected, setDateSelected] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysOfMonth, setDaysOfMonth] = useState<IDaysOfMonth[]>([]);

  const [hoursOfDay, setHoursOfDay] = useState(() =>
    Array.from({ length: 10 }, (_, index) => index + 8),
  );

  const [appointments, setAppointments] = useState<ListAppoitment[]>([]);

  const [daySelected, setDaySelected] = useState(getDate(new Date()));
  const [monthSelected, setMonthSelected] = useState(getMonth(new Date()) + 1);

  useEffect(() => {
    const numberOfDaysInMonth = getDaysInMonth(new Date());
    const days = Array.from(
      { length: numberOfDaysInMonth },
      (_, index) => index + 1,
    );

    const nameOfDays = days.map(day => {
      const dateFormatted = setDate(dateSelected, day);
      return {
        number: day,
        day: format(dateFormatted, 'E', { locale: pt }),
      };
    });

    setDaysOfMonth(nameOfDays);
  }, [dateSelected]);

  function formatAppointment(myAppointments: []) {
    const appointmentsFormmated = hoursOfDay.map(hour => {
      return {
        hour,
        hourStart: `${String(hour).padStart(2, '0')}:00`,
        hourEnd: `${String(hour + 1).padStart(2, '0')}:00`,
        isCurrent: getHours(currentDate) === hour,
        isFuture: hour > getHours(currentDate),
        appointment: myAppointments.find((appointment: Appointment) => {
          return getHours(parseISO(appointment.date)) === hour;
        }),
      };
    });

    setAppointments(appointmentsFormmated);
  }

  useEffect(() => {
    api
      .get('/appointments/me', {
        params: {
          day: 19,
          month: 8,
          year: 2020,
        },
      })
      .then(response => {
        formatAppointment(response.data);
      });
  }, []);

  const dateSeletedText = useMemo(() => {
    const today = isToday(dateSelected) ? 'Hoje' : '';
    const result = format(dateSelected, "dd 'de' MMMM", {
      locale: pt,
    });

    return `${today} | ${result}`;
  }, [dateSelected]);

  async function handleSelectAppoinmentDate({ day, month }: ISelectDate) {
    if (day) {
      setDaySelected(day);
    }

    if (month) {
      setMonthSelected(month);
    }

    try {
      const response = await api.get('/appointments/me', {
        params: {
          day: day || daySelected,
          month: month || monthSelected,
          year: 2020,
        },
      });

      formatAppointment(response.data);
    } catch (error) {
      toast.error('Erro ao carregar agendamentos!');
    }
  }

  const busySchedule = useMemo(() => {
    const busy = appointments.filter(({ appointment }) => !!appointment);
    return busy.length;
  }, [appointments]);

  return (
    <Container>
      <Content>
        <ContentHeader>
          <div>
            <h1>Horários Agendados</h1>
            <p>{dateSeletedText}</p>
          </div>

          <button type="button">+ Criar</button>
        </ContentHeader>

        <CalendarMonth
          initialFirstItem={monthSelected}
          itemsToScroll={4}
          itemPadding={[0, 0]}
          itemsToShow={7}
        >
          {months.map((month, index) => (
            <Month
              key={month}
              selected={index + 1 === monthSelected}
              onClick={() => handleSelectAppoinmentDate({ month: index + 1 })}
            >
              {month}
            </Month>
          ))}
        </CalendarMonth>

        <CalendarDay>
          <Carousel
            initialFirstItem={daySelected}
            itemsToScroll={7}
            itemPadding={[0, 0]}
            itemsToShow={12}
          >
            {daysOfMonth.map(({ number, day }) => (
              <Day
                key={number}
                selected={number === daySelected}
                onClick={() => handleSelectAppoinmentDate({ day: number })}
              >
                <strong>{number}</strong>
                <span>{day}</span>
              </Day>
            ))}
          </Carousel>
        </CalendarDay>

        <Appointments ref={constraintsRef}>
          <motion.ul drag dragConstraints={constraintsRef}>
            {appointments.map(
              ({
                hourStart,
                hourEnd,
                appointment,
                hour,
                isCurrent,
                isFuture,
              }) => (
                <Appointment
                  appointment={!!appointment}
                  key={hourStart}
                  isCurrent={isCurrent}
                  isFuture={isFuture}
                >
                  <span>{hourStart}</span>
                  <div>
                    <div className="left">
                      <AvatarService isCurrent={isCurrent} isFuture={isFuture}>
                        <MdContentCut color="#B9B9B9" size={18} />
                      </AvatarService>

                      <div>
                        <strong>Corte cabelo</strong>
                        <p>{`${hourStart} - ${hourEnd}`}</p>
                      </div>
                    </div>

                    <div className="right">
                      <ClienteAvatar>
                        <img src={providerAvatar} alt="cliente" />
                      </ClienteAvatar>

                      <MdMoreHoriz size={28} color="#97989a" />
                    </div>
                  </div>
                </Appointment>
              ),
            )}
          </motion.ul>
        </Appointments>
      </Content>

      <SiderBar>
        <Link to="/profile">
          <img src={user.avatar_url || providerImage} alt="Provider" />
        </Link>

        <strong>{user.name}</strong>
        <p>{user.email}</p>

        <div className="available">
          <div>
            <span>Ocupado</span>
            <strong>{busySchedule}</strong>
          </div>

          <div>
            <span>Livre</span>
            <strong>{10 - busySchedule}</strong>
          </div>
        </div>

        <div className="notifications">
          <h3>Notificacões</h3>
          <ul>
            <li>Agendamento marcado para 15/08/2020 as 14:00</li>
            <li>Agendamento marcado para 15/08/2020 as 14:00</li>
            <li>Agendamento marcado para 15/08/2020 as 14:00</li>
            <li>Agendamento marcado para 15/08/2020 as 14:00</li>
          </ul>
        </div>
      </SiderBar>
    </Container>
  );
};

export default Dashboard;
