import { ArrowLeft, Download, Palette, Info, Zap } from "lucide-react";
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
      title: "U LUCK - ผ้าม็อป เขียวไวท์",
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
    },
    {
      id: 5,
      title: "A_Intex - หมอน Polyester",
      colors: 2,
      description: "ถุงบรรจุหมอนพิมพ์ 2 สี (ฟ้า + ขาว) แบรนด์ A_Intex",
      image: catalogIntexPillow,
      specifications: [
        "ขนาด: 32×19 นิ้ว",
        "พิมพ์ 2 สี (ฟ้า + ขาว)",
        "วัสดุ: LDPE หรือ PP ใส",
        "สินค้า: หมอนโพลีเอสเตอร์ 100%"
      ],
      features: [
        "พิมพ์โลโก้และข้อมูลสินค้าคมชัด",
        "สีฟ้าสดใส ตัดกับพื้นขาว",
        "เหมาะสำหรับสินค้าเครื่องนอน"
      ],
      category: "2 สี"
    },
    {
      id: 6,
      title: "สาหร่ายช้าง - รสเผ็ด",
      colors: 2,
      description: "ถุงสาหร่ายพิมพ์ 2 สี (แดง + ขาว) แบรนด์สาหร่ายช้าง",
      image: catalogElephantSeaweed,
      specifications: [
        "ขนาด: ตามมาตรฐานถุงสาหร่าย",
        "พิมพ์ 2 สี (แดง + ขาว)",
        "วัสดุ: OPP หรือ PP ใส",
        "น้ำหนัก: 5 กรัม"
      ],
      features: [
        "พิมพ์ลายช้างสีแดงโดดเด่น",
        "ตัวอักษรขาวคมชัดบนพื้นแดง",
        "เหมาะสำหรับขนมสาหร่าย"
      ],
      category: "2 สี"
    },
    {
      id: 7,
      title: "Eagle Mop - ม็อปนกอินทรี",
      colors: 2,
      description: "ถุงม็อพพิมพ์ 2 สี (ดำ + ทอง) ลายนกอินทรีคลาสสิก",
      image: catalogEagleMop,
      specifications: [
        "ขนาด: 13×18 นิ้ว",
        "พิมพ์ 2 สี (ดำ + ทอง)",
        "วัสดุ: HDPE หรือ LDPE",
        "สินค้า: ม็อป 12 นิ้ว"
      ],
      features: [
        "พิมพ์ลายนกอินทรีสีทองบนพื้นเทา",
        "ตัวอักษรสีดำคมชัดอ่านง่าย",
        "เหมาะสำหรับอุปกรณ์ทำความสะอาด"
      ],
      category: "2 สี"
    },
    {
      id: 8,
      title: "Double Geese NO.156 - ไม้แขวน",
      colors: 3,
      description: "ถุงไม้แขวนเสื้อผ้าพิมพ์ 3 สี (เขียว + ชมพู + ขาว)",
      image: catalogClothHanger156,
      specifications: [
        "ขนาด: 19×9.74 นิ้ว",
        "พิมพ์ 3 สี (เขียว + ชมพู + ขาว)",
        "วัสดุ: LDPE หรือ PP ใส",
        "สินค้า: ไม้แขวนเสื้อผ้า 12 ชิ้น"
      ],
      features: [
        "พิมพ์ลายหงส์คู่สวยงาม",
        "สีเขียวชมพูโดดเด่นบนพื้นขาว",
        "เหมาะสำหรับสินค้าในครัวเรือน"
      ],
      category: "3 สี"
    },
    {
      id: 9,
      title: "Double Geese NO.357 - ไม้แขวน",
      colors: 3,
      description: "ถุงไม้แขวนเสื้อผ้าพิมพ์ 3 สี (เขียว + ชมพู + ขาว) รุ่น 357",
      image: catalogClothHanger357,
      specifications: [
        "ขนาด: 19×9.74 นิ้ว",
        "พิมพ์ 3 สี (เขียว + ชมพู + ขาว)",
        "วัสดุ: LDPE หรือ PP ใส",
        "สินค้า: ไม้แขวนเสื้อผ้า 12 ชิ้น"
      ],
      features: [
        "ดีไซน์ลายไทยประยุกต์สมัยใหม่",
        "การไล่สีชมพูเป็นไฮไลท์",
        "งานพิมพ์คุณภาพสูงคมชัด"
      ],
      category: "3 สี"
    },
    {
      id: 10,
      title: "Phoenix Coconut Juice - น้ำมะพร้าว",
      colors: 3,
      description: "ถุงน้ำมะพร้าวแช่แข็งพิมพ์ 3 สี (แดง + เขียว + ขาว)",
      image: catalogCoconutJuice,
      specifications: [
        "ขนาด: 12.5×19 ซม.",
        "พิมพ์ 3 สี (แดง + เขียว + ขาว)",
        "วัสดุ: PE หรือ PP ใส",
        "ปริมาณ: 280 มล."
      ],
      features: [
        "พิมพ์โลโก้เรือมังกรสีแดงโดดเด่น",
        "ข้อความ 2 ภาษา (ไทย-อังกฤษ)",
        "เหมาะสำหรับเครื่องดื่มแช่แข็ง"
      ],
      category: "3 สี"
    },
    {
      id: 11,
      title: "ชัยทัศซีฟู๊ด - เครื่องปรุงรส",
      colors: 3,
      description: "ถุงเครื่องปรุงรสซีฟู๊ดพิมพ์ 3 สี (เหลือง + แดง + ขาว)",
      image: catalogChaithatSeafood,
      specifications: [
        "ขนาด: 12×19 นิ้ว",
        "พิมพ์ 3 สี (เหลือง + แดง + ขาว)",
        "วัสดุ: BOPP หรือ PP laminated",
        "สินค้า: เครื่องปรุงรสซีฟู๊ด"
      ],
      features: [
        "พิมพ์ลายกบเหลืองโดดเด่น",
        "ตารางสีหลายรายการอาหาร",
        "เหมาะสำหรับสินค้าอาหารแห้ง"
      ],
      category: "3 สี"
    },
    {
      id: 12,
      title: "Sunrise Coconut Juice - น้ำมะพร้าว 280g",
      colors: 4,
      description: "ถุงน้ำมะพร้าวแช่แข็งพิมพ์ 4 สี (เขียว + ขาว + ดำ + เทา)",
      image: catalogCoconutJuice280g,
      specifications: [
        "ขนาด: 5×7.5 นิ้ว",
        "พิมพ์ 4 สี (เขียว + ขาว + ดำ + เทา)",
        "วัสดุ: PE หรือ PP ใส",
        "ปริมาณ: 280 มล."
      ],
      features: [
        "พิมพ์โลโก้ Sunrise Brand โดดเด่น",
        "ตารางโภชนาการ 2 ภาษา",
        "เหมาะสำหรับเครื่องดื่มแช่แข็ง"
      ],
      category: "4 สี"
    },
    {
      id: 13,
      title: "Haifa K - ปุ๋ยโปแตสเซียม",
      colors: 4,
      description: "ถุงปุ๋ย Haifa K พิมพ์ 4 สี (เขียว + เหลือง + ดำ + ขาว)",
      image: catalogHaifaFertilizer,
      specifications: [
        "ขนาด: 7×11 นิ้ว",
        "พิมพ์ 4 สี (เขียว + เหลือง + ดำ + ขาว)",
        "วัสดุ: BOPP laminated",
        "น้ำหนัก: 1 กก."
      ],
      features: [
        "พิมพ์โลโก้ใบไม้สีเขียวสดใส",
        "ข้อมูลสูตรปุ๋ยครบถ้วน",
        "เหมาะสำหรับปุ๋ยเกษตร"
      ],
      category: "4 สี"
    },
    {
      id: 14,
      title: "Joy Clean - ผงซักฟอก",
      colors: 4,
      description: "ถุงผงซักฟอกพิมพ์ 4 สี (ฟ้า + เหลือง + แดง + ขาว)",
      image: catalogJoyCleanPowder,
      specifications: [
        "ขนาด: 7.5×11.5 นิ้ว",
        "พิมพ์ 4 สี (ฟ้า + เหลือง + แดง + ขาว)",
        "วัสดุ: BOPP หรือ PP laminated",
        "จำนวน: 10 ชิ้น"
      ],
      features: [
        "โลโก้ JOY สีแดงโดดเด่น",
        "ดาว 5 ดวงสีขาวบนพื้นฟ้า",
        "เหมาะสำหรับผลิตภัณฑ์ทำความสะอาด"
      ],
      category: "4 สี"
    },
    {
      id: 15,
      title: "Red Bowl - ลูกเต๋าสาคู",
      colors: 4,
      description: "ถุงลูกเต๋าสาคูพิมพ์ 4 สี (เหลือง + แดง + ขาว + ดำ)",
      image: catalogTapiocaPearl,
      specifications: [
        "ขนาด: มาตรฐานถุงสาคู",
        "พิมพ์ 4 สี (เหลือง + แดง + ขาว + ดำ)",
        "วัสดุ: BOPP หรือ PP ใส",
        "น้ำหนัก: 400 กรัม (14oz.)"
      ],
      features: [
        "พิมพ์โลโก้ชามแดงในกรอบเพชร",
        "ข้อมูลโภชนาการครบถ้วน 3 ภาษา",
        "เหมาะสำหรับอาหารแห้ง"
      ],
      category: "4 สี"
    },
    {
      id: 16,
      title: "Joy Clean - ฟองน้ำล้างจาน",
      colors: 4,
      description: "ถุงฟองน้ำล้างจานพิมพ์ 4 สี (เหลือง + แดง + ฟ้า + ขาว)",
      image: catalogJoyCleanSponge,
      specifications: [
        "ขนาด: 9×12.5 นิ้ว",
        "พิมพ์ 4 สี (เหลือง + แดง + ฟ้า + ขาว)",
        "วัสดุ: PE หรือ PP ใส",
        "จำนวน: 12 ชิ้น"
      ],
      features: [
        "โลโก้ JOY CLEAN สีแดงเด่น",
        "พื้นหลังเหลืองสดใส",
        "เหมาะสำหรับอุปกรณ์ทำความสะอาด"
      ],
      category: "4 สี"
    },
    {
      id: 17,
      title: "Wudk - ลูกชิ้นปลา 500g",
      colors: 4,
      description: "ถุงลูกชิ้นปลาพิมพ์ 4 สี (แดง + เหลือง + เขียว + ฟ้า)",
      image: catalogFishBall500g,
      specifications: [
        "ขนาด: 7×11 นิ้ว",
        "พิมพ์ 4 สี (แดง + เหลือง + เขียว + ฟ้า)",
        "วัสดุ: BOPP หรือ PE laminated",
        "น้ำหนัก: 500 กรัม"
      ],
      features: [
        "พิมพ์ลายไทยประยุกต์สวยงาม",
        "โลโก้ Wudk โดดเด่นในวงกลม",
        "เหมาะสำหรับอาหารแช่แข็ง"
      ],
      category: "4 สี"
    },
    {
      id: 18,
      title: "Array Euro System - บานพับ",
      colors: 4,
      description: "ถุงบานพับพิมพ์ 4 สี (น้ำเงิน + แดง + ขาว + เทา)",
      image: catalogArrayHinge,
      specifications: [
        "ขนาด: 4.5×7 นิ้ว",
        "พิมพ์ 4 สี (น้ำเงิน + แดง + ขาว + เทา)",
        "วัสดุ: BOPP หรือ PP ใส",
        "สินค้า: บานพับ Euro System 32"
      ],
      features: [
        "โลโก้ ARRAY โดดเด่น",
        "คำอธิบายวิธีใช้ละเอียด",
        "เหมาะสำหรับฮาร์ดแวร์"
      ],
      category: "4 สี"
    },
    {
      id: 19,
      title: "Winner Corn Starch - แป้งข้าวโพด",
      colors: 5,
      description: "ถุงแป้งข้าวโพดพิมพ์ 5 สี (เขียว + เหลือง + แดง + ขาว + ดำ)",
      image: catalogCornStarch,
      specifications: [
        "ขนาด: 8×11 นิ้ว",
        "พิมพ์ 5 สี (เขียว + เหลือง + แดง + ขาว + ดำ)",
        "วัสดุ: BOPP laminated",
        "น้ำหนัก: 1 กก."
      ],
      features: [
        "พิมพ์ลายข้าวโพดสีสันสวยงาม",
        "โลโก้ Winner โดดเด่น",
        "เหมาะสำหรับผลิตภัณฑ์อาหาร"
      ],
      category: "5 สี"
    },
    {
      id: 20,
      title: "Big Bear - ลูกอมช็อกโกแลต",
      colors: 6,
      description: "ถุงลูกอมพิมพ์ 6 สี (ฟ้า + ชมพู + เหลือง + น้ำตาล + ขาว + ดำ)",
      image: catalogBigbearChocolate,
      specifications: [
        "ขนาด: 6.5×9 นิ้ว",
        "พิมพ์ 6 สี (ฟ้า + ชมพู + เหลือง + น้ำตาล + ขาว + ดำ)",
        "วัสดุ: BOPP หรือ PP laminated",
        "น้ำหนัก: 175 กรัม"
      ],
      features: [
        "พิมพ์โลโก้ Big Bear 3D สวยงาม",
        "สีสันสดใสเหมาะเด็ก",
        "เหมาะสำหรับลูกอมช็อกโกแลต"
      ],
      category: "6 สี"
    },
    {
      id: 21,
      title: "Enjoy Yogurt Like - โยเกิร์ต",
      colors: 6,
      description: "ถุงโยเกิร์ตพิมพ์ 6 สี (เขียว + ฟ้า + ชมพู + เหลือง + ขาว + ม่วง)",
      image: catalogEnjoyYogurt,
      specifications: [
        "ขนาด: 5.5×12.5 นิ้ว",
        "พิมพ์ 6 สี (เขียว + ฟ้า + ชมพู + เหลือง + ขาว + ม่วง)",
        "วัสดุ: PE หรือ PP ใส",
        "ปริมาณ: 400 กรัม"
      ],
      features: [
        "พิมพ์ผลไม้หลากสีสวยงาม",
        "การไล่สีเขียวสดใส",
        "เหมาะสำหรับเครื่องดื่มโยเกิร์ต"
      ],
      category: "6 สี"
    },
    {
      id: 22,
      title: "Fun Balloon - ลูกโป่งสนุก",
      colors: 5,
      description: "ถุงลูกโป่งพิมพ์ 5 สี (ฟ้า + เหลือง + ชมพู + ขาว + น้ำเงิน)",
      image: catalogFunBalloon,
      specifications: [
        "ขนาด: 6×8 นิ้ว",
        "พิมพ์ 5 สี (ฟ้า + เหลือง + ชมพู + ขาว + น้ำเงิน)",
        "วัสดุ: PE หรือ PP ใส",
        "สินค้า: ลูกโป่งยาง"
      ],
      features: [
        "พิมพ์ลูกโป่งสีสันสดใส",
        "ดีไซน์สนุกสำหรับเด็ก",
        "เหมาะสำหรับของเล่น"
      ],
      category: "5 สี"
    },
    {
      id: 23,
      title: "OTOP Crab Cake - ข้าวต้มปู",
      colors: 5,
      description: "ถุงข้าวต้มปูพิมพ์ 5 สี (เหลือง + แดง + ฟ้า + ขาว + ดำ)",
      image: catalogCrabCake,
      specifications: [
        "ขนาด: ตามมาตรฐานถุงอาหาร",
        "พิมพ์ 5 สี (เหลือง + แดง + ฟ้า + ขาว + ดำ)",
        "วัสดุ: BOPP หรือ PE laminated",
        "น้ำหนัก: 140 กรัม"
      ],
      features: [
        "โลโก้ OTOP โดดเด่น",
        "พิมพ์ลายปูสีน้ำเงินสวยงาม",
        "เหมาะสำหรับอาหารแช่แข็ง"
      ],
      category: "5 สี"
    },
    {
      id: 24,
      title: "Lion Blade - ใบมีดตัดหญ้า",
      colors: 5,
      description: "ถุงใบมีดพิมพ์ 5 สี (เหลือง + แดง + เขียว + ขาว + ดำ)",
      image: catalogLionBlade,
      specifications: [
        "ขนาด: ตามมาตรฐานอุปกรณ์",
        "พิมพ์ 5 สี (เหลือง + แดง + เขียว + ขาว + ดำ)",
        "วัสดุ: PE หรือ PP",
        "สินค้า: ใบมีดตัดหญ้า"
      ],
      features: [
        "พิมพ์โลโก้ Lion ซ้ำทั่วพื้นผิว",
        "คำเตือนความปลอดภัยชัดเจน",
        "เหมาะสำหรับอุปกรณ์การเกษตร"
      ],
      category: "5 สี"
    },
    {
      id: 25,
      title: "JP Crab Stick - ปูอัด",
      colors: 5,
      description: "ถุงปูอัดพิมพ์ 5 สี (น้ำเงิน + ขาว + แดง + เหลือง + ดำ)",
      image: catalogJpCrabStick,
      specifications: [
        "ขนาด: 6.5×9.5 นิ้ว / 5×8 นิ้ว",
        "พิมพ์ 5 สี (น้ำเงิน + ขาว + แดง + เหลือง + ดำ)",
        "วัสดุ: BOPP หรือ PE laminated",
        "สินค้า: ปูอัดแช่แข็ง"
      ],
      features: [
        "พิมพ์ลายคลื่นทะเลสีน้ำเงิน",
        "โลโก้ JP สีเหลืองโดดเด่น",
        "เหมาะสำหรับอาหารทะเลแช่แข็ง"
      ],
      category: "5 สี"
    },
    {
      id: 26,
      title: "Chaba Shampoo - แชมพูชบา",
      colors: 6,
      description: "ถุงแชมพูพิมพ์ 6 สี (ชมพู + แดง + เหลือง + เขียว + ขาว + ดำ)",
      image: catalogChabaShampoo,
      specifications: [
        "ขนาด: 6×9 นิ้ว",
        "พิมพ์ 6 สี (ชมพู + แดง + เหลือง + เขียว + ขาว + ดำ)",
        "วัสดุ: BOPP หรือ PE laminated",
        "สินค้า: แชมพูสมุนไพร"
      ],
      features: [
        "พิมพ์ลายดอกชบาสีชมพูสวยงาม",
        "รูปผู้หญิงในกรอบทอง",
        "เหมาะสำหรับผลิตภัณฑ์ความงาม"
      ],
      category: "6 สี"
    },
    {
      id: 27,
      title: "Eagle Coconut - น้ำมะพร้าวนกอินทรี",
      colors: 6,
      description: "ถุงน้ำมะพร้าวพิมพ์ 6 สี (แดง + เขียว + ขาว + ดำ + เทา + เหลือง)",
      image: catalogEagleCoconut,
      specifications: [
        "ขนาด: 5×7.5 นิ้ว",
        "พิมพ์ 6 สี (แดง + เขียว + ขาว + ดำ + เทา + เหลือง)",
        "วัสดุ: PE หรือ PP ใส",
        "ปริมาณ: 280 มล."
      ],
      features: [
        "พิมพ์ลายต้นมะพร้าวสีเขียวสดใส",
        "แถบแดง Sweet & Tender โดดเด่น",
        "เหมาะสำหรับเครื่องดื่มแช่แข็ง"
      ],
      category: "6 สี"
    },
    {
      id: 28,
      title: "Big Bear Premium - ลูกอมพรีเมี่ยม",
      colors: 8,
      description: "ถุงลูกอมพิมพ์ 8 สี (แดง + เหลือง + เขียว + น้ำตาล + ส้ม + ขาว + ดำ + ชมพู)",
      image: catalogBigbearPremium,
      specifications: [
        "ขนาด: 13×4.75 นิ้ว",
        "พิมพ์ 8 สี (แดง + เหลือง + เขียว + น้ำตาล + ส้ม + ขาว + ดำ + ชมพู)",
        "วัสดุ: BOPP laminated",
        "น้ำหนัก: 78 กรัม"
      ],
      features: [
        "พิมพ์ตัวการ์ตูนหมี 3D สีสันสวยงาม",
        "งานพิมพ์ครบ 8 สี คมชัดสุดขั้ว",
        "เหมาะสำหรับลูกอมระดับพรีเมี่ยม"
      ],
      category: "8 สี"
    }
  ];

  const colorCategories = ["ทั้งหมด", "1 สี", "2 สี", "3 สี", "4 สี", "5 สี", "6 สี", "7 สี", "8 สี"];

  const filteredItems = catalogItems.filter(item => {
    return selectedCategory === "ทั้งหมด" || item.category === selectedCategory;
  });

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
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40"
                }`}
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
          {filteredItems.map((item, index) => (
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

        {/* Available Catalog */}
        <div className="text-center py-12 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50 mb-12">
          <Palette className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">งานพิมพ์ 1-8 สี พร้อมให้บริการ</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            ตัวอย่างงานพิมพ์คุณภาพสูง 1-8 สี พร้อมรับสั่งผลิต MOQ เริ่มต้น 1,000 ใบ 
            ครบครันทุกระดับสี สำหรับงานพิมพ์คุณภาพระดับโลก
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">✅ 1-4 สี พร้อมแล้ว</span>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">✅ 5-6 สี พร้อมแล้ว</span>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full">
              <span className="text-sm font-medium">✅ 7-8 สี พร้อมแล้ว</span>
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