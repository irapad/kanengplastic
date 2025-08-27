import { Phone } from "lucide-react";
import "bootstrap-icons/font/bootstrap-icons.css";

const FloatingContactButtons = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col space-y-4">
      {/* Phone Button */}
      <a
        href="tel:0819222884"
        className="group w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="โทรสอบถาม: 081-922-2884"
      >
        <Phone className="w-6 h-6 text-white group-hover:animate-pulse" />
      </a>

      {/* Line Button */}
      <a
        href="https://line.me/ti/p/~tee4828"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="เพิ่มเพื่อน LINE: tee4828"
      >
        <i className="bi bi-line text-white text-2xl group-hover:animate-pulse"></i>
      </a>
    </div>
  );
};

export default FloatingContactButtons;