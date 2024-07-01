import Carousel from 'react-bootstrap/Carousel';

export default function SwipeCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img src="YapperChat.png" alt="Yapper Chat Messaging App"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="Pokedex.png" alt="Pokedex Search API App"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="shopping.png" alt="Shopping List App"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="game.png" alt="Tic Tac Toe Game App"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="DrumKit.png" alt="Drum Kit App"/>
      </Carousel.Item>
    </Carousel>
  );
}