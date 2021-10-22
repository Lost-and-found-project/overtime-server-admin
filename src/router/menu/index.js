const Index = () => import("../../pages/index/index.vue")
const Permission = () => import("../../pages/permission/index.vue")
const Permission_1 = () => import("../../pages/permission/1.vue")
const Permission_2 = () => import("../../pages/permission/2.vue")

// 权限管理，账号管理，用户管理，补偿管理，企业管理，
export const menuRoutes = [
  {
    path: "/index",
    component: Index,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/permission",
    component: Permission,
    redirect: "/permission/page_1",
    meta: {
      title: "权限管理"
    },
    children: [
      {
        path: "page_1",
        component: Permission_1,
        meta: {
          title: "子菜单-1"
        }
      },
      {
        path: "page_2",
        component: Permission_2,
        meta: {
          title: "子菜单-2"
        }
      }
    ]
  },
];
