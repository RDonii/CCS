import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import About from './Pages/AboutPage/about';
import MainMenu from './Pages/MainMenu/MainMenu';

import Error from './Pages/Error/Error';
import ContactsPage from './Pages/ContactsPage/ContactsPage';
import Categories from './Pages/Categories/Categories';
import CategoriesList from './Pages/Categories/CategoiesList/CategoriesList';
import CategoriesItem from './Pages/Categories/CategoiesList/CategoriesItem/CategoriesItem';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ProjectsPageItem from './Pages/ProjectsPage/ProjectsPageItem/ProjectsPageItem';
import SearchPage from './Pages/SearchPage/SearchPage';
import Developers from './Components/Developers/Developers';


function App() {
  return (
    <>

   <Routes>
    {/*   <Route path='/' element={<MainMenu/>} >*/}
        <Route path='/' element={<MainMenu/>} />

        <Route path='/developers' element={<Developers/>} />
      
        <Route path='/:language/' element={<MainMenu/>} />  
        <Route path='/:language/about' element={<About/>} />

        <Route path='/:language/categories' element={<Categories/>} />
        <Route path='/:language/categories/:id' element={<CategoriesList/>} />
        <Route path='/:language/categories/:id/products/:category' element={<CategoriesItem/>} />

        <Route path='/:language/projects' element={<ProjectsPage/>} />
        <Route path='/:language/projects/:id' element={<ProjectsPageItem/>} />

        <Route path='/:language/contacts' element={<ContactsPage/>} />

        <Route path='/:language/search/:searchObject' element={<SearchPage/>} />

        <Route path='*' element={<Error/>} />

        
    {/*   </Route> */}
   </Routes> 
   
       

    </>
  );
}
  

export default App;
