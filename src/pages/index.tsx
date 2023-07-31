import { SiDiscord, SiGithub, SiMaildotru, SiTwitter, SiVk } from 'react-icons/si';


export default function Main() {
  return (
    <div className='w-screen h-screen bg-neutral-900 text-neutral-200'>
      <div className='w-full h-full mx-auto p-8 flex justify-center items-center'>
        <div>
          <h1 className='text-6xl font-bold my-1'>Hello, I&apos;m <span className='text-green-500'>Akvityxs</span>!</h1>
          <p className='uppercase text-lg text-neutral-300'>Don&apos;t imagine, just do it</p>
          <div className='flex items-center justify-between max-w-xs mx-auto my-4'>
            <a href='mailto:name@gmail.com' target='_blank' title='Email'>
              <SiMaildotru className='h-8 w-8' />
            </a>
            <a href='https://github.com/Akvityxs' target='_blank' title='GitHub'>
              <SiGithub className='h-8 w-8' />
            </a>
            <div className='group' title='Discord'>
              <span className='absolute w-auto p-2 min-w-max left-1/2 -translate-x-1/2 translate-y-12 rounded-md text-neutral-900 bg-neutral-300 font-bold transition-all duration-500 scale-0 group-hover:scale-100'>akvityxs</span>
              <SiDiscord className='h-8 w-8' />
            </div>
            <a href='https://vk.com/Akvityxs' target='_blank' title='VK'>
              <SiVk className='h-8 w-8' />
            </a>
            <a href='https://twitter.com/Akvityxs' target='_blank' title='Twitter'>
              <SiTwitter className='h-8 w-8' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
