import axios from 'axios';

export const createCategory =  (newCategory) => {
    const response =  axios.post('http://localhost:8000/api/v1/categories/', newCategory)
      .then(response => {
        return response
      })
      .catch(error => {return error});
      return response
  };

  export const editCategory = (editingCategory) => {
    console.log('entrei chamada')
   const response = axios.put(`http://localhost:8000/api/v1/categories/${editingCategory.id}/`, editingCategory)
      .then(response => {
        return response
      })
      .catch(error => console.error(error));
    return response  
  };

  export const getCategory = () => {
    console.log('entrei chamada')
   const response = axios.get(`http://localhost:8000/api/v1/categories/`)
      .then(response => {
        return response
      })
      .catch(error => console.error(error));
    return response  
  };

  export const deleteCategory = (categoryId) => {
    console.log('entrei chamada')
   const response = axios.delete(`http://localhost:8000/api/v1/categories/${categoryId}/`)
      .then(response => {
        return response
      })
      .catch(error => console.error(error));
    return response  
  };