import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-[#343541] text-white">
        <div className="flex flex-row">
          <div className="flex flex-col flex-1">
            {children}
          </div>

        </div>
      </body>
    </html>
  )
}
