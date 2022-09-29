// use local storage to manage cart data
const addToDb = (key,val) =>{
  localStorage.setItem(key,val);
}

const getFromDb=(key)=>{
    const val = localStorage.getItem(key);
    return val === null ? 0 : val ;
}

export {
    addToDb,
    getFromDb
}