import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import QuizDetails from "../components/QuizDetails/QuizDetails";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../layouts/Main";
import { getQuizTopicsData } from "./loader";

const router = createBrowserRouter([
    {
        path: '/',
        loader: getQuizTopicsData,
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/topics',
                element: <Topics></Topics>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/quiz/:id',
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <QuizDetails></QuizDetails>
            }

        ]
    }
])

export default router;