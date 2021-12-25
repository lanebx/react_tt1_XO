/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */

import React from 'react';
import './Result.scss';

interface Props {
  firstPlayerScore: number;
  secondPlayerScore: number;
  firstPlayerName: string;
  secondPlayerName: string;
}

export class Result extends React.Component<Props, {}> {
  render(): React.ReactNode {
    const {
      firstPlayerScore,
      secondPlayerScore,
      firstPlayerName,
      secondPlayerName,
    } = this.props;

    return (
      <div className="Result">
        <div className="Result__title">
          Score
        </div>

        <div className="Result__playerScore">
          {firstPlayerName}
          {': '}
          {firstPlayerScore}
        </div>

        <div className="Result__playerScore">
          {secondPlayerName}
          {': '}
          {secondPlayerScore}
        </div>
      </div>
    );
  }
}
