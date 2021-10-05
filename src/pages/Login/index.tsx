import {
  TextField,
  Button,
  Theme,
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './Login.module.scss';
import condingSvg from '../../assets/svg/coding.svg';
import { useHistory } from 'react-router';
import Header from '../../components/Header';
import DefaultLayout from '../../components/DefaultLayout';
import * as yup from 'yup';
import {
  Controller,
  FieldErrors,
  useForm,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type IDefaultValues = typeof defaultValues;

const defaultValues = {
  username: '',
  password: '',
};

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required('Informação obrigatória'),
    password: yup
      .string()
      .required('Informação obrigatória'),
  })
  .required();

const Login: React.FC = () => {
  const theme: Theme = useTheme();
  const history = useHistory();

  const { control, formState, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const errors: FieldErrors = formState.errors;

  const handleCreateAccount = () => {
    history.push('/create');
  };

  const onSubmit = async (data: IDefaultValues) => {
    const { password, username } = data;

    try {
      console.log(username, password);
    } catch (error) {
      toast.error(`Usuário inválido`);
    }
  };

  return (
    <DefaultLayout>
      <Header />
      <main className="h-screen w-screen bg-theme-ebony flex flex-col overflow-x-hidden">
        <header className="h-10 flex items-center px-3 text-white">
          <h1>Logo</h1>
        </header>
        <div className="flex flex-1 flex-col gap-y-8 md:flex-row z-50">
          <div className={styles.loginImage}>
            <div className="bg-theme-beauBlue flex items-center justify-center">
              <figure>
                <img src={condingSvg} alt="Photo" />
              </figure>
            </div>
          </div>
          <div
            className={`flex flex-col gap-y-4 items-center justify-center w-full h-full ${styles.aa}`}
          >
            <h1
              className="text-2xl font-bold"
              style={{
                color: theme.palette.secondary.main,
              }}
            >
              Log
              <span
                style={{
                  color: theme.palette.secondary.light,
                }}
              >
                {' '}
                in
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
                    variant="filled"
                    label="Usuário"
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
                name="password"
                render={({ field }) => (
                  <TextField
                    {...field}
                    color="secondary"
                    variant="filled"
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
                Entrar
              </Button>
            </form>
            <span
              className={styles.createAccount}
              onClick={handleCreateAccount}
            >
              Criar uma conta
            </span>
          </div>
        </div>
        <footer className={styles.spacer} />
      </main>
    </DefaultLayout>
  );
};

export default Login;
