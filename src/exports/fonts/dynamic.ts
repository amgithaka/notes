import localFont from 'next/font/local';

export const workSans = localFont({
  src: [
    {
      path: '../../../public/fonts/dynamic/work_sans/normal.ttf',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/dynamic/work_sans/italic.ttf',
      style: 'italic',
    },
  ],
});
