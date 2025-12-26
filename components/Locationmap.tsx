export default function MapSection() {
  return (
    <>
    <section className="bg-[#1f2633] min-h-[60vh]" id="map">
      <div className=" mx-auto ">
        <div className="w-full h-[600px] overflow-hidden border border-white/10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10080.934885577828!2d66.95386258478639!3d24.86888416556087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb31563f8dd329b%3A0x2b56487577976af4!2sNew%20falcon%20Hazara%20goods!5e1!3m2!1sen!2s!4v1766333719284!5m2!1sen!2s"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              filter: "invert(0%) hue-rotate(0deg)",
            }}
          />
          
        </div>
        
      </div>
      
    </section>
  
  </>
  );
}
