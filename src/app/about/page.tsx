import Card from '@/Components/Card';
import MyResume from '@/Components/MyResume';
import Title from '@/Components/Title';
import { MY_JOURNEY } from '@/const';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viet Son Bui | About',
  description: `The journey in software development`,
  robots: 'index,follow',
  keywords: [
    'Bui Viet Son',
    'Son Bui',
    'Sonny',
    'software developer',
    'web developer',
    'javascript developer',
    'portfolio',
  ],
  openGraph: {
    type: 'website',
    title: `Viet Son Bui's portfolio`,
    description: `The journey in software development`,
    siteName: "Viet Son Bui's portfolio",
  },
  twitter: {
    title: `Viet Son Bui's portfolio`,
  },
};

const About = () => (
  <>
    <section className='text-center text-textSecondary py-12 px-4'>
      <Title content='About' classes='text-center' />
      <p>
        I started out as a construction engineer major, but I realized it was
        not the right fit for me. With my family&apos;s encouragement, I decided
        to pursue my high school dream of creating a website where users could
        listen to music and chill.
      </p>
      <p>
        My journey in software development began with C/C++ language on Console.
        I found it fascinating and not as hard as some people might think. I was
        very keen on learning algorithms, data structure, OOP, and design
        patterns... and that helped me land a fresher job at Nashtech company,
        one of the top technology companies in Vietnam, in 2018. That&apos;s
        when everything took off.
      </p>
      <p>
        I could say I am very fortunate in my IT career with my hard work and
        now I have reached some achievements. The foundation knowledge that I
        gained at HCM University of Science has been very useful. My key is very
        simple: you must understand what you are doing and then you will know
        how to do it in the best.
      </p>
      <p>
        I am a new immigrant in Canada and I am searching for my first job
        opportunity here. I would greatly appreciate any referrals.
      </p>
      <MyResume />
    </section>
    <section className='py-12 px-4'>
      <Title content='My Journey' />
      <div className=''>
        {MY_JOURNEY.map(({ date, id, title, description, JSXElementIcon }) => (
          <Card
            key={id}
            title={title}
            description={description}
            JSXElementIcon={JSXElementIcon}
            date={date}
          />
        ))}
      </div>
    </section>
  </>
);

export default About;
