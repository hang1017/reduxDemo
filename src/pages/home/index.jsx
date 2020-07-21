import React, { useState } from 'react';
import { AutoComplete, Input, Divider } from 'antd';
import _ from 'lodash';
import { connect } from 'react-redux';
import { AddressSelect } from '../../components';
import HomeAction from '../../models/action/homeAction';
import './index.less';


const HomePage = () => {
  const [options, setOptions] = useState([]);

  const onSelect = () => { }

  const handleSearch = (value) => {
    HomeAction.keywordsList({
      keywords: value,
      limitNum: 10,
      t: new Date().getTime(),
    }).then(response => {
      const res = response.data;
      const { resultData = [] } = res;
      setOptions(resultData.map(item => {
        return {
          label: item.keywords,
          value: item.keywords,
        }
      }))
    })
  }

  const inputFocus = (e) => {
    const { value = '' } = e.target;
    if (value) {
      HomeAction.keywordsList({
        keywords: value,
        limitNum: 10,
        t: new Date().getTime(),
      }).then(response => {
        const res = response.data;
        const { resultData = [] } = res;
        setOptions(resultData.map(item => {
          return {
            label: item.keywords,
            value: item.keywords,
          }
        }))
      })
    } else {
      HomeAction.listUserESearchLog({
        searchPlace: '0'
      }).then(response => {
        const res = response.data;
        const { resultData = [] } = res;
        setOptions(resultData.map(item => {
          return {
            label: item.searchLogContent,
            value: item.searchLogContent,
          }
        }))
      })
    }
  }

  return (
    <div className='home_style'>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{ width: 300 }}
        options={options}
        onSelect={onSelect}
        onSearch={_.debounce(handleSearch, 200)}
        onFocus={inputFocus}
      >
        <Input.Search size="large" placeholder="input here" enterButton />
      </AutoComplete>
      <Divider />
      <AddressSelect />
    </div>
  )
}

export default connect(({ home }) => ({ home }), HomeAction)(HomePage);