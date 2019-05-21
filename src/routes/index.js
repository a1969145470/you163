import Home from "@/pages/Home/Home"
import cart from "@/pages/cart/cart"
import cateList from "@/pages/cateList/cateList"
import Find from "@/pages/Find/Find"
import login from "@/pages/login/login"
import personal from "@/pages/personal/personal"

const routes = [
  {path: "/Home", component: Home},
  {path: "/cart", component: cart},
  {path: "/cateList", component: cateList},
  {path: "/Find", component: Find},
  {path: "/login", component: login},
  {path: "/personal", component: personal},
];

export default routes
