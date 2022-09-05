import Title from "./Title"; 
import Label from "./Label";
const UserCard = (props) => {
    console.log(props)
    return (
      <div className="card">
        <Title text={props.user.name} />
        <Label text={props.user.email} />
        <Label text={props.user.phone} />
        <Label text={props.user.website} />
      </div>
    );
};

export default UserCard