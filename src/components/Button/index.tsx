import React, { Component } from 'react';

import './index.less';

export default class index extends Component<any, any> {
  render() {
    const {
      children = '我是按钮',
      showBagage = false,
      Bagage = '',
    } = this.props;
    return (
      <div className="ButtonContainer" onClick={this.props?.onClick}>
        {children}
        {showBagage && <div className="Bagage">{Bagage}</div>}
      </div>
    );
  }
}
