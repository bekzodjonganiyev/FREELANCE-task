import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

export const MainHeader = () => {
    return (
        <div className='flex items-center justify-between xl:gap-28 gap-20 py-3 text-xs'>
            <img 
                src='https://static.tildacdn.com/tild3861-3835-4230-b035-646535353639/logo_head.svg' 
                width={300}
                height={80}
                className='w-44'
            />
            <nav className='flex-1 justify-self-end'>
                <ul className='flex items-center gap-8'>
                    <li><Link href={"/payment-and-delivery"}>Оплата и доставка</Link></li>
                    <li><Link href={"/catalog"}>Каталог</Link></li>
                    <li><Link href={"/blog"}>Блог</Link></li>
                    <li><Link href={"/about-us"}>О компании</Link></li>
                    <li><Link href={"/contacts"}>Контакты</Link></li>
                    <li><Link href={"/vacancy"}>Вакансии</Link></li>
                    <li className='cursor-pointer'> <Search /></li>
                </ul>
            </nav>
            <button className='bg-red-500 px-5 py-2 text-white rounded-md'>Обратная связь</button>
        </div>
    )
}
