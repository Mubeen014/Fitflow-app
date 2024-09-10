// pages/dashboard.js
'use client'
import Image from "next/image";
import RootLayout from "../layout";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Dashboard() {

  const router = useRouter()
  const handleClick = () => {
    router.push('/Userdata/form')
  }
  return (
      <div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1 mt-8 mx-5">
          <div className="bg-cyan-800 p-4 shadow rounded-lg w-100 border-2 border-cyan-900 ">
          <h3 className="text-2xl text-brown font-mono mt-8 font-bold ml-8 font-bold ">Welcome Back, John!</h3>
          <p className="text-xl ml-8 text-brown font-mono mt-2">You've completed 75% of your fitness goal!</p>
        </div>  
        </div>
        
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 mt-8 mx-5">
        

        <div className="bg-[#FB7342] p-4 shadow rounded-lg h-36 border-2 border-cyan-900 ">
          <h3 className="text-lg text-brown font-mono flex  justify-center text-center font-semibold ">Total Workouts</h3>
          <p className="text-3xl text-brown font-mono flex justify-center text-center text-center mt-2">45</p>
        </div>
        <div className="bg-[#FB7342] p-4 shadow rounded-lg border-2 border-cyan-900 ">
          <h3 className="text-lg text-brown font-mono justify-center text-center font-semibold">Calories Burned</h3>
          <p className="text-3xl text-brown font-mono justify-center text-center mt-2">3,200 kcal</p>
        </div>
        <div className="bg-[#FB7342] p-4 shadow rounded-lg border-2 border-cyan-900 ">
          <h3 className="text-lg text-brown font-mono justify-center text-center font-semibold">Active Minutes</h3>
          <p className="text-3xl text-brown font-mono justify-center text-center mt-2">1,300 min</p>
        </div>
        <div className="bg-[#FB7342] p-4 shadow rounded-lg h-36 border-2  border-cyan-900 ">
          <h3 className="text-lg text-brown font-mono justify-center text-center font-semibold">Sleep</h3>
          <p className="text-3xl text-brown font-mono justify-center text-center mt-2">7h 23m</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-1 mt-8 mx-5">
          <div className="bg-[#FB7342] p-4 shadow rounded-lg w-100 border-2 border-cyan-900 ">
          <h3 className="text-2xl text-brown font-mono mt-5 font-bold ml-8 font-bold ">Spotify</h3>
        <Link href="https://open.spotify.com/" target="_blank">
        <button class="px-7 py-2 text-sm font-mono ml-8 mt-7 text-brown  border border-cyan-900 bg-transparent hover:bg-[#8B7D6B]/10 transition-colors duration-200">
        <img src='./Images/airplay.png' alt="Placeholder Image" class=" h-5 w-5" />            Open In Spotify
        </button>
        </Link>
        </div>  
        </div>  

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1 mt-8 mx-5 mb-5" id="workout">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 bg-cyan-800 p-4 shadow rounded-lg w-100 border-2 border-cyan-900 ">
          <div className="bg-[#1F1F23] p-4 shadow rounded-lg  border-2 border-cyan-900 ">

          <h3 className="text-2xl text-brown justify-center text-center font-mono mt-5 mb-4 font-bold ml-8 font-bold ">Strength Training</h3>
          <div class="flex justify-center items-center">

          <img src='./Images/dumbell.png' alt="Placeholder Image" class=" h-10 w-10" />
          </div>
          <p className="text-xl ml-8 text-brown font-mono justify-center text-center mt-4">Focused on building muscle and improving overall strength.</p>
          <div className="flex justify-center mt-8">
            <Link href="https://www.youtube.com/results?search_query=strength+excercise" target="_blank">
              <button  class="px-3 py-1 text-sm  font-mono text-brown border border-cyan-900 bg-transparent hover:bg-[#8B7D6B]/10 transition-colors duration-200">
                View Workout
              </button>
            </Link>
      </div>
          </div>
          <div className="bg-[#1F1F23] p-4 shadow rounded-lg w-100 border-2 border-cyan-900 ">
          
          <h3 className="text-2xl text-brown justify-center text-center font-mono mt-5 font-bold ml-2 font-bold ">Cardio</h3>
          <div class="flex justify-center items-center">

            <img src='./Images/beat.png' alt="Placeholder Image" class=" h-20 w-20" />
            </div>
            <p className="text-xl ml-8 text-brown font-mono justify-center text-center mt-1">High-intensity interval training to improve cardiovascular fitness.</p>
          <div className="flex justify-center mt-8">
          <Link href="https://www.youtube.com/results?search_query=high+intensity+interval+training" target="_blank">
            <button class="px-3 py-1 text-sm font-mono text-brown  border border-cyan-900 bg-transparent hover:bg-[#8B7D6B]/10 transition-colors duration-200">
              View Workout
            </button>
          </Link>
</div>
          </div>
          <div className="bg-[#1F1F23] p-4 shadow rounded-lg w-100 border-2 border-cyan-900 ">
          
          <h3 className="text-2xl text-brown justify-center text-center font-mono mt-5 font-bold ml-2 mb-4 font-bold ">Yoga</h3>
          <div class="flex justify-center items-center">

        <img src='./Images/yoga.png' alt="Placeholder Image" class=" h-10 w-10" />
        </div>
          <p className="text-xl ml-8 font-mono text-brown justify-center text-center  mt-5">Gentle, restorative yoga to improve flexibility and mindfulness.</p>
          <div className="flex justify-center mt-8">
          <Link href="https://www.youtube.com/results?search_query=yoga" target="_blank">
            <button class="px-3 py-1 text-sm font-mono text-brown  border border-cyan-900 bg-transparent hover:bg-[#8B7D6B]/10 transition-colors duration-200">
              View Workout
            </button>
          </Link>
</div>
          </div>
        </div>  
        </div> 
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1 mt-8 mx-5 mb-5">
          <div className="bg-[#FB7342] p-4 shadow rounded-lg w-100 border-2 border-cyan-900 ">
          <h3 className="text-2xl text-brown font-mono mt-5 font-bold ml-8 font-bold ">Workout Plan</h3>
         
        <button onClick={handleClick} class="px-7 py-2 text-sm font-mono ml-8 mt-7 text-brown  border border-cyan-900 bg-transparent hover:bg-[#8B7D6B]/10 transition-colors duration-200">
        <img src='./Images/download.png' alt="Placeholder Image" class=" h-5 w-5" />            Download Now
        </button>
        </div>
        </div>
      </div>
  );
}
