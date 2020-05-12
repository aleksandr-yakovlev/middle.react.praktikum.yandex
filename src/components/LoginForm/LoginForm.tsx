import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Form } from 'components/UI/Form';
import { Input } from 'components/UI/Input';

import styles from './LoginForm.module.scss';

export interface ILoginFormProps {
  onAuth: (chatId: string) => void;
}

export interface ILoginFormState {
  errors: Record<string, string>;
}

export class LoginForm extends React.Component<
  ILoginFormProps,
  ILoginFormState
> {
  constructor(props: ILoginFormProps) {
    super(props);
    this.state = {
      errors: {},
    };
    this.getAuth = this.getAuth.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getAuth(uname: string, pwd: string) {
    let errors: Record<string, string> = {};
    if (uname !== 'test') {
      errors.uname = 'Неверное имя пользователя';
    } else if (pwd !== 'test') errors.pwd = 'Неверный пароль';
    this.setState((prevState: ILoginFormState) => ({
      errors: {
        ...prevState.errors,
        ...errors,
      },
    }));
    return uname === 'test' && pwd === 'test';
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const uname = (e.currentTarget.elements.namedItem(
      'uname',
    ) as HTMLInputElement).value;
    const pwd = (e.currentTarget.elements.namedItem('pwd') as HTMLInputElement)
      .value;
    if (this.getAuth(uname, pwd)) {
      this.props.onAuth(uname);
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className={styles.formWrapper}>
        <Form errors={errors} onSubmit={this.handleSubmit}>
          <Input
            name="uname"
            type="text"
            label="Логин:"
            placeholder="Введите логин (test)"
            required
          />
          <Input
            name="pwd"
            type="password"
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
