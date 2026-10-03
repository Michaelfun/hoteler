import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Rooms = lazy(() => import("@/pages/Rooms"));
const Dining = lazy(() => import("@/pages/Dining"));
const Offers = lazy(() => import("@/pages/Offers"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const News = lazy(() => import("@/pages/News"));
const Team = lazy(() => import("@/pages/Team"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const RoomDetail = lazy(() => import("@/pages/RoomDetail"));
const NewsArticle = lazy(() => import("@/pages/News")); // Keeping News placeholder for NewsArticle
const Booking = lazy(() => import("@/pages/Booking"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={null}><Home /></Suspense>,
      },
      {
        path: "about",
        element: <Suspense fallback={null}><About /></Suspense>,
      },
      {
        path: "rooms",
        element: <Suspense fallback={null}><Rooms /></Suspense>,
      },
      {
        path: "rooms/:slug",
        element: <Suspense fallback={null}><RoomDetail /></Suspense>,
      },
      {
        path: "dining",
        element: <Suspense fallback={null}><Dining /></Suspense>,
      },
      {
        path: "offers",
        element: <Suspense fallback={null}><Offers /></Suspense>,
      },
      {
        path: "gallery",
        element: <Suspense fallback={null}><Gallery /></Suspense>,
      },
      {
        path: "news",
        element: <Suspense fallback={null}><News /></Suspense>,
      },
      {
        path: "news/:slug",
        element: <Suspense fallback={null}><NewsArticle /></Suspense>,
      },
      {
        path: "team",
        element: <Suspense fallback={null}><Team /></Suspense>,
      },
      {
        path: "contact",
        element: <Suspense fallback={null}><Contact /></Suspense>,
      },
      {
        path: "booking",
        element: <Suspense fallback={null}><Booking /></Suspense>,
      },
      {
        path: "*",
        element: <Suspense fallback={null}><NotFound /></Suspense>,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
