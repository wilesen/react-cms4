/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-23 14:04:36 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-23 15:34:42
 */

import React, { useState, useRef } from 'react';
import { Icon } from 'antd';
import styles from './index.less'


interface IProps {
    src: string
}
const Audio: React.FC<IProps> = (props: IProps) => {
    const { src } = props;
    const [playState, setPlayState] = useState(false);
    const [Countdown, setCountdown] = useState(0);
    const Ref = useRef<HTMLAudioElement>(null);
    const operatePlayBtn = () => {
        const CurrentTarget = Ref.current;
        setPlayState(!playState);
        if (CurrentTarget) {
            setCountdown(Number((CurrentTarget.duration).toFixed(1)))
        }
        if (!playState) {
            CurrentTarget && CurrentTarget.play();
        } else {
            CurrentTarget && CurrentTarget.pause();
        }
        CurrentTarget && CurrentTarget.addEventListener('timeupdate', function () {
            console.log('当前时间', CurrentTarget && CurrentTarget.currentTime);
            console.log('总时间', CurrentTarget && CurrentTarget.duration);
            if (CurrentTarget) {
                console.log('进度', (CurrentTarget.currentTime / CurrentTarget.duration).toFixed(2) + '%')
                setCountdown(Number((CurrentTarget.duration - CurrentTarget.currentTime).toFixed(1)))
            }
        }, false);
        CurrentTarget && CurrentTarget.addEventListener('ended', function () {
            setPlayState(false);
        }, false);
    }
    return <div onClick={operatePlayBtn} className={styles.AudioContext}>
        {playState ? <Icon type="pause" className={styles.playBtn} /> : <Icon type="caret-right" className={styles.playBtn} />}
        <audio controls={true} ref={Ref} className={styles.Audio}>
            <source src={src} type="audio/ogg" />
        </audio>&nbsp;
        <span>{Countdown}'</span>
    </div>
}

export default Audio