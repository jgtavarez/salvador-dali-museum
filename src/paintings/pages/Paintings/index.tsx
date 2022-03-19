import { PaintingBox } from '../../components/PaintingBox';
import { usePaintings } from '../../hooks/usePaintings';
import styles from './styles.module.css';

export const Paintings = () => {
    const { data, loading } = usePaintings();

    if (data) {
        return (
            <div className='container mx-auto'>
                <h2 className={styles.name}>Salvador Dalí</h2>
                <div className={styles.slider}>
                    {
                        data.map((painting) => (
                            <PaintingBox key={painting._id} painting={painting} />
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <span>Loading...</span>
    )
}
