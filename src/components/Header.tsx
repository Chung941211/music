import React, { Component } from 'react';

export interface headerProps { 
    title : String; 
}

export class Header extends Component<headerProps, {}> {
  render () {
    const { title } = this.props
    return (
        <div>
           test
        </div>
    )
  }
}