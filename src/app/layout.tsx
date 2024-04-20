import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

const fonts = [inter.className, rubik.className].reduce(
  (acc, val) => (acc += val),
  ''
);

export const metadata: Metadata = {
  title: 'Cultivo do bem',
  description:
    'Unimos forças com a Renova e formamos uma parceria sólida com a comunidade, tendo como objetivo o lançamento de um produto único, de alta qualidade, com um apelo social e sustentável.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>{children}</body>
    </html>
  );
}
