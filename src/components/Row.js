import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

/** A single row in the table. */
export function MaxesRow(props) {
  return (
    <TableRow>
      <TableCell align="right">{props.reps}</TableCell>
      <TableCell align="right">{props.brzyckiMax}</TableCell>
      <TableCell align="right">{props.epleyMax}</TableCell>
      <TableCell align="right">{props.brzyckiPercent}</TableCell>
      <TableCell align="right">{props.epleyPercent}</TableCell>
    </TableRow>
  );
}