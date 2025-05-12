import axios from 'axios';

    type propstype={
        prompt:string,
        seed:number,
        style:string
    }
    async function ImageGenerator({prompt,seed,style}:propstype) {

            try {
        
                const response:any = await axios.post(import.meta.env.VITE_FLUX_MODEL_GENERATE_URL, {
                    prompt: `${prompt}${style?`make it in ${style} Art Style`:""}`,
                    seed: seed
                }, {
                    responseType: 'blob' // Important for image handling
                });

                // Create object URL from blob
                const url = URL.createObjectURL(response.data);
                if(!url){
                return null 
                }
                const imagedata=response.data
               
                return [url,imagedata]
            } catch (error) {
                console.error('Generation failed: ', error);
                return null;
            }
        

    

    }

    export default ImageGenerator;