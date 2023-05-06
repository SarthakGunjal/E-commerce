// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import './MidItem.css';


const BasicExample = ({key,title,description,img}) => {
  return (
    
     <div className="card" key={key}>
          <img src={img} alt={description} />
            <p className="card-text1">{title}</p>
          <div className="card-body">
            <p className="card-text">{description}</p>
            <div style={{textAlign:"center"}}>
              <button className="btn btn-primary" >View</button>
            </div>
            
          </div>
        </div>
  );
};

export default BasicExample;