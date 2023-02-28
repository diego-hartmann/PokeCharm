export const favList = {
    set(value:any[]){
        localStorage.setItem("favs", JSON.stringify(value));
    },
    get(){
        // @ts-ignore
        return JSON.parse(localStorage.getItem("favs"))
    }
}