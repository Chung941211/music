import * as React from 'react';
import { Apis } from '../../utils/http';

interface album {
    name: string
}
interface artists {
    name: string
}

interface song {
    name: string
    id: string
    album: album
    artists: artists[]
}

interface musicList {
    id: string
    name: string
    song: song
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

                <div className="m m-list">
                    {
                        musicList.map(music => 
                            <div className="m-item" key={music.id}>
                                <div>
                                   <div>{music.name} </div>
                                   <div className="sginfo">
                                       <i className="sghot"></i>
                                       {
                                         music.song.artists.map(artists => 
                                             artists.name
                                         )
                                       } - {music.song.album.name}
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default NewMusic