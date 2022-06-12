import { useEffect, useState } from "react";
import "./App.scss";
import { CreateNewScooter } from "./Components/Create";
import { ScooterList } from "./Components/ScooterList";
import { readData } from "./Utils/database";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [scooters, setScooter] = useState([]);
  useEffect(() => {
    setScooter(() => {
      return readData();
    });
  }, [lastUpdate]);

  return (
    <div className="App">
      <header className="App-header">
        <CreateNewScooter refreshList={setLastUpdate}/>
        <ScooterList refreshList={setLastUpdate} scooters={scooters} />
      </header>
    </div>
  );
}
export default App;
