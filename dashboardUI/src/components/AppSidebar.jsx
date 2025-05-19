import { useState } from 'react';
import {
  ChevronDown,
  LayoutList,
  Notebook,
  Link,
  Share2,
  Puzzle,
  CreditCard,
  HeartHandshake,
  HelpCircle,
  RefreshCcw,
  MessageCircle,
  User,
  Target,
} from 'lucide-react';

const AppSidebar = () => {
  const [isArticlesOpen, setIsArticlesOpen] = useState(true);

  return (
    <aside className='w-64 min-h-screen bg-white border-r p-4 h-full '>
      <div className='text-2xl font-bold px-2 mb-4 text-center'>abun</div>

      <select className='border-2 p-2 rounded-2xl text-sm ml-12'>
        <option> amazon.com</option>
        <option>ebay.com</option>
        <option>flipkart.com</option>
      </select>

      {/* Menu Items */}
      <nav className='mt-4 space-y-2 text-sm text-gray-700'>
        {/* Articles Dropdown */}
        <div>
          <button
            onClick={() => setIsArticlesOpen(!isArticlesOpen)}
            className='flex items-center w-full justify-between px-2 py-2 hover:bg-gray-100 rounded-md'
          >
            <span className='flex items-center gap-2'>
              <LayoutList color='#3a50f8' className='h-4 w-4' />
              Articles
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isArticlesOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isArticlesOpen && (
            <ul className='ml-6 mt-1 space-y-1 text-xs'>
              <li className='text-gray-700 hover:text-black cursor-pointer'>
                Create Article
              </li>
              <li className='text-blue-600 font-medium cursor-pointer'>
                Generated Articles
              </li>
              <li>Keyword Projects</li>
              <li>AI Keyword to Article</li>
              <li>Steal Competitor Keyword</li>
              <li>Import Keyword from GSC</li>
              <li>Manual Keyword to Article</li>
              <li>Bulk Keyword to Article</li>
              <li>Longtail Keyword to Article</li>
              <li>Article Settings</li>
            </ul>
          )}
        </div>

        {/* Other Menu Items */}
        <SidebarItem
          icon={<Notebook color='#3a50f8' className='h-4 w-4' />}
          label='Auto Blog'
        />
        <SidebarItem
          icon={<Link color='#3a50f8' className='h-4 w-4' />}
          label='Internal Links'
        />
        <SidebarItem
          icon={<Share2 color='#3a50f8' className='h-4 w-4' />}
          label='Free Backlinks'
        />
        <SidebarItem
          icon={<Puzzle color='#3a50f8' className='h-4 w-4' />}
          label='Integrations'
        />
        <SidebarItem
          icon={<CreditCard color='#3a50f8' className='h-4 w-4' />}
          label='Subscription'
        />
        <SidebarItem
          icon={<HeartHandshake color='#3a50f8' className='h-4 w-4' />}
          label='Affiliate Program'
        />
        <SidebarItem
          icon={<HelpCircle color='#3a50f8' className='h-4 w-4' />}
          label='Help Center'
        />
        <SidebarItem
          icon={<RefreshCcw color='#3a50f8' className='h-4 w-4' />}
          label='Updates'
        />
        <SidebarItem
          icon={<MessageCircle color='#3a50f8' className='h-4 w-4' />}
          label='Live Chat Support'
        />
        <SidebarItem icon={<User className='h-4 w-4' />} label='Profile' />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className='flex items-center gap-2 px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer'>
    {icon}
    <span>{label}</span>
  </div>
);

export default AppSidebar;
