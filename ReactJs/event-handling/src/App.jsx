import EventPropagation from "./page/EventPropagation"
import Events from "./page/Events"
import EventsInProps from "./page/EventsInProps"

function App() {
  return (
    <>
      <div className="container">
        <h2>1. Event handling</h2>
        <Events />
        <hr />
        <h2>2. Passing event related function from parent to child as props- here this button is from child but function is defined in parent and parent sends props to child</h2>
        <EventsInProps />
        <hr />
        <h2>3. Event Propagation- Capturing and Bubbling</h2>
        <EventPropagation />
      </div>
    </>
  )
}

export default App