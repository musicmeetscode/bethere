import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import html2canvas from 'html2canvas-pro'
import { Calendar, Clock, Code2, Download, ImageIcon, LocateIcon, PaintBucket, Server } from 'lucide-react'

function App() {
  const [name, setname] = useState()
  const [profession, setprofession] = useState()
  const divRef = useRef(null)

  const [profileImage, setProfileImage] = useState('/img/sample.webp')
  const fileInputRef = useRef(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      // When the reader has finished loading the file
      reader.onload = () => {
        // The result is the Base64 data URL
        setProfileImage(reader.result);
      };

      // Read the file as a Data URL (Base64 encoded string)
      reader.readAsDataURL(file);
    }
  };
  // 4. Function to trigger the file input click
  const triggerFileUpload = () => {
    fileInputRef.current.click();
  }
  const download = async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current, { useCORS: true });

      canvas.toBlob((blob) => {
        if (!blob) return;

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = (name || "devfest") + "-dp.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url); // Clean up

      }, 'image/png');
    }
  };



  return (
    <div className=" w-screen">
      {/* Navigation */}
      <div className="flex w-full fixed top-0 left-0 right-0 p-4 z-[999999999] shadow justify-center items-center text-xl hover:cursor-pointer">
        <nav className="w-full  max-w-7xl items-center flex justify-between font-semibold ">
          <div className="flex items-center gap-2">
            <img src="/img/gdg-cloud.png" className='h-16  object-contain' alt="" />

          </div>

          <div className="hidden md:flex items-center justify-between gap-5 text-sm max-w-sm ">
            <div className="hidden md:block hover:cursor-pointer hover:font-bold underline underline-offset-4 text-green-600">Create my dp</div>
            <a target='_blank' href='https://gdg.community.dev/events/details/google-gdg-cloud-mbarara-presents-devfest-mbarara-2025/' className="hidden md:block  hover:cursor-pointer hover:font-bold ">About Devfest</a>
            <a target='_blank' href='https://gdg.community.dev/events/details/google-gdg-cloud-mbarara-presents-devfest-mbarara-2025/' className="hover:cursor-pointer hover:font-bold bg-green-600 shadow px-5 py-3 text-white">RSVP</a>
          </div>
        </nav>
      </div>
      <div className="flex  z-20 justify-center items-center mt-12  md:mt-24">
        <div className="mt-24  mx-12 flex flex-col lg:flex-row items-center gap-2 lg:gap-24 justify-center max-w-7xl">
          <div className=" flex flex-col gap  ">
            <div className="text-6xl font-bold text-blue-500 mb-2">Devfest Mbarara, 2025</div>
            <div className="text-7xl font-bold tracking-wide">Get your <span className='text-green-600' >devfest DP</span> </div>
            <div className="text-lg mt-2">Signed up for devfest? get your customised devfest dp</div>

            {/* Input fields */}
            <div className="flex flex-col md:flex-row gap-4 items-center mt-10 md:mt-8">
              <div className="flex flex-col">
                <label htmlFor="profession">Your profession</label>
                <div className={`m shaow-lg flex items-center border-1 border-gray-400 px-1 rounded transition-all duration-300 ${profession ? 'justify-end' : 'justify-start'}`}>
                  <div className="bg-green-600 hover:bg-orange-400 rounded text-white hover:cursor-pointer px-4 py-3 my-1">
                    Profession
                  </div>
                  <input type="text" id="profession" className='w-full ml-2 outline-none focus:outline-none' value={profession} onChange={(e) => setprofession(e.target.value)} placeholder='Your profession' />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">Your name</label>
                <div className={`m shaow-lg flex items-center border-1 border-gray-400 px-1 rounded transition-all duration-300 ${name ? 'justify-end' : 'justify-start'}`}>
                  <div className="bg-green-600 hover:bg-orange-400 rounded text-white hover:cursor-pointer px-4 py-3 my-1">
                    Name
                  </div>
                  <input type="text" id="name" className='w-full ml-2 outline-none focus:outline-none' value={name} onChange={(e) => setname(e.target.value)} placeholder='Your name' />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row my-10 gap-4 items-center ">
              <input type="file" ref={fileInputRef} onChange={handleImageUpload} name="file-input" id="fileinput" className='hidden' accept='image/*' />
              <button onClick={triggerFileUpload} className=" bg-yellow-500 flex py-4 px-4 w-full shadow-lg text-white rounded hover:cursor-pointer "> <ImageIcon className="mr-4" /> Upload photo</button>
              <button onClick={() => download()} className={` ${name && (profileImage != "/img/sample.webp") ? 'bg-green-500 text-white' : 'bg-gray-400 text-gray-300'} flex py-4 px-4 w-full shadow-lg rounded hover:cursor-pointer `}>  <Download className="mr-4" /> Download your dp</button>
            </div>
            <div className="flex justify-center items-center md:flex-row flex-col w-full text-wrap gap-1">
              Powered by the good people of <a href="https://tailwindcss.com" target='_blank' className='text-blue-500 flex'> <Code2 className='mr-1'/> React JS,</a>  <a href="https://react.dev/" target='_blank' className='text-green-500 flex'> <PaintBucket className='mr-1'/> Tailwind css and</a>  <a href="https://render.com/" target='_blank' className='text-gray-600 flex'> <Server className='mr-1'/> Render</a>
            </div>
          </div>

          <div ref={divRef} className=" hidden md:size-[500px] border-1 mb-40   md:flex flex-col p-4 px-8">
            <div className="flex items-center  py-4">
              <img className='w-1/2 object-contain h-10' src="/img/gdg-cloud.png" alt="" />
              <img className='w-1/2 object-contain h-10' src="/img/wtm.jpeg" alt="" />

            </div>
            <hr className='h-0.5 w-full bg-gray-200' />
            <div className=" h-[70%] items-center  flex ">

              {/* Person photo */}

              <div className="flex flex-col w-1/2  justify-start items-center ">
                <div className="text-center w-full ">I will be attending</div>
                <img src="/img/devfest.png" className='size-40 -mt-10 object-contain' alt="" />
                {/* <div className="font-semibold w-full text-2xl">Devfest Mbarara</div>
              <div className="font-bold w-full text-3xl">2025</div> */}
                <div className="flex flex-col gap-2 ">

                  <div className="flex items-center  gap-2">
                    <LocateIcon /> MUST, Kihumuro
                  </div> <div className="flex items-center gap-2">
                    <Calendar /> 15th November, 2025
                  </div> <div className="flex items-center gap-2">
                    <Clock />  8AM-5PM
                  </div>
                </div>

                {/* <div className="bg-green-500 flex items-end justify-center z-50 border-1 rounded-2xl h-40 mt-12 w-4/5">
                <div className="h-32 bg-white w-3/4 border rounded-t-2xl ">
                  <div className="size-4 rounded-full border font-semibold text-4xl mx-auto -mt-1 bg-red-600"></div>
                  <div className="text-2xl text-center text-wrap">
                    Nov 15th <br /> 2025 <br />
                    <span className='text-sm'>MUST, Kihumuro Campus</span>

                  </div>


                </div>
              </div> */}
              </div>
              <div className="w-1/2 h-3/5  flex flex-col  rounded-t-lg">
                <img src={profileImage} className=' w-full border-1 rounded-t-xl mb-1 h-full object-cover ' alt="" />
                <div className="text-2xl text-center font-semibold">{name ?? "Your name"}</div>
                <div className="text-lg -mt-2 font-light text-center">{profession ?? "Your profession"}</div>

              </div>
            </div>
            {/* Bottom cards */}
            <div className="text-xs md:text-lg flex items-center justify-center  bg-yellow-500 w-full border rounded-full shadow-2xl px-4 py-2">
              Get your ticket: tinyurl/devfest-mbarara-2025
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
