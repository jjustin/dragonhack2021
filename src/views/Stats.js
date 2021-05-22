import "./stats.css"
import LineGraph from '../components/LineGraph'
import RadarCustom from '../components/RadarCustom'


export default function Stats() {
  return (
    <div className="statsView">
      <div className="lineGraph">
        <LineGraph />
      </div>
      <div className="radarGraph">
        <RadarCustom />
      </div>

    </div>
  );
}
