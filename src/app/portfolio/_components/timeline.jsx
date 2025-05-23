// components/VerticalTimelineProjects.jsx
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from 'next/image';

export default function Timeline({ projects }) {
  return (
    <VerticalTimeline lineColor="#CBD5E1" className="py-10">
      {projects.map((project, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(8px)',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 30px rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            color: "#ffffff",
            padding: '1rem',
            minHeight: '300px', // increased height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.7)' }}
          iconStyle={{
            background: '#CBD5E1',
            color: '#1E293B',
            boxShadow: '0 0 0 3px #CBD5E1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          icon={
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={project.techStack}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          }
          position={index % 2 === 0 ? 'left' : 'right'}
        >
          <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
