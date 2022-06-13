import "./cardList.styles.css";
import Card from "../card/card.component";

const CardList = ({employees}) => {
    return (
      <div className="card-list">
        {employees.map((user) => (
          <Card key={user.id} user={user}/>
        ))}
      </div>
    );

}
export default CardList;
