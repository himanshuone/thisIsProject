import {
    TbRocket,
    TbUsers,
    TbChartBar,
    TbBell,
    TbChecklist,
    TbLock
} from "react-icons/tb";

const features = [
    {
        icon: <TbRocket size={28} />,
        title: "Quick Project Setup",
        desc: "Create and organize projects in seconds with an intuitive workflow.",
    },
    {
        icon: <TbUsers size={28} />,
        title: "Team Collaboration",
        desc: "Work together seamlessly with real-time updates and shared access.",
    },
    {
        icon: <TbChartBar size={28} />,
        title: "Progress Tracking",
        desc: "Track tasks, milestones, and deadlines in one clear dashboard.",
    },
    {
        icon: <TbBell size={28} />,
        title: "Smart Notifications",
        desc: "Never miss an update with intelligent alerts and reminders.",
    },
    {
        icon: <TbChecklist size={28} />,
        title: "Task Management",
        desc: "Break projects into tasks and manage workflows effortlessly.",
    },
    {
        icon: <TbLock size={28} />,
        title: "Secure Platform",
        desc: "Your data is protected with enterprise-grade security.",
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-conic-180 from-slate-600 via-black- to-indigo-200  ">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Everything You Need to Succeed
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    Powerful features designed to help teams plan better, work faster,
                    and deliver on time.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 mb-6 mx-auto">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
