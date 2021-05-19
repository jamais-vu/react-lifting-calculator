import Button from '@material-ui/core/Button';

export function Form(props) {
  return (
    <form className="form" onSubmit={(event) => props.onSubmit(event)}>
      <label>
        Reps:
        <input id="repsInput" type="number"/>
        Weight:
        <input id="weightInput" type="number"/>
      </label>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}