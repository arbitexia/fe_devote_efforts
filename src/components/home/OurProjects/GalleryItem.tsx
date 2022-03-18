import project1 from '@/assets/images/project-1.png';
import project2 from '@/assets/images/project-2.png';
import project3 from '@/assets/images/project-3.png';
import project4 from '@/assets/images/project-4.png';

export interface GalleryItem {
  image: string;
  url: string;
  title: string;
  description: string;
}

const projects: GalleryItem[] = [
  {
    image: project1,
    url: '',
    title: 'Chakra',
    description: 'Website, Development',
  },
  {
    image: project2,
    url: '',
    title: 'Goldie',
    description: 'Website, Development',
  },
  {
    image: project3,
    url: '',
    title: 'NFT App Design',
    description: 'Website, Nft, Design',
  },
  {
    image: project4,
    url: '',
    title: 'Petronas Tower',
    description: 'Website, Development',
  },
  {
    image: project1,
    url: '',
    title: 'Chakra',
    description: 'Website, Development',
  },
];

export default projects;
