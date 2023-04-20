export default function generateId(string) {
  // Convert the string to lowercase
  let modifiedString = string.toLowerCase();

  // Replace spaces with underscores
  modifiedString = modifiedString.replace(/\s+/g, "_");

  return modifiedString;
}
