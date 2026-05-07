import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { Layout } from "./Layout";
import { HomePage } from "./pages/HomePage";

// Inner routes are code-split — they download only when visited.
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const ProductsPage = lazy(() =>
  import("./pages/ProductsPage").then((m) => ({ default: m.ProductsPage }))
);
const AdvantagePage = lazy(() =>
  import("./pages/AdvantagePage").then((m) => ({ default: m.AdvantagePage }))
);
const SuppliersPage = lazy(() =>
  import("./pages/SuppliersPage").then((m) => ({ default: m.SuppliersPage }))
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage }))
);

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-[#0b3d6d] border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageFallback />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<PageFallback />}>
              <ProductsPage />
            </Suspense>
          }
        />
        <Route
          path="advantage"
          element={
            <Suspense fallback={<PageFallback />}>
              <AdvantagePage />
            </Suspense>
          }
        />
        <Route
          path="suppliers"
          element={
            <Suspense fallback={<PageFallback />}>
              <SuppliersPage />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <ContactPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
