

export default function Transations(){
    return(
        <div className="bg-[#f4f4f9] h-[100vh]">
            <h1 className="text-3xl font-bold pt-[20px] ml-[1%]">Transations</h1>
            <div className=" bg-[#ecf0f1] p-5 flex flex-col  mx-[1%] rounded-xl shadow-lg mt-3">
                <h1 className="text-[#27ae60] font-bold text-xl ">Transaction #001</h1>
                <p className="">RenewCo received $10,000 for fulfilling the deliverables of Contract #183.</p>
                <p className="">Date: 08/15/2024</p>
            </div>
            <div className=" bg-white p-5 flex flex-col  mx-[1%] rounded-xl shadow-lg mt-3">
                <h1 className="text-[#27ae60] font-bold text-xl ">Transaction #002</h1>
                <p className="">EcoFund contributed $7,500 to Escrow for initiating project #185..</p>
                <p className="">Date: 08/14/2024</p>
            </div>
            <div className=" bg-[#ecf0f1] p-5 flex flex-col  mx-[1%] rounded-xl shadow-lg mt-3">
                <h1 className="text-[#27ae60] font-bold text-xl ">Transaction #003</h1>
                <p className="">GreenTech Solutions refunded $2,000 due to a project cancellation.</p>
                <p className="">Date: 08/13/2024</p>
            </div>
        </div>
    )
}