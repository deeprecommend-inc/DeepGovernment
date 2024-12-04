import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Clock, Star, CheckSquare } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Header />
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold">マイページ</h1>
            <p className="text-sm text-gray-500">2024.09.04　機能追加のお知らせ(東京都高速鉄道株式会社 他50機関)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">入札案件管理</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center"><CheckSquare className="mr-2" size={18} />進行中の案件</span>
                    <span className="text-2xl font-bold text-blue-600">0件</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center"><Star className="mr-2" size={18} />気になる案件</span>
                    <span className="text-2xl font-bold text-blue-600">0件</span>
                  </div>
                  <div className="space-y-2">
                    <span className="flex items-center"><Clock className="mr-2" size={18} />タスク</span>
                    <div className="flex justify-between text-sm">
                      <span>（〆切1日前）</span>
                      <span className="font-semibold">0件</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>（〆切3日前）</span>
                      <span className="font-semibold">0件</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>（〆切7日前）</span>
                      <span className="font-semibold">0件</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                  <span>入札案件の登録中案件の状況</span>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download className="mr-2" size={16} />
                    ダウンロード
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center"><Clock className="mr-2" size={18} />新着24h案件</span>
                    <span className="text-2xl font-bold text-blue-600">151件</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>受付中案件</span>
                    <span className="text-2xl font-bold text-blue-600">2,813件</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">新着案件メール</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                  <span className="text-sm text-blue-600 hover:underline cursor-pointer">2024-09-07　【NJSS】新着案件情報 2024-09-07</span>
                  <a href="#" className="text-sm text-blue-600 hover:underline">すべてのメールを見る</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Index;