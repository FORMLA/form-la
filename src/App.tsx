import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import PageTransition from "./components/PageTransition";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Lookbook = lazy(() => import("./pages/Lookbook"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F0EB]">
      <span className="text-[10px] font-sans font-medium tracking-luxury uppercase text-[#8A847C] animate-pulse">
        Form
      </span>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <PageTransition>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/collection" component={Collection} />
          <Route path="/product/:slug" component={ProductPage} />
          <Route path="/lookbook" component={Lookbook} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </PageTransition>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <CartProvider>
          <TooltipProvider>
            <Toaster
              position="bottom-center"
              toastOptions={{
                style: {
                  background: "#111",
                  color: "#F5F0EB",
                  border: "none",
                  borderRadius: "0",
                  fontSize: "11px",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.05em",
                },
              }}
            />
            <Router />
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
