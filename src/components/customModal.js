import { deleteNote } from "../firebase/firebase"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)


 

export const ConfirmDelete = async (id) => {
  let res = false;
    const accept = await MySwal.fire({
      
      title: 'Delete Note',
      text: 'Are you sure to remove it??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1606A2',
      cancelButtonColor: '#000000',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteNote(id) 
        res=true        
      }
    }) || {};  
      return res;
  }
