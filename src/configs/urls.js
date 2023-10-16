import ThemeDefault from "../themes/themeDefault/themeDefault"
import CategoryComponent from "../views/categories/categories"



export const urls = [
    {
        path:'cadastros',
        name:'Cadastros',
        component:<>categorias</>,
        subComponents:[
        {
            path:'cadastros',
            subPath:'categorias',
            component:<ThemeDefault children={<CategoryComponent/>}/>,
            to:'cadastros/categorias',
            name: 'Categorias'
        },
        {
            path:'cadastros',
            subPath:'fornecedores',
            component:<>fornecedores</>,
            to:'cadastros/fornecedores',
            name: 'Fornecedores'
        },
        {
            path:'cadastros',
            subPath:'produtos',
            component:<>produtos</>,
            to:'cadastros/produtos',
            name: 'Produtos'
        },
        {
            path:'cadastros',
            subPath:'catalogo',
            component:<>Catalogo</>,
            to:'cadastros/catalogo',
            name: 'Catalogo'
        },
]}

]