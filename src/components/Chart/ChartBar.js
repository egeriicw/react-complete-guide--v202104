import React, { useState } from 'react';

import './ChartBar.css';

const ChartBar = props => {

    const [valueIsShown, setValueIsShown] = useState(false);

    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (<div className='chart-bar'>
                <div className='chart-bar__inner'>
                    <div className='chart-bar__fill' 
                        onMouseEnter={() => setValueIsShown(true)} 
                        onMouseLeave={() => setValueIsShown(false)} 
                        style={{height: barFillHeight}}>
                    </div>
                </div>
                {valueIsShown && (
                    <div className='chart-bar__overlayvalue'>
                        <div className='chart-bar__overlayvaluetext'>${parseFloat(props.value).toFixed(2)}</div>
                    </div>
                )}
                <div className='chart-bar__label'>{props.label}</div>
            </div>);

};

export default ChartBar;