import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const searchConditions = [
    { id: 1, name: '条件1', keywords: 'キーワード1, キーワード2', lastUpdated: '2024-03-15' },
    { id: 2, name: '条件2', keywords: 'キーワード3, キーワード4', lastUpdated: '2024-03-14' },
  ];

  return (
    <>
      <Header />
      <DashboardLayout>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold">検索条件一覧</h1>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full md:w-auto">新規作成</Button>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Input placeholder="検索条件名" className="w-full md:max-w-sm" />
            <Button variant="outline" className="flex items-center w-full md:w-auto">
              <SearchIcon className="mr-2 h-4 w-4" />
              検索
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>検索条件名</TableHead>
                  <TableHead>キーワード</TableHead>
                  <TableHead>最終更新日</TableHead>
                  <TableHead>操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searchConditions.map((condition) => (
                  <TableRow key={condition.id}>
                    <TableCell>{condition.name}</TableCell>
                    <TableCell>{condition.keywords}</TableCell>
                    <TableCell>{condition.lastUpdated}</TableCell>
                    <TableCell className="space-x-2">
                      <Button variant="outline" size="sm" className="w-full md:w-auto mb-2 md:mb-0">編集</Button>
                      <Button variant="outline" size="sm" className="w-full md:w-auto">削除</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Search;