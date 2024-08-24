import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();
    const activeStyle = "bg-[#0AE34B] text-[#1e272e]";
    const inactiveStyle = "hover:bg-[#0AE34B] text-white";

    return (
        <div className="bg-[#1e272e] w-[280px] h-[100vh]">
            <h1 className="text-[#0ad736] text-[24px] font-bold text-center pt-[15%]">Emerald</h1>
            <div className="flex flex-col justify-center items-center mt-5">
                <Link 
                    to="/" 
                    className={`text-xl font-semibold w-[90%] my-2 ml-[4%] py-3 px-3 rounded-xl ${location.pathname === '/' ? activeStyle : inactiveStyle}`}
                >
                    Dashboard
                </Link>
                <Link 
                    to="/contracts" 
                    className={`text-xl font-semibold w-[90%] my-2 ml-[4%] py-3 px-3 rounded-xl ${location.pathname === '/contracts' ? activeStyle : inactiveStyle}`}
                >
                    Contracts
                </Link>
                <Link 
                    to="/escrow" 
                    className={`text-xl font-semibold w-[90%] my-2 ml-[4%] py-3 px-3 rounded-xl ${location.pathname === '/escrow' ? activeStyle : inactiveStyle}`}
                >
                    Escrow Management
                </Link>
                <Link 
                    to="/transactions" 
                    className={`text-xl font-semibold w-[90%] my-2 ml-[4%] py-3 px-3 rounded-xl ${location.pathname === '/transactions' ? activeStyle : inactiveStyle}`}
                >
                    Transactions
                </Link>
                <Link 
                    to="/profile" 
                    className={`text-xl font-semibold w-[90%] my-2 ml-[4%] py-3 px-3 rounded-xl ${location.pathname === '/profile' ? activeStyle : inactiveStyle}`}
                >
                    Profile
                </Link>
            </div>
        </div>
    );
}
