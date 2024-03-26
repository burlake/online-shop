import Card from '../Card/Card';

export default function CardList({ headphones }) {
    const headphone = (headphones || []).slice(0);

  return (
    <section className="gallery">
      <ul className="gallery" >
        {headphone.map(data => {
          return (
            <Card key={data.id} name={data.name} src={data.image} price={data.price} stars={data.stars}/>
          )
        })}
      </ul>
    </section>
  )
}