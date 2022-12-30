import useNewsContext from '../hooks/useNewsContext';
import { Pagination, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import New from './New';
import Stack from '@mui/material/Stack';

const ListNews = () => {
  const { news, currentPage, totalNews, handleChangePage } = useNewsContext();

  const totalPages = Math.ceil(totalNews / 20);

  console.log('totalPages', totalPages);
  return (
    <div>
      <Typography textAlign="center" marginY={5} variant="h3" component="h2">
        Ultimas noticias
      </Typography>

      <Grid container spacing={2}>
        {news.map((article) => {
          return (
            <Grid xs={12} sm={6} md={4} key={article.url}>
              <New {...article} />
            </Grid>
          );
        })}
      </Grid>
      <Stack sx={{ marginY: 4 }} justifyContent="center" alignItems="center">
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChangePage}
          page={currentPage}
        />
      </Stack>
    </div>
  );
};
export default ListNews;
