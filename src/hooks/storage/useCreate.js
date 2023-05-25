export default function useCreate(key, state) {
  localStorage.setItem(key, JSON.stringify(state));
}
