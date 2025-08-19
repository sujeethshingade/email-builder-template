import { TEditorConfiguration } from '../../documents/editor/core';

const MARKETING_CAMPAIGN_TWO: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#FFFFFF',
      canvasColor: '#1E3A5F',
      textColor: '#FFFFFF',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'header-section',
        'greeting-section',
        'intro-section',
        'services-section',
        'metrics-section',
        'cta-section',
        'signature-section'
      ],
    },
  },
  'header-section': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        padding: {
          top: 24,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['logo-section']
      }
    }
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
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsOoqjwp34ekCW3K0GeuW1SH0v-hjzx-aYQ&s',
        alt: 'Company Logo',
        contentAlignment: 'middle',
        width: 300
      },
    },
  },
  'greeting-section': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
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
        text: 'Hi %first%,',
      },
    },
  },
  'intro-section': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'As a trusted partner in ManCo accounting, Tax preparation & other bespoke services, we\'re here to simplify your workload, boost accuracy, and help you stay ahead of deadlines — all without the hiring headache.',
      },
    },
  },
  'services-section': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A5F',
        padding: {
          top: 0,
          bottom: 12,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['services-title', 'services-list', 'team-ready']
      }
    }
  },
  'services-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
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
        text: 'Whether you\'re handling -',
      },
    },
  },
  'services-list': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A5F',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['service-1', 'service-2', 'service-3', 'service-4', 'service-5', 'service-6']
      }
    }
  },
  'service-1': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 2,
          bottom: 2,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Accounting',
      },
    },
  },
  'service-2': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 2,
          bottom: 2,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Financial Statement preparation',
      },
    },
  },
  'service-3': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 2,
          bottom: 2,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Tax forms like 1065, 1120, 1040',
      },
    },
  },
  'service-4': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 2,
          bottom: 2,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Payroll Management',
      },
    },
  },
  'service-5': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 2,
          bottom: 2,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Outsourced CFO Services',
      },
    },
  },
  'service-6': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 2,
          bottom: 2,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '• Corporate Services',
      },
    },
  },
  'team-ready': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'Our team is ready to support you across the board.\nTo quickly recap what sets us apart:',
        markdown: true
      },
    },
  },
  'metrics-section': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: '#1E3A5F',
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        columnsCount: 3,
        columnsGap: 8,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['metric-1', 'spacer-1', 'metric-4'],
          },
          {
            childrenIds: ['metric-2', 'spacer-1', 'metric-5'],
          },
          {
            childrenIds: ['metric-3', 'spacer-1', 'metric-6'],
          },
        ]
      },
    },
  },
  'metric-1': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FF8C42',
        borderRadius: 20,
        padding: {
          top: 12,
          bottom: 12,
          right: 8,
          left: 8,
        },
      },
      props: {
        childrenIds: ['metric-1-number', 'metric-1-text']
      }
    }
  },
  'metric-1-number': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 20,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '150',
      },
    },
  },
  'metric-1-text': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 10,
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
        text: 'Entities served Worldwide',
      },
    },
  },
  'spacer-1': {
    type: 'Spacer',
    data: {
      props: {
        height: 8,
      },
    },
  },
  'metric-2': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FF8C42',
        borderRadius: 20,
        padding: {
          top: 12,
          bottom: 12,
          right: 8,
          left: 8,
        },
      },
      props: {
        childrenIds: ['metric-2-number', 'metric-2-text']
      }
    }
  },
  'metric-2-number': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 20,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '1.5m',
      },
    },
  },
  'metric-2-text': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 10,
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
        text: 'Monthly transactions',
      },
    },
  },
  'metric-3': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FF8C42',
        borderRadius: 20,
        padding: {
          top: 12,
          bottom: 12,
          right: 8,
          left: 8,
        },
      },
      props: {
        childrenIds: ['metric-3-number', 'metric-3-text']
      }
    }
  },
  'metric-3-number': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 20,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '40+',
      },
    },
  },
  'metric-3-text': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 10,
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
        text: 'Professionals on our team',
      },
    },
  },
  'metric-4': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FF8C42',
        borderRadius: 20,
        padding: {
          top: 12,
          bottom: 12,
          right: 8,
          left: 8,
        },
      },
      props: {
        childrenIds: ['metric-4-number', 'metric-4-text']
      }
    }
  },
  'metric-4-number': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 20,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '40%',
      },
    },
  },
  'metric-4-text': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 10,
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
        text: 'Avg cost saving',
      },
    },
  },
  'metric-5': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FF8C42',
        borderRadius: 20,
        padding: {
          top: 12,
          bottom: 12,
          right: 8,
          left: 8,
        },
      },
      props: {
        childrenIds: ['metric-5-number', 'metric-5-text']
      }
    }
  },
  'metric-5-number': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 20,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '5',
      },
    },
  },
  'metric-5-text': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 10,
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
        text: 'Global Offices',
      },
    },
  },
  'metric-6': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FF8C42',
        borderRadius: 20,
        padding: {
          top: 12,
          bottom: 12,
          right: 8,
          left: 8,
        },
      },
      props: {
        childrenIds: ['metric-6-text']
      }
    }
  },
  'metric-6-text': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#FF8C42',
        fontSize: 10,
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
        text: '**SOC 1 & 2**\nCompliant',
        markdown: true
      },
    },
  },
  'cta-section': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A5F',
        padding: {
          top: 16,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['cta-text', 'cta-section-action', 'cta-button', 'cta-footer']
      }
    }
  },
  'cta-text': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'Let\'s schedule a quick call to explore how we can make your next tax season more efficient and stress-free.',
      },
    },
  },
  'cta-section-action': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
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
        text: 'Book a Call Now or just reply to this email, and we\'ll get in touch.',
      },
    },
  },
  'cta-button': {
    type: 'Button',
    data: {
      style: {
        backgroundColor: '#1E3A5F',
        padding: {
          top: 12,
          bottom: 12,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        buttonBackgroundColor: '#FFFFFF',
        buttonStyle: 'rounded',
        buttonTextColor: '#1E3A5F',
        fullWidth: false,
        size: 'small',
        text: '[Book a Call]',
        url: '#',
      },
    },
  },
  'cta-footer': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
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
        text: 'Looking forward to helping you scale smarter!',
      },
    },
  },
  'signature-section': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A5F',
        padding: {
          top: 16,
          bottom: 32,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['signature-regards', 'signature-name', 'signature-contact', 'signature-address']
      }
    }
  },
  'signature-regards': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'Best regards,',
      },
    },
  },
  'signature-name': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '{{FullName}} | {{Designation}}',
      },
    },
  },
  'signature-contact': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: '{{Email}} | {{Website}}',
      },
    },
  },
  'signature-address': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A5F',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 16,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'A: 3025 Highland Pkwy Suite 330, Downers Grove, IL 60515',
      },
    },
  },
};

export default MARKETING_CAMPAIGN_TWO;
