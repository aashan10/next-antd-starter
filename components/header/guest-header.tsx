import { Affix, Button, Col, Input, Layout, message, Row, Space } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import { MegaMenu } from '../index';
import React, { useEffect, useState } from 'react';

interface GuestHeaderProps {
  title?: string;
  buttons?: React.ReactNodeArray;
}

const GuestHeader = (props: GuestHeaderProps): React.ReactElement => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (text !== '') {
      setLoading(true);
      fetch('')
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          message.error(e.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [text]);

  return (
    <Affix offsetTop={0}>
      <Layout.Header>
        <Head key="guest-header">
          <title>{props.title}</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Row style={{ height: 'inherit' }}>
          <Col span={4} style={{ height: 'inherit' }}>
            <Link href={'/'}>
              <a className={'brand-name'} type={'link'}>
                <span>AsyncStore</span>
              </a>
            </Link>
          </Col>
          <Col
            span={10}
            style={{
              display: 'flex',
              height: 'inherit',
            }}
          >
            <Input.Search
              style={{
                margin: 'auto',
              }}
              loading={loading}
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
              enterButton
            />
          </Col>
          <Col
            span={10}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              height: 'inherit',
            }}
          >
            <Space direction={'horizontal'}>
              <Button type={'primary'}>Login</Button>
              <Button type={'default'}>Signup</Button>
              {props.buttons?.map((btn) => {
                return btn;
              })}
            </Space>
          </Col>
        </Row>
      </Layout.Header>
      <MegaMenu show={true} />
    </Affix>
  );
};

export default GuestHeader;
