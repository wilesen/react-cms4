/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-19 14:31:08 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-19 16:07:10
 */


interface IState {

}

interface IAction {
    type: string,
    payload: any
}

const todolistReducer = (state: IState = {}, action: IAction) => {
    switch (action.type) {
        case "ADD_NUM":
            return {
                ...state,
                data: action.payload
            };
        case "REMOVE_NUM":
            return {
                ...state,
                data: action.payload
            };
        default:
            return state
    }
}

export default todolistReducer;