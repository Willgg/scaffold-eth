import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { web3Modal } from "../../views/Signin";
import { Signin, Particles } from "../../views";
import "antd/dist/antd.css";
import { Layout, Menu, Typography, PageHeader, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InboxOutlined,
  SendOutlined,
  EditOutlined,
  StarOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import MessageBox from "../message-box/message-box.component";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function getParams(location) {
  const searchParams = new URLSearchParams(location.search);
  return {
    query: searchParams.get("compose") || "",
  };
}

function setParams({ query }) {
  const searchParams = new URLSearchParams();
  searchParams.set("compose", query || "");
  return searchParams.toString();
}
const SiderDemo = () => {
  let { id } = useParams();
  const [messageBox, showMessageBox] = React.useState(true);

  const [collapsed, setCollapsed] = React.useState(false);
  let navigate = useNavigate();

  React.useEffect(() => {
    if (web3Modal) {
      if (web3Modal.cachedProvider) {
        if (window.location.pathname === "/") {
          navigate("/logged-in");
        }
        const params = getParams(window.location);
        console.log(params.query);
        if (params.query === "true") {
          console.log("DFgggggggggggggggggggggggggg-------------");
          showMessageBox(false);
        }
        console.log(params);
      } else {
        navigate("/sign-in");
      }
    } else {
      navigate("/sign-in");
    }
  }, []);

  React.useEffect(() => {
    const params = getParams(window.location);
    console.log(params.query);
    if (params.query === "true") {
      console.log("DFgggggggggggggggggggggggggg-------------");
      showMessageBox(false);
    } else {
      !messageBox && showMessageBox(true);
    }
    console.log(params);
  }, [window.location.search]);

  const toggle = React.useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  const onClick = React.useCallback(e => {
    console.log(id, e);
    navigate("/logged-in/" + e.key);
  }, []);

  const handleComposerDialog = React.useCallback(() => {
    console.log("sdffr");
    const url = setParams({ query: true });
    navigate(`?${url}`);
  }, []);

  return (
    <Layout style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Helmet>
        <title>Inbox | emailDAO</title>
      </Helmet>{" "}
      <MessageBox
        showMessage={messageBox}
        shouldMessageShow={showMessageBox}
        addSent={() => {
          showMessageBox(false);
        }}
      />
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <PageHeader className="site-page-header" title="Messages" />
        <Menu onClick={onClick} mode="inline" selectedKeys={id}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="">
            <Button
              shape={collapsed ? "circle" : "rectangle"}
              onClick={handleComposerDialog}
              style={{ margin: "0 0 0.5rem 0.25rem" }}
              icon={<PlusOutlined />}
            >
              {collapsed ? "" : "Compose"}
            </Button>
          </div>
          <Menu.Item key="inbox" icon={<InboxOutlined />}>
            Inbox
          </Menu.Item>
          <Menu.Item key="sent" icon={<SendOutlined />}>
            Sent
          </Menu.Item>
          <Menu.Item key="drafts" icon={<EditOutlined />}>
            Drafts
          </Menu.Item>
          <Menu.Item key="starred" icon={<StarOutlined />}>
            Starred
          </Menu.Item>
          <Menu.Item key="trash" icon={<DeleteOutlined />}>
            Trash
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          {collapsed ? (
            <MenuUnfoldOutlined style={{ fontSize: "1.2rem" }} onClick={toggle} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: "1.2rem" }} onClick={toggle} />
          )}
          <Signin />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            height: "calc(100vh - 64px)",
            width: collapsed ? "calc(100vw - 80px)" : "calc(100vw - 200px)",
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SiderDemo;
