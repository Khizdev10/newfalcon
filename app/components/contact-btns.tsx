import { FaSearchLocation, FaWhatsapp, FaPhone} from "react-icons/fa";

export default function Btns () {
    return (
        <>
            <a
                href="https://wa.me/923442656567?text=Hello%20I%20would%20like%20to%20inquire"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-btn-c fixed bottom-6 right-6 bg-green-500  border-2 border-green-200 hover:bg-green-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center z-50 transition-all"
            >
                <FaWhatsapp className="text-3xl" />

            </a>
            <a
                href="tel:+923442656567"
                className="shine-btn-c fixed bottom-24 right-6 bg-blue-600 border-2 border-blue-200 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center z-50 transition-all"
            >
                <FaPhone className="text-2xl" />
            </a>

        </>
    )
}