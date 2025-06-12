import { useReactTable, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";
import { useState } from "react";



const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => <img src='https://static.tvmaze.com/uploads/images/medium_landscape/1/4395.jpg'alt={row.original.name} width="100" />,
  },
  { accessorKey: "id", header: "ID", sortingFn: "alphanumeric" },
  { accessorKey: "name", header: "Name", sortingFn: "alphanumeric" }
];

const MyTable = ({data}) => {
  const [sorting, setSorting] = useState([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <table className="table table-bordered">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} onClick={() => header.column.toggleSorting()}>
                {header.column.columnDef.header} {header.column.getIsSorted() ? (header.column.getIsSorted() === "desc" ? "🔽" : "🔼") : ""}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{cell.getValue()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;