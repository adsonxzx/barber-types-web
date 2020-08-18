import React, { useState, useContext, useEffect } from 'react';
import { MdEmail, MdLock, MdLastPage } from 'react-icons/md';
import { Form, FormikProps, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';

import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface Values {
  password: string;
}

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password obrigatório')
    .min(6, 'No mínimo 6 caractéries'),
});

const ForgotPassword: React.FC = () => {
  const [initialValues, setInitialValues] = useState({
    password: '',
  });

  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');

  async function handleSubmit(values: Values) {
    try {
      const { password } = values;

      await api.post('/passwords/reset', {
        token,
        newPassword: password,
      });

      toast.success('Senha redefinida com sucesso!');
    } catch (err) {
      const error = err.response.data.message;
      toast.error(error);
    }
  }

  return (
    <Container>
      <Content>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props: FormikProps<Values>) => (
            <Form>
              <h3>Resetar Senha</h3>

              <label>Senha</label>
              <Input
                icon={MdLock}
                name="password"
                type="password"
                placeholder="******"
              />

              <Button type="submit">Enviar</Button>
            </Form>
          )}
        </Formik>

        <Link to="/">
          <MdLastPage color="#FF9000" size={16} />
          Login
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
