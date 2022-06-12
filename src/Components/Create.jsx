import randomRegCode from "../Utils/randomRegCode";
import {insertData} from '../Utils/database';

let idCounter = 1; 

export function CreateNewScooter (props) {
    const generateNewScooter = () => {
        const newScooter = {id: idCounter,
            registrationCode: randomRegCode(),
            isBusy: 0,
            lastUseTime: new Date(),
            totalRideKilometres: 0};
        idCounter++;
        insertData(newScooter);
        props.refreshList(Date.now());
    }
    return (
        <div>
            <button onClick={generateNewScooter}>Create</button>
        </div>
    );
}

//last built?
