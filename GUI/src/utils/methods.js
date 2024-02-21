/**
 * 在window对象上debug
 * 
 * @param {string} key 
 * @param {any} value 
 */
export const debugToWindow = (key, value) => {
    if(!window.__debug) window.__debug = {}

    if(window.__debug[key]) {
        console.error(`${key} is already on window, try to set anothor key name to debug`)
        return
    } 
    window.__debug[key] = value
}