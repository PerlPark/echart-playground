'use client';

import Options from '@/components/presentation/Options';

import { RecoilRoot } from 'recoil';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <main>
        <h1 className="text-2xl font-semibold mb-3 text-center mt-5">
          📊 ECHATS PLAYGROUND
        </h1>
        <Options />
        {children}
      </main>
    </RecoilRoot>
  );
}
