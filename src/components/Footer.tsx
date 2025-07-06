export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-background mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} OpenRouter, Inc.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Status</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Announcements</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Docs</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Partners</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Enterprise</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};