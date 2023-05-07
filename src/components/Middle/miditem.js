
import './MidItem.css';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';







const BasicExample = ({key,title,description,img}) => {

  const navigate = useNavigate();


  

  return (
    
    
     <div className="card" key={key}>
          <img src={img} alt={description} />
            <p className="card-text1">{title}</p>
          <div className="card-body">
            <p className="card-text">{description}</p>
            <div style={{textAlign:"center"}}>
              <button className="btn btn-primary" onClick={() => navigate('/' + title)} >View</button>
              
            </div>
            
          </div>
        </div>
  );
};

export default BasicExample;