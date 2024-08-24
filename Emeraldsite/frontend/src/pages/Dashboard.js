

export default function Dashboard(){
    return(
        <div className="bg-[#f4f4f9] h-[100vh]">
            <h1 className="text-3xl font-bold pt-[20px] ml-[1%]">Dashboard</h1>
            <div className="flex flex-row justify-around mt-[20px]">
                <div className="w-[23%] bg-white p-[30px] flex justify-center items-center flex-col gap-y-2 rounded-xl ">
                    <h2 className="text-xl text-[#34495e] font-semibold">Total Contracts</h2>
                    <h2 className="text-[#0ad736] text-2xl font-semibold">15</h2>
                </div>
                <div className="w-[23%] bg-white p-[30px] flex justify-center items-center flex-col gap-y-2 rounded-xl ">
                    <h2 className="text-xl text-[#34495e] font-semibold">Total Funds in Escrow</h2>
                    <h2 className="text-[#0ad736] text-2xl font-semibold">100$</h2>
                </div>
                <div className="w-[23%] bg-white p-[30px] flex justify-center items-center flex-col gap-y-2 rounded-xl ">
                    <h2 className="text-xl text-[#34495e] font-semibold">Participating Companies</h2>
                    <h2 className="text-[#0ad736] text-2xl font-semibold">10</h2>
                </div>
                <div className="w-[23%] bg-white p-[30px] flex justify-center items-center flex-col gap-y-2 rounded-xl ">
                    <h2 className="text-xl text-[#34495e] font-semibold">Carbon Footprint Reduced</h2>
                    <h2 className="text-[#0ad736] text-2xl font-semibold">120 Tons</h2>
                </div>

            </div>
            <div className="bg-white py-5 mt-5 mx-[1%] rounded-xl">
                <h1 className="text-[#34495e] text-3xl py-4 mx-[4%] font-bold">Recent </h1>
                <div className="mx-[4%]">
                    <p className="text-xl">RenewCo accepted Contract #13</p>
                    <p className="text-xl">EcoFund added $9 to Escrow for project #12</p>
                    <p className="text-xl">GreenTech Solutions met the conditions of Contract #11</p>
                    <p className="text-xl">City Council of Springfield initiated Contract #9</p>
                </div>
            </div>
        </div>
    )
}