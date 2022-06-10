export const insertData = (data) => {
    const currentData = !localStorage.getItem('scooters') ? [data] : [...JSON.parse(localStorage.getItem('scooters')), data];
    localStorage.setItem('scooters', JSON.stringify(currentData));
}