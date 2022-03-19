import { PaintingsResp } from '../../interfaces/index';
import styles from './styles.module.css';
import frame from '../../assets/frame.png'
import { paintingsContext } from '../../PaintingsModule';
import { useContext } from 'react';

interface Props {
  painting: PaintingsResp;
}

export const PaintingBox = ({ painting }: Props) => {
  const { openPaintingDetails } = useContext(paintingsContext);

  return (
    <div className={styles.paintingBox}>
      <div className={styles.frame} style={{ backgroundImage: `url(${painting.painting.url})` }} onClick={() => openPaintingDetails(painting)}>
        <img src={frame} alt="paintings-frame" />
      </div>
      <div className={styles.text}>
        <h5>{painting.name}</h5>
        <span>{painting.year}</span>
      </div>
    </div>
  )
}
