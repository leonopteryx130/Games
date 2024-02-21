export const debugToWindow = (key, value) => {
    if(window[key]) {
        console.error(`${key} is already on window, try to set anothor key name to debug`)
        return
    } 
    window[key] = value
}