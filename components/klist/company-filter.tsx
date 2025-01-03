import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import useMediaQuery from '@/hooks/use-media-query';
import { ChevronsUpDown, FilterIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

// Update with your actual topics
// const klistQuestionsTopics = ['Arrays', 'Strings', 'DP', 'Trees'];

interface CompaniesCommandContentProps {
  selectedCompanies: string[];
  isAllSelected: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleCompanyToggle: (company: string) => void;
  companies: string[];
}

export default function CompaniesFilter({ companies }: { companies: string[] }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const searchParams = useSearchParams();
  const router = useRouter();

  const companiesParam = searchParams.get('companies');
  const selectedCompanies = useMemo(() => {
    if (companiesParam === 'none') return [];
    if (!companiesParam) return [...companies];
    return companiesParam.split(',').filter(Boolean);
  }, [companiesParam, companies]);

  const isAllSelected = selectedCompanies.length === companies.length;

  const updateSearchParams = (key: string, value: string | null) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('list', 'custom');
    if (value === null) {
      current.delete(key);
    } else {
      current.set(key, value);
    }
    router.push(`?${current.toString()}`);
  };

  const handleCompanyToggle = (company: string) => {
    const newCompanies = selectedCompanies.includes(company)
      ? selectedCompanies.filter((t) => t !== company)
      : [...selectedCompanies, company];

    if (newCompanies.length === 0) {
      updateSearchParams('companies', 'none');
    } else if (newCompanies.length < companies.length) {
      updateSearchParams('companies', newCompanies.join(','));
    } else {
      updateSearchParams('companies', null);
    }
  };

  const handleSelectAll = () => {
    updateSearchParams('companies', null);
    // setOpen(false);
  };

  const handleDeselectAll = () => {
    updateSearchParams('companies', 'none');
    // setOpen(false);
  };

  const triggerButton = (
    <Button variant="outline" className="flex items-center gap-1 px-3">
      <FilterIcon className="lucide lucide-list-filter size-4 shrink-0" />
      Companies
      {/* {selectedCompanies.length > 0 && ( */}
      <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs">{selectedCompanies.length}</span>
      {/* )} */}
      <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
    </Button>
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>{triggerButton}</PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <CompaniesCommandContent
            selectedCompanies={selectedCompanies}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleCompanyToggle={handleCompanyToggle}
            companies={companies}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>Choose Companies</DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 border-t">
          <CompaniesCommandContent
            selectedCompanies={selectedCompanies}
            isAllSelected={isAllSelected}
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleCompanyToggle={handleCompanyToggle}
            companies={companies}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CompaniesCommandContent({
  selectedCompanies,
  isAllSelected,
  handleSelectAll,
  handleDeselectAll,
  handleCompanyToggle,
  companies
}: CompaniesCommandContentProps) {
  return (
    <Command>
      <CommandInput placeholder="Search companies..." />
      <div className="border-b p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              id="select-all"
              checked={isAllSelected}
              onCheckedChange={(checked) => {
                if (checked) handleSelectAll();
                else handleDeselectAll();
              }}
            />
            <Label htmlFor="select-all">Select All</Label>
          </div>
          <span className="text-xs text-muted-foreground">
            {selectedCompanies.length}/{companies.length}
          </span>
        </div>
      </div>
      <CommandList>
        <CommandEmpty>No company found.</CommandEmpty>
        <CommandGroup>
          {companies.map((company, index) => (
            <CommandItem
              key={index}
              onSelect={() => handleCompanyToggle(company)}
              className="cursor-pointer py-2 border-b"
            >
              <Checkbox checked={selectedCompanies.includes(company)} className="mr-2" />
              {company}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
