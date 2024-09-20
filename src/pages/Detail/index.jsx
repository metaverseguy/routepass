import Navbar from '../../component/Bars/Navbar';
import { DetailHeader } from '../../component/Bars/DetailHeader';
import { FlightDetail } from '../../component/FlightDetail';

export const Detail = () => {
  return (
    <div>
      <Navbar />
      <DetailHeader />
      <FlightDetail />
    </div>
  );
};
