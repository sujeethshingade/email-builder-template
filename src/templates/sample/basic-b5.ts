import { TEditorConfiguration } from '../../documents/editor/core';

const BASIC_B5: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#FFFFFF',
      canvasColor: '#FFFFFF',
      textColor: '#262626',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'block-logo',
        'block-header',
        'block-para1',
        'block-para2',
        'block-image-column',
        'block-button-column',
        'block-para3',
        'block-footer-info',
        'block-social-media',
        'block-copyright',
        'block-unsubscribe'
      ],
    },
  },
  'block-logo': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 8,
          bottom: 8,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://goomlandscapes.co.nz/wp-content/uploads/2018/08/logo-placeholder.png',
        alt: 'Logo',
        linkHref: null,
        contentAlignment: 'middle',
        width: 160
      },
    },
  },
  'block-header': {
    type: 'Heading',
    data: {
      style: {
        color: '#262626',
        backgroundColor: '#C9C4C4',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        text: 'Header',
      },
    },
  },
  'block-para1': {
    type: 'Text',
    data: {
      style: {
        color: '#262626',
        backgroundColor: null,
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        markdown: true
      },
    },
  },
 'block-para2': {
    type: 'Text',
    data: {
      style: {
        color: '#262626',
        backgroundColor: null,
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 12,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        markdown: true
      },
    },
  },
  'block-image-column': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 12,
          bottom: 12,
          right: 12,
          left: 12,
        },
      },
      props: {
        columnsCount: 3,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['block-image-column-left'],
          },
          {
            childrenIds: ['block-image-column-center'],
          },
          {
            childrenIds: ['block-image-column-right'],
          },
        ]
      },
    },
  },
  'block-image-column-left': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 24,
          bottom: 24,
          right: 12,
          left: 12,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
        alt: 'Image',
        contentAlignment: 'middle',
        width: 250
      },
    },
  },
  'block-image-column-center': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 24,
          bottom: 24,
          right: 12,
          left: 12,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
        alt: 'Image',
        contentAlignment: 'middle',
        width: 250
      },
    },
  },
  'block-image-column-right': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 24,
          bottom: 24,
          right: 12,
          left: 12,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
        alt: 'Image',
        contentAlignment: 'middle',
        width: 250
      },
    },
  },
  'block-button-column': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 12,
          bottom: 12,
          right: 12,
          left: 12,
        },
      },
      props: {
        columnsCount: 3,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['block-button-column-left'],
          },
          {
            childrenIds: ['block-button-column-center'],
          },
          {
            childrenIds: ['block-button-column-right'],
          },
        ]
      },
    },
  },
  'block-button-column-left': {
    type: 'Button',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        padding: {
          top: 12,
          bottom: 12,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        buttonBackgroundColor: '#404040',
        buttonStyle: 'rectangle',
        buttonTextColor: '#FFFFFF',
        fullWidth: false,
        size: 'small',
        text: 'Button text',
        url: '#',
      },
    },
  },
  'block-button-column-center': {
    type: 'Button',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        padding: {
          top: 12,
          bottom: 12,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        buttonBackgroundColor: '#404040',
        buttonStyle: 'rectangle',
        buttonTextColor: '#FFFFFF',
        fullWidth: false,
        size: 'small',
        text: 'Button text',
        url: '#',
      },
    },
  },
  'block-button-column-right': {
    type: 'Button',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        padding: {
          top: 12,
          bottom: 12,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        buttonBackgroundColor: '#404040',
        buttonStyle: 'rectangle',
        buttonTextColor: '#FFFFFF',
        fullWidth: false,
        size: 'small',
        text: 'Button text',
        url: '#',
      },
    },
  },
  'block-para3': {
    type: 'Text',
    data: {
      style: {
        color: '#262626',
        backgroundColor: null,
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        markdown: true
      },
    },
  },
  'block-footer-info': {
    type: 'Text',
    data: {
      style: {
        color: '#666666',
        backgroundColor: null,
        fontSize: 12,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 8,
          bottom: 8,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Best regards,\n{{CompanyName}}',
        markdown: true
      },
    },
  },
  'block-social-media': {
    type: 'Social',
    data: {
      style: {
        padding: {
          top: 12,
          bottom: 12,
          right: 8,
          left: 8,
        },
        textAlign: 'center',
        gap: 16,
        iconSize: 32,
  iconShape: 'rounded',
      },
      props: {
        links: [
          { platform: 'Facebook', url: '' },
          { platform: 'Instagram', url: '' },
          { platform: 'X', url: '' },
          { platform: 'TikTok', url: '' },
          { platform: 'LinkedIn', url: '' },
        ],
      },
    },
  },
  'block-copyright': {
    type: 'Text',
    data: {
      style: {
        color: '#999999',
        backgroundColor: null,
        fontSize: 10,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 8,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Copyright © {{CURRENT_YEAR}} {{LIST_COMPANY}}. All rights reserved.\n1234 Market Street, Suite 100, San Francisco, CA 94103',
        markdown: true
      },
    },
  },
  'block-unsubscribe': {
    type: 'Button',
    data: {
      style: {
        backgroundColor: null,
        fontSize: 10,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 24,
          right: 12,
          left: 12,
        },
      },
      props: {
        buttonBackgroundColor: '#FFFFFF',
        buttonStyle: 'rectangle',
        buttonTextColor: '#999999',
        fullWidth: true,
        size: 'x-small',
        text: "Unsubscribe",
      },
    },
  },
};

export default BASIC_B5;
