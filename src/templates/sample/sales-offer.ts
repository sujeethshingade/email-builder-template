import { TEditorConfiguration } from '../../documents/editor/core';

const SALES_OFFER: TEditorConfiguration = {
  root: {
    type: 'EmailLayout',
    data: {
      backdropColor: '#FFFFFF',
      canvasColor: '#FFFFFF',
      textColor: '#333333',
      fontFamily: 'MODERN_SANS',
      childrenIds: [
        'logo-section',
        'title-section',
        'intro-section',
        'offer-details',
        'features-section',
        'cta-section',
        'promotional-banner',
        'block-copyright',
        'block-unsubscribe',
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
  'title-section': {
    type: 'Heading',
    data: {
      style: {
        color: '#333333',
        backgroundColor: '#FFFFFF',
        fontFamily: null,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: {
          top: 12,
          bottom: 12,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'Your Gateway to Effortless Asset Tokenization',
        level: 'h2'
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
          top: 12,
          bottom: 12,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: 'We\'re excited to introduce our new Tokenization Services on CSD — designed to simplify and accelerate your journey into digital assets.',
        markdown: true
      },
    },
  },
  'offer-details': {
    type: 'Text',
    data: {
      style: {
        color: '#333333',
        backgroundColor: null,
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
        text: `**For a limited time, you can subscribe at our special introductory price of just $500 — and enjoy zero gas fees.**

With our platform you'll get:

• Seamless Asset Tokenization with full compliance
• Cost savings with no blockchain transaction fees
• Faster onboarding and deployment for your digital securities
`,
        markdown: true
      },
    },
  },
  'features-section': {
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
        text: 'This exclusive offer is available for a short time only — don\'t miss out on the opportunity to take your asset management to the next level.',
        markdown: true
      },
    },
  },
  'cta-section': {
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
        text: '[Subscribe Now]',
        url: '#',
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
  'promotional-banner': {
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
        url: 'https://img.freepik.com/premium-photo/our-vision-business-technology-internet-network-concept-virtual-screen-future-sees-inscription-our-vision-concept_35148-11389.jpg',
        alt: 'Banner',
        contentAlignment: 'middle'
      },
    },
  },
};

export default SALES_OFFER;
