// calendarStore.ts
import {create} from 'zustand';
import { CalendarState } from '../types/calendarTypes';

/**
 * TODO: Add a calendar store
 * 1. Look at the import functions we need in our Calendar.tsx component
 * 2. Add a state that tracks the month, year, nextMonth and previous month
 * 3. Test the integration in the Calendar component
 */

export const useCalendarStore = create<CalendarState>((set) => ({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    nextMonth: () =>
        set((state) => {
            const newDate = new Date(state.year, state.month + 1);
            return { month: newDate.getMonth(), year: newDate.getFullYear() };
        }),
    prevMonth: () =>
        set((state) => {
            const newDate = new Date(state.year, state.month - 1);
            return { month: newDate.getMonth(), year: newDate.getFullYear() };
        }),
}));
