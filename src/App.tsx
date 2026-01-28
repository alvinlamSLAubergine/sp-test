import { List } from "./list"

function App() {

  return (
    <div className="App">
      <List items={[{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }]} />
    </div>
  )
}

export default App
