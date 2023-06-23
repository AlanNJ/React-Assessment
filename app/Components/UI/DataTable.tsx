"use client";
import { TableData } from "@/libs/types";
import React from "react";

import { FiEdit2, FiTrash } from "react-icons/fi";

export interface TableProps {
	data: TableData[];
}
const DataTable: React.FC<TableProps> = ({ data }) => {
	return (
		<div>
			<div className=" mx-auto">
				{data.length == 0 && (
					<div className="px-5 py-3 bg-blue-400 w-1/3 rounded-lg my-5 text-white">
						No items to show
					</div>
				)}
			</div>
			<table className="flex-1 w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Name
						</th>
						<th className="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Age
						</th>
						<th className="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Occupation
						</th>
						<th className="px-2 lg:px-6 py-3"></th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200 w-full">
					{data.map((item) => (
						<tr key={item.name}>
							<td className="px-2 lg:px-6 py-4 whitespace-nowrap">
								{item.name}
							</td>
							<td className="px-2 lg:px-6 py-4 whitespace-nowrap">
								{item.age}
							</td>
							<td className="px-2 lg:px-6 py-4 whitespace-nowrap">
								{item.occupation}
							</td>
							<td className="px-2 lg:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
								<button
									className="text-blue-500 hover:text-blue-700 mr-2 cursor-not-allowed"
									// onClick={() => handleEdit(item.id)}
								>
									<FiEdit2 />
								</button>
								<button
									className="text-red-500 hover:text-red-700 cursor-not-allowed"
									// onClick={() => handleDelete(item.id)}
								>
									<FiTrash />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
