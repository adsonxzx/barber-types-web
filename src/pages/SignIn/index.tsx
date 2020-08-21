import React, { useState, useContext } from 'react';
import { MdEmail, MdLock, MdLastPage } from 'react-icons/md';
import { Form, FormikProps, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';

interface Values {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('E-mail deve ser válido'),
  password: Yup.string()
    .required('Password obrigatório')
    .min(6, 'No mínimo 6 caractéries'),
});

const SignIn: React.FC = () => {
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const { user, signIn } = useAuth();

  async function handleSubmit(values: Values) {
    try {
      setLoading(true);
      const { email, password } = values;
      await signIn({ email, password });
    } catch (err) {
      const error = err.response.data.message;
      toast.error(error);
    } finally {
      setLoading(false);
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
              <h3>Faça seu login</h3>

              <label htmlFor="email">Email</label>
              <Input
                id="email"
                icon={MdEmail}
                name="email"
                placeholder="exemple@gmail.com"
              />

              <label>Senha</label>
              <Input
                icon={MdLock}
                name="password"
                type="password"
                placeholder="******"
              />

              <Button loading={loading} type="submit">
                Entrar
              </Button>
              <Link to="/passwords/forgot">Esqueci minha senha</Link>
            </Form>
          )}
        </Formik>

        <Link to="/register">
          <MdLastPage color="#FF9000" size={16} />
          Criar Conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
