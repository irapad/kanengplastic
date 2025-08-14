import { Phone, MessageCircle, MapPin, Star, Truck, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Main Title */}
          <h1 className="hero-title mb-6">
            <span className="text-primary">กันเองพลาสติก</span>
            <br />
            <span className="text-foreground">บางน้ำจืด</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mb-4">
            ผู้เชี่ยวชาญด้านถุงพลาสติกและบรรจุภัณฑ์
          </p>

          {/* Experience Badge */}
          <div className="feature-badge mb-8">
            <Star className="w-5 h-5 text-primary float-animation" />
            <span className="font-medium">มากกว่า 15 ปีของประสบการณ์</span>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card rounded-2xl p-6 fade-in stagger-1">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3 float-animation" />
              <span className="text-sm md:text-base block text-center">คุณภาพมาตรฐาน ราคาขายส่ง</span>
            </div>
            <div className="glass-card rounded-2xl p-6 fade-in stagger-2">
              <Truck className="w-8 h-8 text-primary mx-auto mb-3 float-animation" />
              <span className="text-sm md:text-base block text-center">บริการส่งถึงที่ทั่วประเทศ</span>
            </div>
            <div className="glass-card rounded-2xl p-6 fade-in stagger-3">
              <Star className="w-8 h-8 text-primary mx-auto mb-3 float-animation" />
              <span className="text-sm md:text-base block text-center">สินค้าครบครัน ในที่เดียว</span>
            </div>
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 scale-in">
            <a
              href="tel:0819222884"
              className="contact-btn phone-btn flex items-center space-x-3 w-full sm:w-auto justify-center stagger-4"
            >
              <Phone className="w-5 h-5" />
              <span>โทรเลย 081-922-2884</span>
            </a>
            
            <a
              href="https://line.me/R/ti/p/0819222884"
              className="contact-btn line-btn flex items-center space-x-3 w-full sm:w-auto justify-center stagger-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>แอด Line</span>
            </a>
            
            <a
              href="https://maps.app.goo.gl/7rxFdWgps65RmmZE9?g_st=ipc"
              className="contact-btn location-btn flex items-center space-x-3 w-full sm:w-auto justify-center stagger-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-5 h-5" />
              <span>ดูที่ตั้งร้าน</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-muted-foreground space-y-2 fade-in">
            <p className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>ส่งเร็ว บริการดี มีบริการส่งถึงที่</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>มีสินค้าพิเศษที่ร้านอื่นไม่มี</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;