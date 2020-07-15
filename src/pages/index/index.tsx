import React, { FC } from 'react';
import { Button } from 'antd';
import './index.less';

interface IIndexProps {
  history: any;
}

const IndexPage: FC<IIndexProps> = ({ history }) => {
  return (
    <div className='index_style'>
      <p>this is index</p>
      <Button onClick={() => {
        history.push({
          pathname: '/home'
        });
      }}>go to Home</Button>
    </div>
  )
}

export default IndexPage;