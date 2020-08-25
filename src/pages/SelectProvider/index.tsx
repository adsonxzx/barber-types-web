import React from 'react';

import { MdEvent, MdSchedule } from 'react-icons/md';
import Avatar from '../../components/Avatar';
import { Container, Header, Content, BoxProvider } from './styles';
import userAvatar from '../../assets/provider.jpg';

const SelectProvider: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <div>
            <p>Bem Vindo</p>
            <span>Adson Souza</span>
          </div>

          <Avatar size={56} img={userAvatar} />
        </div>
      </Header>
      <Content>
        <h1>Cabeleireiros</h1>
        <BoxProvider>
          <Avatar size={72} img={userAvatar} />
          <div className="info">
            <h3>Adson Souza</h3>
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

        <BoxProvider>
          <Avatar size={72} img={userAvatar} />
          <div className="info">
            <h3>Adson Souza</h3>
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

        <BoxProvider>
          <Avatar size={72} img={userAvatar} />
          <div className="info">
            <h3>Adson Souza</h3>
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

        <BoxProvider>
          <Avatar size={72} img={userAvatar} />
          <div className="info">
            <h3>Adson Souza</h3>
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

        <BoxProvider>
          <Avatar size={72} img={userAvatar} />
          <div className="info">
            <h3>Adson Souza</h3>
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
      </Content>
    </Container>
  );
};

export default SelectProvider;
