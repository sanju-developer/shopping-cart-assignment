export function sortOnNumber(key, arr) {
  const sortedResp = arr.sort((a, b) => (a[key] < b[key] ? -1 : 1));
  return sortedResp;
}

export function emailValidation(email) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email || regex.test(email) === false) {
    return false;
  }
  return true;
}
