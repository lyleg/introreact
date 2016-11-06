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
  react: require("../assets/react.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#FFFFFF",
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
            <p>Lyle Garza, Engineering Manager at Visa
            We are hiring!</p>
          </Appear>
        </Slide>
        <Slide bgColor = "background">
          <Heading>Why are we Here?</Heading>
          <Appear>
            <Text>For React and Stuff</Text>
          </Appear>
        </Slide>
        <Slide bgColor = "background">
          <Heading>Austin ReactJS Meetup</Heading>
          <List>
            <Appear>
              <ListItem>
                1st Monday of every month
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Two speakers 30-45 minutes
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Food and beverages provide
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
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
            <Heading size = {5}>React is a JavaScript Library for Building User Interfaces</Heading>
            <List>
              <Appear><ListItem>Declarative</ListItem></Appear>
              <Appear><ListItem>Component Based</ListItem></Appear>
              <Appear><ListItem>Battle Tested</ListItem></Appear>
              <Appear><ListItem>Portable</ListItem></Appear>
              <Appear><ListItem>Testable</ListItem></Appear>
              <Appear><ListItem>Add more</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              VDOM? Reconcilliation, etc
            </Heading>
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
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Props
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Examples of state, stateless components
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Reusability
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              PropTypes and Flowtypes
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Testing
            </Heading>
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
            <Heading size={4} caps textColor="primary" textFont="primary">
              Flux
            </Heading>
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
            <Text>
              React and Redux have made a huge impact on front end web development -- they are amazing tools, but the pace of change is very fast and best practices are hard to keep up with. Ryan Vice is here to share some practical advice based on the real-world experience he and his team have gained over multiple projects and while developing their own custom React boilerplate focused on developer ergonomics.
            </Text>
          </Slide>
          <Slide bgColor = "background">
            <List>
              <ListItem>Auth strategy </ListItem>
              <ListItem>Forms and validation </ListItem>
              <ListItem>Testing and debugging</ListItem>
              <ListItem>Redux patterns and file organization </ListItem>
              <ListItem>Good lean devops practices </ListItem>
              <ListItem>Async, routing, error handling and more</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="background" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Relay and GraphQL
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.flux.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="background">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
