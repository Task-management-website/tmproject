import React from "react";
import { Link } from "react-router-dom"
import {
    Card,
    CardContent,
    CardHeader,
} from "@mui/material";
import { FiLogOut } from 'react-icons/fi';
import { Search, Bell, UserCircle } from "lucide-react";
import image from './image (2).png';

export default function Home() {
    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gradient-to-r from-purple-600 to-blue-500 p-6 flex flex-col justify-between" style={{ boxShadow: '4px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <div>
                    <div className="mb-8 text-3xl font-extrabold text-white">Pro Manage</div>
                    <nav className="space-y-4">
                        <button className="block text-left w-full px-5 py-3 text-white bg-purple-700 rounded-lg font-medium transition-all duration-300 hover:bg-purple-600 hover:shadow-md">
                            Dashboard
                        </button>
                        <button className="block text-left w-full px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition-all duration-300">
                            Task Management Page
                        </button>
                        <button className="block text-left w-full px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition-all duration-300">
                            Articles
                        </button>
                        <button className="block text-left w-full px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition-all duration-300">
                            About Us
                        </button>
                        <button className="block text-left w-full px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition-all duration-300">
                            Contact Us
                        </button>
                    </nav>
                </div>

                <button className="mx-auto text-red-600 bg-transparent px-2 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-500 ease-in-out focus:outline-none  flex items-center justify-center space-x-2">
                    <FiLogOut className="w-5 h-5" />
                    <Link to="/"><span className="px-2">Log Out</span></Link>
                </button>

            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-white">
                {/* import { Link } from "react-router-dom"; // استيراد Link من react-router-dom */}

                <header className="flex items-center justify-between mb-8">
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Search"
                        />
                        <Search className="absolute right-2 top-2 text-gray-500" />
                    </div>
                    <div className="flex space-x-4 items-center">
                        <Bell className="w-6 h-6 text-gray-500" />

                        {/* أيقونة المستخدم كرابط للبروفايل */}
                        <Link to="/profile">
                            <UserCircle className="w-8 h-8 text-gray-500 cursor-pointer hover:text-blue-600 transition-all duration-300" />
                        </Link>
                    </div>
                </header>

                {/* Welcome Section */}
                <section className="mb-8">
                    <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-white p-6 rounded-lg shadow-lg">
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-white">Welcome Message</h1>
                            <p className="text-gray-200">Check your daily tasks and schedules</p>
                            <button className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
                                Today's Schedule
                            </button>
                        </div>
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={image}
                                alt="Illustration"
                                className="w-48 h-40 object-cover transform scale-110"
                            />
                        </div>
                    </div>
                </section>


                {/* Tasks Section */}
                <section className="grid grid-cols-2 gap-6 mb-8">
                    {[1, 2, 3, 4].map((task) => {
                        // مصفوفة تحتوي على الكلمات التي تريد أن تظهر
                        const statuses = ["Completed", "Pending", "Urgent", "Progress"];
                        // اختيار كلمة عشوائية من المصفوفة
                        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

                        // تحديد اللون بناءً على الحالة
                        let statusColor = "";
                        switch (randomStatus) {
                            case "Completed":
                                statusColor = "bg-purple-500"; // اللون البنفسجي
                                break;
                            case "Pending":
                                statusColor = "bg-blue-500"; // اللون الأزرق
                                break;
                            case "Urgent":
                                statusColor = "bg-red-500"; // اللون الأحمر
                                break;
                            case "Progress":
                                statusColor = "bg-yellow-500"; // اللون البرتقالي
                                break;
                            default:
                                statusColor = "bg-gray-500"; // اللون الافتراضي (إن كان يوجد حالة غير متوقعة)
                        }

                        return (
                            <Card
                                key={task}
                                className="p-4 transform transition-transform duration-800 ease-in-out hover:scale-1 hover:shadow-lg hover:shadow-lg hover:shadow-indigo-500/50 cursor-pointer"
                            >
                                <CardHeader title={`Task ${task}`} />
                                <CardContent>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm">{randomStatus}</span>
                                        <span className="text-sm">{task * 25}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${statusColor}`} // تطبيق اللون بناءً على الحالة
                                            style={{ width: `${task * 25}%` }}
                                        ></div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </section>


                {/* Analytics Section */}
                {/* <section>
          <Card className="p-6">
            <CardHeader title="Tasks Completed" />
            <CardContent>
              <img
                src="https://via.placeholder.com/300x100"
                alt="Graph"
                className="w-full"
              />
            </CardContent>
          </Card>
        </section> */}
            </main>

            {/* Right Sidebar */}
            <aside className="w-1/4 bg-gray-50 p-6">
                {[
                    { name: "Recent Tasks", color: "bg-green-100", textColor: "text-green-700" },
                    { name: "High-priority Tasks", color: "bg-red-100", textColor: "text-red-700" },
                    { name: "Completed Tasks", color: "bg-blue-100", textColor: "text-blue-700" },
                    { name: "Uncompleted Tasks", color: "bg-yellow-100", textColor: "text-yellow-700" },
                ].map((category, index) => (
                    <Card key={index} className={`mb-4 ${category.color} p-4 rounded-lg`}>
                        <CardContent className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className={`font-medium ${category.textColor}`}>{category.name}</span>
                                <span className="text-gray-500 text-sm">Apr 2, 2023</span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">...</button>
                        </CardContent>
                    </Card>
                ))}
            </aside>


        </div>
    );
}
