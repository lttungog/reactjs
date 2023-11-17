import './App.css';

function withStyle(Component) {
  return (props) => {
    const style = {
      color: "red",
      fontSize: "2em",
      ...props.style,
    };
    return <Component{...props} style={style} />;
  }
}

const Text = ({style = {}}) => (
  <p style = {{...style, fontFamily: "Inter"}}>MamaMia</p>
);
const StyleText = withStyle(Text);

function Welcome({name}) {
  return (
    <section>
      <h1>Hello, <span>{name}</span> 🌞</h1>
    </section>
  )
}

function App() {
  return (
    <div className = 'App'>
      <Welcome name = 'Tung' />
      <Text />
      <StyleText />
    </div>
  )
}

function User () {
  const name = 'Tung'
  const pic = "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
  return (
    <section>
      <img className = 'user-profile-pic' src={pic} alt={name} />
      <h2 className = 'user-name'>
        Hello, <span className = 'user-first-name'>{name}</span> 🤩
      </h2>
      <Text />
      <StyleText />
    </section>
  )
}

export default User;
