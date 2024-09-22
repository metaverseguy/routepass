import Navbar from '../../component/Bars/Navbar';
import { DetailHeader } from '../../component/Bars/DetailHeader';
import { FlightDetail } from '../../component/FlightDetail';
import { Footer } from '../../component/Bars/Footer';

export const Detail = () => {
  return (
    <div>
      <Navbar title="flights" />
      <DetailHeader />
      <FlightDetail />
      <Footer />
    </div>
  );
};
