const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AI Systems & Automation
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              Building intelligent operations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
