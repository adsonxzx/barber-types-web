import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import { Container, Header, Content, EmptyContent } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import Footer from '../../components/Footer';
import calendar from '../../assets/calendar.png';

const SelectProvider: React.FC = () => {
  const { user } = useAuth();

  const [myAppointments, setMyAppointments] = useState([]);

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
      </Content>
      <Footer />
    </Container>
  );
};

export default SelectProvider;
