/**
 * // Function to save key/value in localStorage
 * @param {string} key // Name of the key to store in localStorage
 * @param {*} value  // value of the key to store in the localStorage
 * @example
 * // call the function and pass in the keyName and ValueName as arguments
 * ```js
 * save(keyName, valueName)
 * ```
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}
