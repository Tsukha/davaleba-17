import { Navigate, useParams } from "react-router-dom";
import LinkLayout from "../layouts/linkLayout";

const facts = [
  {
    id: 1,
    title: "The Science of Deduction",
    content:
      "Sherlock Holmes was a master of deductive reasoning, able to draw conclusions from the smallest observations. He once famously deduced a man's entire life story from just examining his hat.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 2,
    title: "Musical Talent",
    content:
      "Holmes was an accomplished violinist who played the instrument to help him think through complex cases. He particularly admired the works of composer Paganini.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 3,
    title: "Chemistry Expert",
    content:
      "Beyond his detective work, Holmes was a skilled chemist who conducted experiments in his home laboratory. He had published papers on chemistry topics including the identification of tobacco ash.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 4,
    title: "Master of Disguise",
    content:
      "Holmes was capable of altering his appearance so completely that even his close friend Dr. Watson would fail to recognize him. He used this skill to gather information undercover.",
    image: "/api/placeholder/400/300",
  },
  {
    id: 5,
    title: "The Great Hiatus",
    content:
      "After supposedly falling to his death at Reichenbach Falls while fighting his nemesis Professor Moriarty, Holmes was actually alive. He spent three years traveling the world in secret before returning to London.",
    image: "/api/placeholder/400/300",
  },
];

function FactPage() {
  const { factId } = useParams();
  const selectedFact = facts.find((fact) => fact.id === parseInt(factId));

  if (!selectedFact) {
    return <Navigate to="*" />;
  }

  return (
    <>
      <LinkLayout />
      <div className="fact-container">
        <div className="fact-card">
          <div className="fact-header">
            <h1>Sherlock Holmes: Fact #{selectedFact.id}</h1>
          </div>

          <div className="fact-content">
            <h2 className="fact-title">{selectedFact.title}</h2>
            <p className="fact-text">{selectedFact.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FactPage;
