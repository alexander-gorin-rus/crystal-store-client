import React from 'react'
import Button from '../../components/button'
import { Controller, useForm } from 'react-hook-form'
import styles from '../register/Register.module.scss'
import { NextPage } from 'next'
import { ILoginUser } from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginUserSchema } from '../../utils/schemas'
import InputComponent from '../../components/input'
import PasswordInputComponent from '../../components/password-input'
import { useRouter } from 'next/router'
import { useLoginUserMutation } from '../../redux/api/apiSlice'

const Login: NextPage = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm<ILoginUser>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const [addUser] = useLoginUserMutation()
  const router = useRouter();
  
  const onSubmit = async (user: ILoginUser) => {
    const data = { ...user }
    await addUser(data);
    if(data) {
      router.push('/')
    }
  }
  return (
    <div className={styles.register}>
    <div className={styles.form_wrapper}>
      <div className={styles.title}>Страница регистрации</div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <Button
          disabled={!isValid || !isDirty}
        >Войти</Button>
      </form>
    </div>
  </div>
  )
}

export default Login