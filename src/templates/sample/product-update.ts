import { TEditorConfiguration } from '../../documents/editor/core';

const PRODUCT_UPDATE: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#FFFFFF',
      canvasColor: '#FFFFFF',
      textColor: '#333333',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'logo-section',
        'greeting-section',
        'intro-section',
        'features-section',
        'get-started-title',
        'get-started-text',
        'feedback-section',
        'signature-text',
        'signature-team',
        'promotional-banner',
        'block-social-media',
        'block-copyright',
        'block-unsubscribe'
      ],
    },
  },
  'logo-section': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 20,
          bottom: 20,
          right: 20,
          left: 20,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsOoqjwp34ekCW3K0GeuW1SH0v-hjzx-aYQ&s',
        alt: 'Company Logo',
        contentAlignment: 'middle',
        width: 250
      },
    },
  },
  'greeting-section': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Hi [First Name],',
      },
    },
  },
  'intro-section': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 20,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'We\'re thrilled to share some exciting updates to [Your Product Name]! Our team has been working hard to bring you new features and improvements designed to make your experience even better.',
      },
    },
  },
  'features-section': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        padding: {
          top: 16,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['features-title', 'feature-1', 'feature-2', 'feature-3']
      }
    }
  },
  'features-title': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 12,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'Here\'s what\'s new:',
      },
    },
  },
  'feature-1': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 8,
          bottom: 8,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• [Feature 1]: Brief description of the new feature and how it benefits the user.',
      },
    },
  },
  'feature-2': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 8,
          bottom: 8,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• [Feature 2]: Short explanation of another improvement or addition.',
      },
    },
  },
  'feature-3': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 8,
          bottom: 8,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• [Feature 3]: Highlight any bug fixes, performance enhancements, or user-requested changes.',
      },
    },
  },
  'get-started-title': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'How to Get Started:',
      },
    },
  },
  'get-started-text': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Log in to your account and explore the new features today! For a detailed walkthrough, check out our latest guide at [your website or help center].',
      },
    },
  },
  'feedback-section': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'We\'d love to hear your feedback—reply to this email or reach out to our support team anytime.',
      },
    },
  },
  'signature-text': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Thank you for being part of our community!',
      },
    },
  },
  'signature-team': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Best,\nThe [Your Company] Team',
        markdown: true
      },
    },
  },
  'promotional-banner': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        padding: {
          top: 24,
          bottom: 16,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://img.freepik.com/premium-vector/gradient-business-facebook-cover-template_23-2149742986.jpg',
        alt: 'Banner',
        contentAlignment: 'middle',
        linkHref: '#'
      },
    },
  },
  'block-social-media': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 16,
          bottom: 16,
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

export default PRODUCT_UPDATE;
