import Cards from './components/Cards';

function App() {
  const dataColor = [
    {
      listedBy:"Mücahit",
      role:"Admin",
      avatar:'https://pbs.twimg.com/profile_images/1297742680219410432/sZxReosr_400x400.jpg',
      color: {
        renk1:"#F6E7D8",
        renk2:"#F68989",
        renk3:'#C65D7B',
        renk4:'#874356'
      }
    },
    {
      listedBy:"Mehmet",
      role:"Patika",
      avatar:'https://global-uploads.webflow.com/6097e0eca1e87557da031fef/609859a191abe5d64b17fed3_Patika%20logo.png',
      color: {
        renk1:"#F6E7D8",
        renk2:"#F68989",
        renk3:'#C65D7B',
        renk4:'#874356'
      }
    },
    {
      listedBy:"Zafer",
      role:"Patika",
      avatar:'https://global-uploads.webflow.com/6097e0eca1e87557da031fef/609859a191abe5d64b17fed3_Patika%20logo.png',
      color: {
        renk1:"#F6E7D8",
        renk2:"#F68989",
        renk3:'#C65D7B',
        renk4:'#874356'
      }
    },
    
  ]
  return (
    <div className="App m-2">
        <Cards dataColor={dataColor}/>
        <button>

        </button>
    </div>
  );
}

export default App;
