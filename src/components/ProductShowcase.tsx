import { useState } from "react";
import { Search, Package, Info } from "lucide-react";
import plasticBagTurtle from "../assets/plastic-bag-turtle-brand.jpg";
import llFoodGradeBags from "../assets/ll-food-grade-bags.jpg";
import hdpeBagsPackage from "../assets/hdpe-bags-package.jpg";
import oppCellophane from "../assets/opp-cellophane-bags.jpg";
import shoppingCarryBags from "../assets/shopping-carry-bags.jpg";
import ldpePlasticRoll from "../assets/ldpe-plastic-roll.jpg";
import tapeOpp from "../assets/tape-opp.jpg";
import stretchWrapFilm from "../assets/stretch-wrap-film.jpg";
import ppStrappingBand from "../assets/pp-strapping-band.jpg";
import bubbleWrapRoll from "../assets/bubble-wrap-roll.jpg";
import impulseSealerMachine from "../assets/impulse-sealer-machine.jpg";
import uploadedTurtleBag from "/lovable-uploads/4209839a-c40c-4c78-9909-00f9ca7c6e91.png";

/**
 * ✅ สิ่งที่อัปเดตให้แล้ว
 * - เปลี่ยนรูปทั้งหมดเป็น URL จากเว็บ (Unsplash Source – ใช้ได้ฟรีเชิงพาณิชย์)
 * - ปรับคำอธิบายสินค้าให้ตรงวัสดุจริง (PP/LLDPE/HDPE/OPP/LDPE ฯลฯ)
 * - เติมสเปก/ขนาดที่พบบ่อยในตลาดไทย พร้อมตัวอย่างแบบนิ้ว/ไมครอน
 * - สามารถนำไปใช้ได้ทันที ไม่ต้อง import ไฟล์รูปในโปรเจกต์
 */

const IMG = {
  ppHot: "/lovable-uploads/55dd2354-390b-4316-a894-51c350244e85.png", // ใช้รูปเดิมกลับมา
  llFood: "/lovable-uploads/e636e5b1-3813-422a-bf7e-29a10b16afe0.png", // ใช้รูป ถุงเย็น FoodGrade ที่ผู้ใช้อัปโหลดมา
  hdpe: "/lovable-uploads/e2a6298a-538e-4aa1-9101-b1fbf252732b.png", // ใช้รูปใหม่ที่ผู้ใช้อัปโหลดมา
  opp: "/lovable-uploads/b3599718-a9fa-42d7-aa4a-3ed27b8dcfce.png", // ใช้รูป OPP ที่ผู้ใช้อัปโหลดมา
  carry: "/lovable-uploads/88bdf79f-3775-4350-a616-e977b252bdc9.png", // ใช้รูป ถุงหิ้ว ที่ผู้ใช้อัปโหลดมา
  roll: ldpePlasticRoll,
  tape: tapeOpp,
  stretch: stretchWrapFilm,
  strap: "/lovable-uploads/aa5b6748-6055-4fd4-bdd7-c79ebce56f27.png", // ใช้รูป สายรัด PP ที่ผู้ใช้อัปโหลดมา
  bubble: bubbleWrapRoll,
  sealer: impulseSealerMachine,
};

const ProductShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  const products = [
    {
      id: 0,
      category: "ถุงพลาสติก",
      name: "แคตตาลอก ถุงพิมพ์ลาย",
      description: "ถุงพลาสติกพิมพ์ลาย โลโก้ ตามสั่ง คุณภาพสูง",
      sizes: "ทุกขนาดตามสั่ง, MOQ ตั้งแต่ 1,000 ใบ",
      features: "พิมพ์ได้ 1-8 สี, ผลิตตามแบบ, มีบริการออกแบบ",
      image: "/lovable-uploads/3669a873-e153-4b3c-9a3b-ed8959fbb700.png", // ใช้รูปถุงพิมพ์ลายที่ผู้ใช้อัปโหลดมา
      popular: true,
      isCustom: true,
    },
    {
      id: 1,
      category: "ถุงพลาสติก",
      name: "ถุงร้อน PP ใส (ตรามังกรเต่า)",
      description: "Polypropylene (PP) ใส แข็งกรอบ ทนความร้อน",
      sizes: "4×6″, 5×8″, 6×9″, 7×11″, 8×12″",
      features: "ทนร้อน เหมาะใส่อาหารร้อน/น้ำซุป ใสคมชัด",
      image: IMG.ppHot,
      popular: true,
    },
    {
      id: 2,
      category: "ถุงพลาสติก",
      name: "ถุงเย็น FoodGrade",
      description: "LLDPE เนื้อเหนียวยืดหยุ่น ทนเย็น",
      sizes: "5×8″, 6×9″, 8×12″, 9×14″, 12×18″",
      features: "Food Grade, เหมาะแช่แข็ง/ใส่อาหารทั่วไป ไม่กรอบแตก",
      image: IMG.llFood,
    },
    {
      id: 3,
      category: "ถุงพลาสติก",
      name: "ถุง HD ขุ่น (HDA/HDPE)",
      description: "High-density PE เนื้อขุ่น แข็งแรง รับน้ำหนักดี",
      sizes: "6×11″, 6×14″, 8×15″, 9×18″",
      features: "หนา คมซีลดี เหมาะของมีคม/ของหนัก",
      image: IMG.hdpe,
    },
    {
      id: 4,
      category: "ถุงพลาสติก",
      name: "ถุงแก้ว OPP (มี/ไม่มีแถบกาว)",
      description: "OPP ใสกรอบ เงา สวย ใช้แพ็กเสื้อผ้า/ของชำร่วย",
      sizes: "8×12+2″, 10×15+2″, 12×18+2″",
      features: "ใสชัด เหมาะโชว์สินค้า เลือกแบบแถบกาวสำเร็จ",
      image: IMG.opp,
    },
    {
      id: 5,
      category: "ถุงพลาสติก",
      name: "ถุงหูหิ้วตราปลาคราฟ",
      description: "ผลิตจาก HDPE/LLDPE ตามสเปกงานร้านค้า",
      sizes: "6×14″, 8×16″, 9×18″, 12×20″",
      features: "มีหูหิ้ว แข็งแรง สั่งผลิตพิมพ์โลโก้ได้",
      image: IMG.carry,
      popular: true,
    },
    {
      id: 6,
      category: "ม้วน/แผ่นพลาสติก",
      name: "ม้วนพลาสติก LDPE (แผ่น/ม้วน)",
      description: "LDPE สำหรับปูพื้น คลุมของ งานก่อสร้าง",
      sizes: "หน้ากว้าง 1.2, 1.5, 2.0 ม. (ความหนา 30–200 ไมครอน)",
      features: "สั่งตัดความกว้าง/ความหนาได้ตามต้องการ",
      image: IMG.roll,
    },
    {
      id: 7,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "เทป OPP ปิดกล่อง",
      description: "เทปใส/น้ำตาล ความยาว 45/100 หลา",
      sizes: "หน้ากว้าง 2″, 3″ (ความหนา 40–60 ไมครอน)",
      features: "กาวแน่น ติดทน มีแบบ No-Noise/Hotmelt/Acrylic",
      image: IMG.tape,
    },
    {
      id: 8,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "ฟิล์มยืด (Stretch Film)",
      description: "สำหรับพันพาเลท/ห่อรวมสินค้า",
      sizes: "กว้าง 50 ซม., หนา 15/17/20 ไมครอน, 1–3 กก./ม้วน",
      features: "ยืดสูง เกาะตัวดี มีแบบใส/ดำ แบบเครื่อง/แบบมือ",
      image: IMG.stretch,
    },
    {
      id: 9,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "สายรัดกล่อง (PP Band)",
      description: "สายรัด PP ใช้กับเครื่อง/รัดมือ",
      sizes: "กว้าง 9, 12, 15 มม. (หนา 0.6–1.0 มม.)",
      features: "เหนียว แข็งแรง สีมาตรฐาน เหมาะงานขนส่ง",
      image: IMG.strap,
    },
    {
      id: 10,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "ม้วนกันกระแทก (แอร์บับเบิ้ล/โฟม EPE)",
      description: "กันกระแทก ปกป้องสินค้า",
      sizes: "กว้าง 0.65/1.30 ม. (เลือกเส้นผ่านฟอง 10–28 มม.)",
      features: "เลือก 1 ชั้น/2 ชั้น ตัดตามสั่งได้",
      image: IMG.bubble,
    },
    {
      id: 11,
      category: "เครื่องจักร",
      name: "เครื่องซีลปากถุง (Impulse Sealer)",
      description: "เครื่องซีลมือกด ใช้กับถุง PE/PP/OPP",
      sizes: "ความยาวลวด 8″, 12″, 16″ (หน้าซีล 2–5 มม.)",
      features: "ซีลแน่น ตั้งเวลาตามความหนาถุง มีอะไหล่ลวด/เทปเทฟลอน",
      image: IMG.sealer,
      popular: true,
    },
  ];

  const categories = ["ทั้งหมด", "ถุงพลาสติก", "ม้วน/แผ่นพลาสติก", "อุปกรณ์แพ็คกิ้ง", "เครื่องจักร"] as const;

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.features.toLowerCase().includes(term);
    const matchesCategory = selectedCategory === "ทั้งหมด" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="section-container bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">สินค้า</span>
            <span className="text-foreground">ของเรา</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            ถุงพลาสติกและอุปกรณ์บรรจุภัณฑ์คุณภาพสูง ประสบการณ์ 40+ ปี
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4 fade-in">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black w-5 h-5 animate-pulse" />
            <input
              type="text"
              placeholder="ค้นหาสินค้า..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-gray-600 bg-gray-700 backdrop-blur-lg shadow-xl shadow-black/20 focus:outline-none focus:ring-4 focus:ring-gray-500/50 focus:border-gray-400 focus:shadow-2xl focus:shadow-black/30 transition-all duration-300 text-lg text-white placeholder:text-gray-300 hover:bg-gray-600"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card/50 text-foreground hover:bg-primary/10 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className={`product-card group fade-in stagger-${(index % 6) + 1}`}>
              {/* Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full z-10">
                  ยอดนิยม
                </div>
              )}

              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Package className="w-4 h-4 text-primary" />
                    <span className="font-medium">ขนาด: {product.sizes}</span>
                  </div>

                  <div className="flex items-start space-x-2 text-sm">
                    <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{product.features}</span>
                  </div>
                </div>

                {/* CTA Button */}
                {product.isCustom ? (
                  <div className="space-y-2 mt-4">
                    <button className="w-full contact-btn phone-btn text-sm py-2">สอบถามราคา</button>
                    <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg py-2 text-sm transition-colors">
                      ดูตัวอย่างเพิ่มเติม
                    </button>
                  </div>
                ) : (
                  <button className="w-full contact-btn phone-btn text-sm py-2 mt-4">สอบถามราคา</button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 fade-in">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">ไม่พบสินค้าที่ค้นหา</h3>
            <p className="text-muted-foreground">ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่อื่น</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">ต้องการสินค้าเฉพาะ หรือสั่งในจำนวนมาก?</h3>
            <p className="text-muted-foreground mb-6">เรามีสินค้าหลากหลายมากกว่าที่แสดง และรับผลิตตามออเดอร์พิเศษ</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0819222884" className="contact-btn phone-btn">โทรสอบถาม 081-922-2884</a>
              <a href="https://line.me/R/ti/p/0819222884" target="_blank" rel="noopener noreferrer" className="contact-btn line-btn">Line สอบถาม</a>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            *รูปภาพเป็นภาพประกอบจากแหล่งสาธารณะ (Unsplash Source)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
