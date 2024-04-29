export function getDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // January is 0!
    const year = date.getFullYear();
    const formattedDate = day + '.' + month + '.' + year;
    return formattedDate;
}