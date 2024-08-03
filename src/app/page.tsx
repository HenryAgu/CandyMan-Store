import React from 'react';
import Home from './home/page';
import QueryClientProviderWrapper from '@/components/QueryClientProviderWrapper';

const Page = () => {
  return (
    <QueryClientProviderWrapper>
      <div>
        <Home />
      </div>
    </QueryClientProviderWrapper>
  );
}

export default Page;
