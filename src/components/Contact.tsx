import { Phone, MessageCircle, MapPin, Clock, Mail, Truck } from "lucide-react";
import mapPlaceholder from "../assets/google-map-real.jpg";

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ติดต่อ<span className="text-primary">เรา</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            พร้อมให้บริการและตอบคำถามทุกข้อสงสัย ติดต่อเราได้ทุกช่องทาง
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">ข้อมูลการติดต่อ</h3>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-card rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">หมายเลขโทรศัพท์</h4>
                  <p className="text-muted-foreground">081-922-2884</p>
                  <a href="tel:0819222884" className="text-primary hover:text-primary/80 text-sm">
                    คลิกเพื่อโทร →
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-card rounded-xl">
                <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Line ID</h4>
                  <p className="text-muted-foreground">เพิ่มเพื่อนผ่านเบอร์โทร 081-922-2884</p>
                  <a 
                    href="https://line.me/R/ti/p/0819222884" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-600/80 text-sm"
                  >
                    เพิ่มเพื่อน Line →
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-card rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">ที่ตั้งร้าน</h4>
                  <p className="text-muted-foreground">บางน้ำจืด สมุทรปราการ</p>
                  <a 
                    href="https://share.google/QodcxC1Nw4b3YxXtk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm"
                  >
                    ดูแผนที่ →
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-card-foreground">เวลาทำการ</h4>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>จันทร์ - เสาร์</span>
                  <span>08.00น.-17.00น.</span>
                </div>
                <div className="flex justify-between">
                  <span>อาทิตย์</span>
                  <span>ปิดทำการ</span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-card rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Truck className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-card-foreground">บริการจัดส่ง</h4>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>✓ บริการส่งถึงที่ทั่วประเทศ</p>
                <p>✓ ส่งเร็ว ส่งตรงเวลา</p>
                <p>✓ มีบริการขนส่งพิเศษสำหรับออเดอร์ใหญ่</p>
                <p>✓ ตรวจสอบสถานะการส่งได้ตลอดเวลา</p>
              </div>
            </div>
          </div>

          {/* Contact Form / Map */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">แผนที่ร้าน</h3>
            
            {/* Map Placeholder */}
            <div className="bg-card rounded-xl overflow-hidden h-96 relative">
              <img 
                src={mapPlaceholder} 
                alt="แผนที่ร้านกันเองพลาสติก บางน้ำจืด" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-end justify-center pb-8 group">
                <div className="text-center text-white bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-white/15 animate-fade-in">
                  <div className="relative">
                    <MapPin className="w-10 h-10 mx-auto mb-3 text-red-400 drop-shadow-lg animate-pulse" />
                    <div className="absolute -inset-1 bg-red-400/20 rounded-full blur-sm"></div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 drop-shadow-md">กันเองพลาสติก บางน้ำจืด</h4>
                  <p className="text-sm mb-4 text-gray-100 font-medium">บางน้ำจืด สมุทรปราการ</p>
                  <a 
                    href="https://share.google/QodcxC1Nw4b3YxXtk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover-scale"
                  >
                    <span>เปิดใน Google Maps</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Actions */}
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <h4 className="text-xl font-bold mb-4">ต้องการสอบถามหรือสั่งซื้อ?</h4>
              <p className="text-muted-foreground mb-6">
                ติดต่อเราได้ทันที ทีมงานพร้อมให้บริการ
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:0819222884"
                  className="phone-btn flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>โทรเลย</span>
                </a>
                
                <a
                  href="https://line.me/R/ti/p/0819222884"
                  className="line-btn flex items-center justify-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>แชท Line</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;