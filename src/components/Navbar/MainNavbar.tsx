import { MarkGithubIcon } from '@primer/octicons-react';
import { Header } from '@primer/react';
import { Octicon } from '@primer/react/deprecated';
import AccountActionMenu from '../AccountActionMenu';

const MainNavbar = () => {
  return (
    <Header>
      <Header.Item>
        <Header.Link
          href="/"
          sx={{
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          <Octicon icon={MarkGithubIcon} size={32} sx={{ marginRight: 2 }} />
          <span>GitHub</span>
        </Header.Link>
      </Header.Item>
      <Header.Item full>
        <Header.Link
          href="/"
          sx={{
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          Home
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <AccountActionMenu />
      </Header.Item>
    </Header>
  );
};

export default MainNavbar;
