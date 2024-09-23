import PropTypes from 'prop-types';

export const EllipsButton = ({ active }) => {
  return (
    <button className="relative w-5 h-5">
      <img
        src="assets/img/ellipses/ellipse_1.png"
        alt="No find the image"
        className={`absolute top-0 ${active ? 'block' : 'hidden'}`}
      />
      <img
        src="assets/img/ellipses/ellipse_2.png"
        alt="No find the image"
        className={`absolute -right-1 ${active ? 'block' : 'hidden'}`}
      />
      <img
        src="assets/img/ellipses/ellipse_3.png"
        alt="No find the image"
        className={`absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 ${active ? 'block' : 'hidden'}`}
      />
      <img
        src="assets/img/ellipses/ellipse_4.png"
        alt="No find the image"
        className={`absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 ${active ? 'hidden' : 'block'}`}
      />
    </button>
  );
};

EllipsButton.propTypes = {
  active: PropTypes.bool.isRequired,
};
