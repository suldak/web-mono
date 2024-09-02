'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });

// Metadata는 서버 컴포넌트에서만 사용할 수 있으므로 별도의 파일로 분리하는 것이 좋습니다.
// 여기서는 제거하고, 필요하다면 별도의 파일(예: metadata.ts)로 분리하세요.

// React Query 클라이언트 생성
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className="font-pretendard" suppressHydrationWarning={true}>
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
