
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border/50 py-6 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} TechFarm UI. All rights reserved.</p>
        <p className="text-sm mt-1">Empowering learners through technology.</p>
      </div>
    </footer>
  );
}
