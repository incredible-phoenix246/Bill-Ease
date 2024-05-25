import * as React from "react";

type FormInputProps = {
  id: string;
  label: string;
  type: string;
};

const FormInput: React.FC<FormInputProps> = ({ id, label, type }) => (
  <>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      id={id}
      type={type}
      aria-label={label}
      className="justify-center items-start p-4 mt-6 bg-white rounded-3xl border border-teal-500 border-solid max-md:pr-5"
    />
  </>
);

const MyComponent: React.FC = () => {
  return (
    <div className="px-20 pt-20 bg-gray-900 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <article className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d79e12b146ca600af707f29519d0523c87d739bf8ecea2e8e66a9f754735d12?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
              alt="A welcoming image"
              className="max-w-full aspect-[3.57] w-[261px]"
              loading="lazy"
            />
            <header className="flex flex-col mt-9 ml-3 font-bold text-slate-300 max-md:ml-2.5">
              <h1 className="text-5xl tracking-[2.4px] max-md:text-4xl">
                Hey, Hello!
              </h1>
              <h2 className="mt-8 text-2xl tracking-wider max-md:mr-2.5">
                welcome to bill ease
              </h2>
            </header>
            <p className="self-stretch mt-12 text-base font-medium tracking-wider text-white max-md:mt-10 max-md:max-w-full">
              We provide all the advantages that can simplify all your financial
              transactions without any further requirements.
            </p>
          </section>
        </article>
        <aside className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
          <form 
          className="flex flex-col grow px-14 py-20 mt-6 w-full text-base font-bold leading-6 bg-white rounded-[35px] text-black text-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="self-center text-4xl font-medium leading-6 text-neutral-900">
              welcome back
            </div>
            <p className="self-center mt-7 text-right text-black">
              please login to continue
            </p>
            <FormInput id="email" label="Email, Username" type="text" />
            <FormInput id="password" label="Password" type="password" />
            <div className="self-center mt-3">
              <a href="#forgot-password">Forgot Password?</a>
            </div>
            <div className="flex gap-5 justify-between items-center mt-28 text-right text-black whitespace-nowrap max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de5c78f4b74d764fbe37ed56e3ae44f8fe49ec9e85dc83d1b5e7b0648d49d729?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                alt="Social login method 1"
                className="shrink-0 self-stretch my-auto max-w-full border border-black border-solid aspect-[100] stroke-[1px] stroke-black w-[138px]"
                loading="lazy"
              />
              <div className="self-stretch">OR</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de5c78f4b74d764fbe37ed56e3ae44f8fe49ec9e85dc83d1b5e7b0648d49d729?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                alt="Social login method 2"
                className="shrink-0 self-stretch my-auto max-w-full border border-black border-solid aspect-[100] stroke-[1px] stroke-black w-[138px]"
                loading="lazy"
              />
            </div>
            <button
              type="button"
              className="flex gap-5 px-16 py-3 mt-12 text-center bg-white rounded-3xl border border-teal-500 border-solid max-md:px-5 max-md:mt-10"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bdead86f0f255c4bd8dbf0d009ce9b4ae1ca05dc7ff2545b47eed473275513a?apiKey=af97e94b909e4cdbb531b36fb1b19598&"
                alt=""
                className="shrink-0 w-6 aspect-square"
                loading="lazy"
              />
              <span className="flex-auto my-auto">Continue With Google</span>
            </button>
            <p className="self-center mt-16 leading-6 text-blue-800 max-md:mt-10">
              Dont have an account?{" "}
              <a href="#sign-up" className="text-blue-800">
                Sign Up
              </a>
            </p>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default MyComponent;
