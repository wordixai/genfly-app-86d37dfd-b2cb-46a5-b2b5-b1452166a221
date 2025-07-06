import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export const MainChat = () => {
  return (
    <div className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
      <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
        <svg className="h-80 w-12" viewBox="-5 0 50 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <title>Routing Curves</title>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M2 150C12 150 15 75 25 65" stroke="currentColor" className="origin-center transition-all duration-300 text-slate-6"></path>
            <path d="M2 160C12 160 22 160 25 160" stroke="currentColor" className="origin-center transition-all duration-300 text-primary"></path>
            <path d="M2 170C12 170 15 255 25 255" stroke="currentColor" className="origin-center transition-all duration-300 text-slate-6"></path>
          </g>
          <g className="text-slate-7">
            <circle cx="35" cy="60" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7"></circle>
            <circle cx="35" cy="160" r="6" fill="currentColor" className="origin-center transition-all duration-300 text-primary"></circle>
            <circle cx="35" cy="260" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7"></circle>
          </g>
        </svg>
      </div>
      
      <div className="flex w-full items-center justify-between gap-3 flex-row">
        <Input 
          className="w-full appearance-none py-2 transition duration-150 ease-in-out placeholder:text-foreground/30 shadow-border focus:shadow-inner focus:outline-none text-muted-foreground bg-background focus:bg-background/80 h-10 flex-1 rounded-lg border-0 px-4"
          placeholder="Start a message..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-4 group aspect-square h-10 px-3 transition-colors md:aspect-auto md:flex-shrink-0">
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </div>
  );
};