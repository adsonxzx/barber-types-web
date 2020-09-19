import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Form, FormikProps, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

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

  async function handleSubmit(values: Values) {
    try {
      const { name, email, password } = values;
      await api.post('/users', { name, email, password });

      toast.success('Usuário cadastrado com sucesso');
    } catch (err) {
      const error = err.response.data.message;

      toast.error(error);
    }
  }

  return (
    <Container>
      <Background />

      <Content>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<Values>) => (
            <Form>
              <h3>Faça seu Cadastro</h3>

              <label>Nome</label>
              <Input icon={MdPerson} name="name" placeholder="Nome" />

              <label>Email</label>
              <Input
                icon={MdEmail}
                name="email"
                placeholder="exemple@gmail.com"
              />

              <label>Senha</label>
              <Input
                icon={MdLock}
                name="password"
                type="password"
                placeholder="*******"
              />

              <Button width={340} type="submit" loading={false}>
                Cadastrar
              </Button>
            </Form>
          )}
        </Formik>

        <Link to="/">
          <MdKeyboardArrowLeft color="#ff9000" size={16} />
          Voltar para Login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
