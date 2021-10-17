// Converts the datetime format that is in github api response to a more readable format.
export function parseISOString(s: any) {
  let b = s.split(/\D+/)
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]))
    .toString()
    .substring(0, 10)
}
