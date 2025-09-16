import { ArrowLeft, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import FloatingContactButtons from "../components/FloatingContactButtons";
import catalogKonomiGreen from "../assets/catalog-konomi-classic-green.jpg";
import catalogKonomiRed from "../assets/catalog-konomi-spicy-red.jpg";
import catalogTaokaenoi from "../assets/catalog-taokaenoi-clear.jpg";
import catalogUluck from "../assets/catalog-uluck-mop.jpg";
import catalogIntexPillow from "../assets/catalog-intex-pillow.jpg";
import catalogElephantSeaweed from "../assets/catalog-elephant-seaweed.jpg";
import catalogEagleMop from "../assets/catalog-eagle-mop.jpg";
import catalogBigboomSeaweed from "../assets/catalog-bigboom-seaweed.jpg";
import catalogClothHanger156 from "../assets/catalog-cloth-hanger-156.jpg";
import catalogClothHanger357 from "../assets/catalog-cloth-hanger-357.jpg";
import catalogCoconutJuice from "../assets/catalog-coconut-juice.jpg";
import catalogChaithatSeafood from "../assets/catalog-chaithat-seafood.jpg";
import catalogCoconutJuice280g from "../assets/catalog-coconut-juice-280g.jpg";
import catalogHaifaFertilizer from "../assets/catalog-haifa-fertilizer.jpg";
import catalogJoyCleanPowder from "../assets/catalog-joy-clean-powder.jpg";
import catalogTapiocaPearl from "../assets/catalog-tapioca-pearl.jpg";
import catalogJoyCleanSponge from "../assets/catalog-joy-clean-sponge.jpg";
import catalogFishBall500g from "../assets/catalog-fish-ball-500g.jpg";
import catalogArrayHinge from "../assets/catalog-array-hinge.jpg";
import catalogCornStarch from "../assets/catalog-corn-starch.jpg";
import catalogBigbearChocolate from "../assets/catalog-bigbear-chocolate.jpg";
import catalogEnjoyYogurt from "../assets/catalog-enjoy-yogurt.jpg";
import catalogFunBalloon from "../assets/catalog-fun-balloon.jpg";
import catalogCrabCake from "../assets/catalog-crab-cake.jpg";
import catalogLionBlade from "../assets/catalog-lion-blade.jpg";
import catalogJpCrabStick from "../assets/catalog-jp-crab-stick.jpg";
import catalogChabaShampoo from "../assets/catalog-chaba-shampoo.jpg";
import catalogEagleCoconut from "../assets/catalog-eagle-coconut.jpg";
import catalogBigbearPremium from "../assets/catalog-bigbear-premium.jpg";
const PrintCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const catalogItems = [{
    id: 1,
    title: "KONOMI XL Classic - สีเขียว",
    image: catalogKonomiGreen,
    category: "1 สี"
  }, {
    id: 2,
    title: "KONOMI XL Spicy - สีแดง",
    image: catalogKonomiRed,
    category: "1 สี"
  }, {
    id: 3,
    title: "TAOKAENOI - ซองใสพิมพ์ดำ",
    image: catalogTaokaenoi,
    category: "1 สี"
  }, {
    id: 4,
    title: "U LUCK - ผ้าม็อป เขียวไวท์",
    image: catalogUluck,
    category: "2 สี"
  }, {
    id: 5,
    title: "A_Intex - หมอน Polyester",
    image: catalogIntexPillow,
    category: "2 สี"
  }, {
    id: 6,
    title: "สาหร่ายช้าง - รสเผ็ด",
    image: catalogElephantSeaweed,
    category: "2 สี"
  }, {
    id: 7,
    title: "Eagle Mop - ม็อปนกอินทรี",
    image: catalogEagleMop,
    category: "2 สี"
  }, {
    id: 8,
    title: "Big Boom - สาหร่ายใส",
    image: catalogBigboomSeaweed,
    category: "3 สี"
  }, {
    id: 9,
    title: "Double Geese NO.156 - ไม้แขวน",
    image: catalogClothHanger156,
    category: "3 สี"
  }, {
    id: 10,
    title: "Double Geese NO.357 - ไม้แขวน",
    image: catalogClothHanger357,
    category: "3 สี"
  }, {
    id: 11,
    title: "Phoenix Coconut Juice - น้ำมะพร้าว",
    image: catalogCoconutJuice,
    category: "3 สี"
  }, {
    id: 12,
    title: "ชัยทัศซีฟู๊ด - เครื่องปรุงรส",
    image: catalogChaithatSeafood,
    category: "3 สี"
  }, {
    id: 13,
    title: "Sunrise Coconut Juice - น้ำมะพร้าว 280g",
    image: catalogCoconutJuice280g,
    category: "4 สี"
  }, {
    id: 14,
    title: "Haifa K - ปุ๋ยโปแตสเซียม",
    image: catalogHaifaFertilizer,
    category: "4 สี"
  }, {
    id: 15,
    title: "Joy Clean - ผงซักฟอก",
    image: catalogJoyCleanPowder,
    category: "4 สี"
  }, {
    id: 16,
    title: "Red Bowl - ลูกเต๋าสาคู",
    image: catalogTapiocaPearl,
    category: "4 สี"
  }, {
    id: 17,
    title: "Joy Clean - ฟองน้ำล้างจาน",
    image: catalogJoyCleanSponge,
    category: "4 สี"
  }, {
    id: 18,
    title: "Wudk - ลูกชิ้นปลา 500g",
    image: catalogFishBall500g,
    category: "4 สี"
  }, {
    id: 19,
    title: "Array Euro System - บานพับ",
    image: catalogArrayHinge,
    category: "4 สี"
  }, {
    id: 20,
    title: "Winner Corn Starch - แป้งข้าวโพด",
    image: catalogCornStarch,
    category: "5 สี"
  }, {
    id: 21,
    title: "Big Bear Chocolate - ลูกอมช็อกโกแลต",
    image: catalogBigbearChocolate,
    category: "5 สี"
  }, {
    id: 22,
    title: "Enjoy Yogurt - โยเกิร์ต",
    image: catalogEnjoyYogurt,
    category: "5 สี"
  }, {
    id: 23,
    title: "Fun Balloon - บอลลูน",
    image: catalogFunBalloon,
    category: "5 สี"
  }, {
    id: 24,
    title: "OTOP Crab Cake - โจ๊กปูป่น",
    image: catalogCrabCake,
    category: "5 สี"
  }, {
    id: 25,
    title: "Lion Blade - ใบมีดสิงโต",
    image: catalogLionBlade,
    category: "5 สี"
  }, {
    id: 26,
    title: "JP Crab Stick - ปูอัด",
    image: catalogJpCrabStick,
    category: "6 สี"
  }, {
    id: 27,
    title: "chaba - น้ำตาลมะพร้าวอย่างดี",
    image: catalogChabaShampoo,
    category: "6 สี"
  }, {
    id: 28,
    title: "Eagle Coconut Water - น้ำมะพร้าวนกอินทรี",
    image: catalogEagleCoconut,
    category: "6 สี"
  }, {
    id: 29,
    title: "Big Bear Premium - ลูกอมพรีเมี่ยม",
    image: catalogBigbearPremium,
    category: "8 สี"
  }];
  const categories = ["ทั้งหมด", "1 สี", "2 สี", "3 สี", "4 สี", "5 สี", "6 สี", "8 สี"];
  const filteredItems = selectedCategory === "ทั้งหมด" ? catalogItems : catalogItems.filter(item => item.category === selectedCategory);
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border/30 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300">
                <div className="p-2 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors">
                  <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-2px] transition-transform" />
                </div>
                <span className="font-medium">กลับหน้าหลัก</span>
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                แคตตาล็อกงานพิมพ์
              </h1>
            </div>
            <div className="w-[140px]"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        {/* Hero Title Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-3xl"></div>
          <div className="relative">
            <div className="inline-block mb-6">
              <div className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                ✨ ความเชี่ยวชาญมากกว่า 20 ปี
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              ตัวอย่างงาน<span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">พิมพ์</span>คุณภาพสูง
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ผลงานพิมพ์/ออกแบบถุงพลาสติก <span className="font-semibold text-primary">1-8 สี</span> คุณภาพจากกันเองพลาสติก(บางน้ำจืด)
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-3">เลือกตามจำนวนสี</h3>
            <p className="text-muted-foreground">คลิกเพื่อกรองตามจำนวนสีที่ต้องการ</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => 
              <button 
                key={category} 
                onClick={() => setSelectedCategory(category)} 
                className={`group relative px-8 py-3 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 scale-105" 
                    : "bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground border border-border/30 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent animate-pulse"></div>
                )}
                <span className="relative z-10">{category}</span>
              </button>
            )}
          </div>
        </div>


        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {filteredItems.map(item => 
            <div 
              key={item.id} 
              className="group bg-card/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:border-primary/30" 
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain bg-white group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-3 py-1.5 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full font-semibold border border-primary/20">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-relaxed group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Image Modal */}
      {selectedImage && <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <img src={selectedImage} alt="Catalog preview" className="w-full h-full object-contain rounded-lg bg-white" />
          </div>
        </div>}

      <FloatingContactButtons />
    </div>
  );
};
export default PrintCatalog;