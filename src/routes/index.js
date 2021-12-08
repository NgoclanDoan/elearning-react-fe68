import DetailCourses from "pages/client/DetailCourses";
import Home from "pages/client/Home/Home";

import QuanLyNguoiDung from "pages/admin/QuanLyNguoiDung/QuanLyNguoiDung";
import QuanLyKhoaHoc from "pages/admin/QuanLyKhoaHoc/QuanLyKhoaHoc";
import EditKhoaHoc from "../pages/admin/QuanLyKhoaHoc/Edit";
import AddKhoaHoc from "../pages/admin/QuanLyKhoaHoc/Add";
import Dashboard from "../pages/admin/Dashboard/Dashboard";

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
];
