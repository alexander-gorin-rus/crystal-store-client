export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  type?: string;
}