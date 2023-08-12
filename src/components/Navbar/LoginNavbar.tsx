import { MarkGithubIcon } from '@primer/octicons-react';
import { Link } from '@primer/react';
import React from "react";

const LoginNavbar = () => {
  return (
    <Link
      sx={{
        color: 'fg.default',
      }}
      href="https://github.com/"
    >
      <MarkGithubIcon size={48} />
    </Link>
  );
};

export default LoginNavbar;
