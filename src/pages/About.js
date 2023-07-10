// import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

function About() {
//   const [params] = useSearchParams();
//   console.log('params', params.get('id'))
const params = useParams()
console.log('params', params)
  return <div>About</div>;
}

export default About;
