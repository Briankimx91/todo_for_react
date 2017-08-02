/********** fat arrow style **********/
export default function({dispatch}){
    return next => action => {
        console.log('From Middleware',action);

        if(!action.payload || !action.payload.then){
            next(action);
            return;
        }
        action.payload.then((response) => {
            const newAction = {...action, payload: response};
            /********dispatch********/
            dispatch(newAction);
            /********important********/
        });

        return action.payload;
    }
}
/*************************************/

/******** same as up ********/
// export default function({dispatch}) {
//     return function (next) {
//         return function(action) {
//             //Code goes here
//         }
//     }
// }
/*************************************/
