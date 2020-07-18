import React, { useState } from 'react';
import { Button, Input, Divider } from 'antd';
import './index.less';


const IndexPage = ({ history }) => {
  return (
    <div className='index_style'>
      <p>this is index</p>
      <Button onClick={() => {
        history.push({
          pathname: '/home'
        });
      }}>go to Home</Button>
      <Divider />
      <div className='login_style'>
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  )
}

export default IndexPage;