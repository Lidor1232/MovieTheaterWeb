import React, { FC, lazy } from "react";
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

interface IProps {}

export const NavigationRouter: FC<IProps> = React.memo(({}) => {
  return (
    <Routes>
      <Route path={screenPaths.Home} element={<Home />} />
      <Route path={screenPaths.Admin} element={<Admin />} />
      <Route path={screenPaths.Home} element={<MovieOrder />} />
    </Routes>
  );
});
