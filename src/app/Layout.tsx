import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Header />
      <main className="relative flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
