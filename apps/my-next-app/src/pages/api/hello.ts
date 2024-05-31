// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import multer from  'multer'
import { Request,Response } from "express";
let formidable = require('formidable');
import axios from 'axios'

const upload = multer({ dest: 'uploads/' });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// type Data = {
//   name: string;
// };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {

  console.log(`The request received from the front end is -- `,req.body)
  console.log('the  type  of the incoming request body is',typeof(req.body))
  if(req.method == 'POST')
    {
      console.log(`The request received from the front end is `)

    }



    let form = new formidable.IncomingForm();

    form.parse( req,(err,fields,files)=>{

      console.log(`Inside the formidable parser`)

      if(err)
        {
          console.log(`error occurred while parsing file`,err)
        }
          console.log(`The value present in  field are`,fields.imageFile[0])
          axios.get(fields.imageFile[0]).
          then(response=>console.log(`Response received  from the blob`,response.data)).
          catch(err=>console.log('error occured while received blob data',err));
          
          console.log(`the incoming file is`,files.imageFile)
    })
   
  
}


