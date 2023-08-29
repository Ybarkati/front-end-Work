import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Button
    
  } from "@material-tailwind/react";
  import { homework } from "@/data";
  
  export function CourseEdit() {
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              HOMEWORK
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["title", "status", "due"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {homework.map(
                  ({ img, name, email, job, online, date }, key) => {
                    const className = `py-3 px-5 ${
                      key === homework.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {name}
                              </Typography>
                              
                            </div>
                          </div>
                        </td>
                        
                        <td className={className}>
                          <Chip
                            variant="gradient"
                            color={online ? "green" : "blue-gray"}
                            value={online ? "published": "unpublished"}
                            className="py-0.5 px-2 w-24 text-[11px] text-center font-medium"
                          />
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                          
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                           
                            <Button>More ...</Button>
                            </Typography>
                            </td>
                            
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        
      </div>
    );
  }
  
  export default CourseEdit;
  