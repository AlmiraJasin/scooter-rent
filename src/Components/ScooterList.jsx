import { deleteData } from "../Utils/database";

export function ScooterList (props) {

    //console.log(props);
    return (
        <ul>
            {
                props.scooters.map(scooter => 
                <li key={scooter.id}>
                    {`ID: ${scooter.id} `}
                    {`Registration Code: ${scooter.registrationCode} `}
                    {`Status: ${scooter.isBusy ? 'Taken' : 'Free'} `}
                    {`Last used: ${scooter.lastUseTime} `}
                    {`Run: ${scooter.totalRideKilometres} `}
                    <button onClick={() => {
                        deleteData(scooter.id);
                        props.refreshList(Date.now());
                        }
                    }>Delete</button>
                </li>)
            }
        </ul>
    );
}

/* <button onClick={editScooter}>Edit</button>
   <button onClick={deleteScooter}>Delete</button> */