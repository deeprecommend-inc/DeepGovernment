import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Settings = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">詳細設定</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p>ここにアカウントや通知の設定オプションが表示されます。</p>
      </div>
    </DashboardLayout>
  );
};

export default Settings;