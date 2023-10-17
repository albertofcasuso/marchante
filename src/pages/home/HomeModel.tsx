import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export function HomeModel() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { register: registerLogin, handleSubmit: handleSubmitLogin } =
    useForm();

  const onSubmitRegister = (data) => console.log(data);

  const onSubmitLogin = (data) => console.log(data);

  return {
    register,
    handleSubmit,
    watch,
    onSubmitRegister,
    registerLogin,
    handleSubmitLogin,
    onSubmitLogin,
  };
}
