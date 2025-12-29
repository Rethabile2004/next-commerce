import { cn } from '@/lib/utils'
import React from 'react'
cn
const EmptyList = ({ heading = 'no items found.', className }: { heading?: string, className?: string }) => {
    return (
        <h2 className={cn('text-lg', className)}>{heading}</h2>
    )
}

export default EmptyList