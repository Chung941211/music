import * as React from 'react';
import PersonalizedList from './personalized'

import './index.scss';


class Index extends React.Component {
    
  public componentDidMount() {
  }

  public render () {
    return (
        <div>
          <PersonalizedList />
        </div>
    )
  }
}

export default Index
