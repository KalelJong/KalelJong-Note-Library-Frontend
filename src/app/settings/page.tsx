import BlankStateSystemError from '@/components/BlankState/BlankStateSystemError';
import GeneralFlash from '@/components/Flash/GeneralFlash';
import MainNavbar from '@/components/Navbar/MainNavbar';
import { useAuthContext } from '@/contexts/auth.context';
import { useGeneralContext } from '@/contexts/general.context';
import { users } from '@/services/http.service';
import { User } from '@/types/user.interface';
import {
  AlertIcon
} from '@primer/octicons-react';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  Flash,
  FormControl,
  Heading,
  Link,
  PageLayout,
  Pagehead,
  StyledOcticon,
  Text,
  TextInput
} from '@primer/react';
import React, { useEffect, useState } from 'react';
import './main.css';

const Settings = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [username, setUsername] = useState('');

  const { handleFlash } = useGeneralContext();
  const { setPassword, setConfirmPassword } = useAuthContext();

  const [usernameInfoDialogIsOpen, setUsernameInfoDialogIsOpen] =
    useState(false);
  const [usernameDialogIsOpen, setUsernameDialogIsOpen] = useState(false);
  const [accountDialogIsOpen, setAccountDialogIsOpen] = useState(false);

  const [updatePasswordIsDisabled, setUpdatePasswordIsDisabled] =
    useState(true);
  const [deleteAccountIsDisabled, setDeleteAccountIsDisabled] = useState(true);

  const handleUpdatePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleFlash('default', 'Password changed successfully.', true);
  };

  useEffect(() => {
    try {
      const fetchCurrentUser = async () => {
        try {
          const response = await users.getCurrent();
          setCurrentUser(response.data);
        } catch (error) {
          <BlankStateSystemError httpError={error} />;
        }
      };

      fetchCurrentUser();
    } catch (error) {
      <BlankStateSystemError httpError={error} />;
    }
  }, []);

  return (
    <PageLayout containerWidth="full" padding="none">
      <PageLayout.Header
        sx={{
          padding: '0 !important',
          margin: '0 !important',
        }}
      >
        <MainNavbar />
        <GeneralFlash />
      </PageLayout.Header>
      <PageLayout.Content padding="normal" width="xlarge">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 1,
            marginBottom: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: [2, 0],
            }}
          >
            <Avatar
              src="https://github.com/octocat.png"
              alt="@octocat"
              size={48}
              sx={{
                marginRight: 3,
              }}
            />
            <Box
              sx={{
                flex: 'auto',
              }}
            >
              <Heading
                as="h3"
                sx={{
                  fontSize: '20px',
                  lineHeight: '1.25',
                }}
              >
                <Text
                  sx={{
                    color: 'fg.default',
                  }}
                >
                  {currentUser?.firstName} {currentUser?.lastName}{' '}
                  <Text
                    sx={{
                      color: 'fg.muted',
                    }}
                  >
                    ({currentUser?.username})
                  </Text>
                </Text>
              </Heading>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Text
                  sx={{
                    color: 'fg.muted',
                    marginBottom: 0,
                    marginRight: 3,
                  }}
                >
                  Your personal account
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Pagehead
            as="h2"
            sx={{
              padding: 0,
              margin: 0,
              fontWeight: '400',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 3,
              paddingBottom: 2,
            }}
          >
            Public profile
          </Pagehead>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FormControl
              required
              sx={{
                width: '100%',
                marginRight: 4,
              }}
            >
              <FormControl.Label
                sx={{
                  marginBottom: 2,
                  marginRight: 2,
                  fontWeight: '400',
                  textAlign: 'left',
                }}
              >
                Enter your firstname
              </FormControl.Label>
              <TextInput
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter firstname"
                block
                sx={{
                  marginTop: 1,
                  marginBottom: 4,
                  paddingY: '5px',
                }}
              />
            </FormControl>
            <FormControl
              required
              sx={{
                width: '100%',
              }}
            >
              <FormControl.Label
                sx={{
                  marginBottom: 2,
                  fontWeight: '400',
                  textAlign: 'left',
                }}
              >
                Enter your lastname
              </FormControl.Label>
              <TextInput
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter lastname"
                block
                sx={{
                  marginTop: 1,
                  marginBottom: 4,
                  paddingY: '5px',
                }}
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FormControl
              sx={{
                width: '100%',
                marginRight: 4,
              }}
            >
              <FormControl.Label
                sx={{
                  marginBottom: 2,
                  marginRight: 2,
                  fontWeight: '400',
                  textAlign: 'left',
                }}
              >
                Enter your age
              </FormControl.Label>
              <TextInput
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter age"
                block
                sx={{
                  marginTop: 1,
                  marginBottom: 4,
                  paddingY: '5px',
                }}
              />
            </FormControl>
            <FormControl
              sx={{
                width: '100%',
              }}
            >
              <FormControl.Label
                sx={{
                  marginBottom: 2,
                  fontWeight: '400',
                  textAlign: 'left',
                }}
              >
                Enter your gender
              </FormControl.Label>
              <TextInput
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter gender"
                block
                sx={{
                  marginTop: 1,
                  marginBottom: 4,
                  paddingY: '5px',
                }}
              />
            </FormControl>
          </Box>
          <Text
            sx={{
              color: 'fg.muted',
              fontSize: '12px',
            }}
          >
            <Text as="p">
              All of the fields on this page are optional and can be deleted at
              any time, and by filling them out, you&apos;re giving us consent to
              share this data wherever your user profile appears. Please see our{' '}
              <Link href="https://github.com/site/privacy">
                privacy statement
              </Link>{' '}
              to learn more about how we use this information.
            </Text>
          </Text>
          <Button
            variant="primary"
            onClick={() => setUsernameInfoDialogIsOpen(true)}
          >
            Update profile
          </Button>
        </Box>
        <Box>
          <Pagehead
            as="h2"
            sx={{
              padding: 0,
              margin: 0,
              fontWeight: '400',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '40px',
              marginBottom: 3,
              paddingBottom: 2,
            }}
          >
            Change username
          </Pagehead>
          <Button onClick={() => setUsernameInfoDialogIsOpen(true)}>
            Change username
          </Button>
          <Dialog isOpen={usernameInfoDialogIsOpen}>
            <Dialog.Header>Really change your username?</Dialog.Header>
            <Flash
              variant="danger"
              full
              sx={{
                paddingY: '20px',
                paddingX: '16px',
              }}
            >
              <StyledOcticon icon={AlertIcon} />
              Unexpected bad things will happen if you don’t read this!
            </Flash>
            <Box
              sx={{
                padding: 3,
              }}
            >
              <ul className="mb-3 ml-3">
                <li>
                  We <strong>will not</strong> set up redirects for your old
                  profile page.
                </li>
                <li>
                  We <strong>will not</strong> set up redirects for Pages sites.
                </li>
                <li>
                  We <strong>will</strong> create redirects for your
                  repositories (web and git access).
                </li>
                <li>Renaming may take a few minutes to complete.</li>
              </ul>
              <Button
                variant="danger"
                block
                onClick={() => {
                  setUsernameInfoDialogIsOpen(false);
                  setUsernameDialogIsOpen(true);
                }}
              >
                I understand, let’s change my username
              </Button>
            </Box>
          </Dialog>
          <Dialog isOpen={usernameDialogIsOpen}>
            <Dialog.Header>Really change your username?</Dialog.Header>
            <Flash
              variant="danger"
              full
              sx={{
                paddingY: '20px',
                paddingX: '16px',
              }}
            >
              <StyledOcticon icon={AlertIcon} />
              Unexpected bad things will happen if you don’t read this!
            </Flash>
            <Box
              sx={{
                padding: 3,
              }}
            >
              <Button
                variant="danger"
                block
                onClick={() => {
                  setUsernameDialogIsOpen(false);
                }}
              >
                I understand, let’s change my username
              </Button>
            </Box>
          </Dialog>
        </Box>
        <Box>
          <Pagehead
            as="h2"
            sx={{
              padding: 0,
              margin: 0,
              fontWeight: '400',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '40px',
              marginBottom: 3,
              paddingBottom: 2,
            }}
          >
            Change password
          </Pagehead>

          <Flash
            variant="warning"
            sx={{
              paddingY: '20px',
              paddingX: '16px',
            }}
          >
            Old password isn&apos;t valid
          </Flash>

          {/* <ValidationFlash /> */}

          <Box as={'form'} onSubmit={handleUpdatePasswordSubmit}>
            <FormControl
              required
              sx={{
                marginY: '15px',
              }}
            >
              <FormControl.Label
                sx={{
                  marginBottom: '6px',
                }}
              >
                Old password
              </FormControl.Label>
              <TextInput
                type="text"
                // loading={true}
                onChange={(e) => setUsername(e.target.value)}
                block
                sx={{
                  paddingY: '5px',
                }}
              />
            </FormControl>
            <FormControl
              required
              sx={{
                marginY: '15px',
              }}
            >
              <FormControl.Label
                sx={{
                  marginBottom: '6px',
                }}
              >
                New password
              </FormControl.Label>
              <TextInput
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                block
                sx={{
                  paddingY: '5px',
                }}
              />
            </FormControl>
            <FormControl
              required
              sx={{
                marginY: '15px',
              }}
            >
              <FormControl.Label
                sx={{
                  marginBottom: '6px',
                }}
              >
                Confirm new password
              </FormControl.Label>
              <TextInput
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                block
                sx={{
                  paddingY: '5px',
                }}
              />
            </FormControl>

            <Text
              sx={{
                color: 'fg.muted',
                fontSize: '12px',
              }}
            >
              <Text as="p">
                Make sure it&apos;s{' '}
                {/* add red color & bold text if validation of password failed. else add green color */}
                <Text>at least 15 characters</Text> OR{' '}
                {/* add red color & bold text if validation of password failed. else add green color */}
                <Text>at least 8 characters</Text>{' '}
                {/* add red color & bold text if validation of password failed. else add green color */}
                <Text>including a number</Text>{' '}
                {/* add red color & bold text if validation of password failed. else add green color */}
                <Text>and a lowercase letter</Text>.{' '}
                <Link href="https://docs.github.com/articles/creating-a-strong-password">
                  Learn more
                </Link>
                .
              </Text>
            </Text>
            <FormControl
              required
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Button
                type="submit"
                disabled={updatePasswordIsDisabled}
                sx={{
                  marginRight: 2,
                }}
              >
                Update password
              </Button>
              <Link href="/password_reset">I forgot my password</Link>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <Pagehead
            as="h2"
            sx={{
              padding: 0,
              margin: 0,
              color: 'danger.fg',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '40px',
              marginBottom: 3,
              paddingBottom: 2,
            }}
          >
            Delete account
          </Pagehead>
          <Text as="p">
            Once you delete your account, there is no going back. Please be
            certain.
          </Text>
          <Button variant="danger" onClick={() => setAccountDialogIsOpen(true)}>
            Delete your account
          </Button>
          <Dialog isOpen={accountDialogIsOpen}>
            <Dialog.Header>Are you sure you want to do this?</Dialog.Header>
            <Flash
              variant="danger"
              full
              sx={{
                paddingY: '20px',
                paddingX: '16px',
              }}
            >
              <StyledOcticon icon={AlertIcon} />
              This is extremely important.
            </Flash>
            <Box
              sx={{
                padding: 3,
              }}
            >
              <Text as="p">
                We will{' '}
                <strong>immediately delete all of your repositories (0)</strong>
                , along with all of your forks, wikis, issues, pull requests,
                and GitHub Pages sites.
              </Text>
              <Text as="p">
                You will no longer be billed, and after 90 days your username
                will be available to anyone on GitHub.
              </Text>
              <Text as="p">
                For more help, read our article &quot;
                <Link href="https://docs.github.com/articles/deleting-your-user-account">
                  Deleting your user account
                </Link>
                &quot;.
              </Text>
              <hr></hr>
              <Box
                as={'form'}
                // onSubmit={handleDeleteAccountSubmit}
              >
                <FormControl
                  required
                  sx={{
                    marginY: '15px',
                  }}
                >
                  <FormControl.Label>Your username:</FormControl.Label>
                  <TextInput
                    type="text"
                    // loading={true}
                    onChange={(e) => setUsername(e.target.value)}
                    block
                    sx={{
                      paddingY: '5px',
                    }}
                  />
                </FormControl>
                <FormControl
                  required
                  sx={{
                    marginY: '15px',
                  }}
                >
                  <FormControl.Label>
                    To verify, type{' '}
                    <Text
                      sx={{
                        fontStyle: 'italic',
                        fontWeight: '400',
                      }}
                    >
                      delete my account
                    </Text>{' '}
                    below:
                  </FormControl.Label>
                  <TextInput
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    block
                    sx={{
                      paddingY: '5px',
                    }}
                  />
                </FormControl>
                <FormControl
                  required
                  sx={{
                    marginY: '15px',
                  }}
                >
                  <FormControl.Label>Confirm your password:</FormControl.Label>
                  <TextInput
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    block
                    sx={{
                      paddingY: '5px',
                    }}
                  />
                </FormControl>

                <FormControl required>
                  <Button
                    variant="danger"
                    type="submit"
                    disabled={deleteAccountIsDisabled}
                    block
                    onClick={() => setAccountDialogIsOpen(false)}
                  >
                    Delete this account
                  </Button>
                </FormControl>
              </Box>
            </Box>
          </Dialog>
        </Box>
      </PageLayout.Content>

      <PageLayout.Footer
        sx={{
          maxWidth: 1012,
          marginRight: 'auto',
          marginLeft: 'auto',

          paddingX: [16, 40, 40, 16],
          paddingY: 6,
          marginTop: 6,
          fontSize: '12px',
        }}
      >
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
          <Box>
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
          </Box>
        </Box>
      </PageLayout.Footer>
    </PageLayout>
  );
};

export default Settings;
