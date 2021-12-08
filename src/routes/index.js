import * as React from "react";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import DetailCourses from "../pages/client/DetailCourses";
const Home = React.lazy(() => import("pages/client/Home/Home"));
const QuanLyKhoaHoc = React.lazy(() =>
  import("pages/admin/QuanLyKhoaHoc/QuanLyKhoaHoc")
);
const QuanLyNguoiDung = React.lazy(() =>
  import("pages/admin/QuanLyNguoiDung/QuanLyNguoiDung")
);
const EditKhoaHoc = React.lazy(() => import("pages/admin/QuanLyKhoaHoc/Edit"));
const AddKhoaHoc = React.lazy(() => import("pages/admin/QuanLyKhoaHoc/Add"));
const AddNguoiDung = React.lazy(() =>
  import("pages/admin/QuanLyNguoiDung/Add")
);

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/detail-course",
    component: DetailCourses,
    exact: true,
    isPrivate: false,
  },
];

export const adminRoutes = [
  {
    path: "/admin/nguoidung",
    component: QuanLyNguoiDung,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin",
    component: Dashboard,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/khoahoc",
    component: QuanLyKhoaHoc,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/khoahoc/edit/:id",
    component: EditKhoaHoc,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/khoahoc/add",
    component: AddKhoaHoc,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/nguoidung/add",
    component: AddNguoiDung,
    exact: true,
    isPrivate: true,
  },
];
