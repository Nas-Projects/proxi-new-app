export default function stringSlugifier(name) {
    return name
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters
      .trim() // Remove leading and trailing whitespace
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-'); // Replace multiple hyphens with a single hyphen
  }
  
  // Example usage
//   const agentName = "Leonard Krasner";
//   const agentSlug = stringSlugifier(agentName);
//   console.log(agentSlug); // Outputs: "leonard-krasner"
  