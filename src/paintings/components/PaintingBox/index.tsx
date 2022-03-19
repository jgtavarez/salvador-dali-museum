import { PaintingsResp } from '../../interfaces/index';
import styles from './styles.module.css';
import frame from '../../assets/frame.png'

interface Props {
  painting: PaintingsResp;
}

export const PaintingBox = ({ painting }: Props) => {
  return (
    <div className={styles.paintingBox}>
      <div className={styles.frame} style={{backgroundImage: `url(${painting.painting.url})`}}>
        <img src={frame} alt="paintings-frame" />

      </div>
      <div>
        <h5>{painting.name}</h5>
        <span>{painting.year}</span>
      </div>
    </div>
  )
}
