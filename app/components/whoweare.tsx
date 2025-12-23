import truck from '../../media/high.jpg'
import FeaturesFlex from './Shipicon';
const WhoWeAre = () => {
    return (
        <div className="min-h-[80vh] bg-blue-50 ">
            <div className="flex flex-row-reverse items-start justify-evenly ">
                <div className="w-1/2 pt-20 p-10">
                    <h1 className="text-2xl font-semibold">Our Services</h1>
                    <p className="text-md opacity-60">
                        With more than 30 years of experience in the logistics industry,
                        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
                    </p>
                    <FeaturesFlex />
                </div>

                {/* --- Start of modified image section --- */}
                <div className="relative">
                    <img
                        src={truck.src}
                        className="w-[50vw] h-120"
                        alt="Truck showing services"
                    />

                    {/* FIX: Remove spaces inside the brackets for it to work */}
                    <div className="absolute inset-0 bg-[rgba(15,23,42,0.8)]"></div>
                </div>
                {/* --- End of modified image section --- */}

            </div>
        </div>
    );
};

export default WhoWeAre;