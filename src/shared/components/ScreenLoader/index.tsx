import styles from './styles.module.css'

export const ScreenLoader = () => {
    return (
        <div className="overlay active">
            <div className={`${styles.svgLoader} ${styles.modal} ${styles.active}`}>
                <svg className={styles.svgContainer} height="100" width="100" viewBox="0 0 100 100">
                    <circle className={`${styles.loaderSvg} ${styles.bg}`} cx="50" cy="50" r="45"></circle>
                    <circle className={`${styles.loaderSvg} ${styles.animate}`} cx="50" cy="50" r="45"></circle>
                </svg>
            </div>
        </div >
    )
}