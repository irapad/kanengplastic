import { Phone } from "lucide-react";
import lineIcon from "/lovable-uploads/6d02b08a-f479-4c32-9829-e50da2f38d3b.png";

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
        className="group w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="แชท LINE: tee4828"
      >
        <img 
          src={lineIcon} 
          alt="Line"
          className="w-6 h-6 group-hover:animate-pulse"
        />
      </a>
    </div>
  );
};

export default FloatingContactButtons;