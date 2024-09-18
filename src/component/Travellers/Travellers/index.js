import { Rating } from 'react-simple-star-rating';

export const Traveller = () => {
  return (
    <div className="mx-3 max-w-[300px] max-h-[174px] sm:max-w-[476px] sm:max-h-[280px] rounded-2xl border border-[#ededed] bg-white flex flex-col flex-nowrap justify-center items-center px-4 py-5 sm:px-8 sm:py-6">
      <Rating initialValue={0} readonly={true} className="flex" />
      <p className="text-xs sm:text-xl font-semibold">&quot;Elevating Every Occasion&quot;</p>
      <p className="text-[10px] sm:text-base">
        &ldquo;This platform made planning my vacation a breeze! I found the best deals on flights
        and hotels, all in one place. Highly recommend!&ldquo;
      </p>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-full overflow-hidden sm:m-3">
          <img
            className="object-cover w-full h-full"
            src="assets/img/travller.png"
            alt="No find the image"
          />
        </div>
        <p>Amanda Hart</p>
      </div>
    </div>
  );
};
