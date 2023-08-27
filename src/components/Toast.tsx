import { useGeneralContext } from '@/contexts/general.context';
import { AlertIcon, CheckIcon, InfoIcon, XIcon } from '@primer/octicons-react';
import {
  Box,
  IconButton,
  Octicon,
  OcticonProps,
  Spinner,
  Text,
} from '@primer/react';

function Toast() {
  const {
    notificationVisible,
    setNotificationVisible,
    notificationVariant,
    notificationMessage,
  } = useGeneralContext();

  const variantMap = {
    default: {
      icon: InfoIcon,
      color: 'accent.emphasis',
    },
    success: { icon: CheckIcon, color: 'success.emphasis' },
    danger: { icon: XIcon, color: 'danger.emphasis' },
    // danger: { icon: StopIcon, color: 'danger.emphasis' },
    warning: { icon: AlertIcon, color: 'attention.emphasis' },
    loading: { icon: <Spinner size="small" />, color: 'neutral.emphasis' },
  };

  const variant = variantMap[notificationVariant];

  return (
    <>
      {notificationVisible && (
        <Box
          sx={{
            padding: 1,
          }}
        >
          {/* @media (min-width: 544px)
.Toast {
    width: max-content;
    max-width: 450px;
    margin: 16px;
}

.Toast {
    display: flex;
    margin: 8px;
    color: var(--fgColor-default, var(--color-fg-default));
    background-color: var(--bgColor-default, var(--color-canvas-default));
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px var(--borderColor-default, var(--color-border-default)),var(--shadow-floating-large, var(--color-shadow-large));
} */}
          <Box
            sx={{
              width: 'max-content',
              maxWidth: '450px',

              display: 'flex',
              margin: 2,
              color: 'fg.default',
              backgroundColor: 'canvas.default',
              borderRadius: '6px',
              boxShadow:
                'inset 0 0 0 1px var(--borderColor-default, var(--color-border-default)),var(--shadow-floating-large, var(--color-shadow-large))',
            }}
          >
            {/* .Toast-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    flex-shrink: 0;
    color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis));
    background-color: var(--bgColor-accent-emphasis, var(--color-accent-emphasis));
    border: 1px solid rgba(0,0,0,0);
    border-right: 0;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
} */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                flexShrink: 0,
                color: 'fg.onEmphasis',
                backgroundColor: variant.color,
                border: '1px solid rgba(0,0,0,0)',
                borderRight: 0,
                borderTopLeftRadius: 'inherit',
                borderBottomLeftRadius: 'inherit',
              }}
            >
              {variant === variantMap.loading ? (
                variant.icon
              ) : (
                <Octicon icon={variant.icon as OcticonProps['icon']} />
              )}
            </Box>
            {/* .Toast-content {
    padding: 16px;
} */}
            <Text
              sx={{
                padding: 3,
              }}
            >
              {notificationMessage}
            </Text>
            {/* .Toast-dismissButton {
    max-height: 54px;
    padding: 16px;
    color: inherit;
    background-color: rgba(0,0,0,0);
    border: 0;
} */}
            {/* <button
          style={{
            maxHeight: '54px',
            padding: 3,
            color: 'inherit',
            backgroundColor: 'rgba(0,0,0,0)',
            border: 0,
          }}
        >
          <svg
            width="12"
            height="16"
            viewBox="0 0 12 16"
            className="octicon octicon-x"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
            ></path>
          </svg>
        </button> */}
            <IconButton
              variant="invisible"
              aria-label="Close toast"
              icon={XIcon}
              onClick={() => setNotificationVisible(false)}
              sx={{
                alignSelf: 'center',
                marginRight: '12px',
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Toast;
