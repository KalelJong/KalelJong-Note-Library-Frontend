import { useGeneralContext } from '@/contexts/general.context';
import { AlertIcon, CheckIcon, XIcon } from '@primer/octicons-react';
import {
  Box,
  Flash,
  IconButton,
  OcticonProps,
  Spinner,
  StyledOcticon,
} from '@primer/react';

const GeneralNotification = () => {
  const {
    notificationVisible,
    setNotificationVisible,
    notificationVariant,
    notificationMessage,
  } = useGeneralContext();

  const renderNotificationContent = () => {
    const iconMap = {
      default: null,
      success: CheckIcon,
      danger: XIcon,
      warning: AlertIcon,
      loading: <Spinner size="small" />,
    };

    const Icon = iconMap[notificationVariant];

    return (
      <Box>
        {Icon && <StyledOcticon icon={Icon as OcticonProps['icon']} />}
        {notificationMessage}
      </Box>
    );
  };

  return (
    <>
      {notificationVisible && (
        <Flash
          variant={
            notificationVariant as 'default' | 'success' | 'warning' | 'danger'
          }
          full
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingY: '20px',
            paddingX: '16px',
          }}
        >
          {renderNotificationContent()}
          <IconButton
            variant="invisible"
            aria-label="Close flash"
            icon={XIcon}
            onClick={() => setNotificationVisible(false)}
          />
        </Flash>
      )}
    </>
  );
};

export default GeneralNotification;
