/* eslint-disable react/no-did-update-set-state */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Circle } from '../Circle/Circle';
import { Cross } from '../Cross/Cross';
import { Result } from '../Result/Result';

import './Field.scss';

interface State {
  fieldArray: number[];
  atributeChecker: number;
  firstPlayerScore: number;
  secondPlayerScore: number;
  winnerLine: number;
  disabled: boolean;
}

interface Props {
  firstPlayerName: string;
  secondPlayerName: string;
  newGame(): void;
}

export class Field extends React.Component<Props, {}> {
  state: State = {
    fieldArray: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    atributeChecker: 0,
    firstPlayerScore: 0,
    secondPlayerScore: 0,
    winnerLine: 0,
    disabled: false,
  };

  componentDidUpdate(_prevP: Props, prewS: State) {
    if (prewS.fieldArray.toString() !== this.state.fieldArray.toString()) {
      if (this.calculateWinner(this.state.fieldArray) !== null) {
        (this.state.atributeChecker - 1) % 2 === 0
          ? this.scoreChecer('x')
          : this.scoreChecer('o');
      }

      if (this.state.fieldArray.every((item) => item !== 0)) {
        this.setState({
          disabled: true,
        });
      }
    }
  }

  scoreChecer = (s: string) => {
    if (s === 'x') {
      this.setState((state: State) => {
        const newWinnerLine = this.calculateWinner(state.fieldArray);

        return {
          firstPlayerScore: state.firstPlayerScore + 1,
          winnerLine: newWinnerLine?.pop(),
          disabled: true,
        };
      });
    } else {
      this.setState((state: State) => {
        const newWinnerLine = this.calculateWinner(state.fieldArray);

        return {
          secondPlayerScore: state.secondPlayerScore + 1,
          winnerLine: newWinnerLine?.pop(),
          disabled: true,
        };
      });
    }
  };

  drowAtribure = (i: number) => {
    if (this.state.fieldArray[i] === 0) {
      if (this.state.atributeChecker % 2 === 0) {
        this.setState((state: State) => {
          const newArray = [...state.fieldArray];

          newArray[i] = 1;

          return {
            fieldArray: newArray,
            atributeChecker: state.atributeChecker + 1,
          };
        });
      } else {
        this.setState((state: State) => {
          const newArray = [...state.fieldArray];

          newArray[i] = 2;

          return {
            fieldArray: newArray,
            atributeChecker: state.atributeChecker + 1,
          };
        });
      }
    }
  };

  calculateWinner = (squares: number[]) => {
    const lines = [
      [0, 1, 2, 1],
      [3, 4, 5, 2],
      [6, 7, 8, 3],
      [0, 3, 6, 4],
      [1, 4, 7, 5],
      [2, 5, 8, 6],
      [0, 4, 8, 7],
      [2, 4, 6, 8],
    ];

    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];

      if (Number(squares[a]) === Number(squares[b])
        && Number(squares[b]) && Number(squares[a]) && Number(squares[c])
        && Number(squares[a]) === Number(squares[c])
        && Number(squares[b]) === Number(squares[c])) {
        return lines[i];
      }
    }

    return null;
  };

  clearField = () => {
    this.setState({
      fieldArray: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      atributeChecker: 0,
      winnerLine: 0,
      disabled: false,
    });
  };

  newGame = () => {
    this.setState({
      fieldArray: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      atributeChecker: 0,
      firstPlayerScore: 0,
      secondPlayerScore: 0,
      winnerLine: 0,
      disabled: false,
    });

    this.props.newGame();
  };

  render() {
    const {
      fieldArray,
      firstPlayerScore,
      secondPlayerScore,
    } = this.state;

    const { firstPlayerName, secondPlayerName } = this.props;

    return (
      <div className="Field">
        <div className={`Field-container winner${this.state.winnerLine}`}>
          {fieldArray.map((item: number, index: number) => {
            return (
              <div
                key={index}
                onClick={() => !this.state.disabled && this.drowAtribure(index)}
                className="Field__block"
              >
                {item === 1 && (
                  <Cross />
                )}

                {item === 2 && (
                  <Circle />
                )}
              </div>
            );
          })}
        </div>

        <div className="nav-info-container">
          <Result
            firstPlayerScore={firstPlayerScore}
            secondPlayerScore={secondPlayerScore}
            firstPlayerName={firstPlayerName}
            secondPlayerName={secondPlayerName}
          />

          {this.state.disabled && (
            <div className="button-container">
              <button type="button" onClick={() => this.newGame()} className="button-nav button">
                New game
              </button>

              <button type="button" onClick={() => this.clearField()} className="button-nav button">
                New round
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
