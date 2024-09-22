import { useNoteCollectionContext } from '@/contexts/note-collection.context';
import { PencilIcon, TrashIcon } from '@primer/octicons-react';
import { Box, Button, ButtonGroup, Text } from '@primer/react';
import { Hidden } from '@primer/react/drafts';
import { NoteCollection } from '../../types/note-collection.interface';
import { Note } from '../../types/note.interface';
import NoteCollectionActionMenu from './NoteCollectionActionMenu';

const NoteCollectionItem = ({
  noteCollection,
}: {
  noteCollection: NoteCollection;
}) => {
  const {
    openNoteCollectionDialog,
    setSelectedNoteCollection,
    confirmDeleteNoteCollection,
  } = useNoteCollectionContext();

  const textStyle = {
    width: ['150px', '300px', '450px', '600px'],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const boxStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBlock: 8,
    paddingInline: 12,
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Text fontWeight="bold" sx={textStyle}>
          {noteCollection.title}
        </Text>
        <Text color="fg.subtle" sx={textStyle}>
          {noteCollection.notes.map((note: Note) => note.title).join(', ')}
        </Text>
      </Box>
      <Button onClick={(e) => e.stopPropagation()}>
        <Hidden when={['narrow']}>
          <ButtonGroup>
            <Button
              leadingVisual={PencilIcon}
              onClick={() => {
                setSelectedNoteCollection(noteCollection);
                openNoteCollectionDialog('update');
              }}
            >
              Edit
            </Button>
            <Button
              leadingVisual={TrashIcon}
              variant="danger"
              onClick={() => {
                setSelectedNoteCollection(noteCollection);
                confirmDeleteNoteCollection(noteCollection);
              }}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Hidden>

        <Hidden when={['regular', 'wide']}>
          <NoteCollectionActionMenu noteCollection={noteCollection} />
        </Hidden>
      </Button>
    </Box>
  );
};

export default NoteCollectionItem;
