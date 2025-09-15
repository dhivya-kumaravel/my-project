import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home.jsx";
import CreateJob from "../Pages/CreateJob.jsx";
import MyJobs from "../Pages/MyJobs.jsx";
import Login from "../Components/Login.jsx";
import SignUp from "../Components/SignUp.jsx";
import Track from "../Components/Track.jsx";
import CreateProfile from "../Components/CreateProfile.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [{path: "/",  element: <Home/>},
      {path: "/post-job",  element: <CreateJob/>},
      {path: "/my-job",  element: <MyJobs/>},
      {path:"/login", element: <Login/>},
      {path:"/signup", element: <SignUp/>},
      {path:"/track-here", element:<Track/>},
      {path:"/create-profile", element:<CreateProfile/>}
      

      ]
    },
  ]);
  export default router;