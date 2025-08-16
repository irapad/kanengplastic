import { Phone, MessageCircle, MapPin, Clock, Mail, Truck } from "lucide-react";
import mapPlaceholder from "../assets/google-maps-authentic.jpg";
const Contact = () => {
  return <section id="contact" className="section-container bg-background">
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
                  <a href="https://line.me/R/ti/p/0819222884" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-600/80 text-sm">
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
                  <a href="https://share.google/QodcxC1Nw4b3YxXtk" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 text-sm">
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

          {/* Contact Hub */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 border border-primary/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ติดต่อเราได้ทันที
                </h3>
                <p className="text-muted-foreground">
                  พร้อมให้คำปรึกษาและใบเสนอราคา
                </p>
              </div>

              {/* Primary Contact Methods */}
              <div className="space-y-4 mb-8">
                <a 
                  href="tel:0819222884" 
                  className="group flex items-center justify-between p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">โทรสอบถาม</h4>
                      <p className="text-primary font-medium">081-922-2884</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    →
                  </div>
                </a>

                <a 
                  href="https://line.me/R/ti/p/0819222884" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-green-600/20 hover:border-green-600/40 hover:bg-green-600/5 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">แชท Line</h4>
                      <p className="text-green-600 font-medium">081-922-2884</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground group-hover:text-green-600 transition-colors">
                    →
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-muted/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground text-sm">ที่ตั้งร้าน</h4>
                      <p className="text-muted-foreground text-sm">บางน้ำจืด สมุทรปราการ</p>
                    </div>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/tuiNyTepGDRAR7v57" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                    title="ดูแผนที่"
                  >
                    <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Services Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 border border-muted/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-card-foreground">เวลาทำการ</h4>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>จ.-ส.</span>
                    <span>08:00-17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>อาทิตย์</span>
                    <span>ปิด</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-muted/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-card-foreground">จัดส่ง</h4>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>✓ ส่งทั่วประเทศ</p>
                  <p>✓ รวดเร็ว ตรงเวลา</p>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-gradient-to-r from-muted/5 to-muted/10 rounded-xl p-6 border border-muted/20 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-card-foreground mb-2">ส่งอีเมลสอบถาม</h4>
              <p className="text-muted-foreground text-sm mb-4">
                สำหรับข้อมูลรายละเอียดและใบเสนอราคา
              </p>
              <a 
                href="mailto:info@kanongplastic.com" 
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
              >
                <span>info@kanongplastic.com</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;