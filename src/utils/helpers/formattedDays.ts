export const formattedDays = (value: number) : string => {
    const date = new Date(value);

    // Define options for formatting the date
    const options = {
        weekday: 'long' as const, // Display the full weekday name
        month: 'long' as const,   // Display the full month name
        day: 'numeric' as const,  // Display the day of the month
        year: 'numeric' as const, // Display the full year
        hour: 'numeric' as const, // Display the hour
        minute: 'numeric' as const, // Display the minute
        second: 'numeric' as const, // Display the second
        // timeZoneName: 'short'  as const // Display the time zone abbreviation
    };
    // Format the date using toLocaleDateString with the specified options
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}