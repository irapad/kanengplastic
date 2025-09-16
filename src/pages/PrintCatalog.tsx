import { ArrowLeft, Palette, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
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
    title: "Chaba Shampoo - แชมพูชบา",
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
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">กลับหน้าหลัก</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-foreground">แคตตาล็อกงานพิมพ์</h1>
            <div className="w-[120px]"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ตัวอย่างงานพิมพ์คุณภาพสูง
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            แกลเลอรี่ผลงานพิมพ์ถุงพลาสติก 1-8 สี คุณภาพระดับโลก
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground border border-border/50"}`}>
              {category}
            </button>)}
        </div>

        {/* Available Status */}
        

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map(item => <div key={item.id} className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => setSelectedImage(item.image)}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>)}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
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

      {/* Image Modal */}
      {selectedImage && <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <img src={selectedImage} alt="Catalog preview" className="w-full h-full object-contain rounded-lg bg-white" />
          </div>
        </div>}
    </div>;
};
export default PrintCatalog;