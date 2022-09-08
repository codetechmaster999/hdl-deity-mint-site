import dynamic from 'next/dynamic';

const DynamicFallback = dynamic(() => import('./FallbackPage'), {
  ssr: false,
});

export default DynamicFallback;
