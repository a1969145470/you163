import A from "@/components/A.vue"
import B from "@/components/B"
import Home from "@/pages/Home/Home"
import cart from "../pages/cart/cart"
import cateList from "@/pages/cateList/cateList"
import Find from "@/pages/Find/Find"
import login from "../pages/login/login"

const routes = [
  {path: "/A", component: A},
  {path: "/B", component: B},
  {path: "/Home", component: Home},
  {path: "/cart", component: cart},
  {path: "/cateList", component: cateList},
  {path: "/Find", component: Find},
  {path: "/login", component: login},
]

export default routes
