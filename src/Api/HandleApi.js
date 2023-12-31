import axios from 'axios';

const baseUrl = "https://todo-4woo.onrender.com"; // Use http instead of https for development

const getAllTodo = (setTodo) => {
  axios.get(`${baseUrl}/`)
    .then((response) => {
      console.log('data-->', response.data);
      setTodo(response.data);
    })
    .catch((error) => {
      console.error('Error fetching todos:', error);
    });
};

const addTodo=(text,setText,setTodo)=>{
    axios.post(`${baseUrl}/save`,{text}).then((data)=>{
        console.log(data);
        setText("");
        getAllTodo(setTodo);
    })
    .catch((err)=>console.log(err));

}
const updateTodo=(todoId,text,setTodo,setText,setIsUpdating)=>{
    axios.post(`${baseUrl}/update`,{_id:todoId,text}).then((data)=>{
        console.log(data);
        setIsUpdating(false);
        getAllTodo(setTodo);
    })
    .catch((err)=>console.log(err));
};
const deleteTodo=(_id,setTodo)=>{
    axios.post(`${baseUrl}/delete`,{_id}).then(()=>{
        
        getAllTodo(setTodo);
    })
    .catch((err)=>console.log(err));
};

export { getAllTodo,addTodo,updateTodo,deleteTodo };
