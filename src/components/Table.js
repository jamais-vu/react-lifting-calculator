import {Row} from './Row';

/** Table where columns are estimated maxes and percent of 1RM. */
export function Table(props) {
  const rows = props.brzyckiMaxes.map((brzyckiMax, index) => {
    return (
      <Row
        reps={index + 1}
        brzyckiMax={Math.round(brzyckiMax)}
        epleyMax={Math.round(props.epleyMaxes[index])}
        brzyckiPercent={formatAsPercent(props.brzyckiPercentages[index])}
        epleyPercent={formatAsPercent(props.epleyPercentages[index])}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th colSpan="2">Estimated Max</th>
          <th colSpan="2">Percent of 1RM</th>
        </tr>
        <tr>
          <th>Reps</th>
          <th>Brzycki</th>
          <th>Epley</th>
          <th>Brzycki</th>
          <th>Epley</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

/** Formats the given decimal `n` as a percent, to 2 digits. */
function formatAsPercent(n) {
  return `${Math.round(n * 100)}%`;
}