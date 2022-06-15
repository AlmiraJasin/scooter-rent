import { useState } from "react";
import { deleteData } from "../Utils/database";
import { getLastUseTime } from "../Utils/lastUseTime";

const sortTypes = {
    byId: 'byId',
    byRun: 'byRun',
    byDate: 'byDate'
}

const sortScooters = (scooters, sortType) => {
    return scooters.sort((a, b) => {
        return b.id - a.id;
    });
}

export function ScooterList (props) {
    const [sortType, setSortType] = useState(sortTypes.byId)
    console.log(sortScooters(props.scooters))
    return (
        <div>
            <div>
                <button onClick={() => setSortType(sortTypes.byId)}>Sort By ID</button>
                <button onClick={() => setSortType(sortTypes.byRun)}>Sort By Run</button>
                <button onClick={() => setSortType(sortTypes.byDate)}>Sort By Date</button>
            </div>
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
        </div>
    );
}
