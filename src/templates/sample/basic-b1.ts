import { TEditorConfiguration } from '../../documents/editor/core';

const BASIC_B1: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#FFFFFF',
      canvasColor: '#FFFFFF',
      textColor: '#262626',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'block-header',
        'block-logo',
        'block-greeting',
        'block-main-content',
        'block-button',
        'block-image-container',
        'block-footer-info',
        'block-copyright',
        'block-unsubscribe'
      ],
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
  'block-greeting': {
    type: 'Text',
    data: {
      style: {
        color: '#262626',
        backgroundColor: '#C9C4C4',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 24,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Hi {{firstName}},',
      },
    },
  },
  'block-main-content': {
    type: 'Text',
    data: {
      style: {
        color: '#262626',
        backgroundColor: '#C9C4C4',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 80,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: '[Body of the email - add your message content here.]',
      },
    },
  },
  'block-button': {
    type: 'Button',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        padding: {
          top: 32,
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
  'block-image-container': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        columnsCount: 2,
        columnsGap: 24,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['block-image-1'],
          },
          {
            childrenIds: ['block-image-2'],
          },
          {
            childrenIds: [],
          },
        ]
      },
    },
  },
  'block-image-1': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: '#C9C4C4',
        padding: {
          top: 12,
          bottom: 12,
          right: 12,
          left: 12,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
        alt: 'Image',
        contentAlignment: 'middle',
      },
    },
  },
  'block-image-2': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: '#C9C4C4',
        padding: {
          top: 12,
          bottom: 12,
          right: 12,
          left: 12,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
        alt: 'Image',
        contentAlignment: 'middle',
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
          top: 16,
          bottom: 8,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Best regards,\n{{SenderName}}\n{{Designation}}\n{{CompanyName}}\n{{PhoneNumber}}\n{{EmailAddress}}\n{{CompanyWebsite}}',
        markdown: true
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

export default BASIC_B1;
