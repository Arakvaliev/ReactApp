import { HarryPotter, LordOfTheRings } from "./Component"

const App = (props) => {

    return (
        <>
            <h1>Films</h1>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default App