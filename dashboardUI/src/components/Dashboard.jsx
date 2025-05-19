import { dummyData } from '@/dummyData';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { useState } from 'react';
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('generated');

  const tabs = [
    { key: 'generated', label: 'Generated Articles' },
    { key: 'published', label: 'Published Articles' },
    { key: 'scheduled', label: 'Scheduled Articles' },
    { key: 'archived', label: 'Archived Articles' },
  ];

  return (
    <div className='max-w-[1220px] mx-auto'>
      <div className='flex flex-wrap flex-col items-center justify-center '>
        <h1 className='text-2xl font-bold text-center mb-4 md:text-left'>
          Articles
        </h1>
        <div className='flex justify-center flex-wrap gap-2 mb-4'>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className='flex justify-center mb-4'>
        <input
          type='text'
          placeholder='Search for Title & Keywords...'
          className='w-full max-w-md px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div className='overflow-x-auto rounded-md border ml-4'>
        <Table className='min-w-[1200px] overflow-x-auto'>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[40px]'>
                <Checkbox />
              </TableHead>
              <TableHead className='text-sm'>Article Title</TableHead>
              <TableHead className='text-sm'>Keyword [Traffic]</TableHead>
              <TableHead className='text-sm  '>Words</TableHead>
              <TableHead className='text-sm '>Created On</TableHead>
              <TableHead className='text-sm  px-10'>Action</TableHead>
              <TableHead className='text-sm hidden md:table-cell'>
                Publish
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyData.map((article, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className='text-xs whitespace-nowrap'>
                  {article.title}
                </TableCell>
                <TableCell className='text-xs whitespace-nowrap'>
                  {article.keyword}
                </TableCell>
                <TableCell className='text-xs whitespace-nowrap '>
                  {article.words}
                </TableCell>
                <TableCell className='text-xs  '>{article.created}</TableCell>
                <TableCell>
                  <Button variant='outline' size='sm' className=' px-10'>
                    View
                  </Button>
                </TableCell>
                <TableCell>
                  <Globe className='h-5 w-5 text-[#1f7fe5] hidden md:table-cell' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-between border-t pt-4  '>
        <div>
          <span className='text-sm text-gray-700'>
            Total <strong>9</strong> Article Titles |
          </span>
          <select className='ml-2 border px-2 py-1 text-sm rounded'>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span className='ml-1 text-sm'>entries per page</span>
        </div>

        {/* Page Navigation */}
        <div className='text-sm'>
          <span className='border px-2 py-1 rounded mr-2'>1</span> / 1
        </div>
      </div>
    </div>
  );
}
