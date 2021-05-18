export function Form(props) {
  return (
    <form className="form" onSubmit={(event) => props.onSubmit(event)}>
      <label>
        Reps:
        <input id="repsInput" type="number"/>
        Weight:
        <input id="weightInput" type="number"/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}