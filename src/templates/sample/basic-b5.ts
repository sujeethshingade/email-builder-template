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
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 80,
          left: 80,
        },
      },
      props: {
        columnsCount: 2,
        fixedWidths: [30, 20, null],
        columns: [
          {
            childrenIds: ['block-social-media-left'],
          },
          {
            childrenIds: ['block-social-media-right'],
          },
          {
            childrenIds: [],
          },
        ]
      },
    },
  },
  'block-social-media-left': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        columnsCount: 3,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['block-social-media-left-left'],
          },
          {
            childrenIds: ['block-social-media-left-center'],
          },
          {
            childrenIds: ['block-social-media-left-right'],
          },
        ]
      },
    },
  },
  'block-social-media-left-left': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://img.freepik.com/premium-vector/facebook-logo-vector-facebook-official-logo-vector-facebook-logo-illustrator_1002350-1803.jpg?semt=ais_hybrid&w=740&q=80',
        alt: 'Facebook',
        contentAlignment: 'middle',
        width: 30
      },
    },
  },
    'block-social-media-left-center': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://static.vecteezy.com/system/resources/previews/018/930/415/non_2x/instagram-logo-instagram-icon-transparent-free-png.png',
        alt: 'Instagram',
        contentAlignment: 'middle',
        width: 45
      },
    },
  },
    'block-social-media-left-right': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://i.pinimg.com/1200x/dc/14/bf/dc14bf8657854c461a858844f8d04009.jpg',
        alt: 'X',
        contentAlignment: 'middle',
        width: 35
      },
    },
  },
  'block-social-media-right': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        columnsCount: 2,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['block-social-media-right-left'],
          },
          {
            childrenIds: ['block-social-media-right-right'],
          },
          {
            childrenIds: [],
          },
        ]
      },
    },
  },
  'block-social-media-right-left': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg',
        alt: 'Website',
        contentAlignment: 'middle',
        width: 40
      },
    },
  },
  'block-social-media-right-right': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://static.vecteezy.com/system/resources/previews/023/986/492/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png',
        alt: 'Image',
        contentAlignment: 'middle',
        width: 35
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
