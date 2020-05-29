import * as React from 'react';
import './player.scss';
import { useState } from 'react';

interface Props {
    name: string,
    song: string
}
const Player: React.FC<Props> = props => {
    const [count, setCount] = useState(0);

    const { name, song } = props;
    
    return (
        <div className="player">
            <div className="player-header">
                <img src="https://p2.music.126.net/2KznZJlHqhbmpdRAZ18oDA==/109951164742110795.jpg" alt="" />
            </div>
            <div className="palyer-info">
                <div>{{name}}</div>
                <div>{{}}</div>
            </div>
        </div>
    )
}

export default React.memo(Player)