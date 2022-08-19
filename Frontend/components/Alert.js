import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { XIcon } from '@heroicons/react/outline';
import {useState} from "react";

export default function BasicAlerts({message}) {
    const [alert, closeAlert] = useState(false);
  return (
    <Stack className={`${alert && "hidden"} float-right`}  sx={{ width: '50%',margin: "auto", position:"fixed",bottom:"20px",zIndex:"30" }} spacing={2}>
      <Alert variant="filled" severity="error">
        {message && message}
      </Alert>
      <div onClick={()=>closeAlert(true)} className='absolute top-0 right-3 p-1 text-white rounded-full border transition duration-300 cursor-pointer hover:bg-white hover:text-black'>
      <XIcon className='h-3'/>
      </div>
    </Stack>
  );
}
