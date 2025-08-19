// Common types used across the application
export interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
}

export interface HeaderProps {
  sidebarCollapsed: boolean;
  onOpenCopilot: () => void;
}

export interface CopilotWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface PageDataPushProps {
  onExport: (format: 'csv' | 'xlsx') => void;
}

export interface QualityMetricsProps {
  title: string;
  value: string;
  change: string;
  subValue: string;
  isPositive: boolean;
}

export interface AdditionalWidgetsProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface FailedCapturesWidgetProps {
  // Add props if needed
}

// Chart data types
export interface ChartDataPoint {
  time?: string;
  date?: string;
  success: number;
  failure: number;
}

export interface PerformanceData {
  oem: string;
  success: number;
  failure: number;
} 