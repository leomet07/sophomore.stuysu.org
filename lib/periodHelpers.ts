import { ScheduleSegment } from "../types/db_types";

export interface ParsedPeriod {
    start: Date,
    end: Date,
    // save these variables to memoize processing
    startSeconds: number,
    startString: string,
    endSeconds: number,
    endString: string,
    name: string
}


export function datetimeToSeconds(date: Date): number {
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}
export function get_current_period (
    schedule: ParsedPeriod[],
    curTime: Number = datetimeToSeconds(new Date())
): number {
    for (let i = 0; i < schedule.length; i++) {
        if (curTime < schedule[i].endSeconds) {
            return i;
        }
    }
    return 0; // If not found (due to glitch), use first period
}

// only to be used when we don't have a Date already
// these functions are just for parsing other data into a Date object
// should be time-zone agnostic,
// consumers only read the numbers we manually inputted (hour, minute, second)
// and the browser never coaxes the values to change timezones
export function secondsToTime(seconds: number): Date {
    const hours = Math.floor(seconds / 3600);
    let left = Number(seconds % 3600);
    return new Date(
        1970,
        1,
        1,
        hours,
        Math.floor(left / 60),
        left % 60
    );
}
function strToTime(time: string): Date {
    let [shours, sminutes, sseconds, half] = time.split(/[: ]/);
    let hours = Number(shours);

    if (half == "PM" && hours != 12) {
        hours = Number(hours) + 12;
    } else if (half == "AM" && hours == 12) {
        hours = 0;
    }

    let minutes = Number(sminutes);
    let seconds = Number(sseconds);

    return new Date(
        1970,
        1,
        1,
        Number(hours),
        Number(minutes),
        Number(seconds),
    )
}

export const toStuyTimeString = (d: Date,
                                 style: "short" | "full" | "long" | "medium" | undefined = "short")
    : string =>
    d.toLocaleTimeString("en-US", {
        timeStyle: style,
        timeZone: "US/Eastern", // Use the current time in NYC (Stuy)
    })


export function parsePeriod(p: ScheduleSegment): ParsedPeriod {
    const period = {
        name: p.name,
        start: strToTime(p.start),
        end: strToTime(p.end),
    } as ParsedPeriod;

    period.startSeconds = datetimeToSeconds(period.start);
    period.endSeconds = datetimeToSeconds(period.end);

    period.startString = toStuyTimeString(period.start);
    period.endString = toStuyTimeString(period.end);

    return period;
}
