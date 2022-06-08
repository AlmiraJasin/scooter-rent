import randomRegCode from "../Utils/randomRegCode";

let idCounter = 1; 
export function CreateNewScooter () {
    const generateNewScooter = () => {
        console.log({id: idCounter,
            registrationCode: randomRegCode(),
            isBusy: 0,
            lastUseTime: new Date(),
            totalRideKilometres: 0}
        );
        idCounter++;
    }

    return (
        <div>
            <button onClick={generateNewScooter}>Create</button>
        </div>
    );
}