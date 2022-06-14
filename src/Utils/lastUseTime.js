export const getLastUseTime = (lastUseTime) => {
    const lastUseDate = new Date(lastUseTime)
    return (
        (lastUseDate.getMonth() + 1) + '/' + lastUseDate.getDate() + '/' + lastUseDate.getFullYear() + ' ' + lastUseDate.getHours() + ':' + lastUseDate.getMinutes()
    );
} 