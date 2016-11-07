// Import React
import React from "react";
/*
react
 why react
 what is a react component
 vdom
 reuse
   mixins
   hoc

propTypes / flowType

testing

react native

How do I make an app
flux
 vanilla
 redux
   thunks
   saga
 mobx
relay

*/




// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  flux: require("../assets/flux.png"),
  components: require("../assets/components.png"),
  react: require("../assets/react.png"),
  logo: require("../assets/formidable-logo.svg"),
  vdom: require("../assets/granular-dom-updates.gif"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#FFFFFF",
  textColor: "#FFFFFF",
  background: "#2A2C2E"
});

/*
<Slide>
  <Heading>Who am I?</Heading>
  <Appear>
    Lyle Garza, Engineering Manager at Visa
    We are hiring!
  </Appear>
</Slide>*/

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
        <Slide transition={["zoom"]} bgColor="background">
          <Heading>Who am I?</Heading>
          <Appear>
            <div>
              <Text textColor = "primary">Lyle Garza, Engineering Manager at Visa</Text>
            </div>
          </Appear>
        </Slide>
        <Slide bgColor = "background">
          <Heading>Why are we Here?</Heading>
          <Appear>
            <Text textColor = "primary">To build a community around ReactJS</Text>
          </Appear>
        </Slide>
        <Slide bgColor = "background">
          <Heading>Austin ReactJS Meetup</Heading>
          <List>
            <Appear>
              <ListItem textColor = "primary">
                1st Monday of every month
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor = "primary">
                Two speakers 30-45 minutes
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor = "primary">
                Food and beverages provided
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor = "primary">
                Meet at TBD after!
              </ListItem>
            </Appear>
          </List>
        </Slide>
          <Slide transition={["zoom"]} bgColor="background">
            <Heading size={1} fit caps lineHeight={1}>
              Intro to React
            </Heading>
            <Heading size={1} fit caps>
               and the React Ecosystem
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What is React?
            </Heading>
          </Slide>
          <Slide bgColor = "background">
            <Heading size = {5} textColor = "primary">React is a JavaScript Library for Building User Interfaces</Heading>
            <List>
              <Appear><ListItem textColor = "primary">Declarative</ListItem></Appear>
              <Appear><ListItem textColor = "primary">Component Based</ListItem></Appear>
              <Appear><ListItem textColor = "primary">Portable</ListItem></Appear>
              <Appear><ListItem textColor = "primary">Testable</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor = "background">
            <Heading>Declarative UI</Heading>
            <Text textColor = "primary">Declarative programming is a non-imperative style of programming
             in which programs describe their desired results without explicitly listing commands or steps
            that must be performed --Wikipedia</Text>
            <Appear>
              <Text textColor = "primary">UI is a function of state</Text>
            </Appear>
          </Slide>
          <Slide bgColor = "background">
            <Heading>Why do we need React to achieve this?</Heading>
            <CodePane lang = "js" source = {require("raw!../assets/simpleDeclarative.example")}/>
            <Appear>
              <div>
                <Heading>Performance!</Heading>
                <Text textColor = "primary">Re-rendering an entire UI based off any change, can easily become a performance nightmare</Text>
              </div>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              VDOM
            </Heading>
            <Image src={images.vdom.replace("/", "")} width="175px"/>
          </Slide>
          <Slide bgColor = "background">
            <Heading>JSX</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/createElement.example")}
              margin="20px auto"
            />
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/jsx.example")}
                margin="20px auto"
              />
           </Appear>
          </Slide>
          <Slide bgColor = "background">
            <Heading>Component Based</Heading>
            <Image src={images.components.replace("/", "")} width="275px"/>
          </Slide>
          <Slide bgColor = "background">
            <Heading>Functional Component</Heading>
            <CodePane lang = "js" source={require("raw!../assets/functional.example")}/>
          </Slide>
          <Slide bgColor = "background">
            <Heading>Extend React.Component</Heading>
            <CodePane lang = "js" source={require("raw!../assets/class.example")}/>
          </Slide>
          <Slide bgColor = "background">
            <Heading>React.createClass</Heading>
            <CodePane lang = "js" source={require("raw!../assets/createClass.example")}/>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={4} caps textColor="primary" textFont="primary">
              Props
            </Heading>
            <Text textColor = "primary">Props are arbitrary inputs that can be passed into a component</Text>
            <Text textColor = "primary">Props are read only</Text>
            <Text textColor = "primary">All React components must act like pure functions with respect to their props</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Examples of state
            </Heading>
          </Slide>
          <Slide bgColor = "background">
            <Heading textColor = "primary" size = {4}>One Component's state is another's Props</Heading>
            <CodePane lang = "js" source={require("raw!../assets/stateProps.example")}/>
          </Slide>
          <Slide bgColor = "background">
            <Heading>LifeCycle</Heading>
            <Text textColor = "primary">React provides several lifecyle methods in it's mounting, updating, and unmounting phases</Text>
          </Slide>
          <Slide bgColor = "background">
            <Heading size = {4} textColor = "primary">Mounting</Heading>
            <Appear>
              <List>
                <ListItem textColor = "primary">constructor</ListItem>
                <ListItem textColor = "primary">componentWillMount</ListItem>
                <ListItem textColor = "primary">render</ListItem>
                <ListItem textColor = "primary">componentDidMount(Side Effects Here)</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide bgColor = "background">
            <Heading size = {4} textColor = "primary">Updating</Heading>
            <Appear>
              <List>
                <ListItem textColor = "primary">componentWillReceiveProps</ListItem>
                <ListItem textColor = "primary">shouldComponentUpdate</ListItem>
                <ListItem textColor = "primary">componentWillUpdate</ListItem>
                <ListItem textColor = "primary">render</ListItem>
                <ListItem textColor = "primary">componentDidUpdate</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide bgColor = "background">
            <Heading size = {4} textColor = "primary">UnMounting</Heading>
            <Appear>
              <List>
                <ListItem textColor = "primary">componentWillUnmount(don't forget to put cleanup here!)</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Reusability
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Use PropTypes
            </Heading>
            <CodePane lang = "js" source={require("raw!../assets/PropTypes.example")}/>
          </Slide>
          <Slide bgColor = "background">
            <Heading>Or with Flow</Heading>
            <CodePane lang = "js" source={require("raw!../assets/flowTypes.example")}/>
          </Slide>
          <Slide bgColor = "background">
            <Heading>Portable</Heading>
            <Text textColor = "primary">intro to other targets</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Server Side Rendering
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              React Native
            </Heading>
            <CodePane
              lang = "js"
              source={require("raw!../assets/react-native.example")}
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Testing React
            </Heading>
          </Slide>
          <Slide>
            <Heading>Beyond the View</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={4} caps textColor="primary" textFont="primary">
              Flux
            </Heading>
              <Text textColor = "primary">The concept "Flux" is simply that your view triggers an event (say, after user types a name in a text field), that event updates a model, then the model triggers an event, and the view responds to that model's event by re-rendering with the latest data. That's it.</Text>
              <Text textColor = "primary">--Andrew Ray, http://blog.andrewray.me/reactjs-for-stupid-people/</Text>
            <Image src={images.flux.replace("/", "")} margin="0px auto 40px" height="293px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Let's learn all about Redux
            </Heading>
            <Appear>
              <div>
                <Heading>Next Month!</Heading>
              </div>
            </Appear>
          </Slide>
          <Slide bgColor = "background">
            <Text textColor = "primary">
              React and Redux have made a huge impact on front end web development -- they are amazing tools, but the pace of change is very fast and best practices are hard to keep up with. Ryan Vice is here to share some practical advice based on the real-world experience he and his team have gained over multiple projects and while developing their own custom React boilerplate focused on developer ergonomics.
            </Text>
          </Slide>
          <Slide bgColor = "background">
            <List>
              <ListItem textColor = "primary">Auth strategy </ListItem>
              <ListItem textColor = "primary">Forms and validation </ListItem>
              <ListItem textColor = "primary">Testing and debugging</ListItem>
              <ListItem textColor = "primary">Redux patterns and file organization </ListItem>
              <ListItem textColor = "primary">Good lean devops practices </ListItem>
              <ListItem textColor = "primary">Async, routing, error handling and more</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Relay and GraphQL(might just make this an "AND MORE" page and list various other items)
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
