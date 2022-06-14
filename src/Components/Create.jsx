import randomRegCode from "../Utils/randomRegCode";
import {insertData} from '../Utils/database';


export function CreateNewScooter (props) {
    const generateNewScooter = () => {
        const newId = localStorage.getItem('lastId') || 0
        const newScooter = {
            id: newId,
            registrationCode: randomRegCode(),
            isBusy: 0,
            lastUseTime: new Date(),
            totalRideKilometres: 0};
        insertData(newScooter);
        props.refreshList(Date.now());
    }
    return (
        <div>
            <button className="btn btn-dark" onClick={generateNewScooter}>Register New Vehicle</button>
        </div>
    );
}

//last built?
