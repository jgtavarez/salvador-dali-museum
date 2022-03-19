import styles from './styles.module.css';

interface Props {
    title: string | undefined;
    content: string | undefined;
}

export const Paragraph = ({ title, content }: Props) => {
    return (
        <div className={styles.paragraph}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
