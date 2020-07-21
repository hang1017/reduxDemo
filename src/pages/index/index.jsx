import React, { useState } from 'react';
import { Button, Input, Divider } from 'antd';
import { connect } from 'react-redux';
import { keyAES } from '../../utils';
import { encodeAES } from '../../utils/encodeUtil';
import IndexAction from '../../models/action/indexAction';
import './index.less';


const IndexPage = ({ history }) => {
  const [loginName, setLoginName] = useState("15115342971");
  const [loginPwd, setLoginPwd] = useState("Hp_123456");
  const [verifyCode, setVerifyCode] = useState("");
  const [imgUrl, setImgUrl] = useState(`/api/user/getLoginVerify?t=${+new Date()}&loginType=0`);

  const inputChange = (e, type) => {
    const value = e.target.value;
    switch (type) {
      case 'loginName':
        setLoginName(value);
        break;
      case 'loginPwd':
        setLoginPwd(value);
        break;
      case 'verifyCode':
        setVerifyCode(value);
        break;
      default:
        break;
    }
  }

  const loginClick = () => {
    IndexAction.toLogin({
      loginName,
      loginPwd: encodeAES(loginPwd, keyAES),
      verifyCode,
    });
  }

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
        账号：<Input value={loginName} onChange={e => { inputChange(e, 'loginName') }} />
        密码：<Input value={loginPwd} onChange={e => { inputChange(e, 'loginPwd') }} />
        验证码：<Input value={verifyCode} onChange={e => { inputChange(e, 'verifyCode') }} />
        <img src={imgUrl} alt='' />
      </div>
      <Button onClick={loginClick}>登录</Button>
    </div>
  )
}

export default connect(({ index }) => ({ index }), IndexAction)(IndexPage);