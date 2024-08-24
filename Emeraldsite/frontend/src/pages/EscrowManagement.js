

export default function EscrowManagement(){
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file); // Handle the file upload logic here
      };
    return(
        <>
        <div className="min-h-screen bg-[#f4f4f9] flex flex-col items-center p-6">
      <div className="w-full ">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-black">Escrow Management</h1>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Wallet Connected</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Logged in as XYZ NGO</button>
          </div>
        </div>

        {/* Current Escrow Balance */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-center text-lg text-[#34495e] font-semibold mb-4">Current Escrow Balance</h2>
          <p className="text-center text-green-500 text-2xl">$100</p>
        </div>

        {/* Add Funds Section */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h2 className="text-center text-lg font-semibold mb-4 text-[#34495e]">Add Funds to Escrow</h2>
          <div className="flex items-center flex-col gap-y-3">
            <input
              type="number"
              placeholder="Enter amount"
              className="border border-gray-300 rounded w-full py-2 px-4 mr-4"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Add Funds</button>
          </div>
        </div>

        {/* Upload Contract Section */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-center text-lg font-semibold mb-4 ">Upload Contract</h2>
          <div className="flex flex-col items-center">
            <input 
              type="file" 
              id="file-upload" 
              className="hidden" 
              onChange={handleFileChange} 
            />
            <label
              htmlFor="file-upload"
              className="bg-gray-500 text-white text-center py-2 px-4 w-[100%] rounded cursor-pointer"
            >
              Choose a file
            </label>
            <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">Upload</button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}