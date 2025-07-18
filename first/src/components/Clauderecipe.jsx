import ReactMarkdown from "react-markdown";

export default function Claudrecipe(props) {
  return (
    <section className="claude-recipe">
      <h2>Generated Recipe:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
