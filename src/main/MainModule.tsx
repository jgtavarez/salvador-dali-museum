import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from '../shared/components/Navbar/index';
import { StyleSheet } from '../shared/interfaces';

export const MainModule = () => {
    return (
        <div style={styles.container}>
            {/* <Navbar /> */}

            <Routes>
                <Route path="home" element={<Home />} />

                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    )
};

export default MainModule;

const styles: StyleSheet = {
    container: {
        padding: '2rem',
        backgroundColor: 'var(--beige)',
        minHeight: '100vh',
    }
}
