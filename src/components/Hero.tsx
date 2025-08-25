import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import factoryBg from "../assets/modern-factory-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-background via-background/95 to-background/90"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.75)), url(${factoryBg})`
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary">กันเองพลาสติก</span>
              <br />
              <span className="text-white">บางน้ำจืด</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">
              ผู้เชี่ยวชาญด้านถุงพลาสติกและบรรจุภัณฑ์
            </p>
          </div>

          {/* Experience Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-white font-semibold">ประสบการณ์ 40+ ปี</span>
          </div>

          {/* Key Features */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-primary font-semibold text-lg mb-3">บริการจัดส่งด่วนพิเศษ</div>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
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
              href="https://share.google/QodcxC1Nw4b3YxXtk"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
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