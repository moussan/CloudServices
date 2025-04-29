import React, { useMemo, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import services from '../data/services.json';

interface CloudService {
  id: string;
  provider: 'AWS' | 'Azure' | 'GCP';
  name: string;
  type: string;
  description: string;
  comparable?: string;
}

const ServiceExplorer: React.FC = () => {
  const [providerFilter, setProviderFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const columns = useMemo<ColumnDef<CloudService>[]>(
    () => [
      {
        header: 'Provider',
        accessorKey: 'provider',
      },
      {
        header: 'Service',
        accessorKey: 'name',
      },
      {
        header: 'Type',
        accessorKey: 'type',
      },
      {
        header: 'Description',
        accessorKey: 'description',
      },
    ],
    [],
  );

  const table = useReactTable({
    data: services as CloudService[],
    columns,
    state: {
      columnFilters: [
        { id: 'provider', value: providerFilter },
        { id: 'type', value: typeFilter },
      ],
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: () => {},
  });

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <select
          value={providerFilter}
          onChange={(e) => setProviderFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Providers</option>
          <option value="AWS">AWS</option>
          <option value="Azure">Azure</option>
          <option value="GCP">GCP</option>
        </select>
        <input
          type="text"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          placeholder="Filter by type..."
          className="border p-2 rounded flex-1"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border px-2 py-1 text-left bg-gray-100 dark:bg-gray-800">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border px-2 py-1">
                    {flexRender(cell.column.columnDef.cell ?? cell.column.columnDef.accessorKey, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceExplorer; 