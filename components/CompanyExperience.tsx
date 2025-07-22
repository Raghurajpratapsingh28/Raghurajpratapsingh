"use client";
// CompanyExperience.tsx - Shows company work experience section, using companyExperience data
import { companyExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CompanyExperience = () => {
    const router = useRouter();
  return (
        <div>
            <div  className="py-20" id="company-experience">
        <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl">
           My {' '}
            <span className="text-purple">Work Experience</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {companyExperience.map((card)=>(
                <Button onClick={() => window.open(card.github, '_blank')} key={card.id} borderRadius='1.75rem' className='flex-1 text-white border-neutral-200 dark:border-slate-800 ' duration={Math.floor(Math.random()*10000+10000)}>
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 '>
                        <Image src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16 ' width={100} height={100} />
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                            <div className='text-sm text-gray-400 mt-2'>
                              <span>{card.company}</span> | <span>{card.location}</span> | <span>{card.date}</span>
                            </div>
                        </div>
                    </div>

                </Button>
            ))}
        </div>
            </div>
        </div>
    )
    }

export default CompanyExperience 