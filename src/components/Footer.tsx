import logo from "@/assets/arclean-logo.png";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="ArClean" className="h-10 brightness-0 invert" />
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} ArClean — Refrigeração e Higienização de Estofados Ltda. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
