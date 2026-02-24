
type Props = {
  register: any;
};

export default function RememberMe({ register }: Props) {

  return (
    <div className="flex items-center justify-between mb-4">

      <label className="flex items-center gap-2 text-sm  text-gray-600 cursor-pointer">

        <input
          type="checkbox"
          {...register("remember")}
          className=" w-4 h-4 accent-teal-600 cursor-pointer "
        />
        Remember Me
      </label>


      <button
        type="button"
        className=" text-sm text-[#097178] cursor-pointer hover:underline"
      >
        Forgot password?
      </button>

    </div>

  );

}