"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const deliveryCities = [
    { ur: "کراچی", en: "Karachi", coords: [24.8607, 67.0011] },
    { ur: "لاہور", en: "Lahore", coords: [31.5204, 74.3587] },
    { ur: "گوجرانوالہ", en: "Gujranwala", coords: [32.1877, 74.1945] },
    { ur: "وزیرآباد", en: "Wazirabad", coords: [32.4458, 74.1159] },
    { ur: "گجرات", en: "Gujrat", coords: [32.5731, 74.0789] },
    { ur: "لالہ موسیٰ", en: "Lala Musa", coords: [32.7014, 73.9572] },
    { ur: "کھاریاں", en: "Kharian", coords: [32.8161, 73.8860] },
    { ur: "جہلم", en: "Jhelum", coords: [32.9334, 73.7266] },
    { ur: "دینہ", en: "Dina", coords: [32.9360, 73.6583] },
    { ur: "سرائے عالمگیر", en: "Sara-e-Alamgir", coords: [32.9046, 73.7520] },
    { ur: "سیالکوٹ", en: "Sialkot", coords: [32.4945, 74.5229] },
    { ur: "راولپنڈی", en: "Rawalpindi", coords: [33.5651, 73.0169] },
    { ur: "اسلام آباد", en: "Islamabad", coords: [33.6844, 73.0479] },
    { ur: "چکوال", en: "Chakwal", coords: [32.9311, 72.8577] },
    { ur: "جھنگ", en: "Jhang", coords: [31.2731, 72.3240] },
    { ur: "سرگودھا", en: "Sargodha", coords: [32.0836, 72.6711] },
    { ur: "فیصل آباد", en: "Faisalabad", coords: [31.4504, 73.1350] },
    { ur: "اوکاڑہ", en: "Okara", coords: [30.8103, 73.4594] },
    { ur: "ساہیوال", en: "Sahiwal", coords: [30.6682, 73.1114] },
    { ur: "ملتان", en: "Multan", coords: [30.1575, 71.5249] },
    { ur: "بہاولپور", en: "Bahawalpur", coords: [29.3956, 71.6836] },
    { ur: "رحیم یار خان", en: "Rahim Yar Khan", coords: [28.4202, 70.2952] },
    { ur: "میانوالی", en: "Mianwali", coords: [32.5776, 71.5285] },
    { ur: "بھکر", en: "Bhakkar", coords: [31.6333, 71.0667] },
    { ur: "اٹک", en: "Attock", coords: [33.7737, 72.3621] },
    { ur: "ایبٹ آباد", en: "Abbottabad", coords: [34.1463, 73.2117] },
    { ur: "مانسہرہ", en: "Mansehra", coords: [34.3333, 73.2000] },
    { ur: "ہری پور", en: "Haripur", coords: [33.9990, 72.9346] },
    { ur: "ہٹار انڈسٹریل اسٹیٹ", en: "Hattar Industrial Estate", coords: [33.8703, 72.7397] },
    { ur: "کوئٹہ", en: "Quetta", coords: [30.1798, 66.9750] },
    { ur: "میرپور (آزاد کشمیر)", en: "Mirpur (AJK)", coords: [33.1478, 73.7514] },
  ];
  

export default function DeliveryCitiesSlider() {
  return (
    <div className="w-full py-8">
        
      <h2 className="text-center text-3xl font-semibold mb-6">
      We deliver to these cities
      </h2>

      <h2 className="text-center text-xl font-semibold mb-6">
         ہم ان شہروں میں ڈیلیوری کرتے ہیں
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {deliveryCities.map((city, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border rounded-xl py-4 text-center shadow-sm hover:shadow-md transition">
              <span className="text-lg font-medium">{city.en}</span><br></br>
              <span className="text-sm text-gray-500">{city.ur}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
