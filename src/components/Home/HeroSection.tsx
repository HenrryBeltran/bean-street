import PrimaryButton from "../PrimaryButton";

function HeroSection() {
  return (
    <section className="bg-beige-300">
      <picture className="flex w-full justify-center">
        <source
          srcSet="/assets/images/bean-street-hero-medium.jpg 1x, /assets/images/bean-street-hero-medium-2x.jpg 2x"
          media="(min-width:640px)"
        />
        <img
          className="h-80 w-full"
          src="/assets/images/bean-street-hero-small.jpg"
          srcSet="/assets/images/bean-street-hero-small.jpg 1x, /assets/images/bean-street-hero-small-2x.jpg 2x"
          alt="Bean Street Coffee Shop"
        />
      </picture>
      <div className="flex h-[50lvh] flex-col items-center justify-center px-10 text-center">
        <h1 className="mb-5 font-serif text-6xl font-bold leading-none text-brown-800">
          Welcome to Bean Street
        </h1>
        <p className="mb-9 leading-7 text-brown-700">
          Our cozy and modern coffee shop is the perfect place to relax and enjoy a cup of
          coffee with friends or alone.
        </p>
        <PrimaryButton
          path="/shop"
          name="Shop Now"
          ariaLabel="Shop now"
          buttonClass="w-fit px-5 py-2"
        />
      </div>
    </section>
  );
}

export default HeroSection;
