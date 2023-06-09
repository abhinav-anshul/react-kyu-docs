import "./globals.css"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="container max-w-screen-md mx-auto px-5">{children}</body>
    </html>
  )
}
