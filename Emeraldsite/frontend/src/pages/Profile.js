import React, { useState } from 'react';

export default function Profile() {
  const [emissions, setEmissions] = useState(100);

  return (
    <div className="bg-[#f4f4f9] h-[100vh]">
      <h1 className="text-3xl font-bold pt-[20px] ml-[1%]">Profile</h1>
      <div className="p-6 bg-white rounded-lg shadow-lg  mx-auto w-[96%] mt-10">
        <h1 className="text-2xl font-bold mb-2">Company Name: <span className="  font-bold">RenewCo</span></h1>
        <p className="text-lg mb-4">Wallet Value: <span className="font-semibold">$5</span></p>
        
        <div className="mb-6">
          <label htmlFor="emissions" className="block text-gray-700 text-sm font-bold mb-2">
            Total Emissions (Tons):
          </label>
          <input 
            id="emissions"
            type="text"
            value={emissions}
            onChange={(e) => setEmissions(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex space-x-4">
          <button className="bg-green-500 text-white  py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline">
            Submit Changes
          </button>
          <button className="bg-red-500 text-white  py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
