import React from "react"
import { Redirect } from "react-router-dom"

// Profile
// import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
// import Register from "../pages/Authentication/Register"
// import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Users
import Users from "../pages/Users"
import Posts from "../pages/Posts"
import SinglePost from "../pages/Posts/comments"
import sponsoredPosts from "../pages/Posts/sponsored"
import Directories from "../pages/Directories/index"
import Golds from "../pages/Golds"
import Wallets from "../pages/Wallets"
import Settings from "../pages/Settings"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  // Users 
  { path: "/users", component: Users },
  { path: "/posts", component: Posts },
  { path: "/posts/:uuid", component: SinglePost },  // posts/:uuid
  { path: "/posts/sponsored/:postId", component: sponsoredPosts },
  { path: "/directories", component: Directories },
  { path: "/golds", component: Golds },
  { path: "/wallets", component: Wallets },

  // settings
  { path: "/settings", component: Settings },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  // { path: "/forgot-password", component: ForgetPwd },
  // { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
