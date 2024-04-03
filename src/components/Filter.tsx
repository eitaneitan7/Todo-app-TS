interface FilterProps {
  currentFilter: 'all' | 'active' | 'completed';
  onFilterChange: (newFilter: 'all' | 'active' | 'completed') => void;
}

export function Filter({ currentFilter, onFilterChange }: FilterProps) {
  return (
    <div className="flex justify-center gap-4 my-4">
      <button className={`p-2 ${currentFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => onFilterChange('all')}>All</button>
      <button className={`p-2 ${currentFilter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => onFilterChange('active')}>Active</button>
      <button className={`p-2 ${currentFilter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => onFilterChange('completed')}>Completed</button>
    </div>
  );
}