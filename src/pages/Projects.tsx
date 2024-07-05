import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import OddProject from "../components/OddProject";
import EvenProject from "../components/EvenProject";

function Projects() {

  return (
    <Container fluid className="projects">
        <Row className="projectHead">
            <h1>Projects</h1>
        </Row>
        <OddProject
            projectImg="../MyInventory.png"
            imgAlt="MyInventory App UI"
            projectNum="01"
            projectTitle="MyInventory App"
            projectInfo="A simple inventory app that keeps track of product in stock. 
                        Can add, edit, and delete products shown in the database."
            viewProject="https://github.com/kenoreyes238/keno-reyes-final-project-front"
        />
        <EvenProject
            projectImg="../YapperChat.png"
            imgAlt="YapperChat App UI"
            projectNum="02"
            projectTitle="Yapper Chat"
            projectInfo="A messaging app that let&apos;s you chat with other users in a 
                        group channel, or chat with one user in a private direct-message."
            viewProject="https://yapper-chat.netlify.app/"
        />
        <OddProject
            projectImg="../Pokedex.png"
            imgAlt="Pokedex Search API UI"
            projectNum="03"
            projectTitle="Pokedex Search"
            projectInfo="Simple API project that fetches the searched Pokemon and maps out 
                        the image and description of the Pokemon."
            viewProject="https://kreyes-pokedex-search.netlify.app"
        />
        <EvenProject
            projectImg="../shopping.png"
            imgAlt="Shopping List App UI"
            projectNum="04"
            projectTitle="Shopping List App"
            projectInfo="Built functional shopping list app using DOM manipulation and event 
                        handling in JavaScript. Allows users to list and keep track of items 
                        needed for shopping."
            viewProject="https://shop-list-app-kreyes.netlify.app"
        />
        <OddProject
            projectImg="../game.png"
            imgAlt="Tic Tac Toe Game"
            projectNum="05"
            projectTitle="Tic Tac Toe"
            projectInfo="Project for Bay Valley Tech Module 3. Built a tic tac toe game using DOM 
                        manipulation in JavaScript. User plays against CPU."
            viewProject="https://tic-tac-toe-kreyes.netlify.app"
        />
    </Container>
  )
}

export default Projects