import { TEditorConfiguration } from '../../documents/editor/core';

const DOWNTIME: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#FFFFFF',
      canvasColor: '#FFFFFF',
      textColor: '#333333',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'header-section',
        'greeting-section',
        'announcement-section',
        'schedule-container',
        'impact-section',
        'appreciation-section',
        'signature-section',
        'footer-section'
      ],
    },
  },
  'header-section': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: null,
        fontSize: 20,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'We\'re performing scheduled maintenance',
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
          top: 24,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Dear [First Name],',
      },
    },
  },
  'announcement-section': {
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
        text: 'We\'re committed to providing you with the best possible service. As part of our ongoing improvements, we will be performing scheduled maintenance during the following period:',
      },
    },
  },
  'schedule-container': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#F8F9FA',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['schedule-title', 'schedule-date', 'schedule-time']
      }
    }
  },
  'schedule-title': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#F8F9FA',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 8,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'Downtime Schedule:',
      },
    },
  },
  'schedule-date': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: null,
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '🗓️ Date: [MM/DD/YYYY]',
      },
    },
  },
  'schedule-time': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#F8F9FA',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '⏰ Time: [Start Time] - [End Time] [Time Zone]',
      },
    },
  },
  'impact-section': {
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
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'During this window, [Product/Service Name] will be temporarily unavailable. We recommend saving your work and planning accordingly.',
      },
    },
  },
  'appreciation-section': {
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
        text: 'We appreciate your patience and understanding as we work to enhance your experience.',
      },
    },
  },
  'signature-section': {
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
        childrenIds: ['signature-thanks', 'signature-name']
      }
    }
  },
  'signature-thanks': {
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
          bottom: 8,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'Thank you for choosing [Company Name].',
      },
    },
  },
  'signature-name': {
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
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'Best regards,\n[Your Company Name]\n[Website URL]',
        markdown: true
      },
    },
  },
  'footer-section': {
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
        text: 'Copyright © {{CURRENT_YEAR}} {{LIST_COMPANY}}. All rights reserved.\n1234 Main Street, Suite 100, Chicago, IL 60601',
        markdown: true
      },
    },
  },
};

export default DOWNTIME;
