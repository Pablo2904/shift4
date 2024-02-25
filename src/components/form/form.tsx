import { ReactNode, FormEvent } from "react";

type FormProps = {
  children: ReactNode;
};

const Form = ({ children }: FormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
