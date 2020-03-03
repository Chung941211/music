import * as React from 'react';
import { Apis } from '../../utils/http';

interface artists {
    name: string,
    id: string
}

interface musicList {
    id: string
    name: string
    artists: artists[]
}

interface State {
    musicList: musicList[]
}

class NewMusic extends React.Component<{}, State> {

    readonly state: State = {
        musicList: []
    }

    public componentDidMount () {
        Apis('get', '/personalized/newsong').then(data => {
            this.setState({
                musicList: data.result
            })
        });
    } 


    public render () {
        const { musicList } = this.state;

        return (
            <div>
                <div className="remd">最新音乐</div>

                <div>
                    {
                        musicList.map(music => 
                            <div key={music.id}>
                                {music.name}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default NewMusic