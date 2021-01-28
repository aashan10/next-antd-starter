import { Button, Layout, message } from 'antd';
import React from 'react';
import { GuestHeader } from '../components/header';

interface GuestLayoutProps {
  title: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const GuestLayout = (props: GuestLayoutProps): React.ReactElement => {
  return (
    <Layout>
      <GuestHeader title={props.title ?? 'AsyncStore'} buttons={[]} />
      <Layout.Content>{props.children}</Layout.Content>
      <Layout.Footer>{props.footer}</Layout.Footer>
    </Layout>
  );
};

export default GuestLayout;
