'use client';

import React, { createContext, useContext, useState } from 'react';

interface ValidationProviderProps {
  children: React.ReactNode;
}

interface ValidationContextData {
  useInputValidation: (inputRefs: React.RefObject<HTMLInputElement | null>[]) => {
    handleFormSubmit: (submitCallback: () => Promise<void>) => Promise<void>;
    errors: { [key: string]: boolean };
    hasError: (fieldName: string) => boolean;
    errorCount: number;
  };
}

const ValidationContext = createContext<ValidationContextData | null>(null);

export const useValidationContext = () => {
  const context = useContext(ValidationContext);
  if (!context) {
    throw new Error(
      'useValidationContext must be used within a ValidationProvider'
    );
  }
  return context;
};

export const ValidationProvider: React.FC<ValidationProviderProps> = ({
  children,
}) => {
  const useInputValidation = (
    inputRefs: React.RefObject<HTMLInputElement | null>[]
  ) => {
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
    const [errorCount, setErrorCount] = useState(0);
    const [submitAttempted, setSubmitAttempted] = useState(false);

    const handleFormSubmit = async (submitCallback: () => Promise<void>) => {
      setSubmitAttempted(true);
      let hasError = false;
      let count = 0;

      inputRefs.forEach((inputRef) => {
        const input = inputRef.current as HTMLInputElement;
        if (input && !input.value.trim()) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [input.name]: true,
          }));
          if (!hasError) {
            hasError = true;
            input.focus();
          }
          count++;
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [input.name]: false,
          }));
        }
      });

      setErrorCount(count);

      if (!hasError) {
        await submitCallback();
      }
    };

    const hasError = (fieldName: string) => {
      return submitAttempted && errors[fieldName];
    };

    return { handleFormSubmit, errors, hasError, errorCount };
  };

  return (
    <ValidationContext.Provider value={{ useInputValidation }}>
      {children}
    </ValidationContext.Provider>
  );
};
