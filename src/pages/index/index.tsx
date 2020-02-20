import React, { Component } from 'react';

export interface headerProps { 
    name: String; 
}

export default class Index extends Component<headerProps, {}> {
  render () {
    const { name } = this.props;
    return (
        <div>
            { name }
        </div>
    )
  }
}