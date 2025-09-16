import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              กันเองพลาสติก บางน้ำจืด
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">ผู้เชี่ยวชาญด้านถุงพลาสติกและบรรจุภัณฑ์ มากกว่า 15 ปีของประสบการณ์ คุณภาพมาตรฐาน ราคาขายส่ง</p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>จันทร์-เสาร์ 08:00-17:00 น.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">เมนูหลัก</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                หน้าแรก
              </a>
              <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                สินค้าและบริการ
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                เกี่ยวกับเรา
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ติดต่อเรา
              </a>
            </nav>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2025 กันเองพลาสติก บางน้ำจืด. สงวนลิขสิทธิ์.</p>
            
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">
                ✓ คุณภาพมาตรฐาน
              </span>
              <span className="text-sm text-muted-foreground">
                ✓ ส่งทั่วประเทศ
              </span>
              <span className="text-sm text-muted-foreground">
                ✓ บริการมืออาชีพ
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;