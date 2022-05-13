import { isVisible } from '@testing-library/user-event/dist/utils';
import './CardComponent.css'



const CardComponent = ({ name, value, isVisible }: any) => {
    return (
      <div className="cardWrapper">
        <p className="name">{name}</p>
        <div className="card">
          <p className="cardValue">{isVisible ? value : "?"}</p>
        </div>
      </div>
    );
  };


  export default CardComponent
