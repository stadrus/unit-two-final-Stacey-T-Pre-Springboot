export function setItem(key, value){
    try{
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to localstorage', error)
    }
}

export function getItem(key){
    try{
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch(error){
        console.error('Error reading localstorage', error)
    }
}