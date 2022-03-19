import { useContext } from 'react';
import styles from './styles.module.css';
import { paintingsContext } from '../../PaintingsModule';
import { VideoCard } from '../VideoCard';
import { LocationMap } from '../LocationMap';
import arrow from '../../assets/arrow.png';
import share from '../../assets/share.png';

export const PaintingDetails = () => {
  const { state, closePaintingDetails } = useContext(paintingsContext)

  return (
    <div className={`overlay ${state.showDetails && 'active'}`} onClick={() => closePaintingDetails()}>
      <div className={`modal ${styles.PaintingDetails} ${state.showDetails && 'active'}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.control}>
          <button onClick={() => closePaintingDetails()}>
            <img src={arrow} alt='arrow' />
          </button>
          <h2>{state.paintingSelected?.name}</h2>
          <button>
            <img src={share} alt='share' />
          </button>
        </div>
        <div className={styles.line}>
          <div>
            <h4>{state.paintingSelected?.year}</h4>
            <span>Year</span>
          </div>
          <div>
            <h4>{state.paintingSelected?.painting_detail.media}</h4>
            <span>Media</span>
          </div>
          <div>
            <h4>{state.paintingSelected?.painting_detail.dimensions}</h4>
            <span>Dimensions</span>
          </div>
        </div>
        <VideoCard src={state.paintingSelected?.painting_detail.video} />
        <h3>History</h3>
        <p>{state.paintingSelected?.painting_detail.history}</p>
        <h3>Location</h3>
        <LocationMap src={state.paintingSelected?.painting_detail.location} />
      </div>
    </div>
  )
}
