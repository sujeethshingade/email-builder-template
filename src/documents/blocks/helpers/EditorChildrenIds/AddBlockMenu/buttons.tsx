import React from 'react';

import {
  AccountCircleOutlined,
  Crop32Outlined,
  HMobiledataOutlined,
  HorizontalRuleOutlined,
  HtmlOutlined,
  ImageOutlined,
  Groups2Outlined,
  LibraryAddOutlined,
  NotesOutlined,
  SmartButtonOutlined,
  ViewColumnOutlined,
  DrawOutlined,
} from '@mui/icons-material';

import { TEditorBlock } from '../../../../editor/core';

type TButtonProps = {
  label: string;
  icon: JSX.Element;
  block: () => TEditorBlock;
};
export const BUTTONS: TButtonProps[] = [
  {
    label: 'Heading',
    icon: <HMobiledataOutlined />,
    block: () => ({
      type: 'Heading',
      data: {
        props: { text: 'Heading' },
        style: {
          padding: { top: 16, bottom: 16, left: 24, right: 24 },
        },
      },
    }),
  },
  {
    label: 'Text',
    icon: <NotesOutlined />,
    block: () => ({
      type: 'Text',
      data: {
  props: { text: 'Text block', markdown: true },
        style: {
          padding: { top: 16, bottom: 16, left: 24, right: 24 },
          fontWeight: 'normal',
        },
      },
    }),
  },

  {
    label: 'Button',
    icon: <SmartButtonOutlined />,
    block: () => ({
      type: 'Button',
      data: {
        props: {
          text: 'Button',
          url: '',
        },
        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
      },
    }),
  },
  {
    label: 'Image',
    icon: <ImageOutlined />,
    block: () => ({
      type: 'Image',
      data: {
        props: {
          url: 'https://tinyurl.com/image-email',
          alt: 'Image',
          contentAlignment: 'middle',
          linkHref: null,
        },
        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
      },
    }),
  },
  {
    label: 'Avatar',
    icon: <AccountCircleOutlined />,
    block: () => ({
      type: 'Avatar',
      data: {
        props: {
          imageUrl: 'https://tinyurl.com/email-avatar',
          shape: 'circle',
        },
        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
      },
    }),
  },
  {
    label: 'Divider',
    icon: <HorizontalRuleOutlined />,
    block: () => ({
      type: 'Divider',
      data: {
        style: { padding: { top: 16, right: 0, bottom: 16, left: 0 } },
        props: {
          lineColor: '#CCCCCC',
        },
      },
    }),
  },
  {
    label: 'Spacer',
    icon: <Crop32Outlined />,
    block: () => ({
      type: 'Spacer',
      data: {},
    }),
  },
  {
    label: 'Html',
    icon: <HtmlOutlined />,
    block: () => ({
      type: 'Html',
      data: {
        props: { contents: '<strong>Hello world</strong>' },
        style: {
          fontSize: 16,
          textAlign: null,
          padding: { top: 16, bottom: 16, left: 24, right: 24 },
        },
      },
    }),
  },
  {
    label: 'Columns',
    icon: <ViewColumnOutlined />,
    block: () => ({
      type: 'ColumnsContainer',
      data: {
        props: {
          columnsGap: 16,
          columnsCount: 2,
          columns: [{ childrenIds: [] }, { childrenIds: [] }, { childrenIds: [] }],
        },
        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
      },
    }),
  },
  {
    label: 'Container',
    icon: <LibraryAddOutlined />,
    block: () => ({
      type: 'Container',
      data: {
        style: { padding: { top: 16, bottom: 16, left: 24, right: 24 } },
      },
    }),
  },
  {
    label: 'Social',
  icon: <Groups2Outlined />,
    block: () => ({
      type: 'Social',
      data: {
        props: {
          links: [
            { platform: 'Instagram', url: '' },
            { platform: 'LinkedIn', url: '' },
            { platform: 'X', url: '' },
          ],
        },
        style: { 
          padding: { top: 16, bottom: 16, left: 8, right: 8 },
          textAlign: 'center',
          iconShape: 'square',
         },
      },
    }),
  },
  {
    label: 'Signature',
  icon: <DrawOutlined />,
    block: () => ({
      type: 'Signature',
      data: {
        props: {
          variant: 'corporate',
          fullName: 'Your Name',
          title: 'Role',
          department: '',
          company: 'Company',
          email: 'email@company.com',
          phone: '',
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
          logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsOoqjwp34ekCW3K0GeuW1SH0v-hjzx-aYQ&s',
          socialLinks: [
            { platform: 'Instagram', url: '' },
            { platform: 'LinkedIn', url: '' },
            { platform: 'X', url: '' },
          ],
        },
        style: { padding: { top: 16, bottom: 16, left: 16, right: 16 } },
      },
    }),
  },
];
