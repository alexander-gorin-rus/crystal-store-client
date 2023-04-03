import * as z from "zod";

export const registerUserSchema = z.object({
  firstName: z.string()
    .min(3, 
      {message: 'Имя должно состоять не менее чем из трех символов'})
    .max(20,
      {message: 'Имя не должно быть длинее 20 символов'}),
  lastName: z.string().min(1,
      {message: 'Фамилия должна состоять не менее чем из одного символа'})
    .max(20,
      {message: 'Фамилия не должна быть длинее 20 символов'}),
  email: z.string().email(
      {message: 'Неправильный формат почты'})
    .trim().max(60).min(1),
  password: z.string().trim().min(6, {message: 'Пароль не должен быть меньше 6 символов'}).max(50, {message: 'Пароль не должен быть больше 50 символов'}),
  confirmPassword: z.string().trim(),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Пароли не совпадают",
});

export const loginUserSchema = z.object({
  email: z.string().email(
    {message: 'Неправильный формат почты'})
      .trim().max(60).min(1),
  password: z.string().trim().min(6, {message: 'Пароль не должен быть меньше 6 символов'})
})