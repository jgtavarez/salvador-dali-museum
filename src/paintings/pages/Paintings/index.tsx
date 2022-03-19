import { PaintingBox } from '../../components/PaintingBox';
import { usePaintings } from '../../hooks/usePaintings';
import Carousel from 'react-elastic-carousel';
import styles from './styles.module.css';

const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: false },
    { width: 768, itemsToShow: 3 },
]

export const Paintings = () => {
    const { data, loading } = usePaintings();

    if (data) {
        return (
            <div className='container mx-auto'>
                <h2 className={styles.name}>Salvador Dalí</h2>
                <div>
                    <Carousel isRTL={false} breakPoints={breakPoints} className={styles.carousel} >
                        {
                            data.map((painting) => (
                                <PaintingBox key={painting._id} painting={painting} />
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        )
    }

    return (
        <span>Loading...</span>
    )
}
