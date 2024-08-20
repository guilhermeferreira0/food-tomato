import { ExploreImage } from "./exploreImage";

export function ExploreMenu() {
  return(
    <section className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Explore our menu</h3>
      <p className="text-sm mb-5 font-semibold text-justify text-gray-500 w-[60%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque, culpa ducimus similique accusamus eum perferendis aliquam nostrum a amet itaque aspernatur dolores non eius. Sapiente voluptate voluptatem accusamus cumque.</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(10%,1fr))] gap-5">
       <ExploreImage imageUrl="/assets/img/macarrao.png" title="Macarrao"/>
       <ExploreImage imageUrl="/assets/img/macarrao.png" title="Macarrao"/>
       <ExploreImage imageUrl="/assets/img/macarrao.png" title="Macarrao"/>
       <ExploreImage imageUrl="/assets/img/macarrao.png" title="Macarrao"/>
      </div>
    </section>
  );
}