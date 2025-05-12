import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatecredit } from "../Redux/Slices/UserCreditSlice";
import { useSelector } from "react-redux";
import { Ban } from "lucide-react";
import {
  Wand2,
  Image as ImageIcon,
  Download,
  Loader2,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { CustomSelectInput } from "./Input/CustomSelectInput";
import {
  GradiantButton,
  PurpleButton,
  BlackButton,
} from "./Button/CustomButtons";
import { PuffLoader } from "react-spinners";
import useGetUserCredits from "../Hooks/userGetUserCredits";
import useGetUserStoreData from "../Hooks/useGetUserStoreData";
import { GenerateImageClick } from "../HandleClickFunctions/GenerateImageClickFunction/GenerateImageClick";
import { UptoDownPopup } from "./Popups/UptoDownPopup";
import Database from "../Supabase/Database";
import { insertlength } from "../Redux/Slices/GenerateImagesLength";
interface GenerationSettings {
  style: string;
  aspectRatio: string;
  quality: string;
  model: string;
}

type optionstype = {
  value: string;
  label: string;
  isdisabled?:boolean

}[];

const Generate: React.FC = () => {
  //hook for imageclick handle function
  const dispatch=useDispatch()
  const previousgeneratedimagelength=useSelector((state:any)=>state.generateimageslength.totalimages)
  const credits = useGetUserCredits();
  const [userdata] = useGetUserStoreData();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [previousprompt, setPreviousprompt] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [generatedImage, setGeneratedImage] = useState<any>("");
  const [settings, setSettings] = useState<GenerationSettings>({
    style: "realistic",
    aspectRatio: "1:1",
    quality: "standard",
    model: "black-forest-labs/FLUX.1-dev",
  });

  const models: optionstype = [
    { value: "stabilityai/stable-diffusion-2", label: "Stable Diffusion 2",isdisabled:true },
    {
      value: "stabilityai/stable-diffusion-v1-5",
      label: "Stable Diffusion v1.5",
      isdisabled:true
    },  
    { value: "black-forest-labs/FLUX.1-dev", label: "FLUX 1 Dev", },
    {
      value: "stabilityai/stable-diffusion-xl-base-1.0",
      label: "Stable Diffusion XL",
      isdisabled:true
    },
    {
      value: "kandinsky-community/kandinsky-2-2-decoder",
      label: "Kandinsky 2.2",
      isdisabled:true
    },
    { value: "kandinsky-community/kandinsky-3", label: "Kandinsky 3",isdisabled:true },
    { value: "kwai-colors/kolors", label: "Kolors",isdisabled:true },
    {
      value: "stabilityai/stable-diffusion-3-medium-diffusers",
      label: "Stable Diffusion 3 Medium",
      isdisabled:true
    },
  ];

  const styles: optionstype = [
    { value: "realistic", label: "Photorealistic" },
    { value: "artistic", label: "Artistic" },
    { value: "anime", label: "Anime" },
    { value: "digital-art", label: "Digital Art" },
    { value: "3d", label: "3D Style" },
  ];

  const qualities: optionstype = [
    { value: "6", label: "Standard" },
    { value: "10", label: "HD" },
    { value: "14", label: "Ultra HD 4K",isdisabled:true },
  ];

  return (
    <div className="pt-24 pb-16">
      {error && <UptoDownPopup text={error} icon={<Ban />} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Input Section */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-secondary-gray/30 rounded-2xl p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Describe your image
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A serene landscape with mountains at sunset..."
                  className="w-full h-32 px-4 py-3 rounded-lg bg-secondary-gray border border-secondary-gray/80 text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple resize-none"
                />
              </div>

              <CustomSelectInput
                label="Model"
                value={settings.model}
                options={models}
                onChange={(value) => setSettings({ ...settings, model: value })}
                extraclassName="w-full px-4 py-2"
              />
              <CustomSelectInput
                label="Style"
                value={settings.style}
                options={styles}
                onChange={(value) => setSettings({ ...settings, style: value })}
                extraclassName="w-full px-4 py-2"
              />

              {/* <CustomSelectInput
                label="Aspect Ratio"
                value={settings.aspectRatio}
                options={aspectRatios}
                onChange={(value) =>
                  setSettings({ ...settings, aspectRatio: value })
                }
                extraclassName="w-full px-4 py-2"
              /> */}

              <CustomSelectInput
                label="Quality"
                value={settings.quality}
                options={qualities}
                onChange={(value) =>
                  setSettings({ ...settings, quality: value })
                }
                extraclassName="w-full px-4 py-2"
              />

              {/* generate image button  */}
              <GradiantButton
                extraclassName="flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 py-4 w-full"
                disabled={isGenerating ? true : false}
                handleclick={() => {
                  setPreviousprompt(prompt);
                 if(previousprompt != prompt){
                   GenerateImageClick({
                    userdata: userdata,
                    credits: credits,
                    Inputs: prompt,
                    Isloading: setIsGenerating,
                    setgenerateimg: setGeneratedImage,
                    style: settings.style,
                    quality: settings.quality,
                    model: settings.model,
                    seterror: setError,
                  }).then(async (res:boolean | undefined | null)=>{
                      if(res){
                        dispatch(insertlength(previousgeneratedimagelength + 1))
                        //remove one credit from supabase 
                        if(userdata?.id){
                          const newcredit=await Database.spendcredit(userdata.id)
                          if(credits){

                            dispatch(updatecredit(credits -1 ))
                          }
                        }
                      }
                  })
                 }
                 else{
                  setError("Change Or Modify Prompt!!")
                 }
                }}
                
                text={
                  isGenerating ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-5 w-5 mr-2" />
                      Generate Image
                    </>
                  )
                }
              />
            </div>

            <div className="bg-secondary-gray/30 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Sparkles className="h-5 w-5 text-secondary-green mr-2" />
                <h3 className="text-lg font-semibold">
                  Tips for better results
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• Be specific about what you want to see</li>
                <li>• Include details about style, mood, and lighting</li>
                <li>• Mention specific colors or themes</li>
                <li>• Describe the composition and perspective</li>
              </ul>
            </div>
          </div>

          {/* Preview Section */}
          <div className="w-full lg:w-2/3 flex  items-center flex-col">
            <div className="bg-secondary-gray/30   rounded-2xl p-6 w-full h-[60%] mt-12 ">
              <div className="flex justify-center items-center  h-full rounded-sm">
                {generatedImage ? (
                  <div className="space-y-6">
                    <div className="relative rounded-lg overflow-hidden flex justify-center items-center ">
                      <img
                        src={generatedImage ? generatedImage : ""}
                        alt="Generated artwork"
                        className="max-w-[60%] max-h-[70%] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400">
                    <ImageIcon className="h-16 w-16 mb-4" />
                    <p className="text-lg">
                      {isGenerating ? (
                        <PuffLoader color="#a694ff" size={20} />
                      ) : (
                        "Your generated image will appear here"
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-4 mt-5 ">
              {generatedImage && <BlackButton
                text={
                  <>
                    <RefreshCw className="h-5 w-5 mr-2" />
                    Regenerate
                  </>
                }
                extraclassName="py-3 px-5 flex justify-center items-center flex-wrap"
                handleclick={() => {
                  if (prompt == previousprompt) {
                    setError("change style or prompt");
                  } else {

                    
                    GenerateImageClick({
                      userdata: userdata,
                      credits: credits,
                      Inputs: prompt,
                      Isloading: setIsGenerating,
                      setgenerateimg: setGeneratedImage,
                      style: settings.style,
                      quality: settings.quality,
                      model: settings.model,
                      seterror: setError,
                    }).then(async (res:boolean | undefined | null)=>{
                      if(res){
                        //remove one credit from supabase 
                        if(userdata?.id){
                          const newcredit=await Database.spendcredit(userdata.id)
                          if(credits){

                            dispatch(updatecredit(credits -1 ))
                          }
                        }
                      }
                  })
                  }
                }}
              />}
              {generatedImage && <PurpleButton
                extraclassName="py-3 px-5 flex justify-center items-center flex-wrap"
                text={
                  <>
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </>
                }
                handleclick={() => {
                  if(generatedImage){

                    const a = document.createElement("a");
                    a.href = generatedImage?generatedImage:"";
                    a.download = `generated-image-${Date.now()}.png`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  }
                  else{
                    setError("Image Not Avaliable")
                  }
                }}
              />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
