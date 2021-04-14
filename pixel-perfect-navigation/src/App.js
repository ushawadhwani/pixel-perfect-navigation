import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MyRouting from "./routing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyRouting />
      </BrowserRouter>
    </div>
  );
}

export default App;
