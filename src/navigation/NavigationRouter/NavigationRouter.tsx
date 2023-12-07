import React, { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { screenPaths } from "./NavigationRouter.constans";

const Home = lazy(() =>
  import("../../screens/Home/Home").then((module) => ({
    default: module.Home,
  }))
);
const Admin = lazy(() =>
  import("../../screens/Admin/Admin").then((module) => ({
    default: module.Admin,
  }))
);
const MovieOrder = lazy(() =>
  import("../../screens/MovieOrder/MovieOrder").then((module) => ({
    default: module.MovieOrder,
  }))
);
const CreateMovie = lazy(() =>
  import("../../screens/CreateMovie/CreateMovie").then((module) => ({
    default: module.CreateMovie,
  }))
);
const UpdateMovie = lazy(() =>
  import("../../screens/UpdateMovie/UpdateMovie").then((module) => ({
    default: module.UpdateMovie,
  }))
);

interface IProps {}

export const NavigationRouter: FC<IProps> = React.memo(({}) => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path={screenPaths.Home} element={<Home />} />
        <Route path={screenPaths.Admin} element={<Admin />} />
        <Route path={screenPaths.MovieOrder} element={<MovieOrder />} />
        <Route path={screenPaths.CreateMovie} element={<CreateMovie />} />
        <Route path={screenPaths.UpdateMovie} element={<UpdateMovie />} />
      </Routes>
    </Suspense>
  );
});
