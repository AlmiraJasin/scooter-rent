export function ScootersStatistics (props) {
    return (
        <div>
            <div>Scooter Quantity: {props.scooters.length}</div>
            <div>Total Run: {props.scooters.reduce((totalRun, scooter) => {
                return totalRun + Number.parseInt(scooter.totalRideKilometres);
            }, 0)}</div>
        </div>
    )
}