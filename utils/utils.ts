export const compareDates = (dateString1: string, dateString2: string, criterion: string) => {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    if (criterion === "older")
        return date1.getTime() - date2.getTime();
    else if (criterion === 'newest')
        return date2.getTime() - date1.getTime();
    else
        return 0;
}