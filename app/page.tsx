import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
// import Image from "next/image";
// import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
   <div className="max-w-full w-full">
    <FloatingNav navItems={navItems}/>
   
    <Hero/>
   
    <Grid/>
    <Skills/>
    <RecentProjects/>
    <Clients/>
    <Experience/>
    {/* <Approach/> */}
    <Footer/>
   </div>
   </main>
  );
}
