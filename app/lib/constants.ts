// Menu configuration
export const MENU_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'meter-list', label: 'Meter List' },
  { key: 'data-push', label: 'Data Push' },
  { key: 'data-pull', label: 'Data Pull' },
  { key: 'commands', label: 'Commands' },
  { key: 'reports', label: 'Reports' },
  { key: 'admin', label: 'Admin' },
  { key: 'api', label: 'API' },
];

// Chart data
export const LIVE_INTERVAL_DATA = [
  { time: '12:18:00', success: 90, failure: 10 },
  { time: '12:17:00', success: 80, failure: 20 },
  { time: '12:16:00', success: 85, failure: 15 },
  { time: '12:15:00', success: 75, failure: 25 },
  { time: '12:14:00', success: 80, failure: 20 },
  { time: '12:13:00', success: 87, failure: 13 },
  { time: '12:12:00', success: 90, failure: 10 },
];

export const MONTHLY_SUCCESS_DATA = [
  { date: 'Mar 27', success: 90, failure: 10 },
  { date: 'Mar 28', success: 80, failure: 20 },
  { date: 'Mar 29', success: 85, failure: 15 },
  { date: 'Mar 30', success: 60, failure: 40 },
  { date: 'Mar 31', success: 75, failure: 25 },
  { date: 'Apr 1', success: 95, failure: 5 },
  { date: 'Apr 2', success: 93, failure: 7 },
];

// Export data
export const DATA_PUSH_EXPORT_ROWS = [
  ['Metric', 'Value'],
  ['Total meters', '25,35,567'],
  ['Interval Read Success Rate', '96.06%'],
  ['Failed Reads', '3.94%'],
  ['Time Duration', '1.5 min'],
  ['Predicted Daily Meters', '754'],
];

// Responsive breakpoints
export const MOBILE_BREAKPOINT = 768; 