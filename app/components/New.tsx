import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import type { Article } from '~/types/NewsResponse';

type Props = Article;

const New = ({
  author,
  content,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
}: Props) => {
  return (
    <Card>
      {urlToImage ? (
        <CardMedia component="img" alt={''} image={urlToImage} />
      ) : null}

      <CardContent>
        <Typography variant="body1" color="error">
          {source.name}
        </Typography>

        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Link
          href={url}
          target="_blank"
          variant="button"
          color="primary"
          width="100%"
          textAlign="center"
        >
          Leer Noticia
        </Link>
      </CardActions>
    </Card>
  );
};
export default New;
