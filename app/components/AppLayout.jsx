import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';

import Shortcuts from './Shortcuts';

const {
  Header, Content, Footer, Sider,
} = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [path, setPath] = useState('');

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Shortcuts onChange={setPath} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{ path }</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
