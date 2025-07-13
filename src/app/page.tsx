"use server";
import Link from 'next/link';
import { Box, Typography, Button, Stack } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        bgcolor: theme.vars.palette.background.default,
        color:   theme.vars.palette.text.primary,
        p:       4,
      })}
    >
      <Typography variant="h1" textAlign="center">
        Welcome&nbsp;🎉
      </Typography>

      <Typography variant="body2" textAlign="center">
        Get started by editing&nbsp;
        <code>src/app/page.tsx</code>.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button
          component={Link}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          Deploy now
        </Button>

        <Button
          component={Link}
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          color="secondary"
        >
          Read docs
        </Button>
      </Stack>

      <Stack
        component="footer"
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        mt={6}
      >
        <Button
          component={Link}
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
        >
          Learn
        </Button>
        <Button
          component={Link}
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
        >
          Examples
        </Button>
        <Button
          component={Link}
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
        >
          nextjs.org&nbsp;→
        </Button>
      </Stack>
    </Box>
  );
}
