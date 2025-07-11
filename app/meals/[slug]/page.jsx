export default function Meal({ params }) {
  return (
    <>
      <h1>The Meal</h1>
      <p>{params.slug}</p>
    </>
  );
}
