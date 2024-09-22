'use client';

import { checkToken, login } from '@/services/auth.service';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextData {
  handleCheckToken: (token: string) => Promise<boolean>;
  password: string;
  confirmPassword: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  isValid: boolean;
  validations: {
    passwordRegexOne: boolean;
    passwordRegexTwo: boolean;
    has15chars: boolean;
    has8chars: boolean;
    hasNumber: boolean;
    hasLowercase: boolean;
  };
  handleLoginSubmit: (
    username: string,
    password: string
  ) => Promise<{ error: boolean }>;
}

const AuthContext = createContext<AuthContextData | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validations, setValidations] = useState({
    passwordRegexOne: false,
    passwordRegexTwo: false,
    has15chars: false,
    has8chars: false,
    hasNumber: false,
    hasLowercase: false,
  });

  useEffect(() => {
    const has8chars = password.length >= 8;
    const has15chars = password.length >= 15;
    const hasNumber = /\d/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    let passwordRegexOne = has8chars && hasNumber && hasLowercase;
    const passwordRegexTwo = has15chars;

    if (passwordRegexTwo) {
      passwordRegexOne = false;
    } else {
      passwordRegexOne = has8chars && hasNumber && hasLowercase;
    }

    setValidations({
      passwordRegexOne,
      passwordRegexTwo,
      has15chars,
      has8chars,
      hasNumber,
      hasLowercase,
    });
  }, [password]);

  const isValid =
    !!password.trim() &&
    !!confirmPassword.trim() &&
    password === confirmPassword &&
    (validations.passwordRegexOne || validations.passwordRegexTwo);

  const handleCheckToken = async (token: string): Promise<boolean> => {
    try {
      await checkToken(token);
      return true;
    } catch {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
      }
      return false;
    }
  };

  const handleLoginSubmit = async (
    username: string,
    password: string
  ): Promise<{ error: boolean }> => {
    try {
      await login(username, password);
      return { error: false };
    } catch (error) {
      if (
        (error as Error).response &&
        (error as Error).response.status === 401
      ) {
        return { error: true };
      } else {
        return { error: false };
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleCheckToken,
        password,
        confirmPassword,
        setPassword,
        setConfirmPassword,
        isValid,
        validations,
        handleLoginSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
