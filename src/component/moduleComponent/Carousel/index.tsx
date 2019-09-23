/*
 * @Author: tingzi.wen 
 * @Date: 2019-09-20 15:15:09 
 * @Last Modified by: tingzi.wen
 * @Last Modified time: 2019-09-20 16:31:52
 */

import React, { useContext } from 'react';
import classnames from 'classnames';
import styles from './index.less';

interface ICProps {
    children: any;
    selectPanel: string | number;
    onClick: any
}

interface IPProps {
    children: any
}

const Carousel: React.FC<ICProps> = (props: ICProps) => {
    const { selectPanel } = props;
    console.log(selectPanel)
    return (
        <div className={styles.carousel}>
            {
                React.Children.map(props.children, (child: any, index: number) => {
                    const { key } = child;
                    return (
                        <div className={
                            classnames(
                                'carouselPanel',
                                {
                                    'isFirst': index === 0,
                                    'isMiddle': key === selectPanel,
                                    "animated": key === selectPanel,
                                },
                                // key === selectPanel?styles.animated:null
                            )}
                            onClick={() => { props.onClick(key) }}>
                            {child}
                        </div>
                    )
                })
            }
        </div>
    )
}

const Panel: React.FC<IPProps> = (props: IPProps) => {
    return props.children
}

const CarouselComponent = {
    Carousel,
    Panel
}

export default CarouselComponent;