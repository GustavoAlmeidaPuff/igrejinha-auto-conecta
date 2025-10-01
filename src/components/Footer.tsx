import logo from "@/assets/logo-drp.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="w-48">
            <img src={logo} alt="DRP Mecânica Automotiva" className="w-full h-auto" />
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right space-y-2">
            <p className="font-semibold">DRP Mecânica Automotiva</p>
            <p className="text-secondary-foreground/80">Igrejinha, RS - Brasil</p>
            <p className="text-secondary-foreground/80">(51) 99718-8572</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/70">
          <p>&copy; {currentYear} DRP Mecânica Automotiva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
