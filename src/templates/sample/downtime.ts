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
        'announcement-section',
        'schedule-container',
        'impact-and-appreciation-section',
        'signature-name',
        'footer-section'
      ],
    },
  },
  'header-section': {
    type: 'Heading',
    data: {
      style: {
        color: '#333333',
        backgroundColor: null,
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
        level: 'h2'
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
          top: 12,
          bottom: 12,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Dear [First Name],\n\nWe\'re committed to providing you with the best possible service. As part of our ongoing improvements, we will be performing scheduled maintenance during the following period:',
        markdown: true
      },
    },
  },
  'schedule-container': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#F8F9FA',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: `**Downtime Schedule:**  
🗓️ **Date:** [MM/DD/YYYY]  
⏰ **Time:** [Start Time] - [End Time] [Time Zone]`,
        markdown: true,
      },
    },
  },
  'impact-and-appreciation-section': {
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
        text: `During this window, [Product/Service Name] will be temporarily unavailable. We recommend saving your work and planning accordingly.  

We appreciate your patience and understanding as we work to enhance your experience.`,
        markdown: true,
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
          top: 12,
          bottom: 12,
          right: 24,
          left: 24,
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
