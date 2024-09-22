import { CloudOfflineIcon } from '@primer/octicons-react';
import { Box, Button, Heading } from '@primer/react';

function BlankStateBackendError() {
  return (
    <Box
      sx={{
        paddingX: ['0px', '10px', '20px', '40px'],
        paddingY: ['0px', '20px', '40px', '80px'],
      }}
    >
      <Box
        className="blankslate blankslate-large"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: '128px',
        }}
      >
        <CloudOfflineIcon size={64} className="blankslate-icon" />
        <Heading as="h3" className="blankslate-heading">
          Failed to connect to the backend systems.
        </Heading>
        <p>
          It seems we&apos;re having trouble connecting to the backend. Please
          check your internet connection and try again.
        </p>
        <div className="blankslate-action">
          <Button variant="primary" onClick={() => window.location.reload()}>
            Retry connection
          </Button>
        </div>
      </Box>
    </Box>
  );
}

export default BlankStateBackendError;
