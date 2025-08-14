import { Phone, MessageCircle, MapPin, Star, Truck, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Main Title */}
          <h1 className="hero-title mb-4">
            <span className="text-primary">กันเองพลาสติก</span>
            <br />
            <span className="text-foreground">บางน้ำจืด</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mb-6">
            ผู้เชี่ยวชาญด้านถุงพลาสติกและบรรจุภัณฑ์
          </p>

          {/* Experience Badge */}
          <div className="feature-badge mb-8">
            <Star className="w-5 h-5 text-primary float-animation" />
            <span className="font-medium">ประสบการณ์ 40+ ปี</span>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="glass-card rounded-xl p-4 fade-in stagger-1">
              <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-xs md:text-sm block text-center">คุณภาพ ราคาส่ง</span>
            </div>
            <div className="glass-card rounded-xl p-4 fade-in stagger-2">
              <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-xs md:text-sm block text-center">ส่งทั่วประเทศ</span>
            </div>
            <div className="glass-card rounded-xl p-4 fade-in stagger-3">
              <Star className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-xs md:text-sm block text-center">สินค้าครบครัน</span>
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
              href="https://maps.app.goo.gl/7rxFdWgps65RmmZE9?g_st=ipc"
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