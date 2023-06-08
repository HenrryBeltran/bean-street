import CoffeeMachine from "../CoffeeMachine";
import LatteCoffeeIcon from "../LatteCoffeeIcon";
import PrimaryButton from "../PrimaryButton";

function AboutSection() {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1728px] sm:py-24 xl:mx-auto xl:flex xl:flex-row-reverse xl:items-center xl:justify-center xl:gap-24 xl:py-28">
        <div className="sm:flex sm:flex-row-reverse sm:gap-16 sm:px-16 sm:pb-24 xl:max-w-[600px] xl:flex-col-reverse xl:p-0">
          <div className="mx-auto flex items-end justify-evenly px-6 py-8 sm:w-1/3 sm:justify-between sm:p-0 xl:w-full xl:justify-start">
            <CoffeeMachine extendClass="w-[120px] h-[200px] xl:w-[235px] xl:h-[360px] sm:mr-4 xl:mr-24" />
            <LatteCoffeeIcon extendClass="w-24 h-24 xl:w-[180px] xl:h-[180px]" />
          </div>
          <div className="flex flex-col items-center px-6 py-8 sm:w-2/3 sm:p-0 xl:w-full xl:items-start">
            <h2 className="w-full text-3xl font-bold tracking-tight text-brown-800">
              We are committed to making the best coffee for you.
            </h2>
            <p className="mb-10 mt-4 leading-7 text-brown-700">
              We believe that coffee is not just a drink, but an experience. That's why we
              use only the best coffee beans and ingredients to create our unique and
              delicious coffee blends.
            </p>
            <PrimaryButton
              path="/about-us"
              name="About us"
              buttonClass="px-5 py-2 sm:px-6 sm:py-3 sm:text-2xl text-lg"
              ariaLabel="About us button"
            />
          </div>
        </div>
        <div className="py-8 sm:px-16 sm:py-0 xl:p-0">
          <picture>
            <source
              srcSet="/assets/images/home-about/table-with-coffees-large.jpg 1x, /assets/images/home-about/table-with-coffees-large-2x.jpg 2x"
              media="(min-width:640px)"
            />
            <img
              className="aspect-[4/5] w-full sm:mx-auto sm:max-w-[600px] xl:m-0 "
              src="/assets/images/home-about/table-with-coffees-small.jpg"
              srcSet="/assets/images/home-about/table-with-coffees-small.jpg 1x, /assets/images/home-about/table-with-coffees-small-2x.jpg 2x"
              alt="Table with coffes"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
