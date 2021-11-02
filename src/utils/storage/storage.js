/**
 * @description 将值转化为string类型并存储至localStorage
 * @param key {String} 键
 * @param value {any} 值
 */
export const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description 获取localStorage
 * @param key {String} 键
 * @param parse {Boolean} 是否进行JSON.parse操作
 */
export const getStorage = (key, parse = false) => {
    const result = localStorage.getItem(key)
    if (!result) {
        return false
    } else {
        return parse ? JSON.parse(result) : result
    }
}

/**
 * @description 删除localStorage
 * @param key {String} 键
 * @return {String} 删除的对象
 */
export const removeStorage = (key) => {
    const obj = getStorage(key)
    localStorage.removeItem(key)
    return obj
}

/**
 * @description 将值转化为string类型并存储至sessionStorage
 * @param key {String} 键
 * @param value {any} 值
 */
export const setSession = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * @description 获取sessionStorage
 * @param key {String} 键
 * @param parse {Boolean} 是否进行JSON.parse操作
 */
export const getSession = (key, parse = false) => {
    const result = sessionStorage.getItem(key)
    if (!result) {
        return false
    } else {
        return parse ? JSON.parse(result) : result
    }
}

/**
 * @description 删除sessionStorage
 * @param key {String} 键
 * @return {String} 删除的对象
 */
export const removeSession = (key) => {
    const obj = getStorage(key)
    sessionStorage.removeItem(key)
    return obj
}