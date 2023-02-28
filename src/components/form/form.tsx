import SpinnerIcon from "@/spinner-icon";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";

// TODO: refactor and split to separate components (Jakub Jirous 2023-02-27 17:32:00)

interface IFormValues {
  search: string;
}

interface FormProps {
  isLoading: boolean;
  isError: boolean;
  onSubmit: (value: string) => void;
}

const FormContext = createContext<{ isLoading: boolean; isError: boolean }>(
  null
);

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

const Control: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

const Label: FC<PropsWithChildren> = ({ children }) => {
  return (
    <label
      htmlFor="input"
      aria-label=""
      className="flex w-full justify-center text-center text-xl text-white md:text-2xl"
    >
      {children}
    </label>
  );
};

const InputGroup: FC<PropsWithChildren> = ({ children }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={`flex h-12 w-full flex-nowrap rounded-2xl text-base focus-within:outline-none focus-within:ring-3 md:h-15 ${
        errors?.search ? "ring-red-500" : ""
      }`}
    >
      {children}
    </div>
  );
};

interface InputProps {
  error?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = () => {
  const { isError } = useContext(FormContext);

  const {
    register,
    setFocus,
    setError,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setFocus("search");
  }, [setFocus]);

  useEffect(() => {
    setError("search", {
      type: "fetch",
      message:
        "Ooops, something went wrong during your search, please try again.",
    });
  }, [isError]);

  return (
    <div className="relative w-full">
      <input
        id="input"
        type="text"
        placeholder="Search for any IP address or domain"
        aria-label="IP address or domain"
        aria-describedby="inputHint inputError"
        aria-invalid={errors?.search ? "true" : "false"}
        className={`flex h-12 w-full rounded-l-2xl px-4 py-4 text-sm font-light focus:outline-none md:h-15 md:px-6 md:text-base ${
          errors?.search ? "bg-red-100 text-red-500" : ""
        }`}
        {...register("search", {
          required: {
            value: true,
            message: "Please try to search any IP address or domain.",
          },
        })}
      />
      {errors?.search && (
        <div
          id="inputError"
          role="alert"
          className="absolute ml-4 mt-2 text-sm text-red-500 md:ml-6"
        >
          {String(errors?.search?.message)}
        </div>
      )}
      <span id="inputHint" hidden>
        Search for any IP addresses or domain to see the key information and
        location
      </span>
    </div>
  );
};

const Submit: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useContext(FormContext);

  return (
    <button
      type="submit"
      disabled={isLoading}
      className="flex h-12 w-12 items-center justify-center rounded-r-2xl bg-black text-white transition duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-3 active:bg-dusty-900 enabled:hover:bg-dusty-900 md:h-15 md:w-15"
    >
      {isLoading ? <SpinnerIcon /> : <>{children}</>}
    </button>
  );
};

Form.Control = Control;
Form.Label = Label;
Form.InputGroup = InputGroup;
Form.Input = Input;
Form.Submit = Submit;
