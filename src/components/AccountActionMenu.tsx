import { SignOutIcon } from '@primer/octicons-react';
import { ActionList, ActionMenu, Avatar, Box, Text } from '@primer/react';
import { useEffect, useState } from 'react';
import { logout } from '../services/auth.service';
import { users } from '../services/http.service';
import { User } from '../types/user.interface';
import BlankStateSystemError from './BlankState/BlankStateSystemError';

function AccountActionMenu() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const fetchCurrentUser = async () => {
        const response = await users.getCurrent();
        setCurrentUser(response.data);
      };
      fetchCurrentUser();
    } catch (error) {
      <BlankStateSystemError httpError={error as Record<string, unknown>} />;
    }
  }, []);

  return (
    <ActionMenu>
      <ActionMenu.Anchor>
        <Box
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text
            sx={{
              marginRight: 3,
              fontWeight: 'bold',
              color: 'fg.default',
            }}
          >
            {currentUser?.firstName} {currentUser?.lastName}
          </Text>
          <Avatar
            src={`https://avatars.githubusercontent.com/${currentUser?.username}`}
            alt={currentUser?.username}
            size={32}
          />
        </Box>
      </ActionMenu.Anchor>

      <ActionMenu.Overlay>
        <ActionList>
          <ActionList.Item
            disabled
            sx={{
              cursor: 'default !important',
              color: 'fg.default !important',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              <Text
                sx={{
                  marginRight: 1,
                }}
              >
                Signed in as
              </Text>
              <Text
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {currentUser?.username}
              </Text>
            </Box>
          </ActionList.Item>
          <ActionList.Divider />
          {/* <ActionList.LinkItem href="/settings">Settings</ActionList.LinkItem> */}
          {/* <ActionList.Divider /> */}
          <ActionList.Item variant="danger" onSelect={() => logout()}>
            Sign out
            <ActionList.TrailingVisual>
              <SignOutIcon />
            </ActionList.TrailingVisual>
          </ActionList.Item>
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  );
}

export default AccountActionMenu;
