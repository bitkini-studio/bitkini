import './globals.css'

export const metadata = {
  title: 'Bitkini - Software Development Company',
  description: 'Bitkini is a software development company specializing in mobile and web applications. We design, build, and operate digital products.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
