import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { web3Modal } from "../../views/Signin";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const SiderDemo = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  let navigate = useNavigate();

  React.useEffect(() => {
    if (web3Modal) {
      if (web3Modal.cachedProvider) {
        navigate("/logged-in");
      } else {
        navigate("/sign-in");
      }
    } else {
      navigate("/sign-in");
    }
  }, []);

  const toggle = React.useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return (
    <Layout theme="light" style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Helmet>
        <title>Inbox | emailDAO</title>
      </Helmet>{" "}
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout theme="light" className="site-layout">
        <Header theme="light" className="site-layout-background" style={{ padding: 0 }}>
          <MenuUnfoldOutlined onClick={toggle} />
        </Header>
        <Content
          theme="light"
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default SiderDemo;
