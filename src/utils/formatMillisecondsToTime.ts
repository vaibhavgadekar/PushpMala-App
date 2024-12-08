export const formatMillisecondsToTime = (milliseconds: number) => {
  // Total seconds

  const totalSeconds = Math.floor(milliseconds);

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Format time with leading zeros
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  // Return formatted time
  return hours > 0
    ? `${formattedHours}:${formattedMinutes}:${formattedSeconds}` // hh:mm:ss format
    : `${formattedMinutes}:${formattedSeconds}`; // mm:ss format
};
