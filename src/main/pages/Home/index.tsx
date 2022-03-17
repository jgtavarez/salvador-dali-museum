import { Paragraph } from '../../components/Paragraph';
import { useHome } from '../../hooks/useMain';
import styles from './styles.module.css';

export const Home = () => {
    const { data, loading } = useHome();

    if (data) {
        return (
            <div className='container mx-auto'>
                <div className={styles.photo}>
                    <img src={data.photo.url} alt='hero' />
                    <Paragraph title={data.paragraph[0].title} content={data.paragraph[0].content} />
                </div>
                <div className={styles.biography}>
                    {
                        data.paragraph.slice(1).map(({ title, content, _id }) => (
                            <Paragraph key={_id} title={title} content={content} />
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
