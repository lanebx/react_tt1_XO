/* eslint-disable react/no-unused-state */
import React from 'react';
import './Result.scss';

interface State {
  firstPlayerName: string;
  secondPlayerName: string;
}

export class Result extends React.Component {
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
