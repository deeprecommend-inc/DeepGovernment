import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Bids = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">入札案件管理</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p>ここに入札案件の一覧や管理ツールが表示されます。</p>
      </div>
    </DashboardLayout>
  );
};

export default Bids;