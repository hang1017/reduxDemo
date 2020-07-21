import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AddressAction from '../../models/action/addressAction';
import './index.less';

const AddressSelect = () => {
  const [show, setShow] = useState(false);
  const [tabs, setTabs] = useState(['请选择']);

  useEffect(() => {
    AddressAction.queryListRegions({
      regionGrades: '1',
      t: new Date().getTime(),
    }).then(response => {
      console.log(response);
    })
  }, [])

  return (
    <div className='address_select_style'>
      <span>配送至：</span>
      <div className='address_value' onClick={() => { setShow(!show); }}>这里这里这里</div>
      {show && <div className='address_panel'>
        {tabs.map()}
      </div>}
    </div>
  )
}

export default connect(({ address }) => ({ address }), AddressAction)(AddressSelect);