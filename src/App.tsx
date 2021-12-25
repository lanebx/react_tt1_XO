/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.scss';
import { Field } from './component/Field/Field';
import { Login } from './component/Login/Login';

interface State {
  firstPlayerName: string;
  secondPlayerName: string;
  loggedIn: boolean;
}

export class App extends React.Component {
  state: State = {
    firstPlayerName: '',
    secondPlayerName: '',
    loggedIn: false, // если логин совершен то показать поле, скрыть логин панель
  };

  login = (user1Name: string, user2Name: string) => {
    this.setState({
      firstPlayerName: user1Name,
      secondPlayerName: user2Name,
      loggedIn: true,
    });
  };

  newGame = () => {
    this.setState({
      firstPlayerName: '',
      secondPlayerName: '',
      loggedIn: false,
    });
  };

  render(): React.ReactNode {
    const { loggedIn, firstPlayerName, secondPlayerName } = this.state;

    // console.log(loggedIn, firstPlayerName, secondPlayerName);

    return (
      <div className="Aplication">
        {!loggedIn
          ? (
            <Login
              onLogin={this.login}
            />
          )
          : (
            <Field
              firstPlayerName={firstPlayerName}
              secondPlayerName={secondPlayerName}
              newGame={this.newGame}
            />
          )}
      </div>
    );
  }
}
