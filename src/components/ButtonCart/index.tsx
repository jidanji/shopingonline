import React, { Component } from 'react';

import { connect } from 'dva';

import ShopList from '@/components/ShopList';

import './index.less';

class index extends Component<any, any> {
  state = { show: false };
  onDeleteItem = (data) => {
    this.props.dispatch({
      type: 'CommodityListModal/removeItem',
      payload: data,
    });
  };
  render() {
    const {
      children = '我是按钮',
      showBagage = false,
      Bagage = '',
      Addon,
    } = this.props;
    return (
      <div
        className="ButtonCartContainer"
        onClick={this.props?.onClick}
        onMouseEnter={() => {
          this.setState({ show: true });
        }}
        onMouseLeave={() => {
          this.setState({ show: false });
        }}
      >
        {children}
        {showBagage && <div className="Bagage">{Bagage}</div>}
        {this.state.show && (
          <div style={{ position: 'absolute', top: '20px', right: 0 }}>
            <ShopList
              dataSource={this.props.CommodityListModal.SelectedItems}
              onDeleteItem={this.onDeleteItem}
            />
          </div>
        )}
      </div>
    );
  }
}

export default connect(({ CommodityListModal, loading }) => ({
  CommodityListModal,
  loading,
}))(index);
