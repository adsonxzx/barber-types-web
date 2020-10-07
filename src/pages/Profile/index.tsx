import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MdAddAPhoto, MdEmail, MdLock, MdPerson } from 'react-icons/md';

import { useHistory } from 'react-router-dom';
import { Container, Content, AvatarInput } from './styles';
import api from '../../services/api';
import Input from '../../components/Input/index';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';
import { useAuth } from '../../hooks/AuthContext';

interface Values {
  name: string;
  email: string;
  old_password?: string;
  password?: string;
  confirm?: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('E-mail deve ser válido'),
  old_password: Yup.string(),
  password: Yup.string().when('old_password', {
    is: val => !!val,
    then: Yup.string().min(6).required(),
    otherwise: Yup.string(),
  }),
  confirm: Yup.string()
    .when('old_password', {
      is: val => !!val,
      then: Yup.string().min(6).required(),
      otherwise: Yup.string(),
    })
    .nullable()
    .oneOf([Yup.ref('password'), null]),
});

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const history = useHistory();

  const [initialValues, setInitialValues] = useState({
    name: user.name,
    email: user.email,
    password: '',
    old_password: '',
    confirm: '',
  });

  const [avatar, setAvatar] = useState();

  async function handleSubmit(values: Values) {
    try {
      const { name, email, password, old_password } = values;

      let userProfile: Values = { name, email };

      if (password) {
        userProfile = { ...userProfile, password, old_password };
      }

      const response = await api.put('/profiles', userProfile);
      history.push(user.provider ? '/p/dashboard' : '/c/appointments');
      updateUser(response.data);

      toast.success('Dados atualizado com sucesso!');
    } catch (err) {
      toast.error('Erro ao atualizar dados');
    }
  }

  const handleAvatar = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      try {
        if (event.target.files) {
          const file = event.target.files[0];

          const formData = new FormData();
          formData.append('avatar', file, file.name);

          const response = await api.patch('/users/avatar', formData);

          setAvatar(
            `${process.env.REACT_APP_API_URL}/files/${response.data.avatar}`,
          );

          updateUser({
            ...user,
            avatar: `${process.env.REACT_APP_API_URL}/files/${response.data.avatar}`,
          });

          toast.success('Atualizado');
        }
      } catch (error) {
        toast.error('Error');
      }
    },
    [],
  );

  return (
    <Container>
      <Content>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<Values>) => (
            <Form>
              <AvatarInput htmlFor="avatar">
                <Avatar size={165} img={avatar || user.avatar_url} />
                <span>
                  <MdAddAPhoto size={18} color="#1F1D2A" />
                </span>

                <input id="avatar" type="file" onChange={handleAvatar} />
              </AvatarInput>

              <label>Nome</label>
              <Input icon={MdPerson} name="name" placeholder="Nome" />

              <label>Email</label>
              <Input
                icon={MdEmail}
                name="email"
                placeholder="exemple@gmail.com"
              />

              <label>Senha Atual</label>
              <Input
                icon={MdLock}
                name="old_password"
                type="password"
                placeholder="*******"
              />

              <label>Nova Senha</label>
              <Input
                icon={MdLock}
                name="password"
                type="password"
                placeholder="*******"
              />

              <label>Confirmar Senha</label>
              <Input
                icon={MdLock}
                name="confirm"
                type="password"
                placeholder="*******"
              />

              <Button width={340} type="submit" loading={false}>
                Confirmar Mudanças
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default Profile;
