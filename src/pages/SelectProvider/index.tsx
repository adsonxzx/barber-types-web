import React, { useState, useEffect } from 'react';

import { MdEvent, MdSchedule, MdArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Avatar from '../../components/Avatar';
import { Container, Header, Content, BoxProvider } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';
import Footer from '../../components/Footer';
import history from '../../utils/history';

interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
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
          <MdArrowBack
            color="#999591"
            size={24}
            onClick={() => history.back()}
          />
          <span>Barbeiros</span>
          <Avatar size={56} img={user.avatar_url} />
        </div>
      </Header>
      <Content>
        <h1>Barbeiros</h1>
        {providers.map(provider => (
          <Link to={`/c/appointments/create/${provider.id}`} key={provider.id}>
            <BoxProvider>
              <Avatar size={55} img={provider.avatar_url} />
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
      <Footer />
    </Container>
  );
};

export default SelectProvider;
