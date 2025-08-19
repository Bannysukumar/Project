// Export utility functions
export const downloadCSV = (rows: (string | number)[][], fileName: string) => {
  const csv = rows
    .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
    .join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', fileName.endsWith('.csv') ? fileName : `${fileName}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportDataPushMetrics = (format: 'csv' | 'xlsx') => {
  const rows = [
    ['Metric', 'Value'],
    ['Total meters', '25,35,567'],
    ['Interval Read Success Rate', '96.06%'],
    ['Failed Reads', '3.94%'],
    ['Time Duration', '1.5 min'],
    ['Predicted Daily Meters', '754'],
  ];

  downloadCSV(rows, 'data-push.csv');
}; 