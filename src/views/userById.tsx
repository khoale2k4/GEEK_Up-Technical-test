'use client'

import UserProfile from "@/components/UserWithId";
import { redirect } from "next/navigation";

interface UserIdViewProps {
    userId: string;
}

const UserIdView: React.FC<UserIdViewProps> = ({ userId }) => {
    return (
        <div className="container mx-auto">
            <div onClick={() => { redirect("/users"); }} className="flex items-center cursor-pointer space-x-2 mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke="currentColor" strokeWidth="1" fill="none" d="M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13zM11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6" />
                </svg>
                <span className="text-gray-500 hover:bg-gray-300 rounded px-2 py-1 transition duration-200">Users</span>
                <span className="text-gray-500">/</span>
                <span className="font-semibold text-black">Show</span>
            </div>

            <button
                onClick={() => { redirect("/users"); }}
                className="text-black font-bold hover:underline"
            >
                ← Show User
            </button>

            <UserProfile id={userId} />
        </div>
    );
}

export default UserIdView;