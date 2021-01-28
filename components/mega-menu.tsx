import React from 'react';
import { Col, Menu, Row } from 'antd';

interface MegaMenuProps {
  children?: React.ReactNode;
  show?: boolean;
}

interface MegaMenuState {
  show?: boolean;
}

export default class MegaMenu extends React.Component<MegaMenuProps, MegaMenuState> {
  constructor(props: MegaMenuProps) {
    super(props);
    this.state = {
      show: props.show ?? true,
    };
  }

  render = (): React.ReactNode => {
    return this.state.show ? (
      <Row>
        <Col span={24} style={{ zIndex: 1000 }}>
          <Menu className={'mega-menu'} mode="horizontal" style={{ zIndex: 1000 }}>
            <Menu.Item>Electronics</Menu.Item>
          </Menu>
        </Col>
      </Row>
    ) : null;
  };
}
