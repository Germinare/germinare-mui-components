export function isAuthorized(accessRule: boolean): boolean {
  return accessRule === true || accessRule === undefined
}
