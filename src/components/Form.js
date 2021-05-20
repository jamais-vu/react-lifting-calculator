import Button from '@material-ui/core/Button';

export function Form(props) {
  return (
    <form id="repsAndWeightForm" className="form" onSubmit={(event) => props.onSubmit(event)}>
      <label>
        Reps:
        <input id="repsInput" type="number" min="1" max="20" step="1"/>
        Weight:
        <input id="weightInput" type="number" min="1" step="0.1"/>
      </label>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}