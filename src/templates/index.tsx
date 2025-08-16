import EMPTY_EMAIL_MESSAGE from './sample/blank-canvas';
import WELCOME from './sample/welcome';
import BASIC_B1 from './sample/basic-b1';
import BASIC_B2 from './sample/basic-b2';
import BASIC_B3 from './sample/basic-b3';
import BASIC_B4 from './sample/basic-b4';
import BASIC_B5 from './sample/basic-b5';

export default function getConfiguration(template: string) {
  if (template.startsWith('#sample/')) {
    const sampleName = template.replace('#sample/', '');
    switch (sampleName) {
      case 'welcome':
        return WELCOME;
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
