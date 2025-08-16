import { Phone, MessageCircle } from "lucide-react";

const FloatingContactButtons = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4">
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
        href="https://line.me/R/ti/p/0819222884"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="แชท Line: 081-922-2884"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:animate-pulse" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;