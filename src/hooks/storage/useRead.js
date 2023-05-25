export default function useRead(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return undefined;
  }
}
