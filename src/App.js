import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Appbar";
import ImageCard from "./components/ImageCard";
import TableData from "./components/TableData";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ImageCard /> */}
      <TableData/>
    </div>
  );
}

export default App;
