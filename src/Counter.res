@react.component
let make = () => {
  let (count, setCount) = React.useState(() => 0)

  <p>
    {React.int(count)}
    {React.string(" ")}
    <button onClick={_ => setCount(c => c + 1)}> {React.string("++")} </button>
  </p>
}
