import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
  Switch
  
} from "@material-tailwind/react";
import { homework } from "@/data";
import CourseEdit from "../neastedPages/Courses/Edit";
import CoursesIndex from "../neastedPages/Courses/Index";
import { Routes,Route, useNavigate, Navigate } from "react-router-dom";
import Show from "../neastedPages/Courses/Show";
import { useEffect } from "react";
import routes from "@/routes";
export function Courses() {
  // const navigate=useNavigate()
  // useEffect(()=>{
  // navigate("home")
  // },[])

  return (
    <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "Courses" &&
              pages.map(({ path, element }) => (
                <Route exact  path={path} element={element} />
              ))
          )}
        </Routes>
  );
}

export default Courses;
