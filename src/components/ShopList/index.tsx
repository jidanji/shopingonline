import React, { Component } from 'react';
import './index.less';
import Button from '@/components/Button';

export default class index extends Component {
  buyAll = () => {
    const { dataSource = [] } = this.props;
    var totalNum = dataSource.reduce((acc, cur) => {
      return (acc || 0) + (cur?.counter || 0) * parseFloat(cur?.price);
    }, 0);

    alert(totalNum);
  };
  render() {
    const { dataSource = [] } = this.props;
    return (
      <div className="ShopListContainer">
        {dataSource.map((item) => (
          <div className="ShopItemContainer">
            <div className="title" title={item?.title}>
              {item?.title}
            </div>
            <div className="price">
              {item?.price}*{item?.counter}
            </div>
            <div className="deleteBtn">
              <Button
                onClick={() => {
                  this.props?.onDeleteItem?.(item);
                }}
              >
                删除
              </Button>
            </div>
          </div>
        ))}

        {!!dataSource.length && (
          <div style={{ textAlign: 'center' }}>
            <Button onClick={this.buyAll}>购买</Button>
          </div>
        )}

        {!dataSource.length && (
          <div
            style={{
              textAlign: 'center',
              lineHeight: '100px',
              height: '100px',
            }}
          >
            购物车没有商品
          </div>
        )}
      </div>
    );
  }
}
