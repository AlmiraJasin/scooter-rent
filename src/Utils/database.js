export const insertData = (data) => {
    const currentData = !localStorage.getItem('scooters') ? [data] : [...JSON.parse(localStorage.getItem('scooters')), data];
    localStorage.setItem('scooters', JSON.stringify(currentData));
    let newId = Number.parseInt(data.id)
    newId++
    localStorage.setItem('lastId', newId)
}

export const readData = () => {
    return localStorage.getItem('scooters') ? [...JSON.parse(localStorage.getItem('scooters'))] : [];
}

export const deleteData = (id) => {
    const scooterData = readData();
    localStorage.setItem('scooters', JSON.stringify(scooterData.filter(scooter => scooter.id !== id)));
}

export const editData = (newScooter) => {
    const scooterData = readData();
    const index = scooterData.findIndex(oldScooter => oldScooter.id === newScooter.id);
    scooterData[index] = newScooter;
    localStorage.setItem('scooters', JSON.stringify(scooterData));
}

