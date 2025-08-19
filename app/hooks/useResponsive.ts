import { useState, useEffect } from 'react';
import { MOBILE_BREAKPOINT } from '../lib/constants';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      
      if (mobile) {
        setSidebarCollapsed(true);
        setMobileOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  return {
    isMobile,
    sidebarCollapsed,
    mobileOpen,
    toggleSidebar,
    closeMobileMenu,
  };
}; 