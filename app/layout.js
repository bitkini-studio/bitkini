import './globals.css'

export const metadata = {
  title: 'Bitkini',
  description: 'App Service Startup',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
