// const formatDate = (dateString) => {

// }

export const formatDate = (dateString) => {
  // Create a Date object directly from the dateString
  const date = new Date(dateString);

  // Check for invalid date
  if (isNaN(date.getTime())) {
    console.error("Invalid date:", dateString);
    return "Invalid Date";
  }

  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
};