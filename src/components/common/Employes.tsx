import React from 'react'
import ScrollAnimation from './ScrollAnimation'
import { Card } from '../ui/card'

const Employes = () => {

    const employer = [
        { Name: 'Peter Hase', poste: 'Sr. ingineer', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/02/tem_6-414x500.jpg' },
        { Name: 'Lawrence Pater', poste: 'Four Man', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/01/team_img_4-414x500.jpg' },
        { Name: 'Braley Raws', poste: 'Sr. ingineer', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/01/team_img_5-414x500.jpg' }
    ]
    return (
        <ScrollAnimation>
            <div className='w-full p-8 lg:w-2/3 flex flex-col items-center'>
                <div> <button className='text-primary text-xl flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none"><path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path></svg>Collaborator</button></div>
                <div className='flex justify-center items-center'>
                    <div className='text-2xl md:text-5xl font-semibold text-black'>The Best climatition experts</div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2  lg:flex flex-wrap  gap-8 py-10 justify-center'>
                    {employer.map((emplo) => {
                        return (
                            <div className='group relative'>
                                <Card className='group w-full  h-110  relative overflow-hidden'>
                                    <img src={emplo.image} className='relative w-full h-full group-hover:scale-110 object-cover' alt="" />
                                </Card>
                                <div className='h-15 w-2/3 flex text-gray-500 shadow-2xl  items-center justify-center flex-col bg-white absolute top-100 right-20 overflow-hidden font-semibold py-4'>
                                    <p>{emplo.Name}</p>
                                    <p>{emplo.poste}</p>
                                    <p className='mt-2 bg-primary border-2 border-primary relative -left-80 w-full group-hover:translate-x-80'></p>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </ScrollAnimation>
    )
}


export default Employes