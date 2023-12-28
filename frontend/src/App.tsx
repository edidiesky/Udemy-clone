import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Home,
  LayoutIndex,
  Cart,
  Login,
  Register,
  Teaching,
  User
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
          <Route path={'user/:name'} element={<User />}/>
          <Route path={'teaching/'} element={<Suspense fallback={<LazyLoader />}>
            <ProtectRoute>
              <Teaching />
            </ProtectRoute>
          </Suspense>
          }
          />

          {/* login */}
          <Route path={'login/'} element={<Suspense fallback={<LazyLoader />}>
            <ProtectRoute>
              <Login />
            </ProtectRoute>
          </Suspense>
          }
          />

          {/* login */}
          <Route path={'register/'} element={<Suspense fallback={<LazyLoader />}>
            <ProtectRoute>
              <Register />
            </ProtectRoute>
          </Suspense>
          }
          />
        </Route>

      </Routes>
    </div>
  );
}
