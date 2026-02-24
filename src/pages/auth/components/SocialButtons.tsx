
import fascbook from "@/assets/logos_facebook.png"
import google from "@/assets/logos_google.png"

const socialButtons = [

  {
    id: 1,
    icon: (
      <img
        src={google}
        className="w-5"
      />
    ),

  },

  {
    id: 2,
    icon: (
      <img
        src={fascbook}
        className="w-5"
      />
    ),

  },
];

export default function SocialButtons() {

  return (
    <div className="flex justify-center gap-4">
      {socialButtons.map((button) => (
        <button
          key={button.id}
          type="button"
          className=" w-10 h-10 flex items-center justify-center rounded-full bg-gray-100
            shadow hover:scale-110 duration-200 cursor-pointer"
        >
          {button.icon}
        </button>

      ))}

    </div>

  );

}