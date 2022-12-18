import {useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react' 
import { CardDetailContainer, CardDetail } from '../styles/CardDetail.style';
import { Link } from 'react-router-dom';

export default function ArticlesDetails() {

  let location = useLocation()
  let navigate = useNavigate()
  let [article, setArticle] = useState([])


  useEffect(() => {

      if (location && location.state && location.state.article) {
          setArticle(location.state.article)
      } else {
          navigate("/articles")
      }

  }, [])

  return (
      <CardDetailContainer>
          
          <CardDetail>
              <h1>{article.title}</h1>
              <p>{article.content}</p>

              <div>
                <Link to="/">Let's return see all the articles</Link>
              </div>
          </CardDetail>

      </CardDetailContainer>
  );
}