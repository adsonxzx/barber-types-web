import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useField, Form, FormikProps, Formik } from 'formik';
import * as Yup from 'yup';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface Values {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('E-mail deve ser válido'),
  password: Yup.string()
    .required('Password obrigatório')
    .min(6, 'No mínimo 6 caractéries'),
});

const SignUp: React.FC = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(values: Values) {
    console.log(values);
  }

  return (
    <Container>
      <Background />

      <Content>
        <img src={logo} alt="" />

        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<Values>) => (
            <Form>
              <h3>Faça seu Cadastro</h3>

              <Input icon={MdPerson} name="name" placeholder="Nome" />

              <Input icon={MdEmail} name="email" placeholder="E-mail" />

              <Input
                icon={MdLock}
                name="password"
                type="password"
                placeholder="Senha"
              />

              <Button type="submit">Cadastrar</Button>
            </Form>
          )}
        </Formik>

        <button type="button">
          <MdKeyboardArrowLeft color="#fff" size={16} />
          Voltar para Login
        </button>
      </Content>
    </Container>
  );
};

export default SignUp;
