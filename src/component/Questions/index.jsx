import { Accordion } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Question } from './Question';

export const Questions = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-[1440px] mx-[20px] sm:mx-[60px] mb-[80px] px-[20px] sm:px-[40px] xl:px-[240px] py-[40px] sm:py-[80px] bg-white rounded-[20px]">
        <div className="pb-[60px] text-center">
          <p className="text-[#292929] text-[28px] sm:text-[44px] 2xl:text-[2.5vw] max:text-[60px] font-semibold">
            Frequently Asked Questions
          </p>
          <p className="text-[#29292950] text-[14px] sm:text-[18px] 2xl:text-[1vw] max:text-[24px]">
            Expert Tips and Guidance for Every Journey with RoutePass
          </p>
        </div>
        <Accordion atomic={true}>
          <Question
            title="How can I find the cheapest flight using RoutePass?"
            content="Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses."
          />
          <Question
            title="What happens after I have booked my flight?"
            content="Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses."
          />
          <Question
            title="What’s a Price Alert?"
            content="Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses."
          />
          <Question
            title="Does RoutePass do hotels too?"
            content="Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses."
          />
          <Question
            title="Can I book a flexible flight ticket?"
            content="Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses."
          />
          <Question
            title="Can I book flights that emit less CO₂?"
            content="Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses."
          />
        </Accordion>
      </div>
    </div>
  );
};
