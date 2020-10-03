import { Layout } from 'antd';
import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { Search } from './search';
import { SideBar } from './sidebar';

const { Header, Content } = Layout;

export const Docs = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <HashRouter>
      <Layout>
        <SideBar collapsed={collapsed} onCollapse={setCollapsed}></SideBar>
        <Layout
          className="site-layout"
          style={{
            marginLeft: collapsed ? 80 : 200,
            minHeight: '100vh',
            transition: 'all 0.2s',
          }}
        >
          <Header
            className="site-layout-background docs-header"
            style={{
              padding: 0,
              position: 'fixed',
              width: `calc(100% - ${collapsed ? 80 : 200}px)`,
            }}
          >
            <span className="search-wrapper">
              <Search></Search>
            </span>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              marginTop: '70px',
            }}
          >
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo libero aut maiores maxime fugit dolor earum voluptatibus
              labore necessitatibus quas repudiandae numquam enim, consectetur
              repellendus vero tempore. Amet, repellendus.
            </p>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo libero aut maiores maxime fugit dolor earum voluptatibus
              labore necessitatibus quas repudiandae numquam enim, consectetur
              repellendus vero tempore. Amet, repellendus.
            </p>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo libero aut maiores maxime fugit dolor earum voluptatibus
              labore necessitatibus quas repudiandae numquam enim, consectetur
              repellendus vero tempore. Amet, repellendus.
            </p>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo libero aut maiores maxime fugit dolor earum voluptatibus
              labore necessitatibus quas repudiandae numquam enim, consectetur
              repellendus vero tempore. Amet, repellendus.
            </p>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo libero aut maiores maxime fugit dolor earum voluptatibus
              labore necessitatibus quas repudiandae numquam enim, consectetur
              repellendus vero tempore. Amet, repellendus.
            </p>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo libero aut maiores maxime fugit dolor earum voluptatibus
              labore necessitatibus quas repudiandae numquam enim, consectetur
              repellendus vero tempore. Amet, repellendus.
            </p>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo libero aut maiores maxime fugit dolor earum voluptatibus
              labore necessitatibus quas repudiandae numquam enim, consectetur
              repellendus vero tempore. Amet, repellendus.
            </p>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illo libero aut maiores maxime fugit dolor earum voluptatibus
              labore necessitatibus quas repudiandae numquam enim, consectetur
              repellendus vero tempore. Amet, repellendus.
            </p>
          </Content>
        </Layout>
      </Layout>
    </HashRouter>
  );
};
