/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-10 17:10:26 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-20 15:57:46
 */
import React, { useContext, useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { setCookie } from 'utils';
import { AppContent } from "component/Function/AppReducerContent";
import CarouselComponent from 'component/moduleComponent/Carousel';


const { Carousel, Panel } = CarouselComponent;

interface IProps {
    form: any;
    history: any
}

type TRedux = {
    store: any;
    dispatch: any;
}

const Home: React.FC<IProps> = (props: IProps) => {
    console.log('HOME----->', props);
    const appContext = useContext(AppContent);
    const { store, dispatch } = appContext;
    const [selectKey, setKey] = useState('1')

    return (
        <div className={styles.home}>
            <Carousel selectPanel={selectKey} onClick={(key: any) => { setKey(key) }}>
                <Panel key='1'>Panel1</Panel>
                <Panel key='2'>Panel2</Panel>
                <Panel key='3'>Panel3</Panel>
            </Carousel>
            <span>This is Home page</span>
            <span>{String(store)}</span>
            <Button onClick={() => {
                dispatch({ type: "ADD_NUM", payload: "red" });
            }}>改变</Button>
        </div>
    )
}

export default Home