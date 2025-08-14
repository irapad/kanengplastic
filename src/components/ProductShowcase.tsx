import { useState } from "react";
import { Search, Package, Info } from "lucide-react";
import plasticBagClear from "@/assets/plastic-bag-clear.jpg";
import plasticBagWhite from "@/assets/plastic-bag-white.jpg";
import plasticBagFood from "@/assets/plastic-bag-food.jpg";
import plasticBagHDPE from "@/assets/plastic-bag-hdpe.jpg";
import tapeOPP from "@/assets/tape-opp.jpg";
import sealingMachine from "@/assets/sealing-machine.jpg";

const ProductShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  const products = [
    {
      id: 1,
      category: "ถุงพลาสติก",
      name: "ถุงตรามังกรเต่า",
      description: "ถุงพลาสติกคุณภาพดี ตราดัง",
      minSize: "2″ ขึ้นไป",
      features: "ทนทาน แข็งแรง เหมาะใช้งานทั่วไป",
      image: plasticBagClear,
      popular: true
    },
    {
      id: 2,
      category: "ถุงพลาสติก",
      name: "ถุงตราปลาคราฟ",
      description: "ถุงพลาสติกตราที่นิยม มีคุณภาพ",
      minSize: "2″ ขึ้นไป",
      features: "เนื้อถุงดี ทนการฉีกขาด ราคาประหยัด",
      image: plasticBagWhite
    },
    {
      id: 3,
      category: "ถุงพลาสติก",
      name: "ถุง PP (Polypropylene)",
      description: "ถุงร้อน ทนความร้อนสูง",
      minSize: "2″ ขึ้นไป",
      features: "ทนความร้อนได้ถึง 100°C เหมาะใส่อาหารร้อน",
      image: plasticBagFood
    },
    {
      id: 4,
      category: "ถุงพลาสติก",
      name: "ถุง HDA (High Density)",
      description: "ถุงพลาสติกความหนาแน่นสูง",
      minSize: "4″ ขึ้นไป",
      features: "แข็งแรง ทนทาน เหมาะสำหรับสินค้าหนัก",
      image: plasticBagHDPE
    },
    {
      id: 5,
      category: "ถุงพลาสติก",
      name: "ถุง HD ขุ่น",
      description: "ถุงพลาสติก HDPE เนื้อขุ่น",
      minSize: "4″ ขึ้นไป",
      features: "ทนแรงกระแทก ไม่โปร่งใส เหมาะทำถุงหูหิ้ว",
      image: plasticBagWhite
    },
    {
      id: 6,
      category: "ถุงพลาสติก",
      name: "ถุง LL ฟู๊ดส์เกรด",
      description: "ถุงเย็น Linear Low Density",
      minSize: "3″ ขึ้นไป",
      features: "Food Grade เหนียว ยืดหยุ่น เหมาะบรรจุอาหาร",
      image: plasticBagFood
    },
    {
      id: 7,
      category: "ถุงพลาสติก",
      name: "ถุงแก้ว OPP",
      description: "ถุงใส กรอบ แวววาว",
      minSize: "2″ ขึ้นไป",
      features: "ใสแจ๋ว กันความชื้น เหมาะบรรจุขนม เบเกอรี่",
      image: plasticBagClear
    },
    {
      id: 8,
      category: "ถุงพลาสติก",
      name: "ถุงหิ้ว",
      description: "ถุงหูหิ้วหลากหลายเกรด",
      minSize: "6″ ขึ้นไป",
      features: "มีหูหิ้วสะดวกใช้ หลายเกรด A, B",
      image: plasticBagWhite,
      popular: true
    },
    {
      id: 9,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "เทปกาว",
      description: "เทปใส OPP และเทปสี",
      minSize: "-",
      features: "กาวแน่น ติดดี หลากหลายขนาด",
      image: tapeOPP
    },
    {
      id: 10,
      category: "เครื่องจักร",
      name: "เครื่องรีดถุง",
      description: "เครื่องซีลปิดปากถุงพลาสติก",
      minSize: "-",
      features: "ซีลได้แน่น ใช้งานง่าย ประหยัดเวลา",
      image: sealingMachine,
      popular: true
    }
  ];

  const categories = ["ทั้งหมด", "ถุงพลาสติก", "อุปกรณ์แพ็คกิ้ง", "เครื่องจักร"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="ค้นหาสินค้า..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
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
            <div
              key={product.id}
              className={`product-card group fade-in stagger-${(index % 6) + 1}`}
            >
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
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Package className="w-4 h-4 text-primary" />
                    <span className="font-medium">ขนาดขั้นต่ำ: {product.minSize}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2 text-sm">
                    <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      {product.features}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full contact-btn phone-btn text-sm py-2 mt-4">
                  สอบถามราคา
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 fade-in">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              ไม่พบสินค้าที่ค้นหา
            </h3>
            <p className="text-muted-foreground">
              ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่อื่น
            </p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ต้องการสินค้าเฉพาะ หรือสั่งในจำนวนมาก?
            </h3>
            <p className="text-muted-foreground mb-6">
              เรามีสินค้าหลากหลายมากกว่าที่แสดง และรับผลิตตามออเดอร์พิเศษ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0819222884" className="contact-btn phone-btn">
                โทรสอบถาม 081-922-2884
              </a>
              <a 
                href="https://line.me/R/ti/p/0819222884"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn line-btn"
              >
                Line สอบถาม
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;