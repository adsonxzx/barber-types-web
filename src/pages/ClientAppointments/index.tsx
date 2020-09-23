import React, { useEffect, useState } from 'react';
import { MdContentCut, MdMoreHoriz } from 'react-icons/md';
import { getHours, parseISO } from 'date-fns';

import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import {
  Container,
  Header,
  Content,
  EmptyContent,
  MyAppointments,
} from './styles';
import { useAuth } from '../../hooks/AuthContext';
import calendar from '../../assets/calendar.png';
import api from '../../services/api';

interface IAppointment {
  id: string;
  date: string;
  hourEnd: string;
  hourStart: string;
}

const SelectProvider: React.FC = () => {
  const { user } = useAuth();

  const [myAppointments, setMyAppointments] = useState([]);

  useEffect(() => {
    api.get('/appointments/client').then(response => {
      const appointmentsFormatted = response.data.map(
        (appointment: IAppointment) => {
          return {
            ...appointment,
            hourStart: `${String(getHours(parseISO(appointment.date))).padStart(
              2,
              '0',
            )}:00`,
            hourEnd: `${String(
              getHours(parseISO(appointment.date)) + 1,
            ).padStart(2, '0')}:00`,
          };
        },
      );

      setMyAppointments(appointmentsFormatted);
    });
  }, []);

  console.log(myAppointments);
  return (
    <Container>
      <Header>
        <div>
          <div>
            <p>Bem Vindo</p>
            <span>{user.name}</span>
          </div>

          <Avatar size={56} img={user.avatar_url} />
        </div>
      </Header>
      <Content>
        <h1>Meus Agendamentos</h1>

        {!myAppointments.length && (
          <EmptyContent>
            <div>
              <img src={calendar} alt="" />
            </div>
            <span>Nenhum agendamento futuro</span>
            <Link to="/c/appointments/select-provider">Criar Agendamento</Link>
          </EmptyContent>
        )}

        {myAppointments && (
          <MyAppointments>
            {myAppointments.map((appointment: IAppointment) => (
              <li key={appointment.id}>
                <div>
                  <div className="left">
                    <span>
                      <MdContentCut color="#B9B9B9" size={22} />
                    </span>

                    <div>
                      <strong>Corte cabelo</strong>
                      <p>{`${appointment.hourStart} - ${appointment.hourEnd}`}</p>
                    </div>
                  </div>

                  <Avatar size={35} />
                </div>
              </li>
            ))}
          </MyAppointments>
        )}
      </Content>
    </Container>
  );
};

export default SelectProvider;
