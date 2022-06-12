export const insertData = (data) => {
    const currentData = !localStorage.getItem('scooters') ? [data] : [...JSON.parse(localStorage.getItem('scooters')), data];
    localStorage.setItem('scooters', JSON.stringify(currentData));
}

export const readData = () => {
    return localStorage.getItem('scooters') ? [...JSON.parse(localStorage.getItem('scooters'))] : [];
}

export const deleteData = (id) => {
    const scooterData = readData();
    localStorage.setItem('scooters', JSON.stringify(scooterData.filter(scooter => scooter.id !== id)));
}
