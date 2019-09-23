/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-10 17:10:26 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-23 14:42:38
 */
import React, { useContext, useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { setCookie } from 'utils';
import { AppContent } from "component/Function/AppReducerContent";
import CarouselComponent from 'component/moduleComponent/Carousel';
import Audio from 'component/moduleComponent/Audio';


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
            <p>Audio</p>
            <Audio src="https://www.w3school.com.cn/i/horse.ogg"/>
            {/* <span>This is Home page</span>
            <span>{String(store)}</span>
            <Button onClick={() => {
                dispatch({ type: "ADD_NUM", payload: "red" });
            }}>改变</Button> */}
        </div>
    )
}

export default Home