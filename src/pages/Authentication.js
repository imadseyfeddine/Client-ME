import React, {useState} from "react";
import pngimg from "../assets/logo/logo2.png";
import pngimg3 from "../assets/logo/logo_vert.png";

function Authentication() {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username,setUsername]= useState("")
  const [password,setPassword]= useState("")

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setErrorMessage("Username and password are required.");
      return;
    }
    
  };

  return (
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" >
      <div className="p-6 w-[320px] bg-white rounded-xl shadow-lg" style={{zoom:"80%"}}>
        <div className="text-2xl font-semibold flex items-center justify-center">
          <img src={pngimg} alt="" className="mr-2" />
          <h1>Client ME</h1>
        </div>
        <div className="mt-6">
          <input
            type="text"
            id="disabled input"
            aria-label="ATM Mobilis"
            className="mb-8 bg-gray-100 border border-gray-300 text-sm rounded-lg w-full p-2 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black"
            value="ATM Mobilis"
            disabled
            style={{ textAlign: "center" }} 
          />
          <div
            style={{ width: "200px", height: "1px", backgroundColor: "#F3F4F6", margin: "0 auto" }}
          ></div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="relative mb-3">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mt-10">
              Utilisateur
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 border w-full rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          {username ? null : (
            <div className="text-gray-500 text-xs ">Ajouter le nom d'Utilisateur</div>
          )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border w-full rounded-md bg-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
       
            />  
        {password ? null : (
            <div className="text-gray-500 text-sm ">Add the password</div>
          )}
          </div>
          <div className="text-red-500 text-sm mb-2">{errorMessage}</div>
          {isLoading ? (
        <button
          type="button"
          className="w-full py-2 px-4 bg-gray-300 text-white rounded-md cursor-not-allowed"
          disabled
        >
       Loading...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#4CAF50] text-white rounded-md hover:bg-green-500"
        >
          Connecter
        </button>
      )}
        </form>

      </div>
      <img src={pngimg3} alt="" className="mt-6 w-20 " />
      <p className="text-xs  text-gray-800 mt-2"> ATM Mobilis DDD-V1.2023</p>
    </div>
    </div>
  );
}

export default Authentication;
