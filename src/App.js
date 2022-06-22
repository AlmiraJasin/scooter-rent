import { useEffect, useState } from "react";
import "./bootstrap.css";
import "./App.scss";
import { CreateNewScooter } from "./Components/Create";
import { ScooterList } from "./Components/ScooterList";
import { readData } from "./Utils/database";
import { EditScooter } from "./Components/EditScooter";
import { ScootersStatistics } from "./Components/Stats";
import scooter from './Assets/scooter.png'

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
        <h1>Scooter Rent</h1> 
      </header>
      <main className="App-main">
          <CreateNewScooter refreshList={setLastUpdate}/>
          <div className="stats-container">
            <img src={scooter} className="scooter-img" alt="a" />
            <ScootersStatistics className="stats" scooters={scooters} />
          </div>
          <ScooterList refreshList={setLastUpdate} scooters={scooters} setShowModal={setShowModal} />
          <EditScooter refreshList={setLastUpdate} setShowModal={setShowModal} currentScooter={showModal} />
      </main>
    </div>
  );
}
export default App;
