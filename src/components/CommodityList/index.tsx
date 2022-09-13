import React, { Component } from 'react';

import './index.less';

import Button from '@/components/Button';

import { Commoditys } from '@/utils/Commoditys';

export default class index extends Component<any, any> {
  constructor(props) {
    super(props);
  }
  AddCart = (data: any) => {
    this.props?.onAddCart?.(data);
  };
  render() {
    return (
      <div className="CommodityListContainer">
        {Commoditys.map((item) => (
          <CommodityItem dataSource={item} onAddCart={this.AddCart} />
        ))}
      </div>
    );
  }
}

export function CommodityItem({ dataSource, onAddCart = () => {} }) {
  return (
    <div className="CommodityItemContainer">
      <div className="ImgContainer">
        <img className="Img" src={dataSource.imgurl} alt="" />
      </div>
      <div className="toolBar">
        <div className="title" title="苹果苹果苹果苹果苹果">
          {dataSource.title}
        </div>
        <div className="price">¥{dataSource.price}</div>
        <div className="addcart">
          <Button
            onClick={() => {
              onAddCart(dataSource);
            }}
          >
            加入购物车
          </Button>
        </div>
      </div>
    </div>
  );
}
