import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const ChangePassword = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">パスワードの変更</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p>ここにパスワード変更フォームが表示されます。</p>
      </div>
    </DashboardLayout>
  );
};

export default ChangePassword;