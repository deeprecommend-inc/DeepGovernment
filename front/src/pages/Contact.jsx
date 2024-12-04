import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Contact = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p>ここにお問い合わせフォームが表示されます。</p>
      </div>
    </DashboardLayout>
  );
};

export default Contact;