import { Package, Printer, Star, Zap, Scissors, Settings, Paperclip, Archive } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      id: 1,
      name: "ถุงพลาสติกทั่วไป",
      description: "ถุงพลาสติกคุณภาพดี หลากหลายขนาด",
      icon: Package,
      popular: true
    },
    {
      id: 2,
      name: "ถุงพลาสติกไซต์พิเศษ",
      description: "ถุงขนาดพิเศษตามความต้องการ",
      icon: Star,
      popular: false
    },
    {
      id: 3,
      name: "ถุงพิมพ์ลาย",
      description: "ถุงพิมพ์ลายสวย คุณภาพสูง",
      icon: Printer,
      popular: true
    },
    {
      id: 4,
      name: "ถุงเกรด B",
      description: "ถุงคุณภาพดี ราคาประหยัด",
      icon: Zap,
      popular: false
    },
    {
      id: 5,
      name: "สายรัดถุง",
      description: "สายรัดคุณภาพ หลากหลายสี",
      icon: Scissors,
      popular: false
    },
    {
      id: 6,
      name: "เครื่องรีดปิดปากถุง",
      description: "เครื่องรีดคุณภาพ ใช้งานง่าย",
      icon: Settings,
      popular: true
    },
    {
      id: 7,
      name: "เทปกาว",
      description: "เทปกาวคุณภาพสูง แรงยึดดี",
      icon: Paperclip,
      popular: false
    },
    {
      id: 8,
      name: "อุปกรณ์บรรจุภัณฑ์อื่นๆ",
      description: "อุปกรณ์บรรจุภัณฑ์ครบครัน",
      icon: Archive,
      popular: false
    }
  ];

  return (
    <section id="products" className="section-container bg-background">
    </section>
  );
};

export default Products;