import { Phone } from "lucide-react";
import lineIcon from "/lovable-uploads/9f0a0826-631c-4241-b3a2-4c6cfe387b72.png";

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
        className="group w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:shadow-3xl hover:shadow-green-400/60 transition-all duration-500 hover:scale-125 hover:rotate-12 animate-pulse border-2 border-green-400/30 hover:border-green-300/60"
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