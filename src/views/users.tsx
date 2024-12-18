"use client"

import { useEffect, useState } from "react";
import UserList from "@/components/Userlist";
import Loading from "@/components/Loading";
import Error from "next/error";
import { baseUrl } from "@/utils/constrant";

export default function UsersView() {
    const [userList, setUserList] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(baseUrl + "/api/users");

                if (!response.ok) {
                    // throw new Error("Failed to fetch users" || any);
                }

                const result = await response.json();

                if (!result.success || !Array.isArray(result.data)) {
                    throw new Error(result.message || "Invalid API response");
                }

                setUserList(result.data);
                setLoading(false);
            } catch (err: unknown) {
                console.log(err);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Users</h1>
            {userList.length > 0 ? (
                <UserList userList={userList} />
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
}
