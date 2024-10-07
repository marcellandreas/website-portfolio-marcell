import { Footer, Navbar } from "../../routers/index";

export function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </div>
  );
}
