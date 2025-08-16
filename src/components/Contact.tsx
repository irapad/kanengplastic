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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-6">
                <div className="text-center text-white bg-black/30 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-red-500" />
                  <h4 className="text-lg font-semibold mb-1">กันเองพลาสติก บางน้ำจืด</h4>
                  <p className="text-sm mb-3 text-gray-200">บางน้ำจืด สมุทรปราการ</p>
                  <a 
                    href="https://share.google/QodcxC1Nw4b3YxXtk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    เปิดใน Google Maps
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