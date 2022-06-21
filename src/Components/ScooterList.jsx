import { useState } from "react";
import { deleteData } from "../Utils/database";
import { getLastUseTime } from "../Utils/lastUseTime";
import scooter from '../Assets/scooter.png'

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
        <div className="scooter-img">
            <img src={scooter} className="test" alt="a" />
            <div  className="table">
                <table>
                    <thead>
                    <tr>
                        <th>
                            <button className="btn btn-dark" onClick={() => setSortType(sortType === sortTypes.byAscId.key ? sortTypes.byDscId.key : sortTypes.byAscId.key)}>Sort</button>
                            {'ID'}
                        </th>
                        <th>{'Registration Code'}</th>
                        <th>{'Status'}</th>
                        <th data-label="Last Use">
                            <button className="btn btn-dark" onClick={() => setSortType(sortType === sortTypes.byAscDate.key ? sortTypes.byDscDate.key : sortTypes.byAscDate.key)}>Sort</button>
                            {'Last used'}
                        </th>
                        <th data-label="Run">
                            <button className="btn btn-dark" onClick={() => setSortType(sortType === sortTypes.byAscRun.key ? sortTypes.byDscRun.key : sortTypes.byAscRun.key)}>Sort</button>
                            {'Run'}
                        </th>
                        <th data-label="Actions">{'Actions'}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.scooters.map(scooter => {
                        return (
                            <tr key={scooter.id}>
                                <td data-label="ID">{scooter.id}</td>
                                <td data-label="Reg. Code">{scooter.registrationCode}</td>
                                <td data-label="Status">{scooter.isBusy === 0 ? 'Free' : 'Taken'}</td>
                                <td data-label="Last Use">{getLastUseTime(scooter.lastUseTime)}</td>
                                <td data-label="Run">{scooter.totalRideKilometres}</td>
                                <td data-label="Actions">
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
        </div>
    );
}
