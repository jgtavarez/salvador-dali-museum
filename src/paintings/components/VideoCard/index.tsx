import styles from './styles.module.css';

export const VideoCard = ({src}: {src: string | undefined}) => {
    return (
        <iframe className={styles.videoCard} src={src} title="video" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen ></iframe >
    )
}
