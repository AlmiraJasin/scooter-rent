import { useEffect, useState } from "react";
import "./bootstrap.css";
import "./App.scss";
import { CreateNewScooter } from "./Components/Create";
import { ScooterList } from "./Components/ScooterList";
import { readData } from "./Utils/database";
import { EditScooter } from "./Components/EditScooter";
import { ScootersStatistics } from "./Components/Stats";

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [scooters, setScooter] = useState([]);
  const [showModal, setShowModal] = useState(null);

  useEffect(() => {
    setScooter(() => {
      return readData();
    });
  }, [lastUpdate]);

  return (
    <div className="App">
      <header className="App-header">
        <CreateNewScooter refreshList={setLastUpdate}/>
        <ScooterList refreshList={setLastUpdate} scooters={scooters} setShowModal={setShowModal} />
        <EditScooter refreshList={setLastUpdate} setShowModal={setShowModal} currentScooter={showModal} />
        <ScootersStatistics />
      </header>
    </div>
  );
}
export default App;
