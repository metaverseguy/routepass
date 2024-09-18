import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

export const Questions = () => {
  return (
    <div className="mx-[20px] sm:mx-[60px] mb-[80px] px-[20px] sm:px-[40px] xl:px-[240px] py-[40px] sm:py-[80px] bg-white rounded-[20px]">
      <div className="pb-[60px] text-center">
        <p className="text-[#292929] text-[28px] sm:text-[44px] font-semibold">
          Frequently Asked Questions
        </p>
        <p className="text-[#29292950] text-[14px] sm:text-[18px]">
          Expert Tips and Guidance for Every Journey with RoutePass
        </p>
      </div>
      <Accordion atomic={true}>
        <AccordionItem title="How can I find the cheapest flight using RoutePass ? ">
          <p
            style={{ padding: '18px' }}
            className="text-[14px] sm:text-[16px] text-[#292929] text-left">
            Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses.
          </p>
        </AccordionItem>

        <AccordionItem title="What happens after I have booked my flight ?">
          <p
            style={{ padding: '18px' }}
            className="text-[14px] sm:text-[16px] text-[#292929] text-left">
            Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses.
          </p>
        </AccordionItem>

        <AccordionItem title="What’s a Price Alert ?">
          <p
            style={{ padding: '18px' }}
            className="text-[14px] sm:text-[16px] text-[#292929] text-left">
            Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses.
          </p>
        </AccordionItem>

        <AccordionItem title="Does RoutePass do hotels too ?">
          <p
            style={{ padding: '18px' }}
            className="text-[14px] sm:text-[16px] text-[#292929] text-left">
            Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses.
          </p>
        </AccordionItem>

        <AccordionItem title="Can I book a flexible flight ticket ?">
          <p
            style={{ padding: '18px' }}
            className="text-[14px] sm:text-[16px] text-[#292929] text-left">
            Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses.
          </p>
        </AccordionItem>

        <AccordionItem title="Can I book flights that emit less CO₂ ?">
          <p
            style={{ padding: '18px' }}
            className="text-[14px] sm:text-[16px] text-[#292929] text-left">
            Risks include the potential for loss of capital, market fluctuations, and
            project-specific risks such as construction delays or unforeseen expenses.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
