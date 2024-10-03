import Navbar from '../../component/Bars/Navbar';
import { DetailHeader } from '../../component/Bars/DetailHeader';
import { FlightDetailContent } from '../../component/FlightDetailContent';
import { Footer } from '../../component/Bars/Footer';

export const FlightDetail = () => {
  return (
    <div>
      <Navbar title="flights" />
      <DetailHeader />
      <FlightDetailContent />
      <Footer />
    </div>
  );
};
