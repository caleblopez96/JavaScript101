export default function Greeting({ name, age, timeOfDay }) { // destructuring props
  return (
    <div>
      <h1>Hello, {name}, and good {timeOfDay}</h1>
      <p>Your age is {age}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Greeting name="Caleb" age={29} isStudent={true} />
    </div>
  );
};

export { App }