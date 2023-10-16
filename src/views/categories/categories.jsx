import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createCategory, deleteCategory, editCategory, getCategory } from '../../services/categories';
import {Row, Title, SubTitle, BoxList, BoxEdit, RowInputs,CustomHr, RowActions,CustomAction, Scroll} from './styles'

import { AiFillEdit } from "react-icons/ai";

import { BsTrash3Fill } from "react-icons/bs";
import { IoAddCircleSharp } from "react-icons/io5";
import { BiSolidSave } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";


const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [editingCategory, setEditingCategory] = useState(null);


  const firstData = async()=>{
    const response = await getCategory()
    if (response?.status ===200){
        setCategories(response.data)
        }
  }
  useEffect(() => {
    firstData()
  }, []);

  const handleCreateCategory = async() => {
    const response = await createCategory(newCategory)
    if(response?.status === 201){
        setCategories([...categories, response.data])
        setNewCategory({ name: '', description: '' })
    }
  };

  const handleEditCategory = async(category) => {
    const response = await editCategory(editingCategory)
    if(response?.status === 200){
          const updatedCategories = categories.map(category =>
         category.id === editingCategory.id ? response.data : category
         );
      setCategories(updatedCategories);
      setEditingCategory(null);
    }
  };

  const handleDeleteCategory = async(categoryId) => {   //implementar delete
    const response = await deleteCategory(categoryId)
    console.log(categoryId)
    if(response?.status === 204){
          const updatedCategories = categories.filter(category => category.id !== categoryId
         );
         console.log(updatedCategories)   
      setCategories(updatedCategories);
    }
    
  };

  return (
    <div>
     <BoxList>   
      <Title>Adicionar Nova Categoria</Title>
      <RowInputs>
      <input
        type="text"
        placeholder="Nome"
        value={newCategory.name}
        onChange={e => setNewCategory({ ...newCategory, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={newCategory.description}
        onChange={e => setNewCategory({ ...newCategory, description: e.target.value })}
      />
      <CustomAction color='#3498db' onClick={()=>handleCreateCategory()}>  <IoAddCircleSharp/> Adicionar</CustomAction>
      </RowInputs>
    </BoxList>

      <br/>
      <BoxList>
      <Title>Categorias</Title>
      <Row>
            <SubTitle>
            Nome
            </SubTitle>
            <SubTitle>
            Descrição
            </SubTitle>
          </Row>
          <Scroll>
        {categories?.map(category => (
          editingCategory !== null && editingCategory?.id === category?.id ? (            
          <div>
            
            <BoxEdit>
            <Title>Editar Categoria </Title>
            <RowInputs>
            <input
              type="text"
              placeholder="Nome"
              value={editingCategory?.name}
              onChange={e => setEditingCategory({ ...editingCategory, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={editingCategory?.description}
              onChange={e => setEditingCategory({ ...editingCategory, description: e.target.value })}
            />
            <RowActions>
             <CustomAction color='#e74c3c' onClick={() => setEditingCategory(null)}>  <ImCancelCircle/> Cancelar</CustomAction>
             <CustomAction color='#3498db' onClick={() => handleEditCategory(category)}>  <BiSolidSave/> Salvar</CustomAction>
             </RowActions>
            </RowInputs>
            </BoxEdit>
          </div>):(
          <>  
          <Row>
            <p>
            {category?.name} 
            </p>
            <p>
            {category?.description}
            </p>
            <RowActions>
             <CustomAction color='#4E984F' onClick={() => setEditingCategory(category)}>  <AiFillEdit/> Editar</CustomAction>
             <CustomAction color='#e74c3c' onClick={() => handleDeleteCategory(category.id)}>  <BsTrash3Fill/> Apagar</CustomAction>
             </RowActions>
          </Row>
          <CustomHr/>
          </>
          )
        ))}
        </Scroll>
    </BoxList>
    </div>
  );
};

export default CategoryComponent;