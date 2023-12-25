import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Auth,
  Home,
  LayoutIndex,
  Cart
} from "./screens";
import ProtectRoute from "./utils/ProtectRoute";
import Preloader from "./components/loaders/preloader";
import LazyLoader from "./components/loaders/Lazy";

export default function App() {
  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<LayoutIndex />}>
          <Route index element={<Suspense fallback={<LazyLoader />}>
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          </Suspense>
          }
          />

          <Route path={'cart/'} element={<Suspense fallback={<LazyLoader />}>
            <ProtectRoute>
              <Cart />
            </ProtectRoute>
          </Suspense>
          }
          />
        </Route>

      </Routes>
    </div>
  );
}
