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
  
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
  
  export function NewCourses() {
    const [inputValue, setInputValue] = useState("");
  const [submit, setSubmit] = useState("");
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
              New
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <div className="w-95% flex flex-col mt-4 mb-4 ml-4 mr-4">
            <form onSubmit={handleSubmit}>
                 <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input  value={inputValue} onChange={handleChange} type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                 <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
           </div>    
        </form>
        
        <div className="flex relative mt-4 mb-4 ml-4 mr-4">
                       <label className="flex mt-4 mb-4 ml-4 mr-4">
                         <input
                              type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                           {isChecked ? 'able to download' : 'not able to download'}
                        </label>
            
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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
  
  export default NewCourses;
  