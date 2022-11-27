import { useState } from "react";

export default function useLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  })

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return {
    form,
    onChange,
    onSubmit
  }
}