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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                <ArrowLeft className="w-5 h-5" />
                <span>กลับหน้าหลัก</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-foreground">แคตตาล็อกงานพิมพ์</h1>
            <div className="w-[120px]"></div>
          </div>
        </div>
      </div>

      <section className="section-container bg-background">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">ตัวอย่างงาน</span>
              <span className="text-foreground">พิมพ์คุณภาพสูง</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground font-bold max-w-3xl mx-auto leading-relaxed">ผลงานพิมพ์/ออกแบบถุงพลาสติก <span className="text-primary">1-8 สี</span> คุณภาพจาก<span className="text-primary">กันเองพลาสติก(บางน้ำจืด)</span></p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 space-y-4 fade-in">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => 
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
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => 
              <div 
                key={item.id} 
                className={`product-card group fade-in stagger-${index % 6 + 1} cursor-pointer`}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium border border-primary/20">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              onClick={() => setSelectedImage(null)} 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Catalog preview" 
              className="w-full h-full object-contain rounded-lg bg-white shadow-2xl" 
            />
          </div>
        </div>
      )}

      <FloatingContactButtons />
    </div>
  );
};
export default PrintCatalog;