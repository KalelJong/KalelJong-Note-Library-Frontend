import {
  AppsIcon,
  CalendarIcon,
  FileDirectoryIcon,
  FlameIcon,
  GlobeIcon,
  HistoryIcon,
  LockIcon,
  NoteIcon,
  StarIcon,
  TrashIcon,
  TypographyIcon,
} from '@primer/octicons-react';
import { ActionList, ActionMenu, Text, UnderlineNav } from '@primer/react';
import React from 'react';

function UnderlineNavItem() {
  const items = [
    { navigation: 'Overview', icon: AppsIcon, counter: 12 },
    { navigation: 'NoteCollections', icon: FileDirectoryIcon, counter: 5 },
    { navigation: 'Notes', icon: NoteIcon, counter: 3 },
    { navigation: 'Starred', icon: StarIcon, counter: 4 },
    { navigation: 'Trash', icon: TrashIcon, counter: 9 },
  ];
  const typeOptions = [
    { icon: AppsIcon, name: 'All' },
    { icon: GlobeIcon, name: 'Public' },
    { icon: LockIcon, name: 'Private' },
  ];
  const sortOptions = [
    { icon: FlameIcon, name: 'Importance' },
    { icon: CalendarIcon, name: 'Due Date' },
    { icon: TypographyIcon, name: 'Alphabetically' },
    { icon: HistoryIcon, name: 'Creation Date' },
  ];
  const [selectedNavIndex, setSelectedNavIndex] = React.useState(0);
  const [selectedTypeIndex, setSelectedTypeIndex] = React.useState(0);
  const [selectedSortIndex, setSelectedSortIndex] = React.useState(1);
  const selectedType = typeOptions[selectedTypeIndex];
  const selectedSort = sortOptions[selectedSortIndex];
  return (
    <UnderlineNav
      sx={{
        width: '100%',
      }}
    >
      {items.map((item, index) => (
        <UnderlineNav.Item
          key={item.navigation}
          icon={item.icon}
          aria-current={index === selectedNavIndex ? 'page' : undefined}
          counter={item.counter}
          onSelect={(e) => {
            setSelectedNavIndex(index);
            e.preventDefault();
          }}
          sx={{
            ':hover': {
              textDecoration: 'none',
            },
          }}
        >
          {item.navigation}
        </UnderlineNav.Item>
      ))}

      {/* <Hidden when={['narrow']}> */}
      <UnderlineNav.Item
        sx={{
          ':hover': {
            textDecoration: 'none',
          },
        }}
      >
        <ActionMenu>
          <ActionMenu.Button aria-label="Select field type">
            <Text
              sx={{
                color: 'fg.muted',
              }}
            >
              Type:{' '}
            </Text>
            {selectedType.name}
          </ActionMenu.Button>
          <ActionMenu.Overlay
            width="auto"
            sx={{
              zIndex: 1000,
            }}
          >
            <ActionList selectionVariant="single">
              {typeOptions.map((typeOption, index) => (
                <ActionList.Item
                  key={index}
                  selected={index === selectedTypeIndex}
                  onSelect={() => setSelectedTypeIndex(index)}
                >
                  <ActionList.LeadingVisual>
                    <typeOption.icon />
                  </ActionList.LeadingVisual>
                  {typeOption.name}
                </ActionList.Item>
              ))}
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </UnderlineNav.Item>

      <UnderlineNav.Item
        sx={{
          ':hover': {
            textDecoration: 'none',
          },
        }}
      >
        <ActionMenu>
          <ActionMenu.Button aria-label="Select field type">
            <Text
              sx={{
                color: 'fg.muted',
              }}
            >
              Sort:{' '}
            </Text>
            {selectedSort.name}
          </ActionMenu.Button>
          <ActionMenu.Overlay
            width="auto"
            sx={{
              zIndex: 1000,
            }}
          >
            <ActionList selectionVariant="single">
              {sortOptions.map((sortOption, index) => (
                <ActionList.Item
                  key={index}
                  selected={index === selectedSortIndex}
                  onSelect={() => setSelectedSortIndex(index)}
                >
                  <ActionList.LeadingVisual>
                    <sortOption.icon />
                  </ActionList.LeadingVisual>
                  {sortOption.name}
                </ActionList.Item>
              ))}
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </UnderlineNav.Item>
      {/* </Hidden> */}
    </UnderlineNav>
  );
}

export default UnderlineNavItem;
