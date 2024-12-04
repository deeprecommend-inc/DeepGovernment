import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Help = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">ヘルプ</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p>ここにヘルプドキュメントやFAQが表示されます。</p>
      </div>
    </DashboardLayout>
  );
};

export default Help;