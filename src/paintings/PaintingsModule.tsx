import { Routes, Route, Navigate } from 'react-router-dom';
import { Paintings } from './pages/Paintings/index';
import { Navbar } from '../shared/components/Navbar/index';
import { StyleSheet } from '../shared/interfaces';

export const PaintingsModule = () => {
    return (
        <div style={styles.container}>
            <Navbar />

            <Routes>
                <Route path="" element={<Paintings />} />

                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>

            <p>s</p>
        </div>
    )
};

export default PaintingsModule;

const styles: StyleSheet = {
    container: {
        padding: '2rem',
        backgroundColor: 'var(--beige)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}
