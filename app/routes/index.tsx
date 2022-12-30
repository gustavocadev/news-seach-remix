import { Button, Container, Typography } from '@mui/material';
import { Form } from '@remix-run/react';
import NewsForm from '../components/NewsForm';
import type { ActionArgs } from '@remix-run/node';
import ListNews from '~/components/ListNews';

export async function action({ request }: ActionArgs) {
  const formData = Object.fromEntries(await request.formData());
  console.log(formData);
  return {};
}

export default function Index() {
  return (
    <Container>
      <header>
        <Typography align="center" marginY={5} component="h1" variant="h3">
          Buscador de noticias{' '}
        </Typography>
      </header>
      <Container maxWidth="sm">
        <Form method="post">
          <NewsForm />
        </Form>
      </Container>
      <ListNews />
    </Container>
  );
}
