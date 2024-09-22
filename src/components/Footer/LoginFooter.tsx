import { Box, Link } from '@primer/react';

const LoginFooter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          marginRight: 3,
        }}
      >
        <Link href="/site/terms">Terms</Link>
      </Box>
      <Box
        sx={{
          marginRight: 3,
        }}
      >
        <Link href="/site/privacy">Privacy</Link>
      </Box>
      <Box
        sx={{
          marginRight: 3,
        }}
      >
        <Link href="/security">Security</Link>
      </Box>
      <div>
        <Link
          sx={{
            color: 'fg.muted',
            '&:hover': {
              color: 'accent.fg',
            },
          }}
          href="https://github.com/contact"
        >
          Contact GitHub
        </Link>
      </div>
    </Box>
  );
};

export default LoginFooter;
