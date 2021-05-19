import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from './components/Form';
import {MaxesTable} from './components/Table';
import {brzycki} from './util/brzycki';
import {epley} from './util/epley';
import './index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reps: NaN,
      weight: NaN,
    }
  }

  /** Sets `this.state` to user-inputted reps and weight, from form. */
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      reps: event.target['0'].valueAsNumber,
      weight: event.target['1'].valueAsNumber,
    });
  }

  // TODO: The arrays this returns can be pre-calculated in constructor.
  /** Calculates weight as a percentage of one-rep max, for 1 to `n` reps.
   *
   * `func` is a function estimated one-rep max, e.g. brzycki or epley.
   */
  percentagesOf1RM(func, n=10) {
    const percentages = [];
    for (let reps = 1; reps <= n; reps++) {
      percentages.push(100 / func(reps, 100));
    }
    return percentages;
  }

  /** Calculates estimated maxes based on current reps and weight.
   *
   * `func` is a function estimated one-rep max, e.g. brzycki or epley.
   */
  estimatedMaxes(func) {
    const estimated1RM = func(this.state.reps, this.state.weight);
    const maxes = this.percentagesOf1RM(func).map((percent) => {
      return estimated1RM * percent;
    });
    return maxes;
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={(event) => this.handleSubmit(event)}
        />
        <MaxesTable
          brzyckiMaxes={this.estimatedMaxes(brzycki)}
          epleyMaxes={this.estimatedMaxes(epley)}
          brzyckiPercentages={this.percentagesOf1RM(brzycki)}
          epleyPercentages={this.percentagesOf1RM(epley)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);