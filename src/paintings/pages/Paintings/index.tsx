import { PaintingBox } from '../../components/PaintingBox';
import { PaintingDetails } from '../../components/PaintingDetails';
import Carousel from 'react-elastic-carousel';
import styles from './styles.module.css';
import { paintingsContext } from '../../PaintingsModule';
import { useContext } from 'react';

const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: false },
    { width: 768, itemsToShow: 3 },
]

export const Paintings = () => {
    const { state } = useContext(paintingsContext);

    if (state.paintings) {
        return (
            <div className='container mx-auto'>
                <h2 className={styles.name}>Salvador Dalí</h2>
                <div>
                    <Carousel isRTL={false} breakPoints={breakPoints} className={styles.carousel} >
                        {
                            state.paintings.map((painting) => (
                                <PaintingBox key={painting._id} painting={painting} />
                            ))
                        }
                    </Carousel>
                </div>

                <PaintingDetails />
            </div>
        )
    }

    return (
        <span>Loading...</span>
    )
}
