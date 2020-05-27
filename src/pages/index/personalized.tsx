import * as React from 'react';
import { connect } from 'react-redux';
import { Personalized } from '../../store/index/types';
import { indexFetchRequst } from '../../store/index/action';
import { stateObject } from '../../store'

import './index.scss';

interface personalizedState {
  data: Personalized[],
  loading: Boolean
}

interface personalizedDispatch {
  indexFetchRequst: typeof indexFetchRequst
}

type indexProps = personalizedState & personalizedDispatch

class PersonalizedList extends React.Component<indexProps> {
    
  public componentDidMount () {
    const { indexFetchRequst: fr, data } = this.props;
    if (data.length === 0) {
      fr();  
    } 
  }

  public render () {
    const { data } = this.props;
    const personalizedList = data.length > 0 ? data.slice(0, 6) : [];
    return (
        <div>
          <div className="remd">推荐歌单</div>

            <div className="remd_ul">
              {
                personalizedList.map(item => 
                  <div key={item.id} className="remd_li">
                    <div className="remd_img">
                      <img src={item.picUrl} alt=""/>
                        <span className="u-earp remd_lnum">{item.playCount}</span>
                    </div>
                    <p className="remd_text">{item.name}</p>
                  </div>
                )
              }
            </div>
        </div>
    )
  }
}

const mapStateToProps = ({ index } : stateObject) => ({
    loading: index.loading,
    data: index.data
})

const mapDispatchToProps = {
    indexFetchRequst
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalizedList);
