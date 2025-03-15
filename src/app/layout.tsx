import '@/styles/global.css';
import { Scripts } from '@components/shared';
import { workSans } from '@fonts/dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={workSans.className}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
