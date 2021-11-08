export function sortOnNumber(key, arr) {
  const sortedResp = arr.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  return sortedResp;
}
