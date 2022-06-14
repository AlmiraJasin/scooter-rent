const offset = new Date().getTimezoneOffset() * 1000 * 60
export const getLocalDate = value => {
    const offsetDate = new Date(value).valueOf() - offset
    const date = new Date(offsetDate).toISOString()
    const date1 = date.substring(0, 16)
    console.log(date1);
    return date1
}