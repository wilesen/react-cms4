/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-19 14:42:35 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-19 17:25:53
 */
import React, { createContext, useReducer } from 'react';
import reducer from 'reducers/todolistReducer'
import { any } from 'prop-types';

interface IProps {
    children: any
}

interface IAction {
    type: string,
    payload: any
}
export const AppContent = createContext({
    store: {data:1},
    dispatch: (param: IAction) => any
});

const ReducerContent: React.FC<IProps> = (props: IProps) => {
    const [store, dispatch] = useReducer(reducer, { data: 1 });
    console.log(store, dispatch);
    const value = { store, dispatch }
    return (
        props.children
        // <AppContent.Provider value={value}>
            // {
            //     props.children
            // }
        // </AppContent.Provider>
    )
}
export default ReducerContent;