import React, { FocusEvent, FormEvent } from 'react';

import { Form } from 'components/UI/Form';
import { Input } from 'components/UI/Input';

import styles from './RegForm.module.scss';

export interface IRegFormProps {
  onAuth: (chatId: string) => void;
}

export interface IRegFormState {
  errors: Record<string, string | null>;
  validate: Record<string, boolean>;
}

export class RegForm extends React.Component<IRegFormProps, IRegFormState> {
  constructor(props: IRegFormProps) {
    super(props);
    this.state = {
      errors: {},
      validate: {},
    };
    this.onValidate = this.onValidate.bind(this);
    this.regSubmit = this.regSubmit.bind(this);
  }

  regSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.onAuth(
      (e.currentTarget.elements.namedItem('uname') as HTMLInputElement).value,
    );
  }

  onValidate(e: FocusEvent<HTMLFormElement>) {
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
      const isValid = regExpValid[element.name].regExp.test(element.value);
      this.setState((prevState) => ({
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
  }

  render() {
    const { errors, validate } = this.state;
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
            label="Логин:"
            placeholder="Введите логин"
            required
          />
          <Input
            name="fname"
            type="text"
            label="Имя:"
            placeholder="Введите имя"
            required
          />
          <Input
            name="lname"
            type="text"
            label="Фамилия:"
            placeholder="Введите фамилию"
            required
          />
          <Input
            name="pwd"
            type="password"
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
