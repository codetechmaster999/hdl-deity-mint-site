import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('./Hero'), {
  ssr: false,
});

export default DynamicHero;
