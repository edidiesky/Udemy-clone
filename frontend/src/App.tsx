import React, { useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Home,
  LayoutIndex,
  Cart,
  Login,
  Register,
  TeachingExperience,
  User,
  OnBoardingLayout,
  VideoExperience,
  Audience,
  CourseCreationStep1,
  CourseCreationLayout,
  CourseCreationStep2,
  CourseCreationStep3
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
          <Route path={'user/:name'} element={
           <ProtectRoute>
              <User />
            </ProtectRoute>
          } />
          <Route path={'teaching/'} element={<Suspense fallback={<LazyLoader />}>
            <ProtectRoute>
              <TeachingExperience />
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

        <Route path={"/home/teaching/onboarding/"} element={<OnBoardingLayout />}>
          <Route path={'teaching-experience'} element={
            <ProtectRoute>
              <TeachingExperience />
            </ProtectRoute>
          } />

          <Route path={'video-experience'} element={
            <ProtectRoute>
              <VideoExperience />
            </ProtectRoute>
          } />

          <Route path={'existing-audience'} element={
            <ProtectRoute>
              <Audience />
            </ProtectRoute>
          } />
        </Route>

        {/* course creation */}
        <Route path={"/course/create"} element={<CourseCreationLayout />}>
          <Route path={'1'} element={
            <ProtectRoute>
              <CourseCreationStep1 />
            </ProtectRoute>
          } />

          <Route path={'2'} element={
            <ProtectRoute>
              <CourseCreationStep2 />
            </ProtectRoute>
          } />

          <Route path={'3'} element={
            <ProtectRoute>
              <CourseCreationStep3 />
            </ProtectRoute>
          } />
        </Route>
      </Routes>
    </div>
  );
}
