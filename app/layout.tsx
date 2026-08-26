import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'ShopSmart AI Pro',description:'AI-powered shopping discovery, comparison and cart.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
