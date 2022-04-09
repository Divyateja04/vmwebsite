import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="db dt-l w-100 border-box pa3 ph5-l bg-black">
        <div className="quickkiss">
            <Link className="header-title" to="/">Verba Maximus</Link>
        </div>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/">Home</Link>
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/Events">Events</Link>
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/Team">Team</Link>
            {/* <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/Sponsors">Sponsors</Link> */}
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/Contact">Contact</Link>
            <Link className="white link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/Schedule">Schedule</Link>
            <a className="white link dim bg-blue f6 f5-l dib mr3 mr4-l pa2 br1" href="https://forms.gle/VZgJVoBmsAHoGPAb6" target="_blank">Register</a>
        </div>
        </nav>
    )
  }