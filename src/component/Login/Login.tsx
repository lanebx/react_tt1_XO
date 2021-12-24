/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
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
    isFNameValid: false,
    isSNameValid: false,
  };

  inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

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
              className="Login__input"
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
              className="Login__input"
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
