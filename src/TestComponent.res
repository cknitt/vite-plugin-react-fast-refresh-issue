@react.component
let make = () =>
  <div>
    {React.string(
      "Test component. Try changing this text. Component should fast refresh, and counter value should remain unchanged.",
    )}
  </div>
