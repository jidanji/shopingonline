import React, { Component } from 'react';

import './index.less';
import Title from '@/components/Title';

import CommodityList from '@/components/CommodityList';

import { connect } from 'dva';

import ShopList from '@/components/ShopList';

class index extends Component {
  state = {
    Addon: null,
  };

  onAddCart = (data) => {
    this.props.dispatch({ type: 'CommodityListModal/addList', payload: data });
  };

  render() {
    const SelectedItems = this.props.CommodityListModal.SelectedItems;
    var totalNum = SelectedItems.reduce((acc, cur) => {
      return (acc || 0) + (cur?.counter || 0);
    }, 0);

    return (
      <div className="indexContainer">
        <div>
          <Title totalNum={totalNum}></Title>
          <CommodityList onAddCart={this.onAddCart} />
        </div>
      </div>
    );
  }
}

export default connect(({ CommodityListModal, loading }) => ({
  CommodityListModal,
  loading,
}))(index);
