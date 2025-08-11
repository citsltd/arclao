import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useCounterAnimation } from '@/hooks/use-counter-animation';

export default function StatisticsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  
  const years = useCounterAnimation({ target: 10, triggered: isIntersecting });
  const revenue = useCounterAnimation({ target: 5, triggered: isIntersecting });
  const repeatBusiness = useCounterAnimation({ target: 85, triggered: isIntersecting });
  const employees = useCounterAnimation({ target: 100, triggered: isIntersecting });
  const customers = useCounterAnimation({ target: 1800, triggered: isIntersecting });
  const countries = useCounterAnimation({ target: 3, triggered: isIntersecting });

  return (
    <section className="py-24 bg-arc-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-arc-dark mb-6">OVERVIEW</h2>
            <p className="text-lg text-arc-gray leading-relaxed mb-8">
              ARC LAO is a leader in next-generation technology and related services. We enable clients in many countries to navigate their success through INNOVATION. With over 10+ years of experience in managing various projects and workings of global enterprises, we expertly steer our clients through their progressive journey.
            </p>
            <p className="text-lg text-arc-gray leading-relaxed">
              We do it by enabling our clients with a highly experienced team coupled with latest technologies. We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring skills, expertise, and ideas from our innovation ecosystem.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Technology infrastructure and innovation" 
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-20" ref={ref}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-arc-blue mb-2">{years}</div>
              <div className="text-arc-gray text-sm">Years Of Experience</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-arc-blue mb-2">${revenue}M</div>
              <div className="text-arc-gray text-sm">Annual Turn Over</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-arc-blue mb-2">{repeatBusiness}%</div>
              <div className="text-arc-gray text-sm">Repeat Business</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-arc-blue mb-2">{employees}+</div>
              <div className="text-arc-gray text-sm">Employees Strength</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-arc-blue mb-2">{customers}+</div>
              <div className="text-arc-gray text-sm">Happy Customers</div>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-arc-blue mb-2">{countries}+</div>
              <div className="text-arc-gray text-sm">Countries We Have Worked In</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
