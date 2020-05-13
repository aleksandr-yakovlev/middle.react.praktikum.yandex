import React, { FocusEvent, FormEvent, ChangeEvent } from 'react';

import { Form } from 'components/UI/Form';
import { Input } from 'components/UI/Input';

import styles from './RegForm.module.scss';

export interface IRegFormProps {
  createUser: (
    uname: string,
    fname: string,
    lname: string,
    pwd: string,
  ) => void;
}

export interface IRegFormState {
  errors: Record<string, string | null>;
  validate: Record<string, boolean>;
  uname: string;
  fname: string;
  lname: string;
  pwd: string;
}

export class RegForm extends React.Component<IRegFormProps> {
  readonly state: IRegFormState = {
    errors: {},
    validate: {},
    uname: '',
    fname: '',
    lname: '',
    pwd: '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState: IRegFormState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  regSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { uname, fname, lname, pwd } = this.state;
    this.props.createUser(uname, fname, lname, pwd);
  };

  onValidate = (e: FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regExpValid: Record<string, { regExp: RegExp; errText: string }> = {
      uname: {
        regExp: /^[a-z0-9_-]{3,16}$/,
        errText: 'Цифры, строчные буквы, символы - и _. 3-16 длина.',
      },
      fname: {
        regExp: /^[A-ЯЁ][а-яё]{1,}$/,
        errText: 'Заглавная, прописные, 2+ длина.',
      },
      lname: {
        regExp: /^[A-ЯЁ][а-яё]{1,}$/,
        errText: 'Заглавная, прописные, 2+ длина.',
      },
      pwd: {
        regExp: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
        errText: '8+ длина, спецсимволы.',
      },
    };
    const element = e.target;
    if (element.nodeName === 'INPUT') {
      const isValid =
        regExpValid[element.name] &&
        regExpValid[element.name].regExp.test(element.value);
      this.setState((prevState: IRegFormState) => ({
        errors: {
          ...prevState.errors,
          [element.name]: isValid ? null : regExpValid[element.name].errText,
        },
        validate: {
          ...prevState.validate,
          [element.name]: isValid,
        },
      }));
    }
  };

  render() {
    const { errors, validate, uname, fname, lname, pwd } = this.state;
    return (
      <div className={styles.formWrapper}>
        <Form
          errors={errors}
          onSubmit={this.regSubmit}
          onBlur={this.onValidate}
        >
          <Input
            name="uname"
            type="text"
            value={uname}
            label="Логин:"
            onChange={this.handleChange}
            placeholder="Введите логин"
            required
          />
          <Input
            name="fname"
            type="text"
            value={fname}
            label="Имя:"
            onChange={this.handleChange}
            placeholder="Введите имя"
            required
          />
          <Input
            name="lname"
            type="text"
            value={lname}
            label="Фамилия:"
            onChange={this.handleChange}
            placeholder="Введите фамилию"
            required
          />
          <Input
            name="pwd"
            type="password"
            value={pwd}
            onChange={this.handleChange}
            placeholder="Введите пароль"
            label="Пароль:"
            required
          />
          {
            <button
              name="submit"
              type="submit"
              disabled={
                !(
                  validate.uname &&
                  validate.fname &&
                  validate.lname &&
                  validate.pwd
                )
              }
            >
              Регистрация
            </button>
          }
        </Form>
      </div>
    );
  }
}
