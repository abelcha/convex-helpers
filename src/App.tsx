import Counter from "./components/Counter";
import RelationshipExample from "./components/RelationshipExample";
import SessionsExample from "./components/SessionsExample";
import ZodExample from "./components/ZodExample";

export default function App() {
  return (
    <main>
      <Counter />
      <ZodExample />
      <RelationshipExample />
      <SessionsExample />
    </main>
  );
}
