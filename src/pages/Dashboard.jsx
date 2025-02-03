// import React from "react";
// import { Link } from "react-router-dom";
// import { Card, CardContent, CardHeader } from "@mui/material";
// import { FiLogOut } from "react-icons/fi";
// import { Search, Bell, UserCircle } from "lucide-react";
// import image from "./image (2).png";

// export default function Dashboard() {
//      // جلب بيانات المستخدم من localStorage
//      const userData = JSON.parse(localStorage.getItem("userData"));
//      const username = userData?.username || "User"; // إذا لم يكن موجودًا، سيتم عرض "User"

//     return (
//         <div className="flex h-screen w-full">
//             {/* Sidebar */}
//             <aside className="w-1/4 bg-gradient-to-r from-purple-600 to-blue-500 p-6 flex flex-col justify-between shadow-lg">
//                 <div>
//                     <h1 className="mb-8 text-3xl font-extrabold text-white">TickDone</h1>
//                     <nav className="space-y-4">
//                         <Link to="/dashboard" className="block px-5 py-3 text-white bg-purple-700 rounded-lg font-medium transition hover:bg-purple-600">Dashboard</Link>
//                         <Link to="/tasks/create" className="block px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition">Task Management</Link>
//                         <Link to="/Article" className="block px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition">Articles</Link>
//                         <Link to="/About" className="block px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition">About Us</Link>
//                         <Link to="/Contact" className="block px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition">Contact Us</Link>
//                     </nav>
//                 </div>
//                 <Link to="/" className="mx-auto flex items-center text-red-600 px-2 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition">
//                     <FiLogOut className="w-5 h-5" />
//                     <span className="px-2">Log Out</span>
//                 </Link>
//             </aside>

//             {/* Main Content */}
//             <main className="flex-1 p-6 bg-white">
//                 <header className="flex items-center justify-between mb-8">
//                     <div className="relative w-1/2">
//                         <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400" placeholder="Search" />
//                         <Search className="absolute right-2 top-2 text-gray-500" />
//                     </div>
//                     <div className="flex space-x-4 items-center">
//                         <Bell className="w-6 h-6 text-gray-500" />
//                         <Link to="/profile"><UserCircle className="w-8 h-8 text-gray-500 cursor-pointer hover:text-blue-600 transition" /></Link>
//                     </div>
//                 </header>

//                 <section className="mb-8 bg-gradient-to-r from-blue-500 to-white p-6 rounded-lg shadow-lg flex items-center justify-between">
//                     <div>
//                     <h1 className="text-xl font-bold text-white">Welcome, {username}!</h1>
//                     <p className="text-gray-200">Keep track of your progress and achieve your goals!</p>
//                         <button className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">Today's Schedule</button>
//                     </div>
//                     <img src={image} alt="Illustration" className="w-48 h-40 object-cover rounded-lg" />
//                 </section>

//                 <section className="grid grid-cols-2 gap-6 mb-8">
//                     {[1, 2, 3, 4].map((task) => {
//                         const statuses = ["Completed", "Pending", "Urgent", "Progress"];
//                         const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
//                         const statusColors = {
//                             Completed: "bg-purple-500",
//                             Pending: "bg-blue-500",
//                             Urgent: "bg-red-500",
//                             Progress: "bg-yellow-500"
//                         };

//                         return (
//                             <Card key={task} className="p-4 transition hover:scale-105 hover:shadow-lg cursor-pointer">
//                                 <CardHeader title={`Task ${task}`} />
//                                 <CardContent>
//                                     <div className="flex justify-between items-center mb-2">
//                                         <span className="text-sm">{randomStatus}</span>
//                                         <span className="text-sm">{task * 25}%</span>
//                                     </div>
//                                     <div className="w-full bg-gray-200 rounded-full h-2">
//                                         <div className={`h-2 rounded-full ${statusColors[randomStatus]}`} style={{ width: `${task * 25}%` }}></div>
//                                     </div>
//                                 </CardContent>
//                             </Card>
//                         );
//                     })}
//                 </section>
//             </main>

//             {/* Right Sidebar */}
//             <aside className="w-1/4 bg-gray-50 p-6">
//                 {[
//                     { name: "Recent Tasks", color: "bg-green-100", textColor: "text-green-700" },
//                     { name: "High-priority Tasks", color: "bg-red-100", textColor: "text-red-700" },
//                     { name: "Completed Tasks", color: "bg-blue-100", textColor: "text-blue-700" },
//                     { name: "Uncompleted Tasks", color: "bg-yellow-100", textColor: "text-yellow-700" },
//                 ].map((category, index) => (
//                     <Card key={index} className={`mb-4 ${category.color} p-4 rounded-lg`}>
//                         <CardContent className="flex justify-between items-center">
//                             <div>
//                                 <span className={`font-medium ${category.textColor}`}>{category.name}</span>
//                                 <span className="text-gray-500 text-sm">Apr 2, 2023</span>
//                             </div>
//                             <button className="text-gray-400 hover:text-gray-600">...</button>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </aside>
//         </div>
//     );
// }


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@mui/material";
import { FiLogOut } from "react-icons/fi";
import { Search, Bell, UserCircle } from "lucide-react";
import { database, ref, get } from "../firebase/firebaseConfig"; // تأكد من استيراد الإعدادات بشكل صحيح
import image from "./image (2).png";

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [userData, setUserData] = useState(null);
    const [username, setUsername] = useState("User");
    const [searchQuery, setSearchQuery] = useState("");  // حالة البحث

    useEffect(() => {
        const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
        if (userDataFromLocalStorage) {
            setUserData(userDataFromLocalStorage);
            setUsername(userDataFromLocalStorage.username);
        }
    }, []);

    // جلب المهام المخصصة للمستخدم الحالي
    useEffect(() => {
        if (userData) {
            const userTasksRef = ref(database, "tasks");
            get(userTasksRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const allTasks = snapshot.val();
                        const filteredTasks = Object.keys(allTasks).filter(taskId => {
                            return allTasks[taskId].assigned_user === `${userData.username} <${userData.email}>`;
                        }).map(taskId => allTasks[taskId]);

                        setTasks(filteredTasks);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching tasks:", error);
                });
        }
    }, [userData]);

    // تصفية المهام بناءً على النص المدخل في مربع البحث
    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // دالة لتحديد اللون بناءً على الأولوية
    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high":
                return "bg-red-500"; // اللون الأحمر
            case "medium":
                return "bg-green-500"; // اللون الأخضر
            case "low":
                return "bg-blue-500"; // اللون الأزرق
            default:
                return "bg-gray-500"; // اللون الافتراضي
        }
    };

    // دالة لتحديد نسبة تعبئة الـ line بناءً على الـ status
    const getStatusFill = (status) => {
        switch (status) {
            case "done":
                return 100; // تعبئة كاملة
            case "in_progress":
                return 50; // تعبئة نصفية
            case "todo":
                return 25; // تعبئة أقل من النصف
            default:
                return 0; // تعبئة صفرية إذا لم تكن الحالة معروفة
        }
    };

    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gradient-to-r from-purple-600 to-blue-500 p-6 flex flex-col justify-between shadow-lg">
                <div>
                    <h1 className="mb-8 text-3xl font-extrabold text-white">TickDone</h1>
                    <nav className="space-y-4">
                        <Link to="/dashboard" className="block px-5 py-3 text-white bg-purple-700 rounded-lg font-medium transition hover:bg-purple-600">Dashboard</Link>
                        <Link to="/tasks/create" className="block px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition">Task Management</Link>
                        <Link to="/tasks" className="block px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition">Tasks</Link>
                        <Link to="/Article" className="block px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition">Articles</Link>
                        <Link to="/About" className="block px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition">About Us</Link>
                        <Link to="/Contact" className="block px-5 py-3 text-white hover:bg-gray-200 hover:text-gray-800 rounded-lg transition">Contact Us</Link>
                    </nav>
                </div>
                <Link to="/" className="mx-auto flex items-center text-red-600 px-2 py-2 rounded-full font-semibold hover:bg-red-600 hover:text-white transition">
                    <FiLogOut className="w-5 h-5" />
                    <span className="px-2">Log Out</span>
                </Link>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-white">
                <header className="flex items-center justify-between mb-8">
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            placeholder="Search"
                            value={searchQuery} // ربط القيمة بحالة البحث
                            onChange={(e) => setSearchQuery(e.target.value)} // تحديث حالة البحث عند الكتابة
                        />
                        <Search className="absolute right-2 top-2 text-gray-500" />
                    </div>
                    <div className="flex space-x-4 items-center">   
                        <Bell className="w-6 h-6 text-gray-500" />
                        <Link to="/profile"><img src="https://www.w3schools.com/howto/img_avatar.png" className="w-10 h-10 rounded-full border text-gray-500 cursor-pointer hover:text-blue-600 transition"/></Link>
                    </div>
                </header>

                <section className="mb-8 bg-gradient-to-r from-blue-500 to-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-white">Welcome, {username}!</h1>
                        <p className="text-gray-200">Keep track of your progress and achieve your goals!</p>
                        <button className="mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">Today's Schedule</button>
                    </div>
                    <img src={image} alt="Illustration" className="w-48 h-40 object-cover rounded-lg" />
                </section>

                {/* عرض المهام الخاصة بالمستخدم */}
                <section className="grid grid-cols-2 gap-6 mb-8">
                    {filteredTasks.map((task, index) => {
                        const statusColor = getStatusFill(task.status); // الحصول على نسبة تعبئة الـ line بناءً على الـ status
                        const priorityColor = getPriorityColor(task.priority); // تحديد لون الـ line بناءً على الأولوية

                        return (
                            <Card key={index} className="p-4 transition hover:scale-105 hover:shadow-xl cursor-pointer rounded-lg border-2 border-purple-700 hover:border-purple-500">
                                <CardHeader 
    title={task.title} 
    className="text-xl font-extrabold text-gray-800 mb-2 transition-all transform hover:scale-105 hover:text-purple-700 hover:shadow-lg"
 />
                                <CardContent>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm text-gray-500">{task.status}</span>
                                        <span className="text-sm text-gray-500">{task.priority}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${priorityColor}`}
                                            style={{ width: `${statusColor}%` }} // تعبئة الـ line بناءً على الـ status
                                        ></div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </section>
            </main>
        </div>
    );
}
