/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
import React from 'react';
import './Field.scss';

interface State {
  fieldArray: number[];
}

interface Props {
  firstPlayerName: string;
  secondPlayerName: string;
}

export class Field extends React.Component<Props, {}> {
  state: State = {
    fieldArray: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  render() {
    const { fieldArray } = this.state;

    return (
      <div className="Field">
        <div className="Field-container">
          {fieldArray.map((item: number, i: number) => {
            return (
              <div key={i} className="Field__block">
                {item + 1}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
