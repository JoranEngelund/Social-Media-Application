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

/**
 * // Function that gets saved item from localStorage based on keyName
 * @param {string} key // KeyName of the value from the localStare you want to retrieve
 * @returns // Any data corresponding to the keyName
 * @example
 * ```js
 * // Call the load function to retrieve the value from localStorage with keyName
 * load("accessToken");
 * ```
 */
export function load(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}

/**
 * // Function that removes an item from localStorage based on keyName
 * @param {string} key //KeyName of the value from the localStare you want to remove
 * @example
 * ```js
 * // Call the remove function with the keyName you want to remove
 * remove("user");
 * ```
 */
export function remove(key) {
  const value = localStorage.removeItem(key);
}

/**
 * // Function that clears the whole localStorage for all items
 * @example
 * ```js
 * // Call the clear function and it will clear the localStorage
 * clear()
 * ```
 */
export function clear() {
  localStorage.clear();
}
