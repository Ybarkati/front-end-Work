import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Button,
    Input,
    Form
    
  } from "@material-tailwind/react";
  import { homework } from "@/data";
  
import { Link ,useNavigate, useParams} from "react-router-dom";
import { useState } from "react";
  
  export function Show() {
    const params=useParams()
    const [inputValue, setInputValue] = useState("");
  const [submit, setSubmit] = useState("1S_nhHD8J5gpd3cHIW42Z2zvraB370Zjm");
  const handleChange = (event) => {
    setInputValue(event.target.value);
    
  };
  function handleSubmit (e){
    e.preventDefault()
    setSubmit(inputValue)
    setInputValue("")
    
  }
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
    const navigate=useNavigate()
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              {params.id}
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <div className="w-95% flex flex-col mt-4 mb-4 ml-4 mr-4">
             <div className="relative h-9" >
             <button type="edit" class="text-white absolute left-24 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
             <button type="delete" class="text-white absolute left-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>

             </div>
            <div>
                {submit && <iframe
                  src={`https://836qrl.csb.app/${submit}?showHelp${isChecked ? "=ok":""}`}
                   title="Embedded Content"
                  className="w-[90%] max-w-3xl mt-4 mb-4 ml-4 mr-4 h-[600px]"
                 ></iframe> }
            </div>
      
       </div>
          </CardBody>
        </Card>
        
      </div>
    );
  }
  
  export default Show;
  