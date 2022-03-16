import { StyleSheet } from '../../shared/interfaces';
import { Paragraph } from '../components/Paragraph';
import { useHome } from '../hooks/useMain';

export const Home = () => {
  const { data, loading } = useHome();

  if (data) {
    return (
      <>
        <img style={styles.photo} src={data.photo.url} alt='' />
        <div style={styles.biography}>
          {
            data.paragraph.map(({ title, content, _id }) => (
              <Paragraph key={_id} title={title} content={content} />
            ))
          }
        </div>
      </>
    )
  }

  return (
    <span>Loading...</span>
  )
}

const styles: StyleSheet = {
  photo: {
    margin: '3rem 0'
  },
  biography: {
    display: 'flex',
    flexDirection: 'column',
    gap: 35,
  }
}
