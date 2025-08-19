import EMPTY_EMAIL_MESSAGE from './sample/blank-canvas';
import BASIC_B1 from './sample/basic-b1';
import BASIC_B2 from './sample/basic-b2';
import BASIC_B3 from './sample/basic-b3';
import BASIC_B4 from './sample/basic-b4';
import BASIC_B5 from './sample/basic-b5';
import WELCOME from './sample/welcome';
import DOWNTIME from './sample/downtime';
import PRODUCT_UPDATE from './sample/product-update';
import SALES_OFFER from './sample/sales-offer';
import MARKETING_CAMPAIGN_ONE from './sample/marketing-campaign-one';
import MARKETING_CAMPAIGN_TWO from './sample/marketing-campaign-two';
import EVENT_INVITE_ONE from './sample/event-invite-one';
import EVENT_INVITE_TWO from './sample/event-invite-two';

export default function getConfiguration(template: string) {
  if (template.startsWith('#sample/')) {
    const sampleName = template.replace('#sample/', '');
    switch (sampleName) {
      case 'welcome':
        return WELCOME;
      case 'product-update':
        return PRODUCT_UPDATE;
      case 'downtime':
        return DOWNTIME;
      case 'marketing-campaign-one':
        return MARKETING_CAMPAIGN_ONE;
      case 'marketing-campaign-two':
        return MARKETING_CAMPAIGN_TWO;
      case 'sales-offer':
        return SALES_OFFER;
      case 'event-invite-one':
        return EVENT_INVITE_ONE;
      case 'event-invite-two':
        return EVENT_INVITE_TWO;
      case 'basic-b1':
        return BASIC_B1;
      case 'basic-b2':
        return BASIC_B2;
      case 'basic-b3':
        return BASIC_B3;
      case 'basic-b4':
        return BASIC_B4;
      case 'basic-b5':
        return BASIC_B5;
    }
  }

  if (template.startsWith('#code/')) {
    const encodedString = template.replace('#code/', '');
    const configurationString = decodeURIComponent(atob(encodedString));
    try {
      return JSON.parse(configurationString);
    } catch {
      console.error(`Couldn't load configuration from hash.`);
    }
  }

  return EMPTY_EMAIL_MESSAGE;
}
