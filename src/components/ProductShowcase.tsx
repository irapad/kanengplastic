import { useState } from "react";
import { Search, Package, Info, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
  ppHot: "/lovable-uploads/55dd2354-390b-4316-a894-51c350244e85.png",
  // ใช้รูปเดิมกลับมา
  llFood: "/lovable-uploads/e636e5b1-3813-422a-bf7e-29a10b16afe0.png",
  // ใช้รูป ถุงเย็น FoodGrade ที่ผู้ใช้อัปโหลดมา
  hdpe: "/lovable-uploads/e2a6298a-538e-4aa1-9101-b1fbf252732b.png",
  // ใช้รูปใหม่ที่ผู้ใช้อัปโหลดมา
  opp: "/lovable-uploads/b3599718-a9fa-42d7-aa4a-3ed27b8dcfce.png",
  // ใช้รูป OPP ที่ผู้ใช้อัปโหลดมา
  carry: "/lovable-uploads/88bdf79f-3775-4350-a616-e977b252bdc9.png",
  // ใช้รูป ถุงหิ้ว ที่ผู้ใช้อัปโหลดมา
  roll: ldpePlasticRoll,
  tape: tapeOpp,
  stretch: stretchWrapFilm,
  strap: "/lovable-uploads/aa5b6748-6055-4fd4-bdd7-c79ebce56f27.png",
  // ใช้รูป สายรัด PP ที่ผู้ใช้อัปโหลดมา
  bubble: bubbleWrapRoll,
  sealer: impulseSealerMachine
};

const ProductShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  
  const products = [
    {
      id: 0,
      category: "ถุงพลาสติก",
      name: "ตัวอย่างถุงพิมพ์ลาย",
      description: "ถุงพลาสติกพิมพ์ลาย โลโก้ ตามสั่ง คุณภาพสูง",
      sizes: "ทุกขนาดตามสั่ง",
      features: "พิมพ์ได้ 1-8 สี, ผลิตตามแบบ, มีบริการออกแบบ",
      image: "/lovable-uploads/3669a873-e153-4b3c-9a3b-ed8959fbb700.png",
      // ใช้รูปถุงพิมพ์ลายที่ผู้ใช้อัปโหลดมา
      popular: true,
      isCustom: true
    },
    {
      id: 1,
      category: "ถุงพลาสติก",
      name: "ถุงร้อน PP ใส (ตรามังกรเต่า)",
      description: "Polypropylene (PP) ใส แข็งกรอบ ทนความร้อน",
      sizes: "4×6″, 5×8″, 6×9″, 7×11″, 8×12″",
      features: "ทนร้อน เหมาะใส่อาหารร้อน/น้ำซุป ใสคมชัด",
      image: "/lovable-uploads/a990fcf3-f600-4918-a568-b7eda829b9bf.png",
      popular: true
    },
    {
      id: 2,
      category: "ถุงพลาสติก",
      name: "ถุงเย็น LL ใส (ตรามังกรเต่า)",
      description: "LLDPE เนื้อเหนียวยืดหยุ่น ทนเย็น",
      sizes: "5×8″, 6×9″, 8×12″, 9×14″, 12×18″",
      features: "Food Grade, เหมาะแช่แข็ง/ใส่อาหารทั่วไป ไม่กรอบแตก",
      image: "/lovable-uploads/11fd655f-cc96-4f96-aa4e-1dbf4878ac75.png"
    },
    {
      id: 3,
      category: "ถุงพลาสติก",
      name: "ถุง HD ขุ่น (HDA/HDPE)",
      description: "High-density PE เนื้อขุ่น แข็งแรง รับน้ำหนักดี",
      sizes: "6×11″, 6×14″, 8×15″, 9×18″",
      features: "หนา คมซีลดี เหมาะของมีคม/ของหนัก",
      image: IMG.hdpe
    },
    {
      id: 4,
      category: "ถุงพลาสติก",
      name: "ถุงแก้ว OPP (มี/ไม่มีแถบกาว)",
      description: "OPP ใสกรอบ เงา สวย ใช้แพ็กเสื้อผ้า/ของชำร่วย",
      sizes: "8×12+2″, 10×15+2″, 12×18+2″",
      features: "ใสชัด เหมาะโชว์สินค้า เลือกแบบแถบกาวสำเร็จ",
      image: IMG.opp
    },
    {
      id: 5,
      category: "ถุงพลาสติก",
      name: "ถุงหูหิ้วตราปลาคราฟ",
      description: "ผลิตจาก HDPE/LLDPE ตามสเปกงานร้านค้า",
      sizes: "6×14″, 8×16″, 9×18″, 12×20″",
      features: "มีหูหิ้ว แข็งแรง สั่งผลิตพิมพ์โลโก้ได้",
      image: IMG.carry,
      popular: true
    },
    {
      id: 6,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "สายรัดกล่อง (PP Band)",
      description: "สายรัด PP ใช้กับเครื่อง/รัดมือ",
      sizes: "กว้าง 9, 12, 15 มม. (หนา 0.6–1.0 มม.)",
      features: "เหนียว แข็งแรง สีมาตรฐาน เหมาะงานขนส่ง",
      image: "/lovable-uploads/e03d83ef-459e-4b86-8711-2791360b3b1a.png"
    },
    {
      id: 7,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "ม้วนกันกระแทก (แอร์บับเบิ้ล/โฟม EPE)",
      description: "กันกระแทก ปกป้องสินค้า",
      sizes: "กว้าง 0.65/1.30 ม. (เลือกเส้นผ่านฟอง 10–28 มม.)",
      features: "เลือก 1 ชั้น/2 ชั้น ตัดตามสั่งได้",
      image: "/lovable-uploads/ac47e2c4-f4d4-4720-84ab-b7eeb0c90532.png"
    },
    {
      id: 8,
      category: "เครื่องจักร",
      name: "เครื่องซีลปากถุง (Impulse Sealer)",
      description: "เครื่องซีลมือกด ใช้กับถุง PE/PP/OPP",
      sizes: "ความยาวลวด 8″, 12″, 16″ (หน้าซีล 2–5 มม.)",
      features: "ซีลแน่น ตั้งเวลาตามความหนาถุง มีอะไหล่ลวด/เทปเทฟลอน",
      image: IMG.sealer,
      popular: true
    },
    {
      id: 9,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "เชือกฟาง PP หลากสี",
      description: "เชือกฟาง PP สำหรับมัดของ ห่อพัสดุ งานโลจิสติกส์",
      sizes: "ขนาด 2 มม., 3 มม., 4 มม., 5 มม. (ความยาว 100-500 เมตร)",
      features: "แข็งแรง ทนทาน หลากสี (แดง, เขียว, น้ำเงิน, ขาว, เหลือง) มัดง่าย",
      image: "/lovable-uploads/72265905-916c-4ada-bb07-556d3827f82e.png"
    },
    {
      id: 10,
      category: "ถุงพลาสติก",
      name: "ถุงขยะ/ถุงหูหิ้วสี",
      description: "ถุงขยะและถุงหูหิ้วหลากสี HDPE/LLDPE คุณภาพสูง",
      sizes: "18×20″, 20×24″, 24×28″, 30×40″ (หูหิ้ว 6×14″, 8×16″)",
      features: "หลากสี (ดำ, ใส, แดง, เขียว, น้ำเงิน, เหลือง, ม่วง) แข็งแรงทนทาน",
      image: "/lovable-uploads/d700b795-9155-4d5b-be9b-538a3178a098.png"
    },
    {
      id: 11,
      category: "ถุงพลาสติก",
      name: "ซองไปรษณีย์พลาสติก",
      description: "ซองไปรษณีย์พลาสติก PE กันน้ำ แถบกาว ปิดปากแน่น",
      sizes: "A4 (24×34+4 ซม.), A5 (17×24+4 ซม.), A6 (12×17+4 ซม.)",
      features: "กันน้ำ 100% แถบกาวแน่น ปิดปากง่าย เหมาะส่งของออนไลน์",
      image: "/lovable-uploads/461b0186-b282-43d0-8f7b-26fd35b739b4.png",
      popular: true
    },
    {
      id: 12,
      category: "ม้วน/แผ่นพลาสติก",
      name: "ม้วนพลาสติกหลายลาย",
      description: "ม้วนพลาสติก PE/PP หลากลาย ตัดได้ตามต้องการ",
      sizes: "กว้าง 50-200 ซม., หนา 20-100 ไมครอน, ความยาวตามสั่ง",
      features: "หลายลาย หลายสี ตัดขนาดได้ตามต้องการ เหมาะงานอุตสาหกรรม",
      image: "/lovable-uploads/e0c8695f-b18a-4c19-99ae-6529ff7b81fc.png"
    },
    {
      id: 13,
      category: "อุปกรณ์แพ็คกิ้ง",
      name: "เทปขุน/ใส ฟิล์มยืด หนังยาง",
      description: "ชุดอุปกรณ์บรรจุภัณฑ์ครบครัน เทปหลากสี ฟิล์มยืด หนังยาง",
      sizes: "เทป 1-3 นิ้ว, ฟิล์มยืด 50 ซม., หนังยางหลายขนาด",
      features: "หลากสี แข็งแรงทนทาน เหมาะงานโลจิสติกส์ ราคาส่ง",
      image: "/lovable-uploads/c33a159c-22a7-4ea6-9fc4-ef0b4c558f48.png"
    }
  ];

  const categories = ["ทั้งหมด", "ถุงพลาสติก", "ม้วน/แผ่นพลาสติก", "อุปกรณ์แพ็คกิ้ง", "เครื่องจักร"] as const;
  
  const filteredProducts = products.filter(product => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(term) || 
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
            ถุงพลาสติกและอุปกรณ์บรรจุภัณฑ์คุณภาพสูง ประสบการณ์ 15+ ปี
          </p>
          
          {/* Print Catalog Button */}
          <div className="mb-8">
            <Link 
              to="/print-catalog" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              <Package className="w-5 h-5" />
              <span>ดูแคตตาล็อกถุงพิมพ์ลาย</span>
            </Link>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4 fade-in">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black w-5 h-5 animate-pulse" />
            <input 
              type="text" 
              placeholder="ค้นหาสินค้า..." 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-gray-600 bg-gray-700 backdrop-blur-lg shadow-xl shadow-black/20 focus:outline-none focus:ring-4 focus:ring-gray-500/50 focus:border-gray-400 focus:shadow-2xl focus:shadow-black/30 transition-all duration-300 text-lg text-white placeholder:text-gray-300 hover:bg-gray-600" 
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
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
            <div key={product.id} className={`product-card group fade-in stagger-${index % 6 + 1}`}>
              {/* Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full z-10">
                  ยอดนิยม
                </div>
              )}

              {/* Image */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative mb-4 overflow-hidden rounded-xl cursor-pointer group/image">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      loading="lazy" 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-black/20">
                      <div className="bg-white/90 rounded-full p-2">
                        <Search className="w-5 h-5 text-black" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-background border-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full max-h-[80vh] object-contain rounded-lg" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm opacity-90">{product.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

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
                    <Link 
                      to="/print-catalog" 
                      className="block w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg py-2 text-sm transition-colors text-center"
                    >
                      ดูตัวอย่างเพิ่มเติม
                    </Link>
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
      </div>
    </section>
  );
};

export default ProductShowcase;