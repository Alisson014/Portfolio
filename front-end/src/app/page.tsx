import HeroBlackHole from "../components/heroBlackHole/HeroBlackHole";

export default function Home() {
  return (
    <main>
      <HeroBlackHole />
      <h1 className="text-text-title text-4xl">Title of <span className="text-primary">Home</span></h1>
      <p className="text-text">This is the page home os my project Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit nihil repellendus atque consequuntur soluta, facere magnam minus dolorum aut, deserunt vel, laboriosam corrupti quos eveniet illo corporis? Eos, animi?</p>
      <button className="bg-card text-text py-1 px-4">button</button>
    </main>
  );
}
