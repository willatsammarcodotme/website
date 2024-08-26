export const mapWork = (json: any) => {
    let dateValues: {start? : Date, end?: Date} = {};
    if (json?.header.dates.start) {
        dateValues.start = new Date(json.header.dates.start);
    }
    if (json.header.dates.end) {
        dateValues.end = new Date(json.header.dates.end);
    }
    return {
        header : {...json.header, dates : dateValues},
        achievements : json?.achievements
    }
}
