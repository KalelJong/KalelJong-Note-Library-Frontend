'use client';
import React, { createContext, useContext, useState } from 'react';
import { Note } from '../types/note.interface';
import { NoteCollection } from '../types/noteCollection.interface';

interface GeneralProviderProps extends React.PropsWithChildren<{}> {}
interface GeneralContextData {
  notesData: Note[];
  setNotesData: React.Dispatch<React.SetStateAction<Note[]>>;
  noteCollectionsData: NoteCollection[];
  setNoteCollectionsData: React.Dispatch<
    React.SetStateAction<NoteCollection[]>
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  notificationVisible: boolean;
  setNotificationVisible: React.Dispatch<React.SetStateAction<boolean>>;
  notificationVariant: 'default' | 'success' | 'warning' | 'danger' | 'loading';
  notificationMessage: string;
  notificationDismissible: boolean;
  handleNotification: (
    variant: 'default' | 'success' | 'warning' | 'danger',
    message: string,
    dismissible?: boolean
  ) => void;
}

const GeneralContext = createContext<GeneralContextData | null>(null);

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error('useGeneralContext must be used within a GeneralProvider');
  }
  return context;
};

export const GeneralProvider: React.FC<GeneralProviderProps> = ({
  children,
}) => {
  const [notesData, setNotesData] = useState<Note[]>([]);
  const [noteCollectionsData, setNoteCollectionsData] = useState<
    NoteCollection[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationVariant, setNotificationVariant] = useState<
    'default' | 'success' | 'warning' | 'danger'
  >('default');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationDismissible, setNotificationDismissible] = useState(false);

  const handleNotification = (
    variant: 'default' | 'success' | 'warning' | 'danger',
    message: string,
    dismissible?: boolean
  ) => {
    setNotificationVisible(true);
    setNotificationVariant(variant);
    setNotificationMessage(message);
    setNotificationDismissible(dismissible || false);

    setTimeout(() => {
      setNotificationVisible(false);
    }, 10000);
  };

  return (
    <GeneralContext.Provider
      value={{
        notesData,
        setNotesData,
        noteCollectionsData,
        setNoteCollectionsData,
        loading,
        setLoading,
        notificationVisible,
        setNotificationVisible,
        notificationVariant,
        notificationMessage,
        notificationDismissible,
        handleNotification,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
