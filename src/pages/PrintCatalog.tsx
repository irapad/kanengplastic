import { ArrowLeft, Download, Palette, Info, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import catalogKonomiGreen from "../assets/catalog-konomi-classic-green.jpg";
import catalogKonomiRed from "../assets/catalog-konomi-spicy-red.jpg";
import catalogTaokaenoi from "../assets/catalog-taokaenoi-clear.jpg";
import catalogUluck from "../assets/catalog-uluck-mop.jpg";

const PrintCatalog = () => {
  const catalogItems = [
    {
      id: 1,
      title: "KONOMI XL Classic - สีเขียว",
      colors: 1,
      description: "ถุงซองใสพิมพ์ 1 สี (เขียว) ลายสาหร่ายทอด รสคลาสสิก",
      image: catalogKonomiGreen,
      specifications: [
        "ขนาด: 200×255 มม.",
        "พิมพ์ 1 สี (Pantone 3405 C)",
        "วัสดุ: OPP ใส 70 ไมครอน",
        "น้ำหนัก: 6 กรัม"
      ],
      features: [
        "พิมพ์คมชัด เส้นสีสม่ำเสมอ",
        "ซองใสเนื้อดี ไม่ขุ่น",
        "V-Cut สะดวกในการเปิด"
      ],
      category: "1 สี"
    },
    {
      id: 2,
      title: "KONOMI XL Spicy - สีแดง",
      colors: 1,
      description: "ถุงซองใสพิมพ์ 1 สี (แดง) ลายสาหร่ายทอด รสเผ็ด",
      image: catalogKonomiRed,
      specifications: [
        "ขนาด: 200×240 มม.",
        "พิมพ์ 1 สี (Pantone 185 C)",
        "วัสดุ: OPP ใส 70 ไมครอน",
        "น้ำหนัก: 6 กรัม"
      ],
      features: [
        "สีแดงสดใส มีความคมชัด",
        "ซองใสคุณภาพสูง",
        "เหมาะสำหรับอาหารทะเล"
      ],
      category: "1 สี"
    },
    {
      id: 3,
      title: "TAOKAENOI - ซองใสพิมพ์ดำ",
      colors: 1,
      description: "ถุงซองใสพิมพ์ 1 สี (ดำ) ลายสาหร่ายย่าง แบรนด์เถ้าแก่น้อย",
      image: catalogTaokaenoi,
      specifications: [
        "ขนาด: 200×240 มม.",
        "พิมพ์ 1 สี (สีดำ)",
        "วัสดุ: OPP ใส 70 ไมครอน",
        "น้ำหนัก: 6 กรัม"
      ],
      features: [
        "ดีไซน์เรียบง่าย มีเอกลักษณ์",
        "ซองใสใช้งานง่าย",
        "เหมาะสำหรับขนมสาหร่าย"
      ],
      category: "1 สี"
    },
    {
      id: 4,
      title: "U LUCK - ผ้าม็อป เขียวทไวท์",
      colors: 2,
      description: "ถุงหูหิ้วพิมพ์ 2 สี ลายผ้าม็อปยี่ห้อ U LUCK",
      image: catalogUluck,
      specifications: [
        "ขนาด: 14×18 นิ้ว",
        "พิมพ์ 2 สี (เขียว + ขาว)",
        "วัสดุ: HDPE หูหิ้ว",
        "รองรับน้ำหนัก: 5-8 กิโลกรัม"
      ],
      features: [
        "พิมพ์ 2 สี คมชัด สวยงาม",
        "หูหิ้วแข็งแรงทนทาน",
        "เหมาะสำหรับสินค้าภายในบ้าน"
      ],
      category: "2 สี"
    }
  ];

  const colorCategories = ["ทั้งหมด", "1 สี", "2 สี", "3 สี", "4 สี", "5 สี", "6 สี", "7 สี", "8 สี"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>กลับสู่หน้าหลัก</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">แคตตาล็อกถุงพิมพ์</span>
              <span className="text-foreground"> 1-8 สี</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              ตัวอย่างงานพิมพ์ลายคุณภาพสูง รับสั่งผลิตตามแบบ MOQ เริ่มต้น 1,000 ใบ
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Color Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {colorCategories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {catalogItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 fade-in stagger-${index + 1}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.colors === 1 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    }`}>
                      {item.colors} สี
                    </span>
                    <span className="text-xs text-muted-foreground">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  <Download className="w-4 h-4 text-primary" />
                </button>
              </div>

              {/* Image */}
              <div className="mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-contain bg-white/5 rounded-xl border border-border/30"
                />
              </div>

              {/* Specifications */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold text-foreground">ข้อมูลเทคนิค</h4>
                  </div>
                  <ul className="space-y-1">
                    {item.specifications.map((spec, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold text-foreground">จุดเด่น</h4>
                  </div>
                  <ul className="space-y-1">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-border/30">
                <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-3 font-semibold transition-colors">
                  สอบถามราคา & สั่งผลิต
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center py-12 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50">
          <Palette className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">แคตตาล็อกงานพิมพ์ 3-8 สี</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            เรากำลังจัดเตรียมตัวอย่างงานพิมพ์หลากสีเพิ่มเติม ระบบการจัดการแคตตาล็อกออนไลน์ และเครื่องมือช่วยเลือกสีที่ทันสมัย
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">3-4 สี กำลังมา</span>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">5-6 สี กำลังมา</span>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">7-8 สี กำลังมา</span>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ต้องการสั่งผลิตถุงพิมพ์ตามแบบ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              เรารับผลิตถุงพิมพ์ลายตามความต้องการ 1-8 สี พร้อมบริการออกแบบฟรี 
              MOQ เริ่มต้น 1,000 ใบ ส่งมอบรวดเร็ว คุณภาพมาตรฐานส่งออก
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button className="w-full sm:w-auto contact-btn phone-btn px-8 py-3">
                โทรสอบถาม 096-636-5000
              </button>
              <button className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg px-8 py-3 transition-colors">
                ส่งรูปขอเสนอราคา
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintCatalog;