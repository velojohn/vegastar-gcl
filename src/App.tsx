import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WhyGoogle from "./pages/WhyGoogle";
import Cloudflare from "./pages/Cloudflare";
import HowWebWorks from "./pages/HowWebWorks";
import Resources from "./pages/Resources";
import { syncQueryContext } from "./lib/runtime";

function QueryContextBridge() {
  const location = useLocation();

  useEffect(() => {
    syncQueryContext(location.search);
  }, [location.search]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <QueryContextBridge />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-google" element={<WhyGoogle />} />
        <Route path="/cloudflare" element={<Cloudflare />} />
        <Route path="/how-web-works" element={<HowWebWorks />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Layout>
  );
}
