import { TEditorConfiguration } from '../../documents/editor/core';

const MARKETING_CAMPAIGN_ONE: TEditorConfiguration = {
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
        'boardlogic-tagline',
        'features-section',
        'features-list',
        'highlight-container',
        'testimonial-section',
        'image-section',
        'contact-section',
      ],
    },
  },
   'logo-section': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 10,
          bottom: 10,
          right: 10,
          left: 10,
        },
        textAlign: 'right',
      },
      props: {
        url: 'https://www.softwareworld.co/assets/software/logo/boardlogic.png',
        alt: 'Company Logo',
        contentAlignment: 'middle',
        width: 200
      },
    },
  },
  'greeting-section': {
    type: 'Text',
    data: {
      style: {
        color: '#1E40AF',
        backgroundColor: null,
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 16,
          bottom: 8,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Hi %First%,',
      },
    },
  },
  'intro-section': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: null,
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
        text: 'Introducing Boardlogic built for boards of directors and governing bodies to organize board meetings. It create agendas, collaborate securely, vote remotely, and sign documents.',
      },
    },
  },
  'boardlogic-tagline': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: null,
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 16,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '"Designed for directors. Built for security. Backed by experts."',
      },
    },
  },
  'features-section': {
    type: 'Text',
    data: {
      style: {
        color: '#1E40AF',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 24,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Why Leading Boards Choose Boardlogic',
      },
    },
  },
  'features-list': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        padding: {
          top: 0,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['feature-1', 'feature-2', 'feature-3', 'feature-4', 'feature-5', 'feature-6', 'feature-7', 'feature-8']
      }
    }
  },
  'feature-1': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Multiple Boards, One Login',
      },
    },
  },
  'feature-2': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Electronic Voting',
      },
    },
  },
  'feature-3': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• 24/7 access on any device',
      },
    },
  },
  'feature-4': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Easy access to board records',
      },
    },
  },
  'feature-5': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Synced notes and annotations',
      },
    },
  },
  'feature-6': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Always up-to-date board papers',
      },
    },
  },
  'feature-7': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Easier, more secure collaboration',
      },
    },
  },
  'feature-8': {
    type: 'Text',
    data: {
      style: {
        color: '#0077ff',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 16,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Save minutes with one glance',
      },
    },
  },
  'highlight-container': {
    type: 'Container',
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
        childrenIds: ['highlight-container-two']
      }
    }
  },
  'highlight-container-two': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#EA580C',
        borderRadius: 48,
        padding: {
          top: 12,
          bottom: 12,
          right: 12,
          left: 12,
        },
      },
      props: {
        childrenIds: ['highlight-section']
      }
    }
  },
  'highlight-section': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: null,
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 0,
          right: 12,
          left: 12,
        },
      },
      props: {
        text: 'Best suited for\nCompany Secretaries | Board Administrators | Directors | CEO\'s',
        markdown: true
      },
    },
  },
  'testimonial-section': {
    type: 'Text',
    data: {
      style: {
        color: '#1E40AF',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 16,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Trusted by clients and partners all over the world',
      },
    },
  },
  'image-section': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://www.figma.com/community/resource/686ecb55-0876-4285-af8e-8990968be190/thumbnail',
        alt: 'Partner logos',
        contentAlignment: 'middle'
      },
    },
  },
  'contact-section': {
    type: 'Container',
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
        childrenIds: ['contact-title', 'contact-info']
      }
    }
  },
  'contact-title': {
    type: 'Text',
    data: {
      style: {
        color: '#1E40AF',
        backgroundColor: 'null',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'Contact us:',
      },
    },
  },
  'contact-info': {
    type: 'Text',
    data: {
      style: {
        color: '#1E40AF',
        backgroundColor: null,
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 12,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'info@formidium.com | www.formidium.com',
      },
    },
  },
};

export default MARKETING_CAMPAIGN_ONE;
