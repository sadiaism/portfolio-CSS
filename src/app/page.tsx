import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer"

export default function Home() {
  return(
    <div>
      <Header/>
      <Hero/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}