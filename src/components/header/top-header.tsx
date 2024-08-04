import React from 'react'
import { MapPin, Phone } from 'lucide-react';

export const TopHeader = () => {
    return (
        <div className='flex text-xs py-3'>
            {/* Left side */}
            <div className='flex items-center gap-2 w-72'>
                <MapPin />
                <p>Москва, <span className='text-gray-400'>Ташкентская улица, 28 с1</span></p>
            </div>

            {/* Center side */}
            <div className='flex-1 mr-auto'>
                Санкт-Петербург, <span className='text-gray-400'>наб. реки Волковки, 7, (214-3, 2)</span>
            </div>

            {/* Right side */}
            <div className='flex items-center gap-2'>
                <Phone />
                <span>8 (812) 770-69-25</span>
            </div>
        </div>
    )
}
