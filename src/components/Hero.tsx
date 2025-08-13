import { Phone, MessageCircle, MapPin, Star, Truck, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">กันเองพลาสติก</span>
            <br />
            <span className="text-foreground">บางน้ำจืด</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            ผู้เชี่ยวชาญด้านถุงพลาสติกและบรรจุภัณฑ์
          </p>

          {/* Experience Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-2 rounded-full mb-8">
            <Star className="w-5 h-5" />
            <span className="font-medium">มากกว่า 15 ปีของประสบการณ์</span>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 bg-card/50 rounded-lg p-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-sm md:text-base">คุณภาพมาตรฐาน ราคาขายส่ง</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-card/50 rounded-lg p-4">
              <Truck className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-sm md:text-base">บริการส่งถึงที่ทั่วประเทศ</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-card/50 rounded-lg p-4">
              <Star className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-sm md:text-base">สินค้าครบครัน ในที่เดียว</span>
            </div>
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:0819222884"
              className="phone-btn flex items-center space-x-3 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>โทรเลย 081-922-2884</span>
            </a>
            
            <a
              href="https://line.me/R/ti/p/0819222884"
              className="line-btn flex items-center space-x-3 w-full sm:w-auto justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>แอด Line</span>
            </a>
            
            <a
              href="https://maps.app.goo.gl/7rxFdWgps65RmmZE9?g_st=ipc"
              className="location-btn flex items-center space-x-3 w-full sm:w-auto justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="w-5 h-5" />
              <span>ดูที่ตั้งร้าน</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-muted-foreground">
            <p>✓ ส่งเร็ว บริการดี มีบริการส่งถึงที่</p>
            <p>✓ มีสินค้าพิเศษที่ร้านอื่นไม่มี</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;