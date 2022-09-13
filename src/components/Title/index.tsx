import React, { Component } from 'react';

import './index.less';

import Button from '@/components/ButtonCart';

export default class index extends Component {
  render() {
    const { totalNum, Addon } = this.props;
    return (
      <div className="TitleContainer">
        <div className="leftDiv">购物天堂</div>
        <div className="rightDiv">
          <Button showBagage={true} Bagage={totalNum}>
            购物车
          </Button>
        </div>
      </div>
    );
  }
}
