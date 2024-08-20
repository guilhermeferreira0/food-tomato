interface ExploreImageProps {
  imageUrl: string
  title: string
}

export function ExploreImage({ imageUrl, title }: ExploreImageProps) {
  return(
    <div className="flex flex-col text-center overflow-hidden">
      <img src={imageUrl} alt={title} className="rounded-[70%] bg-orange-500 bg-contain py-4"/>
      <h5 className="text-gray-500 text-base font-semibold">{title}</h5>
    </div>
  );
}