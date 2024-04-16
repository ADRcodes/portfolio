import React from 'react'

const ErcoSite = () => {
  return (
    <>
      <div className='p-10 bg-zinc-100'>
        <div className='flex justify-between pb-4 pr-4'>
          <div className='flex flex-col gap-2'>
            <h1 className="text-2xl font-semibold">Erco Site Copy</h1>
            <p className="text-xl">A clone of a website with multiple pages and a carousel, built from scratch, in a single HTML file. Built without AI or external libraries.</p>
          </div>
          <img src="src/assets/ErcoWebsitePic.png" alt="" className="w-[300px] h-[300px]" />
        </div>
        <div className='flex flex-col gap-4'>
          <p>
            My parents mentioned one day that they were planning to take down their company website but wanted to keep an offline copy for personal reference. Unable to access the original code, I seized the opportunity to sharpen my coding skills by rebuilding it from scratch.</p>
          <p>
            The next challenge was figuring out a user-friendly way for them to access the site. Using an IDE like VScode was impractical, and I didn’t want to confuse them with multiple files. So, I set myself the challenge of encapsulating everything into a single HTML file.</p>
          <div className='flex gap-4'>
            <img className=' min-w-[400px] w-[50%]' src="src/assets/ErcoCodeStyle.png" alt="" />
            <div className='flex flex-col gap-4'>
              <p>
                As the file expanded, code organization became crucial. I kept my CSS succinct, applied global styles where feasible, and used clearly labeled sections—this approach was similar to the BEM naming convention, although I didn’t fully adopt it.</p>
              <p>
                The 'collapse' function for divs proved invaluable, particularly for managing SVGs.</p>

            </div>
          </div>
          <div className='flex gap-4'>

            <div className='flex flex-col gap-4'>
              <p>
                Setting up the carousel was the most daunting task—it's often a tricky component for developers, and adding drag functionality was new to me, especially without external libraries. This required frequent visits to Stack Overflow and numerous tutorial views on YouTube.</p>
            </div>
            <img className=' min-w-[450px] w-[50%]' src="src/assets/ErcoCodeScript.png" alt="" />
          </div>
          <p>
            After two weeks and more than 1800 lines of code, I finished the project. There were additional enhancements I could have made, such as further cleaning the code, improving responsiveness, and optimizing JavaScript, but they were unnecessary for the purposes of this project. I’m quite pleased with the outcome; at first glance, it’s virtually indistinguishable from the original site, which more than satisfied my parents.</p>
        </div>
      </div>
    </>
  )
}

export default ErcoSite