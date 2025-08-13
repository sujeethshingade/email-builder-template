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

  inspectorDrawerOpen: boolean;
  samplesDrawerOpen: boolean;
  isInitialized: boolean;
  
  // Add document metadata to store editing state
  documentMeta: {
    selectedTab?: string;
    savedTabBeforeEditing?: string;
  };
};

const editorStateStore = create<TValue>(() => ({
  document: getConfiguration(''), // Initialize with empty string
  selectedBlockId: null,
  selectedSidebarTab: 'styles',
  selectedMainTab: 'editor',
  selectedScreenSize: 'desktop',

  inspectorDrawerOpen: true,
  samplesDrawerOpen: true,
  isInitialized: false,
  
  // Initialize document metadata
  documentMeta: {}
}));

// Custom hook to initialize the document on the client side
export function useEditorInitialization() {
  useEffect(() => {
    if (!editorStateStore.getState().isInitialized) {
      const document = getConfiguration(window.location.hash);
      editorStateStore.setState({ 
        document,
        isInitialized: true 
      });
    }
  }, []);
}

export function useDocument() {
  return editorStateStore((s) => s.document);
}

export function useDocumentMeta() {
  return editorStateStore((s) => s.documentMeta);
}

export function setDocumentMeta(documentMeta: TValue['documentMeta']) {
  return editorStateStore.setState({ documentMeta });
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

export function setSelectedBlockId(selectedBlockId: TValue['selectedBlockId']) {
  const currentState = editorStateStore.getState();
  
  // Only change to block-configuration if not already on it and a block is selected
  const selectedSidebarTab = selectedBlockId === null ? 'styles' : 
    (currentState.selectedSidebarTab === 'styles' && selectedBlockId !== null) ? 'block-configuration' : 
    currentState.selectedSidebarTab;
  
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

export function resetDocument(document: TValue['document']) {
  const currentState = editorStateStore.getState();
  
  return editorStateStore.setState({
    document,
    selectedBlockId: null,
    selectedSidebarTab: currentState.selectedSidebarTab
  });
}

export function setDocument(document: TValue['document']) {
  const currentState = editorStateStore.getState();
  const originalDocument = currentState.document;
  
  // Keep the current sidebar tab when updating document
  return editorStateStore.setState({
    document: {
      ...originalDocument,
      ...document,
    },
    selectedSidebarTab: currentState.selectedSidebarTab
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
