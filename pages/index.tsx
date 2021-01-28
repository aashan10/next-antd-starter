import { Card, Col, Row } from 'antd';
import React from 'react';
import { FilterComponent } from '../components';
import { GuestLayout } from '../layouts';

const HomePage = (): React.ReactNode => {
  return (
    <GuestLayout title="Benvenido">
      <Row gutter={[10, 10]} style={{ margin: 10, boxSizing: 'border-box' }}>
        <Col span={6}>
          <FilterComponent loading={false} />
        </Col>
        <Col span={18}>
          <Row gutter={[10, 10]}>
            <Col span={6}>
              <Card
                cover={
                  <img src={'https://cdn.sastodeal.com/catalog/product/2/_/2_16_1.jpg'} alt={''} />
                }
                hoverable
              >
                <Card.Meta title={'Mobile Phone'} />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                cover={
                  <img src={'https://cdn.sastodeal.com/catalog/product/2/_/2_16_1.jpg'} alt={''} />
                }
                hoverable
              >
                <Card.Meta title={'Mobile Phone'} />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                cover={
                  <img src={'https://cdn.sastodeal.com/catalog/product/2/_/2_16_1.jpg'} alt={''} />
                }
                hoverable
              >
                <Card.Meta title={'Mobile Phone'} />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                cover={
                  <img src={'https://cdn.sastodeal.com/catalog/product/2/_/2_16_1.jpg'} alt={''} />
                }
                hoverable
              >
                <Card.Meta title={'Mobile Phone'} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </GuestLayout>
  );
};

export default HomePage;
