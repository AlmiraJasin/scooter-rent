import { useEffect, useState } from "react";
import { editData } from "../Utils/database";

export function EditScooter (props) {

    const [regCode, setRegCode] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');
    const [run, setRun] = useState('');

    useEffect(() => {
        if (props.currentScooter !== null) {
            setRegCode(props.currentScooter.registrationCode);
            setStatus(props.currentScooter.isBusy);
            setDate(props.currentScooter.lastUseTime);
            setRun(props.currentScooter.totalRideKilometres)
        } else {
            setRegCode('');
            setStatus('');
            setDate('');
            setRun('')
        }
    }, [props.currentScooter])

    if (props.currentScooter === null) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" style={{color: 'black'}}>Edit scooter no: {props.currentScooter.id}</h5>
                        <button type="button" className="close" onClick={() => props.setShowModal(null)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Registration code</label>
                            <input type="text" className="form-control" value={regCode} onChange={(e) => {setRegCode(e.target.value)}}/>
                            <small className="form-text text-muted">Change registration code</small>
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select className="form-control" value={status} onChange={(e) => {setStatus(Number.parseInt(e.target.value))}}>
                                <option value="1">Taken</option>
                                <option value="0">Free</option>
                            </select>
                            <small className="form-text text-muted">Change scooter status</small>
                        </div>
                        <div className="form-group">
                            <label>Last use time</label>
                            <input type="datetime-local" className="form-control" value={date} onChange={(e) => {setDate(e.target.value)}}/>
                            <small className="form-text text-muted">Change last use time</small>
                        </div>
                        <div className="form-group">
                            <label>Run</label>
                            <input type="text" className="form-control" value={run} onChange={(e) => {setRun(e.target.value)}}/>
                            <small className="form-text text-muted">Change scooter run</small>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => props.setShowModal(null)}>Close</button>
                        <button type="button" className="btn btn-outline-primary" onClick={() => {
                            editData({
                            id: props.currentScooter.id,
                            registrationCode: regCode,
                            isBusy: status,
                            lastUseTime: date,
                            totalRideKilometres: run},
                            props.setShowModal(null),
                            props.refreshList(Date.now())
                        )}}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}