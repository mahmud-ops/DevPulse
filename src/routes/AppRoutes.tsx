import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayouts from "../app/layouts/AppLayouts";
import LoginPage from "../pages/LoginPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import DashBoardPage from "../pages/DashBoardPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import SettingsPage from "../pages/SettingsPage";

const appRouter = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: <AppLayouts />,
        children: [
            { index: true, element: <Navigate to="/dashboard" replace /> },
            {path: 'dashboard', element: <DashBoardPage />},
            {path: 'projects', element: <ProjectPage />},
            {path: 'analytics', element: <AnalyticsPage />},
            {path: 'projects/:id', element: <ProjectDetailsPage />},
            {path: 'settings', element: <SettingsPage />}
        ]
    }
])

export default appRouter;