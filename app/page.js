import Image from "next/image";
import Sidebar from "./Sidebar/page";
import Header from "./Header/page";
import Dashboard from "./Dashboard/page";
import Footer from "./Footer/page";


export default function Home() {
  return (
    <div className=" flex min-h-screen bg-gray-100">
    
    <div className=" flex-1 flex bg-[#1F1F23] flex-col">
      <Header />
     
      <Dashboard/>
      <Footer/>
    </div>
  </div>
  );
}
