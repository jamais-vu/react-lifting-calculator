import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {MaxesRow} from './Row';

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    maxWidth: 650,
    margin: 'auto'
  },
});

/** Table where columns are estimated maxes and percent of 1RM. */
export function MaxesTable(props) {
  const rows = props.brzyckiMaxes.map((brzyckiMax, index) => {
    const epleyMax = props.epleyMaxes[index];

    return (
      <MaxesRow
        key={index}
        reps={index + 1}
        brzyckiMax={isNaN(brzyckiMax) ? '' : brzyckiMax.toFixed(1)}
        epleyMax={isNaN(epleyMax) ? '' : epleyMax.toFixed(1)}
        brzyckiPercent={formatAsPercent(props.brzyckiPercentages[index])}
        epleyPercent={formatAsPercent(props.epleyPercentages[index])}
      />
    );
  });

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="maxes table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>{/* intentionally-blank cell */}
            <TableCell colSpan="2" align="center">Estimated Max</TableCell>
            <TableCell colSpan="2" align="center">Percent of 1RM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">Reps</TableCell>
            <TableCell align="right">Brzycki</TableCell>
            <TableCell align="right">Epley</TableCell>
            <TableCell align="right">Brzycki</TableCell>
            <TableCell align="right">Epley</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/** Formats the given decimal `n` as a percent, to 2 digits. */
function formatAsPercent(n) {
  return `${Math.round(n * 100)}%`;
}