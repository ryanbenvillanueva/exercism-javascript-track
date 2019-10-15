export const gigasecond = (moment) => {
    const GIGASECONDS = 1000000000000;
    return new Date(moment.getTime() + GIGASECONDS);
};