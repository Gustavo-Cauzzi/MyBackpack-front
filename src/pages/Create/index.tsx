import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  TextField,
  Theme,
  useTheme,
} from '@material-ui/core';
import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import {
  Controller,
  FieldErrors,
  useForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import DefaultLayout from '../../components/DefaultLayout';
import Header from '../../components/Header';

type IDefaultValues = {
  username: string;
  name: string;
  password: string;
};

const defaultValues: IDefaultValues = {
  username: '',
  name: '',
  password: '',
};

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required('Obrigatório informar um usuário'),
    name: yup
      .string()
      .required('Obrigatório informar um nome'),
    password: yup
      .string()
      .required('Obrigatório informar uma senha')
      .min(6, 'Senha muito pequena'),
  })
  .required();

const Create: React.FC = () => {
  const theme: Theme = useTheme();
  const history = useHistory();

  const { control, handleSubmit, formState } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const errors: FieldErrors = formState.errors;

  const onSubmit = async (data: IDefaultValues) => {
    const { name, password, username } = data;

    try {
      console.log(username, password, name);
    } catch (error) {
      toast.error(`User is invalid`);
    }
  };

  return (
    <DefaultLayout>
      <Header />
      <main className="p-5 flex flex-col justify-center items-center absolute top-14 bottom-0 left-0 right-0">
        <div className="absolute left-3 top-5">
          <Button
            color="secondary"
            size="large"
            onClick={() => history.goBack()}
            startIcon={<ArrowBackOutlined />}
          >
            Voltar
          </Button>
        </div>

        <h1
          className="text-2xl font-bold mb-4"
          style={{
            color: theme.palette.secondary.main,
          }}
        >
          Criar
          <span
            style={{ color: theme.palette.secondary.light }}
          >
            {' '}
            a conta
          </span>
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gap-y-4 flex flex-col"
        >
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <TextField
                {...field}
                color="secondary"
                variant="outlined"
                label="Nome"
                error={!!errors.username}
                helperText={
                  errors.username
                    ? errors.username.message
                    : ''
                }
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                color="secondary"
                variant="outlined"
                label="Usuário"
                error={!!errors.name}
                helperText={
                  errors.name ? errors.name.message : ''
                }
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                color="secondary"
                variant="outlined"
                label="Senha"
                type="password"
                error={!!errors.password}
                helperText={
                  errors.password
                    ? errors.password.message
                    : ''
                }
              />
            )}
          />

          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Criar usuário
          </Button>
        </form>
      </main>
    </DefaultLayout>
  );
};

export default Create;
