/* eslint-disable import/no-duplicates */
import React, { useState, useEffect, useRef } from 'react';
import { getDaysInMonth, setDate, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdContentCut, MdMoreHoriz } from 'react-icons/md';
import { motion } from 'framer-motion';

import {
  Container,
  Content,
  SiderBar,
  ContentHeader,
  CalendarMonth,
  CalendarDay,
  Appointments,
  AvatarService,
  ClienteAvatar,
} from './styles';

import providerAvatar from '../../assets/provider.jpg';

interface IDaysOfMonth {
  number: number;
  day: string;
}

const Dashboard: React.FC = () => {
  const constraintsRef = useRef(null);

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
  const [daysOfMonth, setDaysOfMonth] = useState<IDaysOfMonth[]>([]);
  const [hoursOfDay, setHoursOfDay] = useState([
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ]);

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

  return (
    <Container>
      <Content>
        <ContentHeader>
          <div>
            <h1>Horários Agendados</h1>
            <p>Hoje | Dia 06 | Segunda-Feira</p>
          </div>

          <button type="button">+ Criar</button>
        </ContentHeader>

        <CalendarMonth>
          <ul>
            {months.map(month => (
              <li key={month} className={month === 'Maio' ? 'active' : ''}>
                {month}
              </li>
            ))}
          </ul>
        </CalendarMonth>

        <CalendarDay>
          <ul>
            {daysOfMonth.map(({ number, day }) => (
              <li key={number} className={`${number === 7 ? 'active' : ''}`}>
                <strong>{number}</strong>
                <span>{day}</span>
              </li>
            ))}
          </ul>
        </CalendarDay>

        <Appointments ref={constraintsRef}>
          <motion.ul drag dragConstraints={constraintsRef}>
            {hoursOfDay.map(appointment => (
              <li
                key={appointment}
                className={`${appointment === '09:00' ? 'no' : ''}`}
              >
                <span>{appointment}</span>
                <div>
                  <div className="left">
                    <AvatarService>
                      <MdContentCut color="#B9B9B9" size={18} />
                    </AvatarService>

                    <div>
                      <strong>Corte cabelo</strong>
                      <p>08:00 - 09:00</p>
                    </div>
                  </div>

                  <div className="right">
                    <ClienteAvatar>
                      <img src={providerAvatar} alt="cliente" />
                    </ClienteAvatar>

                    <MdMoreHoriz size={28} color="#97989a" />
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        </Appointments>
      </Content>

      <SiderBar>
        <img src={providerAvatar} alt="Provider" />
        <strong>Adson Souza</strong>
        <p>adsonxzx@gmail.com</p>

        <div className="available">
          <div>
            <span>Ocupado</span>
            <strong>9</strong>
          </div>

          <div>
            <span>Livre</span>
            <strong>1</strong>
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
