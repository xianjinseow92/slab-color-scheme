import "./globals.css";

export const metadata = {
  title: "SLAB Color Scheme",
  description: "Allows one to manipulate color schemes for SLAB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
