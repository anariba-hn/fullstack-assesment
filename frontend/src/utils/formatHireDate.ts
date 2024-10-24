import {
    format,
    differenceInYears,
    differenceInMonths,
    differenceInDays
} from 'date-fns';

export function formatHireDate(hireDate: Date): string {
    const now = new Date();

    const years = differenceInYears(now, hireDate);
    const months = differenceInMonths(now, hireDate) % 12;
    const days = differenceInDays(now, hireDate) % 30;

    const formattedDate = format(hireDate, 'MMMM d, yyyy');

    return `${formattedDate} (${years}y – ${months}m – ${days}d)`;
}
