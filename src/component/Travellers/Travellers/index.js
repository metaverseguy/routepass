import { Rating } from 'react-simple-star-rating';

export const Traveller = () => {
  return (
    <div className="mx-[30px] rounded-2xl border border-[#ededed] bg-white gap-y-3 flex flex-col">
      <Rating initialValue={0} readonly={true} className="flex" />
      <p className="text-xl font-bold">&quot;Elevating Every Occasion&quot;</p>
      <p className="text-base">
        &ldquo;This platform made planning my vacation a breeze! I found the best deals on flights
        and hotels, all in one place. Highly recommend!&ldquo;
      </p>
      <div className="flex flex-col justify-center items-center gap-3 mt-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="assets/img/beach.jpg"
            alt="No find the image"
          />
        </div>
        <p>Amanda Hart</p>
      </div>
    </div>
  );
};
