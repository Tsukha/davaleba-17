import LinkLayout from "./layouts/linkLayout";
import AboutPage from "./pages/aboutPage";
import ErrorPage from "./pages/errorPage";
import FactPage from "./pages/factsPage";
import MainPage from "./pages/mainPage";

const router = [
  {
    element: <LinkLayout />,
    path: "/",
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <AboutPage />,
        path: "/about",
      },
    ],
  },
  {
    element: <FactPage />,
    path: "/:factId",
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
