import { Suspense } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../shared/components/Navbar';
import { ScreenLoader } from '../shared/components/ScreenLoader';
import { StyleSheet } from '../shared/interfaces';
import { routes } from './routes';

export const Router = () => {
    return (
        <Suspense fallback={<ScreenLoader />}>
            <BrowserRouter>
                <div style={styles.container}>
                    <Navbar />
                    <Routes>
                        {
                            routes.map(({ path, component: Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
};

const styles: StyleSheet = {
    container: {
        padding: '2rem',
        backgroundColor: 'var(--beige)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }
}
