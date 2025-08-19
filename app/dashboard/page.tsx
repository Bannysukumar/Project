'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  CloudDownloadOutlined,
  CloudUploadOutlined,
  BarChartOutlined,
  FileTextOutlined,
  TeamOutlined,
  ApiOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Header } from '../components/layout';
import { PageDataPush, PageDataPull, CopilotWidget } from '../components/features';
import { useResponsive } from '../hooks/useResponsive';
import { exportDataPushMetrics } from '../utils/export';
import { MENU_ITEMS } from '../lib/constants';
import '../styles/globals.css';

const { Sider, Content } = Layout;

const getMenuItems = () => {
  const iconMap = {
    home: <HomeOutlined />,
    'meter-list': <AppstoreOutlined />,
    'data-push': <CloudDownloadOutlined />,
    'data-pull': <CloudUploadOutlined />,
    commands: <BarChartOutlined />,
    reports: <FileTextOutlined />,
    admin: <TeamOutlined />,
    api: <ApiOutlined />,
  };

  return MENU_ITEMS.map((item) => ({
    key: item.key,
    icon: iconMap[item.key as keyof typeof iconMap],
    label: (
      <div className="menu-item-content">
        <span>{item.label}</span>
        {item.key === 'commands' && <div className="notification-badge">1</div>}
      </div>
    ),
  }));
};

export default function Dashboard() {
  const { isMobile, sidebarCollapsed, mobileOpen, toggleSidebar, closeMobileMenu } = useResponsive();
  const [copilotOpen, setCopilotOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('data-push');

  const handleOpenCopilot = () => {
    setCopilotOpen(true);
  };

  const handleCloseCopilot = () => {
    setCopilotOpen(false);
  };

  const handleMenuClick = (e: any) => {
    setCurrentPage(e.key);
  };

  return (
    <Layout className="dashboard-layout">
      {/* Mobile overlay removed per requirement */}

      <Sider
        width={200}
        className={`sidebar ${sidebarCollapsed ? 'custom-collapsed' : 'custom-expanded'}`}
        collapsed={isMobile ? true : sidebarCollapsed}
        collapsedWidth={60}
        trigger={null}
        collapsible={false}
      >
        <div className="logo-section">
          {!sidebarCollapsed && <div className="logo">HES</div>}
          <MenuOutlined className="hamburger-menu" onClick={toggleSidebar} />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['data-push']}
          selectedKeys={[currentPage]}
          items={getMenuItems()}
          inlineCollapsed={sidebarCollapsed}
          onClick={handleMenuClick}
        />
      </Sider>

      <Header
        sidebarCollapsed={!isMobile && sidebarCollapsed}
        onOpenCopilot={handleOpenCopilot}
      />

      <Layout>
        <Content className={`main-content ${!isMobile && sidebarCollapsed ? 'collapsed-sidebar' : ''}`}>
          {currentPage === 'data-push' && (
            <PageDataPush onExport={exportDataPushMetrics} />
          )}

          {currentPage === 'data-pull' && (
            <PageDataPull />
          )}
        </Content>
      </Layout>

      <CopilotWidget
        isOpen={copilotOpen}
        onClose={handleCloseCopilot}
      />
    </Layout>
  );
} 