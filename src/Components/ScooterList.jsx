import { useState } from "react";
import { deleteData } from "../Utils/database";
import { getLastUseTime } from "../Utils/lastUseTime";

const sortTypes = {
    byAscId: {
        key: 'byAscId',
        fn: (a, b) => a.id - b.id
    },
    byDscId: {
        key: 'byDscId',
        fn: (a, b) => b.id - a.id
    },
    byAscRun: {
        key: 'byAscRun',
        fn: (a, b) => a.totalRideKilometres - b.totalRideKilometres
    },
    byDscRun: {
        key: 'byDscRun',
        fn: (a, b) => b.totalRideKilometres - a.totalRideKilometres
    },
    byAscDate: {
        key: 'byAscDate',
        fn: (a, b) => new Date(a.lastUseTime) - new Date(b.lastUseTime)
    },
    byDscDate: {
        key: 'byDscDate',
        fn: (a, b) => new Date(b.lastUseTime) - new Date(a.lastUseTime)
    }
}

const sortScooters = (scooters, sortType) => scooters.sort(sortTypes[sortType].fn)

export function ScooterList (props) {
    const [sortType, setSortType] = useState(sortTypes.byAscId.key)
    sortScooters(props.scooters, sortType);
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>
                        <button className="btn btn-dark" onClick={() => setSortType(sortType === sortTypes.byAscId.key ? sortTypes.byDscId.key : sortTypes.byAscId.key)}>Sort</button>
                        {'ID'}
                    </th>
                    <th>{'Registration Code'}</th>
                    <th>{'Status'}</th>
                    <th>
                        <button className="btn btn-dark" onClick={() => setSortType(sortType === sortTypes.byAscDate.key ? sortTypes.byDscDate.key : sortTypes.byAscDate.key)}>Sort</button>
                        {'Last used'}
                    </th>
                    <th>
                        <button className="btn btn-dark" onClick={() => setSortType(sortType === sortTypes.byAscRun.key ? sortTypes.byDscRun.key : sortTypes.byAscRun.key)}>Sort</button>
                        {'Run'}
                    </th>
                    <th>{'Actions'}</th>
                </tr>
                </thead>
                <tbody>
                {props.scooters.map(scooter => {
                    return (
                        <tr key={scooter.id}>
                            <td>{scooter.id}</td>
                            <td>{scooter.registrationCode}</td>
                            <td>{scooter.isBusy === 0 ? 'Free' : 'Taken'}</td>
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
                        </tr>)}
                    )}
                </tbody>
            </table>
        </div>
    );
}
