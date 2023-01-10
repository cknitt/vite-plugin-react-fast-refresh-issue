open ReactDOM

switch querySelector("#root") {
| Some(domElement) => Client.createRoot(domElement)->Client.Root.render(<App />)
| None => ()
}
