import { FormControl } from "@/components/form/form-control";
import { FormInput } from "@/components/form/form-input";
import { FormInputGroup } from "@/components/form/form-input-group";
import { FormLabel } from "@/components/form/form-label";
import { FormSubmit } from "@/components/form/form-submit";
import React, { createContext, PropsWithChildren } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface IFormValues {
  search: string;
}

interface FormProps {
  isLoading: boolean;
  isError: boolean;
  onSubmit: (value: string) => void;
}

export const FormContext = createContext<{
  isLoading: boolean;
  isError: boolean;
}>(null);

export const Form = ({
  isLoading,
  isError,
  onSubmit,
  children,
}: PropsWithChildren<FormProps>) => {
  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const onInternalSubmit: SubmitHandler<IFormValues> = (data) => {
    onSubmit(data.search);

    reset(
      {
        search: data.search,
      },
      {
        keepDirty: false,
        keepErrors: false,
      }
    );
  };

  return (
    <FormContext.Provider value={{ isLoading, isError }}>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onInternalSubmit)}
          className="flex flex-col gap-6"
        >
          {children}
        </form>
      </FormProvider>
    </FormContext.Provider>
  );
};

Form.Control = FormControl;
Form.Label = FormLabel;
Form.InputGroup = FormInputGroup;
Form.Input = FormInput;
Form.Submit = FormSubmit;
