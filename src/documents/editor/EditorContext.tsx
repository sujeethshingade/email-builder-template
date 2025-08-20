"use client";

import { useEffect } from 'react';
import { create } from 'zustand';

import getConfiguration from '../../templates';

import { TEditorConfiguration } from './core';

type TValue = {
  document: TEditorConfiguration;

  selectedBlockId: string | null;
  selectedSidebarTab: 'block-configuration' | 'styles';
  selectedMainTab: 'editor' | 'preview' | 'html';
  selectedScreenSize: 'desktop' | 'mobile';
  currentTemplate: string;

  inspectorDrawerOpen: boolean;
  samplesDrawerOpen: boolean;
  isInitialized: boolean;

  history: TEditorConfiguration[];
  historyIndex: number;
  maxHistorySize: number;
};

const editorStateStore = create<TValue>(() => ({
  document: getConfiguration(''), // Initialize with empty string
  selectedBlockId: null,
  selectedSidebarTab: 'styles',
  selectedMainTab: 'editor',
  selectedScreenSize: 'desktop',
  currentTemplate: '',

  inspectorDrawerOpen: true,
  samplesDrawerOpen: true,
  isInitialized: false,

  history: [],
  historyIndex: -1,
  maxHistorySize: 100,
}));

// Custom hook to initialize the document on the client side
export function useEditorInitialization() {
  useEffect(() => {
    if (!editorStateStore.getState().isInitialized) {
      const currentTemplate = window.location.hash;
      const document = getConfiguration(currentTemplate);
      editorStateStore.setState({ 
        document,
        currentTemplate,
        isInitialized: true,
        history: [document],
        historyIndex: 0,
      });
    }

    const handleHashChange = () => {
      const newTemplate = window.location.hash;
      const currentState = editorStateStore.getState();
      if (currentState.currentTemplate !== newTemplate) {
        const document = getConfiguration(newTemplate);
        editorStateStore.setState({
          document,
          currentTemplate: newTemplate,
          selectedSidebarTab: 'styles',
          selectedBlockId: null,
          history: [document],
          historyIndex: 0,
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
}

export function useCurrentTemplate() {
  return editorStateStore((s) => s.currentTemplate);
}

export function useDocument() {
  return editorStateStore((s) => s.document);
}

export function useSelectedBlockId() {
  return editorStateStore((s) => s.selectedBlockId);
}

export function useSelectedScreenSize() {
  return editorStateStore((s) => s.selectedScreenSize);
}

export function useSelectedMainTab() {
  return editorStateStore((s) => s.selectedMainTab);
}

export function setSelectedMainTab(selectedMainTab: TValue['selectedMainTab']) {
  return editorStateStore.setState({ selectedMainTab });
}

export function useSelectedSidebarTab() {
  return editorStateStore((s) => s.selectedSidebarTab);
}

export function useInspectorDrawerOpen() {
  return editorStateStore((s) => s.inspectorDrawerOpen);
}

export function useSamplesDrawerOpen() {
  return editorStateStore((s) => s.samplesDrawerOpen);
}

export function useCanUndo() {
  return editorStateStore((s) => s.historyIndex > 0);
}

export function useCanRedo() {
  return editorStateStore((s) => s.historyIndex < s.history.length - 1);
}

export function setSelectedBlockId(selectedBlockId: TValue['selectedBlockId']) {
  const selectedSidebarTab = selectedBlockId === null ? 'styles' : 'block-configuration';
  const options: Partial<TValue> = {};
  if (selectedBlockId !== null) {
    options.inspectorDrawerOpen = true;
  }
  return editorStateStore.setState({
    selectedBlockId,
    selectedSidebarTab,
    ...options,
  });
}

export function setSidebarTab(selectedSidebarTab: TValue['selectedSidebarTab']) {
  return editorStateStore.setState({ selectedSidebarTab });
}

export function resetDocument(document: TValue['document'], templateHref?: string) {
  const currentTemplate = templateHref || window.location.hash;
  return editorStateStore.setState({
    document,
    currentTemplate,
    selectedSidebarTab: 'styles',
    selectedBlockId: null,
    history: [document],
    historyIndex: 0,
  });
}

export function setDocument(document: TValue['document']) {
  const currentState = editorStateStore.getState();
  const originalDocument = currentState.document;
  const newDocument = {
    ...originalDocument,
    ...document,
  };

  if (JSON.stringify(newDocument) === JSON.stringify(originalDocument)) {
    return;
  }

  const newHistory = currentState.history.slice(0, currentState.historyIndex + 1);
  newHistory.push(newDocument);

  if (newHistory.length > currentState.maxHistorySize) {
    newHistory.shift();
  } else {
    return editorStateStore.setState({
      document: newDocument,
      history: newHistory,
      historyIndex: newHistory.length - 1,
    });
  }

  return editorStateStore.setState({
    document: newDocument,
    history: newHistory,
    historyIndex: newHistory.length - 1,
  });
}

export function undo() {
  const currentState = editorStateStore.getState();
  if (currentState.historyIndex > 0) {
    const newIndex = currentState.historyIndex - 1;
    const previousDocument = currentState.history[newIndex];
    editorStateStore.setState({
      document: previousDocument,
      historyIndex: newIndex,
      selectedBlockId: null, 
    });
  }
}

export function redo() {
  const currentState = editorStateStore.getState();
  if (currentState.historyIndex < currentState.history.length - 1) {
    const newIndex = currentState.historyIndex + 1;
    const nextDocument = currentState.history[newIndex];
    editorStateStore.setState({
      document: nextDocument,
      historyIndex: newIndex,
      selectedBlockId: null,
    });
  }
}

export function setDocumentWithHistory(newDocument: TValue['document']) {
  const currentState = editorStateStore.getState();

  if (JSON.stringify(newDocument) === JSON.stringify(currentState.document)) {
    return;
  }

  const newHistory = currentState.history.slice(0, currentState.historyIndex + 1);
  newHistory.push(newDocument);

  if (newHistory.length > currentState.maxHistorySize) {
    newHistory.shift();
  } else {
    return editorStateStore.setState({
      document: newDocument,
      history: newHistory,
      historyIndex: newHistory.length - 1,
    });
  }

  return editorStateStore.setState({
    document: newDocument,
    history: newHistory,
    historyIndex: newHistory.length - 1,
  });
}

export function toggleInspectorDrawerOpen() {
  const inspectorDrawerOpen = !editorStateStore.getState().inspectorDrawerOpen;
  return editorStateStore.setState({ inspectorDrawerOpen });
}

export function toggleSamplesDrawerOpen() {
  const samplesDrawerOpen = !editorStateStore.getState().samplesDrawerOpen;
  return editorStateStore.setState({ samplesDrawerOpen });
}

export function setSelectedScreenSize(selectedScreenSize: TValue['selectedScreenSize']) {
  return editorStateStore.setState({ selectedScreenSize });
}
