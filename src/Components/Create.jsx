import rand from "../Utils/random";

let idCounter = 1; 
export function CreateNewScooter () {
    const generateNewScooter = () => {
        console.log({id: idCounter,
            registrationCode: rand(10000000, 99999999),
            isBusy: 0,
            lastUseTime: 'Just received!',
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