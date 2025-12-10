type SidebarProps = {
    selected: string;
    setSelected: (value: string) => void;
};

export default function Sidebar({ selected, setSelected }: SidebarProps) {
    return (
        <div
        className="w-60 min-h-screen bg-white/70 backdrop-blur-xl border-r border-white/40 shadow-md p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Menu</h2>
        <button
            onClick={() => setSelected("basic")}
            className={`
            w-full text-left px-4 py-2 rounded-lg font-medium
            transition-all duration-300
            ${
                selected === "basic"? "bg-[#A6D7A8] text-white shadow": "hover:bg-[#8CCB90] text-gray-700"
            }
            `}
        >
            basic
        </button>

        <button
            onClick={() => setSelected("signup")}
            className={`
            w-full text-left px-4 py-2 rounded-lg font-medium
            transition-all duration-300
            ${
                selected === "signup"
                ? "bg-[#A6D7A8] text-white shadow" : "hover:bg-[#8CCB90] text-gray-700"
            }
            `}
        >
            Signup
        </button>

    <button
            onClick={() => setSelected("register")}
            className={`
            w-full text-left px-4 py-2 rounded-lg font-medium
            transition-all duration-300
            ${
                selected === "register"
                ? "bg-[#A6D7A8] text-white shadow" : "hover:bg-[#8CCB90] text-gray-700"
            }
            `}
        >
            Register
        </button>
        
        </div>
    );
}
