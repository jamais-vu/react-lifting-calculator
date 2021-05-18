/** A single row in the table. */
export function Row(props) {
  return (
    <tr>
      <td>{props.reps}</td>
      <td>{props.brzyckiMax}</td>
      <td>{props.epleyMax}</td>
      <td>{props.brzyckiPercent}</td>
      <td>{props.epleyPercent}</td>
    </tr>
  );
}