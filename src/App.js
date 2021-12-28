import './App.css';
import { Route , Routes} from 'react-router-dom';
import NavBar from './Containers/NavBar/NavBar';
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import CreateArticle from './Components/CreateArticle/CreateArticle';
import ArticleDetail from './Components/ArticleDetail/ArticleDetail';
import ContactArticle from './Components/ContactArticle/ContactArticle';
function App() {
  return (
  <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/Ecrire" element={<CreateArticle/>}/>
        <Route path="/Contact" element={<ContactArticle/>} />
        <Route path="/articles/:slug" element={<ArticleDetail/>}/>
    </Routes>
  </>
  );
}

export default App;
