/* eslint-disable react/no-unused-state */
import React from 'react';
import './App.scss';

interface State {
  firstPlayerName: string;
  secondPlayerName: string;
}

export class App extends React.Component {
  state: State = {
    firstPlayerName: '',
    secondPlayerName: '',
  };

  render(): React.ReactNode {
    return (
      <div className="Aplication">

      </div>
    );
  }
}
