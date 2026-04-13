import { createBrowserRouter } from "react-router";
import Home from "../layout/frontend/Home";
import Books from "../pages/books/Books";
import HomePage from "../pages/homepage/HomePage";
import ErrorPage from "../pages/error-page/ErrorPage";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: '/book-details/:id',
                Component: BookDetails,
                loader: () => fetch('/data/booksData.json'),
            }
        ],
        errorElement: <ErrorPage />,
    }
])