import { ReactNode } from "react";
type propstype={
    imageurl:string,
    
}

const ImageCard=({imageurl}:propstype):ReactNode=>{

    return(
        <>
             <div
                key={imageurl}
                className="cursor-pointer aspect-square rounded-lg overflow-hidden relative group"
              >
                <img
                  src={imageurl}
                  alt={`Generation ${'image'}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                </div>
              </div>
        </>
    )
}

export default ImageCard