import { FormContext } from "@/components";
import React, { FC, useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface FormInputProps {
  error?: string;
  placeholder?: string;
}

export const FormInput: FC<FormInputProps> = () => {
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
          className="absolute ml-4 mt-2 w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm text-red-500 md:ml-6"
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
