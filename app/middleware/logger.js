export default function logger(store){
    return next => action =>{
        return next(action);
    }
}