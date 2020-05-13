import React, { FormEvent, ChangeEvent } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Form } from 'components/UI/Form';
import { Input } from 'components/UI/Input';

import styles from './LoginForm.module.scss';

export interface ILoginFormProps {
  onAuth: (chatId: string, previousPage: string) => void;
  checkAuth: (
    uname: string,
    pwd: string,
  ) => { uValid: boolean; pValid: boolean };
}

export interface ILoginFormState {
  uname: string;
  pwd: string;
  errors: Record<string, string | boolean>;
}

export class LoginForm extends React.Component<
  ILoginFormProps & RouteComponentProps
> {
  readonly state: ILoginFormState = {
    uname: '',
    pwd: '',
    errors: {},
  };

  getAuth = (uname: string, pwd: string) => {
    let valid = this.props.checkAuth(uname, pwd);
    this.setState((prevState: ILoginFormState) => ({
      errors: {
        ...prevState.errors,
        uname: !valid.uValid && 'Неверное имя пользователя',
        pwd: valid.uValid && !valid.pValid && 'Неверный пароль',
      },
    }));
    return valid.uValid && valid.pValid;
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState: ILoginFormState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { uname, pwd } = this.state;
    if (this.getAuth(uname, pwd)) {
      const previousPage = (this.props.location.state as {
        previousPage: string;
      }).previousPage;
      this.props.onAuth(uname, previousPage);
    }
  };

  render() {
    const { errors, uname, pwd } = this.state;
    return (
      <div className={styles.formWrapper}>
        <Form errors={errors} onSubmit={this.handleSubmit}>
          <Input
            name="uname"
            type="text"
            value={uname}
            label="Логин:"
            onChange={this.handleChange}
            placeholder="Введите логин (test)"
            required
          />
          <Input
            name="pwd"
            type="password"
            value={pwd}
            onChange={this.handleChange}
            placeholder="Введите пароль (test)"
            label="Пароль:"
            required
          />
          {
            <button id="submit" type="submit">
              Вход
            </button>
          }
        </Form>
        <Link to="/register">Регистрация</Link>
      </div>
    );
  }
}
