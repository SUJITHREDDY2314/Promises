export default function Child(props) {
  const objects = Object.keys(props.obj).map((key, val) => (
    <p key={key}>
      {key}:{val}
    </p>
  ));
  return (
    <div>
      {objects}
      <button onClick={props.fun}>
        {props.click ? "Click to reveal" : "Click to hide"}{" "}
      </button>
    </div>
  );
}
