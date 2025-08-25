import { Phone, MessageCircle, MapPin, Star, Truck, Shield } from "lucide-react";
import factoryBg from "../assets/modern-factory-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-bg min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${factoryBg})`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Main Title */}
          <h1 className="hero-title mb-4 text-shadow-lg">
            <span className="text-primary drop-shadow-2xl">กันเองพลาสติก</span>
            <br />
            <span className="text-white drop-shadow-2xl">บางน้ำจืด</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mb-6 text-white drop-shadow-xl font-bold">
            ผู้เชี่ยวชาญด้านถุงพลาสติกและบรรจุภัณฑ์
          </p>

          {/* Experience Badge */}
          <div className="feature-badge mb-8 bg-white/30 border-white/40">
            <Star className="w-5 h-5 text-primary float-animation" />
            <span className="font-bold text-foreground drop-shadow-lg">ประสบการณ์ 40+ ปี</span>
          </div>

          {/* Special Delivery Service */}
          <div className="glass-card rounded-xl p-4 mb-8 max-w-2xl mx-auto fade-in bg-white/25 border-white/30">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">🚚</span>
              <span className="font-bold text-primary drop-shadow-lg text-lg">บริการจัดส่งด่วนพิเศษ</span>
            </div>
            <p className="text-sm md:text-base text-foreground font-medium drop-shadow-md">
              "จัดส่งภายในวันเดียว! สำหรับลูกค้าในพื้นที่จังหวัดสมุทรสาคร สั่งเช้า รับเย็น พร้อมบริการจัดส่งถึงหน้าบ้าน"
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="glass-card rounded-xl p-4 fade-in stagger-1 bg-white/25 border-white/30">
              <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-xs md:text-sm block text-center font-semibold text-foreground drop-shadow-md">คุณภาพ ราคาส่ง</span>
            </div>
            <div className="glass-card rounded-xl p-4 fade-in stagger-2 bg-white/25 border-white/30">
              <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-xs md:text-sm block text-center font-semibold text-foreground drop-shadow-md">ส่งทั่วประเทศ</span>
            </div>
            <div className="glass-card rounded-xl p-4 fade-in stagger-3 bg-white/25 border-white/30">
              <Star className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-xs md:text-sm block text-center font-semibold text-foreground drop-shadow-md">สินค้าครบครัน</span>
            </div>
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 scale-in">
            <a
              href="tel:0819222884"
              className="contact-btn phone-btn flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              <span>โทร 081-922-2884</span>
            </a>
            
            <a
              href="https://line.me/R/ti/p/0819222884"
              className="contact-btn line-btn flex items-center space-x-2 w-full sm:w-auto justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Line</span>
            </a>
            
            <a
              href="https://share.google/QodcxC1Nw4b3YxXtk"
              className="contact-btn location-btn flex items-center space-x-2 w-full sm:w-auto justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-4 h-4" />
              <span>ตำแหน่ง</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;