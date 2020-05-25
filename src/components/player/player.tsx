import * as React from 'react';
import './player.scss';
import { useState } from 'react';

const Player = () => {
    const [count, setCount] = useState(0);

    
    return (
        <div className="player">
            <div className="player-header">
                <img src="https://p2.music.126.net/2KznZJlHqhbmpdRAZ18oDA==/109951164742110795.jpg" alt="" />
            </div>
            <div className="palyer-info">
                <div>最后的外卖</div>
                <div>周深</div>
            </div>
        </div>
    )
}

export default Player