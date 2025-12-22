"use client";
import Navbar from "../components/navbar";
import image from "../../media/art.jpg";
export default function About() {
    return (
        <>
            <Navbar />
        <div  style={{backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${image.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        }} className="flex justify-center items-center">
            <h1 className="text-white text-5xl font-bold">About Us</h1>
    </div>
    </>
    );
}