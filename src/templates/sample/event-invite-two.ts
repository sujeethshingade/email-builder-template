import { TEditorConfiguration } from '../../documents/editor/core';

const EVENT_INVITE_TWO: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#FFFFFF',
      canvasColor: '#65001E',
      textColor: '#FFFFFF',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'main-section',
        'header-subtitle',
        'block-divider',
        'hero-title',
        'block-divider',
        'event-details',
        'block-divider',
        'special-guests',
        'block-divider',
        'footer-section'
      ],
    },
  },
  'main-section': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 16,
          bottom: 0,
          right: 24,
          left: 0,
        },
      },
      props: {
        columnsCount: 2,
        fixedWidths: [20, 80, null],
        columns: [
          {
            childrenIds: ['design-left'],
          },
          {
            childrenIds: ['header-section'],
          },
          {
            childrenIds: [],
          },
        ]
      },
    },
  },
  'header-section': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 6,
        },
      },
      props: {
        childrenIds: ['header-title']
      }
    }
  },
  'header-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 30,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 12,
        },
      },
      props: {
        text: 'UNLOCK\nYOUR DIGITAL\nMARKETING POTENTIAL',
        markdown: true,
      },
    },
  },
  'header-subtitle': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
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
        text: 'MASTER THE LATEST TRENDS AND STRATEGIES IN DIGITAL MARKETING WITH THE LEADERS IN THE INDUSTRY',
      },
    },
  },
  'design-left': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 24,
          bottom: 0,
          right: 0,
          left: 0,
        },
        textAlign: 'left',
      },
      props: {
        url: 'https://i.pinimg.com/736x/da/50/85/da50851a86a7d814167543cbcff65177.jpg',
        alt: 'Design',
        linkHref: null,
        contentAlignment: 'middle',
        width: 100
      },
    },
  },
    'design-right': {
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
        textAlign: 'right',
      },
      props: {
        url: 'https://i.pinimg.com/736x/da/50/85/da50851a86a7d814167543cbcff65177.jpg',
        alt: 'Design',
        linkHref: null,
        contentAlignment: 'middle',
        width: 100
      },
    },
  },
'block-divider': {
    type: 'Divider',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        lineHeight: 1,
        lineColor: '#FFFFFF',
      }
    },
  },
  'hero-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
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
        text: 'Are you ready to elevate your digital marketing game? Join industry experts for an insightful webinar where you\'ll learn cutting-edge strategies, tools, and techniques to drive measurable results. Don\'t miss out on this opportunity to stay ahead in the fast-paced world of digital marketing.',
      },
    },
  },
  'event-details': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 16,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        columnsCount: 2,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['event-date-section'],
          },
          {
            childrenIds: ['event-location'],
          },
          {
            childrenIds: [],
          },
        ]
      },
    },
  },
  'event-date-section': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['event-date', 'event-time']
      }
    }
  },
  'event-date': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 18,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 4,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'SEPTEMBER 28, 2024',
      },
    },
  },
  'event-time': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 16,
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
        text: '10 AM - 2 PM',
      },
    },
  },
  'event-location': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 12,
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
        text: '• Wardoro Hotel 123 Anywhere St., Any City\n• Live stream at www.reallygreatsite.com\n• +123 456 7890',
        markdown: true,
      },
    },
  },
  'special-guests': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 24,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['guests-title', 'guests-grid']
      }
    }
  },
  'guests-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 24,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'center',
        padding: {
          top: 0,
          bottom: 24,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'SPECIAL GUESTS',
      },
    },
  },
  'guests-grid': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        columnsCount: 3,
        columnsGap: 16,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['guest-1'],
          },
          {
            childrenIds: ['guest-2'],
          },
          {
            childrenIds: ['guest-3'],
          },
        ]
      },
    },
  },
  'guest-1': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['guest-1-image', 'guest-1-name', 'guest-1-title']
      }
    }
  },
  'guest-1-image': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 0,
          bottom: 8,
          right: 8,
          left: 8,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://cdn2.iconfinder.com/data/icons/user-people-4/48/6-512.png',
        alt: 'Person',
        contentAlignment: 'middle',
        width: 120
      },
    },
  },
  'guest-1-name': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 14,
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
        text: 'BENJAMIN SHAH',
      },
    },
  },
  'guest-1-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
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
        text: 'CEO and Founder,\nTayeb Unlimited',
        markdown: true,
      },
    },
  },
  'guest-2': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['guest-2-image', 'guest-2-name', 'guest-2-title']
      }
    }
  },
  'guest-2-image': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 0,
          bottom: 8,
          right: 8,
          left: 8,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://cdn2.iconfinder.com/data/icons/user-people-4/48/6-512.png',
        alt: 'Person',
        contentAlignment: 'middle',
        width: 120
      },
    },
  },
  'guest-2-name': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 14,
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
        text: 'OLIVIA WILSON',
      },
    },
  },
  'guest-2-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
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
        text: 'SEO Specialist,\nScott Solutions',
        markdown:true,
      },
    },
  },
  'guest-3': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['guest-3-image', 'guest-3-name', 'guest-3-title']
      }
    }
  },
  'guest-3-image': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 0,
          bottom: 8,
          right: 8,
          left: 8,
        },
        textAlign: 'center',
      },
      props: {
        url: 'https://cdn2.iconfinder.com/data/icons/user-people-4/48/6-512.png',
        alt: 'Person',
        contentAlignment: 'middle',
        width: 120
      },
    },
  },
  'guest-3-name': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 14,
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
        text: 'DANIEL GALLEGO',
      },
    },
  },
  'guest-3-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
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
        text: 'Social Media\nExpert',
        markdown:true, 
      },
    },
  },
  'footer-section': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 16,
          bottom: 16,
          right: 0,
          left: 24,
        },
      },
      props: {
        columnsCount: 2,
        fixedWidths: [80, 20, null],
        columns: [
          {
            childrenIds: ['cta-section'],
          },
          {
            childrenIds: ['design-right'],
          },
          {
            childrenIds: [],
          },
        ]
      },
    },
  },
  'cta-section': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#65001E',
        padding: {
          top: 32,
          bottom: 32,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['cta-title', 'cta-text', 'cta-contact']
      }
    }
  },
  'cta-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 24,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 8,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'GET YOUR SPOT TODAY!',
      },
    },
  },
  'cta-text': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
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
        text: 'Click the link below to get an exclusive access to this event.',
      },
    },
  },
  'cta-contact': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#65001E',
        fontSize: 12,
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
        text: 'www.formidium.com\nMore info: info@formidium.com | +123-456-7890',
        markdown: true,
      },
    },
  },
};

export default EVENT_INVITE_TWO;
