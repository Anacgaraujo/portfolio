import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
    description:
      'Expert in crafting visually appealing and user-friendly web designs. Proficient with tools like Photoshop, Adobe Premiere, and Figma, I specialize in creating custom designs that align with brand identity. Skilled in responsive design, ensuring optimal viewing experience across various devices.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description:
      'Seasoned Web Developer with extensive experience in front-end technologies including React.js, JavaScript, HTML, CSS, and Redux. Proficient in developing dynamic, high-performance websites and applications. Experienced in using WordPress for content management and e-commerce solutions."',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'App Development',
    description:
      'Accomplished in end-to-end mobile app development, with a focus on React Native. Demonstrated success in developing, launching, and optimizing apps for both iOS and Android platforms. Skilled in integrating Firebase and SEO strategies to enhance app performance and user engagement.',
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          My Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-2'>{item.title}</CardTitle>
                  <CardDescription className='text-sm'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
