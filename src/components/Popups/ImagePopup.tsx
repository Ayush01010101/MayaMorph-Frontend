import { createPortal } from "react-dom";
import { BlackButton } from "../Button/CustomButtons";
import { Download, Share2 } from "lucide-react";
import React, { SetStateAction, useState } from "react";
type propstype = {
  imageurl: string;
  setimage: React.Dispatch<SetStateAction<string>>;
};

const ImagePopup = ({ imageurl, setimage }: propstype) => {
  const [isClose, setIsClose] = useState(false);
  return createPortal(
    <>
      {!isClose && (
        <div
          onClick={() => {
            setIsClose(true);
            setimage("");
          }}
          className="fixed inset-0 bg-black/50 flex flex-col justify-center items-center z-50 "
        >
          <div className="bg-secondary-gray rounded-lg  w-4xl flex flex-col justify-center items-center p-4 m-4">
            <img
              src={imageurl}
              alt="popup image"
              className="w-full max-h-[70vh] object-contain rounded"
            />
          </div>
          <div className="flex justify-center items-center gap-7">
            <BlackButton
              extraclassName="flex justify-center items-center gap-3"
              text={
                <>
                  <Share2 />
                  Share
                </>
              }
              handleclick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                navigator.share({
                  title: "Share Generated Image",
                  text: "Check out ai generated image!",
                  url: imageurl,
                });
              }}
            />
            <BlackButton
              extraclassName="flex  justify-center items-center gap-3"
              text={
                <>
                  <Download />
                  Download
                </>
              }
              handleclick={async (e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                const image = await fetch(imageurl);
                const imageBlog = await image.blob();
                const imageURL = URL.createObjectURL(imageBlog);

                const link = document.createElement("a");
                link.href = imageURL;
                link.download = `${Date.now()}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            />
          </div>
        </div>
      )}
    </>,
    document.querySelector("#portal") as HTMLDivElement
  );
};

export default ImagePopup;
