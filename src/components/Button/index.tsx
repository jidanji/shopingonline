import React, { Component } from 'react';

import './index.less';

export default class index extends Component<any, any> {
  render() {
    const {
      children = '我是按钮',
      showBagage = false,
      Bagage = '',
      Addon,
    } = this.props;
    return (
      <div
        className="ButtonContainer"
        onClick={this.props?.onClick}
        onMouseMove={() => {
          this.props?.onmouseover?.();
        }}
        onMouseOut={() => {
          this.props?.onmouseout?.();
        }}
      >
        {children}
        {showBagage && <div className="Bagage">{Bagage}</div>}

        {!!Addon && (
          <div style={{ position: 'absolute', top: '30px', right: 0 }}>
            {Addon}
          </div>
        )}
      </div>
    );
  }
}
