'use client';

import { Link, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

interface Props {
    userList: UserType[];
}

const userColumns = [
    { key: "id", label: "ID", align: "start" },
    { key: "avatar", label: "Avatar", align: "start" },
    { key: "name", label: "Name", align: "start" },
    { key: "email", label: "Email", align: "start" },
    { key: "phone", label: "Phone", align: "center" },
    { key: "website", label: "Website", align: "center" },
    { key: "action", label: "Action", align: "end" },
] as Column[];

const UserList: React.FC<Props> = ({ userList }) => {
    const renderFileCell = (user: UserType, columnKey: UserColumnKey) => {
        switch (columnKey) {
            case "id":
                return user.id;
            case "name":
                return (
                    <div className="font-semibold text-gray-800">
                        {user.name}
                    </div>
                );
            case "avatar":
                return (
                    <div className="flex justify-center items-center">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-8 h-8 rounded-full object-cover"
                        />
                    </div>
                );
            case "email":
                return (
                    <a href={`mailto:${user.email}`} className="text-blue-500 hover:underline">
                        {user.email}
                    </a>
                );
            case "phone":
                return user.phone;
            case "website":
                return (
                    <a href={user.website} target="_blank" className="text-blue-500">
                        {user.website}
                    </a>
                );
            case "action":
                return <Link
                    href={"/users/" + user.id}
                    className="text-blue-600 hover:underline font-semibold"
                >
                    Open
                </Link>;
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded">
            <Table aria-label="User List">
                <TableHeader columns={userColumns}>
                    {(column) => (
                        <TableColumn key={column.key} align={column.align} className="border-none bg-gray-50">
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>

                <TableBody items={userList}>
                    {(user) => (
                        <TableRow key={user.id} className="border-b hover:bg-gray-50 transition duration-200">
                            {(columnKey) => (
                                <TableCell className="text-center">{renderFileCell(user, columnKey as UserColumnKey)}</TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default UserList;