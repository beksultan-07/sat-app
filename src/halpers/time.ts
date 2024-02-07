export const convertToTimeStamp = (date: string) => {
    return new Date(date).getTime();
};

export const getDateFromTimeStamp = (time: number) => {
    const dateObject = new Date(time);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

export const getTruncateTime = (timestamp: number) => {
    const date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
};
