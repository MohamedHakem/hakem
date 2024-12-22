'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer-original';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

export default function SearchDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('search', searchTerm);
    router.push(`?${current.toString()}`);
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <Search className="h-4 w-4" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle></DrawerTitle>
        <div className="p-4">
          <div className="flex items-center mb-4">
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button variant="ghost" onClick={() => setIsOpen(false)} className="ml-2">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={handleSearch} className="w-full">
            Search
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
