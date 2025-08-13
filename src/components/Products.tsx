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
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">สินค้า</span>และบริการ
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            เรามีสินค้าหลากหลายประเภท ครบครันในที่เดียว คุณภาพมาตรฐาน ราคาขายส่ง
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productCategories.map((product) => {
            const IconComponent = product.icon;
            return (
              <div key={product.id} className="product-card group cursor-pointer relative">
                {product.popular && (
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full z-10">
                    ยอดนิยม
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
                  <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                    สอบถามเพิ่มเติม →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ไม่เจอสินค้าที่ต้องการ?
            </h3>
            <p className="text-muted-foreground mb-6">
              เรามีสินค้าพิเศษและสามารถสั่งทำได้ตามความต้องการ
              ติดต่อเราเพื่อปรึกษาหรือสอบถามข้อมูลเพิ่มเติม
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0819222884"
                className="phone-btn"
              >
                โทรสอบถาม 081-922-2884
              </a>
              <a
                href="https://line.me/R/ti/p/0819222884"
                className="line-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                สอบถามทาง Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;