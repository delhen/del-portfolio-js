import InformationCard from "../../datainfo/InformationCard"
import Github from "../Icon/Github"
import Instagram from "../Icon/Instagram"
import Linkedin from "../Icon/Linkedin"
import Image from 'next/image'

const PersonalCard = () => {
    return (
        <>
            <div className='flex md:flex-row flex-col md:w-192 md:mt-10'>
                <div className='md:mt-16 md:w-96 md:h-96 w-72 h-64 bg-slate-200'>
                    <Image src={'/images/profile.jpg'} width={'100%'} height={'100%'} layout='responsive' />
                </div>
                <div className='md:mt-16 md:w-96 md:h-96 w-72 bg-slate-200'>
                    <div className='md:pl-4 md:pt-4 p-4 mb-16'>
                        <h1 className='font-sans font-light tracking-wider md:text-2xl text-xl mt-6 uppercase'>{InformationCard.name}</h1>
                        <h5 className='font-sans font-bold text-sm mt-2 uppercase'>{InformationCard.title}</h5>
                        <hr />
                        <div className='mt-4'>
                            <p className='font-sans font-semibold text-sm'>Date of Birth</p>
                            <p className='font-sans text-xs'>{InformationCard.dob}</p>
                            <br />
                            <p className='font-sans font-semibold text-sm'>Email</p>
                            <p className='font-sans text-xs'>{InformationCard.email}</p>
                            <br />
                            <p className='font-sans font-semibold text-sm'>Location</p>
                            <p className='font-sans text-xs'>{InformationCard.location}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4 bg-sky-900 md:w-192 w-72 flex justify-center'>
                <Linkedin />
                <Instagram />
                <Github />
            </div>
        </>
    )
}

export default PersonalCard