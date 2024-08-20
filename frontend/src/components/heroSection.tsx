export function HeroSection() {
  return(
    <section className="md:mx-[10%]">
      <figure className="relative bg-orange-500 w-full h-[500px] overflow-hidden rounded-xl drop-shadow-2xl">
        <div className="absolute top-0 right-0 flex items-center justify-center h-[500px]">
          <img
            className="w-[80%] bg-contain opacity-80"
            src="/assets/img/macarrao.png" 
            alt="Prato de comida" 
          />
        </div>
        <figcaption className="absolute top-32 z-20 text-white md:w-2/3 px-[5%]">
          <h2 className="text-6xl mb-7 font-semibold">Order your favourite food here</h2>
          <p className="text-sm mb-5 font-semibold text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore cumque quasi dignissimos nostrum eligendi vel magni laudantium vero in quod totam debitis ducimus, necessitatibus, cum voluptatum, adipisci quam facere asperiores?</p>
          <button
            className="bg-white rounded-3xl text-gray-500 py-2 px-7 font-semibold text-sm"
          >View Menu</button>
        </figcaption>
      </figure>
    </section>
  );
}