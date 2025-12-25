"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import image from "../../media/art.jpeg";
import Btns from "../../components/Contact-btns";


export default function Contact() {
    return (
        <>
            <Navbar />
        <div  style={{backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${image.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        }} className="flex justify-center items-center">
            <h1 className="text-white text-5xl font-bold">Contact Us</h1>
    </div>
    <section className="py-16 px-4 md:px-20 bg-white">
  <div className="max-w-3xl mx-auto p-10 rounded-lg shadow-lg  text-black bg-gray-50">
    <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
    <form className="space-y-4 ">
      <input type="text" placeholder="Your Name" className="w-full p-3 border rounded"/>
      <input type="email" placeholder="Your Email" className="w-full p-3 border rounded"/>
      <input type="text" placeholder="Subject" className="w-full p-3 border rounded"/>
      <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32"/>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Send Message</button>
    </form>
  </div>
</section>

<Btns />

<section className="py-16 px-4 md:px-20 text-black bg-gray-100">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div>
      <h3 className="font-semibold mb-2">Phone</h3>
      <p>+92 344 265 6567</p>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Email</h3>
      <p>newfalconhazara@gmail.com</p>
    </div>
    <div>
      <h3 className="font-semibold mb-2">Address</h3>
      <p>2 Hawksbay Rd, Mauripur, Karachi, Pakistan</p>
    </div>
  </div>
</section>

    <Footer />
    </>
    );
}