'use client';

import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google'
import NavigationBar from "$/components/NavigationBar";

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: PropsWithChildren) {

    return <div className={`dark:bg-gray-800 px-5 ${inter.className}`}>
        <NavigationBar />
        <main className='max-w-6xl mx-auto'>{children}</main>
    </div>
}
