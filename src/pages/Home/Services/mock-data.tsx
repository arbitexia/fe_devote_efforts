import designIcon from '@/assets/images/design_icon.svg';
import devIcon from '@/assets/images/development_icon.svg';
import seoIcon from '@/assets/images/seo_icon.svg';
import { ServiceCardItemProps } from './types';

export const cards: ServiceCardItemProps[] = [
  {
    icon: designIcon,
    title: 'Design',
    description: 'Logo revamps, updated branding, creating digital assets',
  },
  {
    icon: devIcon,
    title: 'Development',
    description:
      'Website revamps, app building, platform migration, setting up tracking & analytics',
  },
  {
    icon: seoIcon,
    title: 'SEO',
    description: 'Website revamps, app building, platform migration, setting',
  },
];
