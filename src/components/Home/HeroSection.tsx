import PrimaryButton from "../PrimaryButton";

function HeroSection() {
  return (
    <section className="bg-beige-300 sm:h-[calc(100lvh-104px)] sm:min-h-[640px] xl:h-[calc(100lvh-120px)]">
      <div className="flex flex-col sm:h-full  sm:flex-row-reverse">
        <picture className="flex w-full justify-center sm:w-1/2">
          <source
            srcSet="/assets/images/bean-street-hero-medium.jpg 1x, /assets/images/bean-street-hero-medium-2x.jpg 2x"
            media="(min-width:640px)"
          />
          <img
            className="h-80 w-full object-cover sm:h-full"
            src="/assets/images/bean-street-hero-small.jpg"
            srcSet="/assets/images/bean-street-hero-small.jpg 1x, /assets/images/bean-street-hero-small-2x.jpg 2x"
            alt="Bean Street Coffee Shop"
          />
        </picture>
        <div className="min-h-[calc(100lvh-320px-104px)] w-full flex-grow p-10 text-center sm:h-full sm:min-h-max sm:w-1/2 sm:px-14">
          <div className="flex flex-col items-center justify-center sm:mx-auto sm:h-full xl:w-[600px]">
            <h1 className="mb-5 font-serif text-6xl font-bold leading-none tracking-tight text-brown-800 sm:mb-6 sm:text-7xl xl:mb-8 xl:text-8xl">
              Welcome to Bean Street
            </h1>
            <p className="mb-9 leading-7 text-brown-700 sm:mb-10 sm:text-xl sm:leading-10 xl:mb-14 xl:text-2xl">
              Our cozy and modern coffee shop is the perfect place to relax and enjoy a
              cup of coffee with friends or alone.
            </p>
            <PrimaryButton
              path="/shop"
              name="Shop Now"
              ariaLabel="Shop now"
              buttonClass="w-fit px-5 py-2 sm:px-6 sm:py-3 sm:text-2xl text-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
