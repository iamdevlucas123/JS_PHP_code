import {Routes, Route} from "react-router-dom"
import TopBar from "./components/topbar"
import MainText from "./components/mainText"  
import Description from "./components/description"

function App() {

  return (
    <div>
          <TopBar/>
          <MainText/>
          <Description/>
      <Routes>
      
      </Routes>
    </div>
  )
}

export default App
