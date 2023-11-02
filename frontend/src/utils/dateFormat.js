import { DateTime } from 'luxon';

export const dateFormat = (date) => {
    return DateTime.fromISO(date).toFormat('MM/dd/yyyy');
}