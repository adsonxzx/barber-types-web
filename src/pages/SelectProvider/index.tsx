import React, { useState, useEffect } from 'react';

import { MdEvent, MdSchedule } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Avatar from '../../components/Avatar';
import { Container, Header, Content, BoxProvider } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';

interface IProvider {
  id: string;
  name: string;
  avatar: string;
}

const SelectProvider: React.FC = () => {
  const [providers, setProviders] = useState<IProvider[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    try {
      api.get('/providers').then(response => setProviders(response.data));
    } catch (error) {
      toast.error('Error ao ler prestadores de serviço');
    }
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <div>
            <p>Bem Vindo</p>
            <span>{user.name}</span>
          </div>

          <Avatar size={56} img={user.avatar} />
        </div>
      </Header>
      <Content>
        <h1>Cabeleireiros</h1>
        {providers.map(provider => (
          <Link to={`/c/appointment/create/${provider.id}`} key={provider.id}>
            <BoxProvider>
              <Avatar size={72} img={provider.avatar} />
              <div className="info">
                <h3>{provider.name}</h3>
                <span>
                  <MdEvent size={16} color="#FF9000" />
                  Segunda à sexta
                </span>
                <span>
                  <MdSchedule size={16} color="#FF9000" />
                  8h às 18h
                </span>
              </div>
            </BoxProvider>
          </Link>
        ))}
      </Content>
    </Container>
  );
};

export default SelectProvider;
