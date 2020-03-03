import * as React from 'react';
import PersonalizedList from './personalized'
import NewMusic from './newMusic'
import './index.scss';

const Index: React.FC = () => {
  return (
    <div>
      <PersonalizedList />
      <NewMusic />
    </div>
  )
} 

export default Index
