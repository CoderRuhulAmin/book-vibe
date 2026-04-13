import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import './index.css';
import BookProvider from "./components/context/BookContext";
import { ToastContainer } from "react-toastify";



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BookProvider>
            <RouterProvider router={router} />
            <ToastContainer />
        </BookProvider>
    </StrictMode>,
)
