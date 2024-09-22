import { useGeneralContext } from '@/contexts/general.context';
import { AlertIcon, CheckIcon, XIcon } from '@primer/octicons-react';
import {
  Flash,
  IconButton,
  Octicon,
  OcticonProps,
  Spinner,
} from '@primer/react';

const GeneralNotification = () => {
  const { flashVisible, setFlashVisible, flashVariant, flashMessage } =
    useGeneralContext();

  const renderNotificationContent = () => {
    const iconMap = {
      default: null,
      success: CheckIcon,
      danger: XIcon,
      warning: AlertIcon,
      loading: <Spinner size="small" />,
    };

    const Icon = iconMap[flashVariant];

    return (
      <div>
        {Icon && <Octicon icon={Icon as OcticonProps['icon']} />}
        {flashMessage}
      </div>
    );
  };

  const XIconOcticon = () => (
    <Octicon
      icon={XIcon}
      sx={{
        margin: '0 !important',
      }}
    />
  );

  return (
    <>
      {flashVisible && (
        <Flash
          variant={flashVariant as 'default' | 'success' | 'warning' | 'danger'}
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
            icon={XIconOcticon}
            onClick={() => setFlashVisible(false)}
          />
        </Flash>
      )}
    </>
  );
};

export default GeneralNotification;
