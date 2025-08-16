import { TEditorConfiguration } from '../../documents/editor/core';

const WELCOME: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#FFFFFF',
      canvasColor: '#FFFFFF',
      textColor: '#333333',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'block-header-container',
        'block-lucid-logo',
        'block-heading',
        'block-intro-text',
        'block-video-text',
        'block-video-thumbnail',
        'block-getting-started',
        'block-create-document-container',
        'block-diagramming-course-container',
        'block-integration-container',
        'block-spacer',
        'block-other-resources',
        'block-community-container',
        'block-training-labs-container',
        'block-help-center-container',
        'block-orange-divider',
        'block-cta-text',
        'block-cta-button',
        'block-spacer-2',
        'block-footer-logo',
        'block-unsubscribe',
        'block-company-info'
      ],
    },
  },
  'block-header-container': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['block-header-logo']
      }
    }
  },
  'block-header-logo': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 0,
          bottom: 0,
          left: 24,
          right: 24,
        },
        textAlign: 'left',
      },
      props: {
        url: 'https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/84463/Logo-Lucid-np-Primary-Default-RGB-w850-200114.png',
        alt: 'Lucid Logo',
        linkHref: null,
        contentAlignment: 'middle',
        width: 50,
      },
    },
  },
  'block-lucid-logo': {
    type: 'Image',
    data: {
      style: {
        backgroundColor: null,
        padding: {
          top: 32,
          bottom: 16,
          right: 24,
          left: 24,
        },
        textAlign: 'center',
      },
      props: {
        url: 'data:image/png;base64,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',
        alt: 'Lucid',
        linkHref: null,
        contentAlignment: 'middle',
        width: 180
      },
    },
  },
  'block-heading': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontSize: 28,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 4,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Welcome aboard',
      },
    },
  },
  'block-intro-text': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontSize: 15,
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
        text: "We're so excited to have you join us! We promise we won't flood your inbox, but we wanted to share a few tips to help you start maximizing the value of Lucidchart right away.",
      },
    },
  },
  'block-video-text': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontSize: 15,
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
        text: "Watch our short video (no really, it's under five minutes) to learn the basics of Lucidchart.",
      },
    },
  },
  'block-video-thumbnail': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        url: 'https://img.youtube.com/vi/kM1B-jQUeVI/maxresdefault.jpg',
        alt: 'Getting started video thumbnail',
        linkHref: 'https://youtu.be/kM1B-jQUeVI',
        contentAlignment: 'middle',
      },
    },
  },
  'block-getting-started': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 20,
          bottom: 8,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "Here's how to get started:",
      },
    },
  },
  'block-create-document-container': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['block-create-document-table']
      }
    }
  },
  'block-create-document-table': {
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
        fixedWidths: [50, null, null],
        columns: [
          {
            childrenIds: ['block-create-document-left-column'],
          },
          {
            childrenIds: ['block-create-document-right-column'],
          },          
          {
            childrenIds: [],
          },
        ]
      },
    },
  },
  'block-create-document-left-column': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 12,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        url: 'https://st3.depositphotos.com/16138592/32036/v/450/depositphotos_320367158-stock-illustration-business-presentation-icon-vector-flat.jpg',
        alt: 'Document icon',
        contentAlignment: 'middle',
        width: 50,
      },
    },
  },
  'block-create-document-right-column': {
    type: 'Text',
    data: {
      style: {
        fontSize: 13,
        fontWeight: 'normal',
        color: null,
        backgroundColor: null,
        fontFamily: null,
        textAlign: 'left',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Create your first document. Open a blank document or start from a template.',
      },
    },
  },
  'block-diagramming-course-container': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['block-diagramming-course-table']
      }
    }
  },
  'block-diagramming-course-table': {
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
        fixedWidths: [50, null, null],
        columns: [
          {
            childrenIds: ['block-diagramming-course-left-column'],
          },
          {
            childrenIds: ['block-diagramming-course-right-column'],
          },
          {
            childrenIds: [],
          },
        ]
      }
    },
  },
  'block-diagramming-course-left-column': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 12,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        url: 'https://st3.depositphotos.com/16138592/32036/v/450/depositphotos_320367158-stock-illustration-business-presentation-icon-vector-flat.jpg',
        alt: 'Course icon',
        contentAlignment: 'middle',
        width: 50,
      },
    },
  },
  'block-diagramming-course-right-column': {
    type: 'Text',
    data: {
      style: {
        fontSize: 13,
        fontWeight: 'normal',
        color: null,
        backgroundColor: null,
        fontFamily: null,
        textAlign: 'left',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Complete our quick Diagramming Foundations course.',
      },
    },
  },
  'block-integration-container': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#FFFFFF',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['block-integration-table']
      }
    }
  },
  'block-integration-table': {
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
        fixedWidths: [50, null, null],
        columns: [
          {
            childrenIds: ['block-integration-left-column'],
          },
          {
            childrenIds: ['block-integration-right-column'],
          },
          {
            childrenIds: [],
          }
        ]
      }
    },
  },
  'block-integration-left-column': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 12,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        url: 'https://st3.depositphotos.com/16138592/32036/v/450/depositphotos_320367158-stock-illustration-business-presentation-icon-vector-flat.jpg',
        alt: 'Integration icon',
        contentAlignment: 'middle',
        width: 50,
      },
    },
  },
  'block-integration-right-column': {
    type: 'Text',
    data: {
      style: {
        fontSize: 13,
        fontWeight: 'normal',
        color: null,
        backgroundColor: null,
        fontFamily: null,
        textAlign: 'left',
        padding: {
          top: 16,
          bottom: 16,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Integrate Lucidchart with your favorite apps.',
      },
    },
  },
  'block-spacer': {
    type: 'Spacer',
    data: {
      props: {
        height: 16,
      },
    },
  },
  'block-other-resources': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: '#F5F5F5',
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
        text: "Other resources:",
      },
    },
  },
  'block-community-container': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#F5F5F5',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['block-community-table']
      }
    }
  },
  'block-community-table': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: '#F5F5F5',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        columnsCount: 2,
        fixedWidths: [50, null, null],
        columns: [
          {
            childrenIds: ['block-community-left-column'],
          },
          {
            childrenIds: ['block-community-right-column'],
          },
          {
            childrenIds: [],
          }
        ]
      }
    },
  },
  'block-community-left-column': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        url: 'https://boswedden.org.uk/wp-content/uploads/2019/11/100-1007364_connect-and-care-seamlessly-sense-of-community-icon.jpg',
        alt: 'Community icon',
        contentAlignment: 'middle',
        width: 50,
      },
    },
  },
  'block-community-right-column': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#F5F5F5',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['block-community-title', 'block-community-text']
      },
    },
  },
  'block-community-title': {
    type: 'Text',
    data: {
      style: {
        color: '#EA580C',
        backgroundColor: '#F5F5F5',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 8,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "Community:",
      },
    },
  },
  'block-community-text': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: '#F5F5F5',
        fontSize: 13,
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
        text: "Join the Lucid Community to connect with others, ask questions, and share your thoughts.",
      },
    },
  },
  'block-training-labs-container': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#F5F5F5',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['block-training-labs-table']
      }
    }
  },
  'block-training-labs-table': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: '#F5F5F5',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        columnsCount: 2,
        fixedWidths: [50, null, null],
        columns: [
          {
            childrenIds: ['block-training-labs-left-column'],
          },
          {
            childrenIds: ['block-training-labs-right-column'],
          },
          {
            childrenIds: [],
          }
        ]
      }
    },
  },
  'block-training-labs-left-column': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        url: 'https://boswedden.org.uk/wp-content/uploads/2019/11/100-1007364_connect-and-care-seamlessly-sense-of-community-icon.jpg',
        alt: 'Training icon',
        contentAlignment: 'middle',
        width: 50,
      },
    },
  },
  'block-training-labs-right-column': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#F5F5F5',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['block-training-labs-title', 'block-training-labs-text']
      },
    },
  },
  'block-training-labs-title': {
    type: 'Text',
    data: {
      style: {
        color: '#EA580C',
        backgroundColor: '#F5F5F5',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 8,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "Training Labs:",
      },
    },
  },
  'block-training-labs-text': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: '#F5F5F5',
        fontSize: 13,
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
        text: "Explore dozens of free, self-paced courses and live trainings to help you become a diagramming expert.",
      },
    },
  },
  'block-help-center-container': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#F5F5F5',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        childrenIds: ['block-help-center-table']
      }
    }
  },
  'block-help-center-table': {
    type: 'ColumnsContainer',
    data: {
      style: {
        backgroundColor: '#F5F5F5',
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        columnsCount: 2,
        fixedWidths: [50, null, null],
        columns: [
          {
            childrenIds: ['block-help-center-left-column'],
          },
          {
            childrenIds: ['block-help-center-right-column'],
          },
          {
            childrenIds: [],
          }
        ]
      }
    },
  },
  'block-help-center-left-column': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        url: 'https://boswedden.org.uk/wp-content/uploads/2019/11/100-1007364_connect-and-care-seamlessly-sense-of-community-icon.jpg',
        alt: 'Help icon',
        contentAlignment: 'middle',
        width: 50,
      },
    },
  },
  'block-help-center-right-column': {
    type: 'Container',
    data: {
      style: {
        backgroundColor: '#F5F5F5',
        borderColor: null,
        borderRadius: null,
        padding: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        },
      },
      props: {
        childrenIds: ['block-help-center-title', 'block-help-center-text']
      },
    },
  },
  'block-help-center-title': {
    type: 'Text',
    data: {
      style: {
        color: '#EA580C',
        backgroundColor: '#F5F5F5',
        fontSize: 16,
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: {
          top: 8,
          bottom: 0,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "Help center:",
      },
    },
  },
  'block-help-center-text': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: '#F5F5F5',
        fontSize: 13,
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
        text: "Diagram with confidence by learning about product features and reading step-by-step tutorials.",
      },
    },
  },
  'block-orange-divider': {
    type: 'Divider',
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
        lineHeight: 20,
        lineColor: '#EA580C',
      }
    },
  },
  'block-cta-text': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: '#FFECD6',
        fontSize: 15,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 24,
          bottom: 20,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: "So, what are you waiting for? Start exploring Lucidchart today.",
      },
    },
  },
  'block-cta-button': {
    type: 'Button',
    data: {
      style: {
        backgroundColor: '#FFECD6',
        padding: {
          top: 0,
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        buttonBackgroundColor: '#000000',
        buttonStyle: 'rectangle',
        buttonTextColor: '#FFFFFF',
        fullWidth: false,
        size: 'small',
        text: 'Jump into Lucidchart',
        url: 'https://lucidchart.com',
      },
    },
  },
  'block-spacer-2': {
    type: 'Spacer',
    data: {
      props: {
        height: 20,
      },
    },
  },
  'block-footer-logo': {
    type: 'Image',
    data: {
      style: {
        padding: {
          top: 0,
          bottom: 12,
          right: 24,
          left: 24,
        },
      },
      props: {
        url: 'https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/84463/Logo-Lucid-np-Primary-Default-RGB-w850-200114.png',
        alt: 'Lucid Logo',
        contentAlignment: 'middle',
        width: 60
      },
    },
  },
  'block-unsubscribe': {
    type: 'Button',
    data: {
      style: {
        backgroundColor: null,
        fontSize: 12,
        fontFamily: null,
        fontWeight: 'normal',
        textAlign: 'left',
        padding: {
          top: 0,
          bottom: 0,
          right: 24,
          left: 12,
        },
      },
      props: {
        buttonBackgroundColor: '#FFFFFF',
        buttonStyle: 'rectangle',
        buttonTextColor: '#000000',
        fullWidth: false,
        size: 'small',
        text: "Unsubscribe",
      },
    },
  },
  'block-company-info': {
    type: 'Text',
    data: {
      style: {
        color: null,
        backgroundColor: null,
        fontSize: 12,
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
        text: "Lucid Software Inc.\n10355 South Jordan Gateway, Suite 300\nSouth Jordan, UT 84095 USA",
      },
    },
  },
};

export default WELCOME as TEditorConfiguration;