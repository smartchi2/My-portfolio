import React, { useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowCastSection = () => {
 const sectionRef = useRef(null);
 const project1Ref = useRef(null);
  const project2Ref = useRef(null);
   const project3Ref = useRef(null);

  


   useGSAP(() =>{

     const projects = [project1Ref.current, project2Ref.current,
    project3Ref.current
   ];

   projects.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: 50, opacity: 0
      },
      {
        y: 0, opacity: 1, duration: 1,
        delay: 0.3 * (index + 1),
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100'
        }
      }
    )
   })
   
    gsap.fromTo(
      sectionRef.current,
       { opacity: 0},
        {opacity: 1,
       duration: 1.5
    })

   }, []);



  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
        <div className='showcaselayout'>
        {/* LEFT: Show Cast Content */}
        <div className='first-project-wrapper' ref={project1Ref}>
        <div className='image-wrapper'>
        <img src="/images/nahara.png" alt='Nahara'/>
        </div>
        <div className='text-content'>
        <h2>Streaming made Simple with a Powerful, User-Friendly 
            App called Nahara
             </h2>
             <p className='text-white-50 md:text-xl'>
            Nahara Live Podcast is a real-time audio streaming feature built for interactive community engagement. Creators can host live sessions with guest speakers, chat with listeners, schedule broadcasts, and offer replays — all designed to foster connection and growth.

                Powered by:

                Backend: Java, Spring Boot, WebSocket, FFmpeg (for audio processing), Firebase (for notifications and real-time sync)

                Frontend: React, Tailwind CSS, WebSocket, Firebase, and more

                This tech-driven setup ensures smooth streaming, low-latency interaction, and a scalable architecture tailored for high user engagement.
             </p>

        </div>
        </div>
        {/*Right: Show Cast Image */}
        <div className='project-list-wrapper overflow-hidden'>
        <div className='project' ref={project2Ref}>
        <div className='image-wrapper bg-[#ffe7eb]'>
        <img src="/images/psallbill.jpeg" alt="psallbill"/>
        </div>
        <h2>Payment made easy with psallbill </h2>
        </div>

        <div className='project' ref={project3Ref}>
        <div className='image-wrapper bg-[#f3e0cd]'>
        <img src="/images/Live.png" alt="Live-Chat"/>
        </div>
        <h2>nChat a community for all</h2>
        </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default ShowCastSection