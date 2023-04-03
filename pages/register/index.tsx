import React from 'react';
import InputComponent from '../../components/input';
import { NextPage } from 'next';
import { Controller, useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import { IUser } from './types';
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from '../../utils/schemas';
import Button from '../../components/button';
import PasswordInputComponent from '../../components/password-input';
import { useRouter } from 'next/navigation';
import { useAddUserMutation } from '../../redux/api/apiSlice';

const Register: NextPage = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm<IUser>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });
  const [addUser] = useAddUserMutation()
  const router = useRouter();
  
  const onSubmit = async (user: IUser) => {
    const data = { ...user }
    await addUser(data);
    if(data) {
      router.push('/')
    }
  }

  return(
    <div className={styles.register}>
      <div className={styles.form_wrapper}>
        <div className={styles.title}>Страница регистрации</div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller 
            name='firstName'
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                type='text'
                {...field}
                placeholder='имя'
                title='имя'
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller 
            name='lastName'
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type='text'
                placeholder='фамилия'
                title='фамилия'
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller 
            name='email'
            control={control}
            render={({ field, fieldState }) => (
              <InputComponent
                {...field}
                type='email'
                placeholder='email'
                title='email'
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller 
            name='password'
            control={control}
            render={({ field, fieldState }) => (
              <PasswordInputComponent
                {...field}
                type='password'
                placeholder='пароль'
                title='пароль'
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller 
            name='confirmPassword'
            control={control}
            render={({ field, fieldState }) => (
              <PasswordInputComponent
                {...field}
                type='password'
                placeholder='повторить пароль'
                title='повторить пароль'
                error={fieldState.error?.message}
              />
            )}
          />
          <Button
            disabled={!isValid || !isDirty}
          >Зарегистрироваться</Button>
        </form>
      </div>
    </div>
  )
};

export default Register;
