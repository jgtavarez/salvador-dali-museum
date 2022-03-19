import styles from './styles.module.css';

export const LocationMap = ({ src }: { src: string | undefined }) => {
    return (
        <iframe className={styles.locationMap} src={src} allowFullScreen loading="lazy"></iframe>
    )
}
