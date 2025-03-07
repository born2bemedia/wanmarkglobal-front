'use client';

import { useAuthStore } from '../services/auth.store';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

export function AuthForm() {
  const { register } = useAuthStore();

  return <>{register ? <RegisterForm /> : <LoginForm />}</>;
}
