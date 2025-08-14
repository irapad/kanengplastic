import { useState } from "react";
import { Search, Package, Info } from "lucide-react";
import turtleDragonBag from "@/assets/turtle-dragon-bag.jpg";
import carpBag from "@/assets/carp-bag.jpg";
import ppBag from "@/assets/pp-bag.jpg";
import hdBag from "@/assets/hd-bag.jpg";
import llFoodgrade from "@/assets/ll-foodgrade.jpg";
import oppBag from "@/assets/opp-bag.jpg";
import tshirtBag from "@/assets/tshirt-bag.jpg";
import plasticRoll from "@/assets/plastic-roll.jpg";
import oppTape from "@/assets/opp-tape.jpg";
import stretchFilm from "@/assets/stretch-film.jpg";
import strapping from "@/assets/strapping.jpg";
import bubbleFoam from "@/assets/bubble-foam.jpg";
import impulseSealer from "@/assets/impulse-sealer.jpg";

const ProductShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  const products = [
    {
      id: 1,
      category: "ถุงพลาสติก",
      name: "ถุงพลาสติกตรามังกรเต่า",
      description: "ถุงร้อน PP ใส, ทนความร้อน",
      sizes: "4×6″, 5×8″, 6×9″, 7×11″, 8×12″",
      features: "ถุงร้อน PP ใส ทนความร้อน เหมาะสำหรับใส่อาหารร้อน",
      image: turtleDragonBag,
      popular: true
    },
    {
      id: 2,
      category: "ถุงพลาสติก",
      name: "ถุงพลาสติกตราปลาคราฟ",
      description: "ถุงเย็น LL ใส, เหมาะสำหรับแช่แข็ง",
      sizes: "5×8″, 6×9″, 8×12″, 9×14″",
      features: "ถุงเย็น LL ใส เหมาะสำหรับแช่แข็ง เนื้อเหนียวยืดหยุ่น",
      image: carpBag
    },
    {
      id: 3,
      category: "ถุงพลาสติก",
      name: "ถุง PP",
      description: "ถุงร้อนใส (Polypropylene) เนื้อแข็งกรอบกว่า LL",
      sizes: "4×6″, 6×9″, 10×15″",
      features: "เนื้อแข็งกรอบ ทนความร้อน เหมาะสำหรับอาหารร้อน",
      image: ppBag
    },
    {
      id: 4,
      category: "ถุงพลาสติก",
      name: "HDA / HD ขุ่น",
      description: "ถุงขุ่น (HDPE) หรือถุงไฮเดน",
      sizes: "6×11″, 6×14″, 8×15″, 9×18″",
      features: "ถุงขุ่น แข็งแรง ทนทาน เหมาะสำหรับสินค้าหนัก",
      image: hdBag
    },
    {
      id: 5,
      category: "ถุงพลาสติก",
      name: "LL ฟู้ดส์เกรด",
      description: "ถุงเย็น (LLDPE) เนื้อเหนียวยืดหยุ่น สำหรับอาหาร",
      sizes: "6×9″, 8×12″, 12×18″",
      features: "Food Grade เหนียวยืดหยุ่น ปลอดภัยสำหรับอาหาร",
      image: llFoodgrade
    },
    {
      id: 6,
      category: "ถุงพลาสติก",
      name: "ถุงแก้ว OPP",
      description: "ถุงใสกรอบ มีแถบกาว สำหรับใส่เสื้อผ้า, ของชำร่วย",
      sizes: "8×12+2″, 10×15+2″",
      features: "ใสกรอบ มีแถบกาว เหมาะสำหรับเสื้อผ้า ของชำร่วย",
      image: oppBag
    },
    {
      id: 7,
      category: "ถุงพลาสติก",
      name: "ถุงหิ้ว",
      description: "ถุงหิ้วพลาสติก (ถุงก๊อบแก๊บ)",
      sizes: "6×14″, 8×16″, 9×18″, 12×20″",
      features: "มีหูหิ้วสะดวกใช้ แข็งแรงทนทาน",
      image: tshirtBag,
      popular: true
    },
    {
      id: 8,
      category: "ถุงพลาสติก",
      name: "ม้วนพลาสติก",
      description: "ม้วนพลาสติก LDPE สำหรับปูพื้น, คลุมของ",
      sizes: "หน้ากว้าง: 1.2 ม., 1.5 ม., 2.0 ม.",
      features: "ม้วนพลาสติก LDPE เหมาะสำหรับปูพื้น คลุมของ",
      image: plasticRoll
    },
    {
      id: 9,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "เทป",
      description: "เทปใส/เทปสีน้ำตาล (OPP Tape) สำหรับปิดกล่อง",
      sizes: "หน้ากว้าง: 2 นิ้ว, ความยาว: 45 หลา, 100 หลา",
      features: "กาวแน่น ติดดี เหมาะสำหรับปิดกล่อง",
      image: oppTape
    },
    {
      id: 10,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "ฟิล์มยืด",
      description: "ฟิล์มยืดพันพาเลท (Stretch Film)",
      sizes: "หนา: 15, 17, 20 ไมครอน, หน้ากว้าง: 50 ซม.",
      features: "ฟิล์มยืดพันพาเลท ยืดหยุ่นสูง ปกป้องสินค้า",
      image: stretchFilm
    },
    {
      id: 11,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "สายรัด",
      description: "สายรัดพลาสติก (PP Band) สำหรับรัดกล่อง",
      sizes: "หน้ากว้าง: 9 มม., 12 มม., 15 มม.",
      features: "สายรัดพลาสติก แข็งแรง เหมาะสำหรับรัดกล่อง",
      image: strapping
    },
    {
      id: 12,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "ม้วนกันกระแทก",
      description: "แอร์บับเบิ้ล หรือ โฟม EPE",
      sizes: "หน้ากว้างมาตรฐาน: 0.65 ม., 1.30 ม.",
      features: "กันกระแทก ปกป้องสินค้า มี 2 ชนิด แอร์บับเบิ้ล และโฟม EPE",
      image: bubbleFoam
    },
    {
      id: 13,
      category: "เครื่องจักร",
      name: "เครื่องรีดถุง",
      description: "เครื่องซีลถุงพลาสติกแบบมือกด (Impulse Sealer)",
      sizes: "ขนาดความยาวลวด: 8″, 12″, 16″",
      features: "ซีลได้แน่น ใช้งานง่าย ประหยัดเวลา",
      image: impulseSealer,
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
                    <span className="font-medium">ขนาด: {product.sizes}</span>
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