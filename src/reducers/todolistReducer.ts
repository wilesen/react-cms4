/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-05 10:59:54 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-10 15:27:43
 */

interface IAction {
    type: string;
    id: number;
    text: string;
    completed: boolean
}

interface ITodo {
    type: string;
    id: number;
    text: string;
    completed: boolean
}

const todos = (state = [], action: IAction) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map((todo: ITodo) =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

export default todos