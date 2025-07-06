import { ExternalLink } from "lucide-react";

interface ModelCardProps {
  name: string;
  provider: string;
  providerIcon: string;
  tokens: string;
  latency: string;
  growth: string;
  growthColor: "green" | "red";
  featured?: boolean;
  invertIcon?: boolean;
}

export const ModelCard = ({
  name,
  provider,
  providerIcon,
  tokens,
  latency,
  growth,
  growthColor,
  featured = false,
  invertIcon = false
}: ModelCardProps) => {
  const borderClass = featured ? "md:border-primary" : "border-slate-6";
  
  return (
    <div className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${borderClass}`}>
      <div className="space-y-2">
        <div>
          <a className="hover:underline" href={`#`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-foreground font-medium">{name}</h3>
              </div>
              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className={`overflow-hidden rounded-full ${invertIcon ? 'dark:invert' : ''}`}>
                  <img 
                    width="256" 
                    height="256" 
                    alt={`Favicon for ${provider}`} 
                    className="h-full w-full object-cover" 
                    src={providerIcon}
                  />
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center">
            <span className="text-muted-foreground text-xs">
              by <a className="text-primary hover:underline" href="#">{provider}</a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
          <div>
            <p className="text-green-10 text-sm font-medium">{tokens}</p>
            <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
          </div>
          <div>
            <p className="text-sm font-medium">{latency}</p>
            <p className="text-muted-foreground text-[10px]">Latency</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${growthColor === 'green' ? 'text-green-10' : 'text-red-10'}`}>
              {growth}
            </p>
            <p className="text-muted-foreground text-[10px]">Weekly growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};