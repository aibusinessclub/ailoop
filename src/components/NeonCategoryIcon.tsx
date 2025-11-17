interface NeonCategoryIconProps {
  src: string;
  alt: string;
}

export const NeonCategoryIcon = ({ src, alt }: NeonCategoryIconProps) => {
  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 transition-all duration-500 group-hover:scale-125 group-hover:brightness-125">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain transition-all duration-500 group-hover:drop-shadow-neon"
      />
    </div>
  );
};
