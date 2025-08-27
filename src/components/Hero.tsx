import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import factoryBg from "../assets/modern-factory-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-orange-50 via-green-50 to-orange-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-orange-600">กันเองพลาสติก</span>
              <br />
              <span className="text-green-700">บางน้ำจืด</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
              ผู้เชี่ยวชาญด้านถุงพลาสติกและบรรจุภัณฑ์
            </p>
          </div>

          {/* Experience Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-lg">
            <Star className="w-5 h-5 text-orange-500" />
            <span className="text-gray-800 font-semibold">ประสบการณ์ 40+ ปี</span>
          </div>

          {/* Key Features */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
            <div className="text-green-700 font-semibold text-lg mb-3">บริการจัดส่งด่วนพิเศษ</div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              จัดส่งภายในวันเดียวสำหรับลูกค้าในจังหวัดสมุทรสาคร<br />
              สั่งเช้า รับเย็น พร้อมบริการจัดส่งถึงหน้าบ้าน
            </p>
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0819222884"
              className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>โทร 081-922-2884</span>
            </a>
            
            <a
              href="https://line.me/R/ti/p/0819222884"
              className="flex items-center gap-3 bg-[#00B900] hover:bg-[#00B900]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Line Chat</span>
            </a>
            
            <a
              href="https://share.google/AN5q4WMw6BTJ9aWdM"
              className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-5 h-5" />
              <span>ตำแหน่ง</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;