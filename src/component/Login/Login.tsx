/* eslint-disable react/no-unused-state */
import React from 'react';
import './Login.scss';

interface State {
  userFName?: string;
  userSName?: string;
  isFNameValid?: boolean;
  isSNameValid?: boolean;
}

interface Props {
  onLogin(arg1: string, arg2: string): void;
}

export class Login extends React.Component<Props, State> {
  state: State = {
    userFName: '',
    userSName: '',
    isFNameValid: true,
    isSNameValid: true,
  };

  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'userFName') {
      if (value.trim().length === value.length) {
        this.setState({
          isFNameValid: true,
        });
      } else {
        this.setState({
          isFNameValid: false,
        });
      }
    }

    if (name === 'userSName') {
      if (value.trim().length === value.length) {
        this.setState({
          isSNameValid: true,
        });
      } else {
        this.setState({
          isSNameValid: false,
        });
      }
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { userFName, userSName } = this.state;

    if (userFName && userSName) {
      this.props.onLogin(userFName, userSName);
    }

    return true;
  };

  render(): React.ReactNode {
    const { userFName, userSName } = this.state;

    return (
      <div className="Login">
        <form
          className="Login__form"
          onSubmit={this.handleSubmit}
        >
          <div className="Login__input-container">
            <div className="Login__lable">
              Type the name of the first player:
            </div>

            <input
              type="text"
              name="userFName"
              className={this.state.isFNameValid ? 'Login__input' : 'Login__input noValid'}
              value={userFName}
              onChange={this.inputHandler}
              autoComplete="off"
              required
            />
          </div>

          <div className="Login__input-container">
            <div className="Login__lable">
              Type the name of the second player:
            </div>

            <input
              type="text"
              name="userSName"
              className={this.state.isSNameValid ? 'Login__input' : 'Login__input noValid'}
              value={userSName}
              onChange={this.inputHandler}
              autoComplete="off"
              required
            />
          </div>

          <button
            type="submit"
            className="Login__button button"
          >
            <span>
              Start the game
            </span>
          </button>
        </form>
      </div>
    );
  }
}
