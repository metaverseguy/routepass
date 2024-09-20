import PropTypes from 'prop-types';
import { AccordionItem } from 'react-light-accordion';

export const Question = ({ title, content }) => {
  return (
    <AccordionItem title={title}>
      <p
        style={{ padding: '18px' }}
        className="text-[14px] sm:text-[16px] text-[#292929] text-left">
        {content}
      </p>
    </AccordionItem>
  );
};

Question.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
