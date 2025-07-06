import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export const Header = () => {
  return <header className="flex items-center justify-between px-4 py-3 border-b">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="mx-[40px] text-lg font-semibold">OpenRouter</div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-9 w-64 bg-muted/30" />
        </div>
      </div>

      <nav className="flex items-center gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Models</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Chat</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Rankings</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Enterprise</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Docs</a>
        <Button variant="ghost" size="sm">Sign in</Button>
      </nav>
    </header>;
};