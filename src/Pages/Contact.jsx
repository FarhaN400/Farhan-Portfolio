import React from "react";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-[#0e162a] p-5  flex justify-center ">
      <div className="px-4 sm:px-10 md:px-10 lg:px-40 py-10 text-white md:w-1/2">
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-white mb-8">
          Contact
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 hover:shadow-xl transition-shadow duration-300"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              //   placeholder="Your Name"
              className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500"
              {...register("name", { required: true })}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm sm:text-base font-medium"
              htmlFor="mobile"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              //   placeholder="123@abc"
              className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500"
              {...register("mobile", { required: true })}
            />
          </div>

          {/* Email Field
          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500"
              {...register("email", { required: true })}
            />
          </div> */}

          {/* Message Field */}
          <div className="flex flex-col gap-2">
            <label
              className="text-sm sm:text-base font-medium"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              //   placeholder="Your Query"
              className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500 min-h-[100px] sm:min-h-[150px]"
              {...register("message", { required: true })}
            />
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-1/2 p-3  bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold flex justify-center items-center gap-3"
            >
              <span>Send Message</span>
              <FiSend className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
