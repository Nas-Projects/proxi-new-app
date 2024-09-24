export function formatDateToReadable(dateString) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short', // Optional: adds time zone information
    };
  
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  }
  