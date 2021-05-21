import React from 'react';
import ReactDOM from 'react-dom';
import {DownloadAsCSV} from './components/DownloadAsCSV';
import {Form} from './components/Form';
import {MaxesTable} from './components/Table';
import {brzycki} from './util/brzycki';
import {epley} from './util/epley';
import {formatAsPercent} from './util/formatAsPercent';
import {zip} from './util/zip';
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
  percentagesOf1RM(func, n=20) {
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

  /** Returns a csv-formatted string of the data used for the table. */
  handleDownloadCSV() {
    /* Initialize csv string with column headers. */
    let csv = 'Reps,Brzycki Max,Epley Max,Bryzcki Percentage,Epley Percentage\n';

    /* Create an array of rep counts, from 1 to 20. */
    let reps = [];
    for (let i = 1; i <= 20; i++) {
      reps.push(i);
    }

    /* Create an array of rows containing data values for each column. */
    const rows = zip(
      reps,
      this.estimatedMaxes(brzycki).map(n => n.toFixed(1)),
      this.estimatedMaxes(epley).map(n => n.toFixed(1)),
      this.percentagesOf1RM(brzycki).map(n => formatAsPercent(n)),
      this.percentagesOf1RM(epley).map(n => formatAsPercent(n)),
    );

    /* Convert each row to a comma-separated string, ending in a newline. */
    for (let row of rows) {
      csv += row.join(',') + '\n'
    }

    return csv;
  }

  render() {
    return (
      <div>
        <DownloadAsCSV data={this.handleDownloadCSV()}/>
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