import React, { Component } from 'react';

export interface headerProps { 
    name: String; 
}

export default class Index extends Component<headerProps, {}> {

  componentWillMount () {
    console.log('test');
  }
  
  render () {
    const { name } = this.props;
    return (
        <div className="video">
            { name }
        </div>
    )
  }
}