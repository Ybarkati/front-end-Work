import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  
} from "@heroicons/react/24/solid";
import CourseEdit from "./pages/neastedPages/Courses/Edit";
import CoursesIndex from "./pages/neastedPages/Courses/Index";
import { Home, Profile, Tables, Courses } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Show from "./pages/neastedPages/Courses/Show";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home/*",
        element: <Home />,
      },
      
      {
        icon: <TableCellsIcon {...icon} />,
        name: "HomeWork",
        path: "/homework/*",
        element: <Tables />,
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "Courses",
        path: "/courses/*",
        element: <Courses />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile/*",
        element: <Profile />,
      }
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    layout: "Courses",
    pages: [
      {
        
        name: "index",
        path: "/",
        element: <CoursesIndex />,
      },
      
      {
        name: "edit",
        path: "/edit",
        element: <CourseEdit />,
      },
      {
        
        name: "id",
        path: "/:id",
        element: <Show />,
      },
      
    ],
  },{
    layout: "Homework",
    pages: [
      {
        
        name: "index",
        path: "/",
        element: <CoursesIndex />,
      },
      
      {
        name: "edit",
        path: "/edit",
        element: <CourseEdit />,
      },
      {
        
        name: "id",
        path: "/:id",
        element: <Show />,
      },
      
    ],
  },{
    layout: "Students",
    pages: [
      {
        
        name: "index",
        path: "/",
        element: <CoursesIndex />,
      },
      
      {
        name: "edit",
        path: "/edit",
        element: <CourseEdit />,
      },
      {
        
        name: "id",
        path: "/:id",
        element: <Show />,
      },
      
    ],
  }
];

export default routes;
