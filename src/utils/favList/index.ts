export const favList = {
    set(value:number[]){
        localStorage.setItem("favs", JSON.stringify(value));
    },
    get(){
        // @ts-ignore
        return JSON.parse(localStorage.getItem("favs")) ?? ([] as number[]);
    }
}