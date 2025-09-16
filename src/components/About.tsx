import { Users, Award, Truck, Shield, Clock, ThumbsUp } from "lucide-react";
const About = () => {
  const features = [{
    icon: Award,
    title: "มากกว่า 15 ปี",
    description: "ของประสบการณ์ในธุรกิจ"
  }, {
    icon: Users,
    title: "ลูกค้าไว้วางใจ",
    description: "มากกว่า 1,000+ สมุทรสาครเเละทั่วประเทศ"
  }, {
    icon: Shield,
    title: "คุณภาพมาตรฐาน",
    description: "สินค้าผ่านการคัดสรรอย่างดี"
  }, {
    icon: Truck,
    title: "บริการส่งด่วน",
    description: "บริการส่งด่วนในจังหวัดสมุทรสาคร"
  }, {
    icon: Clock,
    title: "บริการรวดเร็ว",
    description: "ตอบสนองความต้องการได้ทันที"
  }, {
    icon: ThumbsUp,
    title: "ราคายุติธรรม",
    description: "ราคาขายส่งที่เป็นธรรม"
  }];
  const stats = [{
    number: "15+",
    label: "ปีของประสบการณ์"
  }, {
    number: "1000+",
    label: "ลูกค้าที่ไว้วางใจ"
  }, {
    number: "50+",
    label: "ประเภทสินค้า"
  }, {
    number: "24/7",
    label: "พร้อมให้บริการ"
  }];
  return <section id="about" className="section-container bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            เกี่ยวกับ<span className="text-primary">เรา</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">"กันเองพลาสติก บางน้ำจืด ผู้เชี่ยวชาญด้านถุงพลาสติกและบรรจุภัณฑ์มากกว่า 15 ปี มีหน้าร้านและโรงงานจริง พร้อมให้บริการลูกค้าทั่วประเทศอย่างมืออาชีพ"
        </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => <div key={index} className="text-center">
              <div className="bg-card rounded-xl p-6 product-card">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>)}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return <div key={index} className="product-card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>;
        })}
        </div>

        {/* Company Story */}
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              ความเป็นมาของเรา
            </h3>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p className="text-lg">
                กันเองพลาสติก บางน้ำจืด ก่อตั้งขึ้นด้วยวิสัยทัศน์ในการเป็นผู้นำด้านการจำหน่าย
                ถุงพลาสติกและบรรจุภัณฑ์คุณภาพสูง เราเริ่มต้นจากธุรกิจขนาดเล็ก 
                และเติบโตมาเป็นผู้จำหน่ายที่ได้รับความไว้วางใจจากลูกค้าทั่วประเทศ
              </p>
              <p className="text-lg">
                ด้วยประสบการณ์มากกว่า 15 ปี เราเข้าใจความต้องการของลูกค้าแต่ละประเภท
                ไม่ว่าจะเป็นร้านค้าปลีก โรงงานอุตสาหกรรม หรือธุรกิจขนาดใหญ่ 
                เรามุ่งมั่นในการให้บริการที่ดีที่สุดและสินค้าคุณภาพในราคาที่เป็นธรรม
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="text-xl font-semibold mb-4">วิสัยทัศน์ของเรา</h4>
              <p className="text-muted-foreground">
                <strong className="text-primary">"เป็นผู้นำด้านการจำหน่ายบรรจุภัณฑ์คุณภาพ 
                พร้อมบริการที่เป็นเลิศ เพื่อตอบสนองความต้องการของลูกค้าทุกระดับ"</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;