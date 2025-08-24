import { TEditorConfiguration } from '../../documents/editor/core';

const EVENT_INVITE_ONE: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#FFFFFF',
      canvasColor: '#FFFFFF',
      textColor: '#333333',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'hero-banner',
        'hero-image',
        'event-schedule',
        'contact-info',
      ],
    },
  },
  'hero-banner': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A8A',
        padding: {
          top: 32,
          bottom: 32,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['company-header-columns']
      }
    }
  },
  'company-header-columns': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: '#1E3A8A',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        columnsCount: 2,
        columnsGap: 16,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['company-name'],
          },
          {
            childrenIds: ['weekly-update'],
          },
          {
            childrenIds: []
          },
        ]
      },
    },
  },
  'company-name': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A8A',
        fontSize: 16,
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
        text: 'Formidium',
      },
    },
  },
  'weekly-update': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: '#1E3A8A',
        fontSize: 14,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        text: 'Weekly Update',
      },
    },
  },
  'hero-image': {
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
        url: 'https://t3.ftcdn.net/jpg/02/40/21/72/360_F_240217279_JihGEZYJKHbBXzWoVPW18XhgcWu8qew0.jpg',
        alt: 'Image',
        contentAlignment: 'middle'
      },
    },
  },
  'event-schedule': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 16,
          bottom: 16,
          right: 16,
          left: 16,
        },
      },
      props: {
        childrenIds: ['schedule-grid']
      }
    }
  },
  'schedule-grid': {
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
        columnsGap: 16,
        fixedWidths: [null, null, null],
        columns: [
          {
            childrenIds: ['left-events'],
          },
          {
            childrenIds: ['right-events'],
          },
          {
            childrenIds: [],
          },
        ]
      },
    },
  },
  'left-events': {
    type: 'Container',
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
        childrenIds: ['event-1', 'spacer', 'event-2']
      }
    }
  },
  'event-1': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#E5E5E5',
        borderRadius: 16,
        padding: {
          top: 0,
          bottom: 16,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['event-1-header', 'event-1-details']
      }
    }
  },
  'event-1-header': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A8A',
        borderRadius: 16,
        padding: {
          top: 16,
          bottom: 16,
          right: 16,
          left: 16,
        },
      },
      props: {
        childrenIds: ['event-1-title']
      }
    }
  },
  'event-1-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: 'transparent',
        fontSize: 14,
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
        text: 'Technology and Innovation Forum 2025',
      },
    },
  },
  'event-1-details': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#E5E5E5',
        padding: {
          top: 16,
          bottom: 0,
          right: 16,
          left: 16,
        },
      },
      props: {
        childrenIds: ['event-1-date', 'event-1-time']
      }
    }
  },
  'event-1-date': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: 'transparent',
        fontSize: 12,
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
        text: 'Date: May 18, 2025',
      },
    },
  },
  'event-1-time': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: 'transparent',
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
        text: 'Time: 8:00 AM - 3:00 PM',
      },
    },
  },
  'event-3': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#E5E5E5',
        borderRadius: 16,
        padding: {
          top: 0,
          bottom: 16,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['event-3-header', 'event-3-details']
      }
    }
  },
  'event-3-header': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A8A',
        borderRadius: 16,
        padding: {
          top: 16,
          bottom: 16,
          right: 16,
          left: 16,
        },
      },
      props: {
        childrenIds: ['event-3-title']
      }
    }
  },
  'event-3-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: 'transparent',
        fontSize: 14,
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
        text: 'Cloud Training Session Maximize Your Business',
      },
    },
  },
  'event-3-details': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#E5E5E5',
        padding: {
          top: 16,
          bottom: 0,
          right: 16,
          left: 16,
        },
      },
      props: {
        childrenIds: ['event-3-date', 'event-3-time']
      }
    }
  },
  'event-3-date': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: 'transparent',
        fontSize: 12,
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
        text: 'Date: May 25, 2025',
      },
    },
  },
  'event-3-time': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: 'transparent',
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
        text: 'Time: 10:00 AM - 12:00 PM',
      },
    },
  },
  'right-events': {
    type: 'Container',
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
        childrenIds: ['event-3', 'spacer', 'event-4']
      }
    }
  },
  'event-2': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#E5E5E5',
        borderRadius: 16,
        padding: {
          top: 0,
          bottom: 16,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['event-2-header', 'event-2-details']
      }
    }
  },
  'event-2-header': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A8A',
        borderRadius: 16,
        padding: {
          top: 16,
          bottom: 16,
          right: 16,
          left: 16,
        },
      },
      props: {
        childrenIds: ['event-2-title']
      }
    }
  },
  'event-2-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: 'transparent',
        fontSize: 14,
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
        text: 'Smart Data Webinar Series',
      },
    },
  },
  'event-2-details': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#E5E5E5',
        padding: {
          top: 16,
          bottom: 0,
          right: 16,
          left: 16,
        },
      },
      props: {
        childrenIds: ['event-2-date', 'event-2-time']
      }
    }
  },
  'event-2-date': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: 'transparent',
        fontSize: 12,
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
        text: 'Date: May 22, 2025',
      },
    },
  },
  'event-2-time': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: 'transparent',
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
        text: 'Time: 11:00 AM - 12:30 PM',
      },
    },
  },
  'event-4': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#E5E5E5',
        borderRadius: 16,
        padding: {
          top: 0,
          bottom: 16,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['event-4-header', 'event-4-details']
      }
    }
  },
  'event-4-header': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A8A',
        borderRadius: 16,
        padding: {
          top: 16,
          bottom: 16,
          right: 16,
          left: 16,
        },
      },
      props: {
        childrenIds: ['event-4-title']
      }
    }
  },
  'event-4-title': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: 'transparent',
        fontSize: 14,
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
        text: 'Interactive Virtual Workshop',
      },
    },
  },
  'event-4-details': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#E5E5E5',
        padding: {
          top: 16,
          bottom: 0,
          right: 16,
          left: 16,
        },
      },
      props: {
        childrenIds: ['event-4-date', 'event-4-time']
      }
    }
  },
  'event-4-date': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: 'transparent',
        fontSize: 12,
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
        text: 'Date: May 28, 2025',
      },
    },
  },
  'event-4-time': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: 'transparent',
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
        text: 'Time: 3:00 PM - 4:30 PM',
      },
    },
  },
  'spacer': {
    type: 'Spacer',
    data: {
      props: {
        height: 16,
      },
    },
  },
  'contact-info': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#1E3A8A',
        padding: {
          top: 12,
          bottom: 12,
          right: 12,
          left: 12,
        },
      },
      props: {
        childrenIds: ['contact-details']
      }
    }
  },
  'contact-details': {
    type: 'Text',
    data: {
      style: {
        color: '#FFFFFF',
        backgroundColor: null,
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
        text: '123-456-7890\ninfo@formidium.com | www.formidium.com\n123 Anywhere St., Any City',
        markdown: true,
      },
    },
  },
};

export default EVENT_INVITE_ONE;
