import dayjs from 'dayjs';

export const getCurrentTimeStamp = () => {
    return dayjs().format('YYYY-MM-DDTHH:MM');
};

export const formatData = (data: string) => {
    return dayjs(data).format('DD:MM:YYYY HH:MM');
};
