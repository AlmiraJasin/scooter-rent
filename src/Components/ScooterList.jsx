import { deleteData } from "../Utils/database";
import { getLastUseTime } from "../Utils/lastUseTime";

export function ScooterList (props) {

    //console.log(props);
    return (
        <table>
            <thead>
            <tr>
                <th>{'ID'}</th>
                <th>{'Registration Code'}</th>
                <th>{'Status'}</th>
                <th>{'Last used'}</th>
                <th>{'Run'}</th>
                <th>{'Actions'}</th>
            </tr>
            </thead>
            <tbody>
            {props.scooters.map(scooter => {
                return (
                    <tr key={scooter.id}>
                        <td>{scooter.id}</td>
                        <td>{scooter.registrationCode}</td>
                        <td>{scooter.isBusy}</td>
                        <td>{getLastUseTime(scooter.lastUseTime)}</td>
                        <td>{scooter.totalRideKilometres}</td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() => {
                            deleteData(scooter.id);
                            props.refreshList(Date.now());
                            }
                            }>Delete</button>
                            <button className="btn btn-success" onClick={() => props.setShowModal(scooter)}>Edit</button>
                        </td>
                    </tr>)})
            }
            </tbody>
        </table>
    );
}
