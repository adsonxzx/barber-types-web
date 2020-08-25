import React, { useState } from 'react';
import { MdArrowBack, MdDone } from 'react-icons/md';
import DayPicker from 'react-day-picker';

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

const CreateAppointment: React.FC = () => {
  const [daySelected, setDaySelected] = useState();

  return (
    <Container>
      <Header>
        <div>
          <MdArrowBack color="#999591" size={24} />
          <span>Agendamento</span>
          <Avatar size={56} />
        </div>
      </Header>
      <Content>
        <ListProvider>
          <Provider selected>
            <Avatar size={32} img={userAvatar} />
            <span>Adson Souza</span>
          </Provider>
          <Provider selected={false}>
            <Avatar size={32} />
            <span>Adson Souza</span>
          </Provider>
          <Provider selected={false}>
            <Avatar size={32} />
            <span>Adson Souza</span>
          </Provider>
          <Provider selected={false}>
            <Avatar size={32} />
            <span>Adson Souza</span>
          </Provider>
        </ListProvider>

        <SelectDate>
          <h3>Escolha a Data</h3>
          <DayPicker onDayClick={() => setDaySelected} />
        </SelectDate>

        <SelectHour>
          <h3>Escolha o Horário</h3>

          <span>Manhã</span>
          <ul>
            <Hour>09:00</Hour>
            <Hour>10:00</Hour>
            <Hour>11:00</Hour>
          </ul>

          <span>Tarde</span>
          <ul>
            <Hour>09:00</Hour>
            <Hour>10:00</Hour>
            <Hour>11:00</Hour>
            <Hour>11:00</Hour>
          </ul>

          <span>Noite</span>
          <ul>
            <Hour selected>09:00</Hour>
            <Hour>10:00</Hour>
            <Hour>11:00</Hour>
          </ul>
        </SelectHour>

        <Button>Agendar</Button>
      </Content>
      <Done>
        <MdDone size={56} color="#04D361" />
        <span>Agendamento Concluído</span>
        <p>Terça, dia 14 de maio de 2020 às 12:00h com Adson Souza</p>
        <Button>Ok</Button>
      </Done>
    </Container>
  );
};

export default CreateAppointment;
