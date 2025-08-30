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
        'intro-section',
        'features-content',
        'get-started-section',
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
        text: `Hi [First Name],\n
We\'re thrilled to share some exciting updates to [Your Product Name]! Our team has been working hard to bring you new features and improvements designed to make your experience even better.`,
        markdown: true
      },
    },
  },
  'features-content': {
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
          bottom: 24,
          right: 24,
          left: 24,
        },
      },
      props: {
        text: `**Here's what's new:** \n 
• **[Feature 1]:** Brief description of the new feature and how it benefits the user.  
• **[Feature 2]:** Short explanation of another improvement or addition.  
• **[Feature 3]:** Highlight any bug fixes, performance enhancements, or user-requested changes.`,
        markdown: true,
      },
    },
  },
  'get-started-section': {
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
        text: `**How to Get Started:**
          
Log in to your account and explore the new features today! For a detailed walkthrough, check out our latest guide at [your website or help center].  

We'd love to hear your feedback—reply to this email or reach out to our support team anytime.  

Thank you for being part of our community!`,
        markdown: true,
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
    type: 'Social',
    data: {
      style: {
        padding: {
          top: 12,
          bottom: 12,
          right: 8,
          left: 8,
        },
        textAlign: 'center',
        gap: 16,
        iconSize: 32,
        iconShape: 'square',
      },
      props: {
        links: [
          { platform: 'Facebook', url: '' },
          { platform: 'Instagram', url: '' },
          { platform: 'X', url: '' },
          { platform: 'TikTok', url: '' },
          { platform: 'LinkedIn', url: '' },
        ],
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
          top: 0,
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
