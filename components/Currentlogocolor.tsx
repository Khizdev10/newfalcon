
import { cn } from "@/lib/utils"
import falcon from "../media/falcon.png"
const Logo = ({ isDark }: { isDark: boolean }) => {
    return (
      <div className={cn(
        "flex items-center gap-3 transition-colors duration-300",
        isDark ? "text-black" : "text-white"
      )}>
        {/* Falcon SVG Icon */}
       <img src={falcon.src}  className="h-10 w-auto" alt="logo"/>
        
        {/* Heading Text */}
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-tighter leading-none">
            NEW FALCON HAZARA
          </span>
          <span className="text-[10px] tracking-[0.2em] font-light leading-none">
            GOODS FORWARDING AGENCY
          </span>
        </div>
      </div>
    );
  };

  export default Logo