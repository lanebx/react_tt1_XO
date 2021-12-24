/* eslint-disable react/no-unused-state */
import React from 'react';
import './Field.scss';

interface State {
  firstPlayerName: string;
  secondPlayerName: string;
}

export class Field extends React.Component {
  state: State = {
    firstPlayerName: '',
    secondPlayerName: '',
  };

  render() {
    return (
      <div className="Aplication">

      </div>
    );
  }
}
