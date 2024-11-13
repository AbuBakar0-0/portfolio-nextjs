import Slider from 'react-infinite-logo-slider'
import Image from "next/image";

const InfiniteSlider = () => {
  const images = [
    "/assets/techstack/express.png",
    "/assets/techstack/react.png",
    "/assets/techstack/nodejs.png",
    "/assets/techstack/next.png",
    "/assets/techstack/typescript.png",
    "/assets/techstack/tailwind.png",
    "/assets/techstack/mongo.png",
    "/assets/techstack/postgres.png",
    "/assets/techstack/php.png",
    "/assets/techstack/wordpress.png",
    "/assets/techstack/figma.png",
    "/assets/techstack/illustrator.png",
    "/assets/techstack/photoshop.png",
    
  ];

  return (
    <div className='w-full overflow-hidden'>
      <Slider
        width="100px"
        duration={20}
        spacing={0}
      >
        {images.map((item, key) => (
          <Slider.Slide key={key}>
            <Image 
            width={100}
            height={100}
              src={item} 
              alt="tech stack" 
              className='size-16 object-contain' 
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteSlider;
