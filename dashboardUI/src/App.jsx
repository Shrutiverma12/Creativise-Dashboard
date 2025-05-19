import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import AppSidebar from './components/AppSidebar';
import { SidebarProvider } from './components/ui/sidebar';
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className='flex h-screen '>
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white border-r shadow-lg transition-transform duration-200 ease-in-out
      md:relative md:translate-x-0
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    `}
        >
          <AppSidebar />
        </div>

        {/* Overlay when sidebar is open (mobile only) */}
        {sidebarOpen && (
          <div
            className='fixed inset-0 bg-black opacity-25 z-20 md:hidden'
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div
          className={`flex-1 flex flex-col transition-all duration-200 ease-in-out
      ${sidebarOpen ? 'md:ml-64' : ''}
    `}
        >
          {/* Top Navbar for mobile */}
          <div className='p-4 border-b shadow-md md:hidden flex justify-between items-center bg-white'>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className='text-gray-600'
            >
              ☰
            </button>
            <h1 className='text-lg font-bold'>Dashboard</h1>
          </div>

          {/* Content */}
          {/* <main className='w-full overflow-x-auto overflow-y-auto bg-gray-50 p-4'> */}
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
          {/* </main> */}
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
