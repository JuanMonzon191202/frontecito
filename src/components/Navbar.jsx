import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  // logo
  render() {
    return (
      <nav>
        <Link to="/home">{svg}</Link>
        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "navbar active" : "navbar"}
          >
            <li>
              <Link to="/loginView">Login</Link>
            </li>
            <li>
              <Link to="/userView">Usuario</Link>
            </li>
            <li>
              <Link to="/ContacUs">Contáctanos</Link>
            </li>
            <li>
              <Link to="/adminView">Administrador</Link>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;

const svg = (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 485.000000 515.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g
      transform="translate(0.000000,515.000000) scale(0.100000,-0.100000)"
      fill="##ffff"
      stroke="none"
    >
      <path
        d="M2285 3481 c-142 -66 -167 -247 -50 -350 53 -47 100 -64 171 -64 49
-1 70 5 108 27 54 32 101 98 111 157 14 84 -56 195 -147 234 -51 21 -143 19
-193 -4z"
      />
      <path
        d="M1775 3327 c-73 -41 -106 -118 -86 -195 34 -124 191 -181 300 -109
52 34 75 78 75 144 1 136 -167 229 -289 160z"
      />
      <path
        d="M2830 3339 c-32 -13 -78 -56 -96 -91 -17 -32 -18 -95 -3 -135 36 -97
178 -155 267 -109 69 36 121 132 107 198 -9 39 -68 104 -116 129 -41 21 -117
24 -159 8z"
      />
      <path
        d="M2311 2969 c-102 -17 -207 -94 -274 -201 -56 -88 -70 -77 -42 33 9
33 13 64 10 69 -9 15 -76 30 -130 30 -95 -1 -204 -72 -249 -162 -26 -52 -26
-54 -26 -293 0 -235 1 -243 23 -275 41 -61 66 -72 179 -81 130 -11 182 -4 222
30 90 77 190 111 348 118 159 8 251 -19 382 -109 l61 -43 120 -3 c111 -3 123
-2 164 20 31 17 52 38 68 68 22 41 23 52 23 272 0 262 -2 269 -88 355 -92 92
-191 122 -297 89 -44 -13 -43 -11 -24 -98 19 -86 1 -94 -45 -19 -42 68 -110
133 -177 167 -40 20 -152 46 -184 43 -5 -1 -34 -5 -64 -10z m151 -289 c44 -13
93 -52 113 -91 19 -35 19 -129 1 -172 -18 -44 -77 -94 -128 -108 -172 -46
-313 111 -238 266 42 86 153 132 252 105z"
      />
      <path
        d="M477 1943 c-9 -8 -9 -330 -1 -361 8 -29 39 -37 137 -37 117 0 117 0
117 226 l0 179 -40 0 -40 0 0 -161 c0 -91 -4 -169 -10 -180 -12 -22 -59 -26
-78 -7 -8 8 -12 63 -12 180 l0 168 -33 0 c-19 0 -37 -3 -40 -7z"
      />
      <path
        d="M824 1937 c-2 -7 -1 -98 3 -203 l8 -189 35 0 35 0 3 73 3 72 49 0
c52 0 100 14 112 33 4 7 8 53 8 104 0 119 -4 123 -148 123 -75 0 -104 -3 -108
-13z"
      />
      <path
        d="M1144 1933 c5 -16 20 -86 68 -323 13 -63 19 -70 70 -70 46 0 50 6 73
135 17 96 28 126 41 113 3 -3 16 -57 29 -118 12 -62 29 -116 36 -121 21 -13
75 -11 87 4 7 9 77 319 86 382 0 6 -17 10 -39 10 l-40 0 -20 -137 c-30 -197
-40 -197 -75 -4 -28 159 -23 148 -72 144 l-43 -3 -25 -132 c-24 -123 -40 -167
-53 -146 -3 4 -10 51 -17 103 -22 183 -19 175 -68 178 -38 3 -43 1 -38 -15z"
      />
      <path
        d="M1730 1930 c-18 -18 -20 -33 -20 -184 0 -130 3 -168 14 -179 18 -18
130 -31 179 -22 59 11 62 20 62 202 0 161 -1 165 -24 184 -35 28 -182 28 -211
-1z m138 -38 c9 -7 12 -44 10 -153 l-3 -144 -28 -3 c-52 -6 -57 8 -57 152 0
89 4 136 12 144 14 14 47 16 66 4z"
      />
      <path
        d="M2064 1937 c-2 -7 -3 -98 -2 -202 l3 -190 35 0 35 0 5 75 c7 100 23
99 72 -2 36 -74 39 -78 71 -78 19 0 36 3 40 6 3 4 -7 33 -23 65 -33 65 -36 84
-16 96 25 15 36 52 36 127 0 108 -11 116 -147 116 -75 0 -105 -4 -109 -13z"
      />
      <path
        d="M2412 1748 l3 -203 35 0 35 0 3 85 c4 142 14 142 72 3 34 -84 38 -88
69 -91 19 -2 37 0 42 5 4 4 -10 52 -33 105 l-40 96 41 94 c23 51 41 97 41 101
0 5 -19 7 -42 5 l-42 -3 -39 -93 c-22 -51 -45 -91 -51 -89 -7 2 -12 39 -14 95
l-3 92 -40 0 -39 0 2 -202z"
      />
      <path
        d="M2762 1748 l3 -203 35 0 35 0 5 70 5 70 73 6 c40 3 78 11 85 18 7 7
13 49 15 106 5 130 0 135 -148 135 l-110 0 2 -202z"
      />
      <path
        d="M3102 1748 l3 -203 100 0 c96 0 100 1 103 23 3 20 0 22 -50 22 -30 0
-59 5 -66 12 -8 8 -12 63 -12 180 l0 168 -40 0 -40 0 2 -202z"
      />
      <path
        d="M3441 1913 c-5 -21 -12 -49 -15 -63 -22 -84 -66 -284 -66 -296 0 -8
10 -14 24 -14 39 0 56 11 56 34 0 32 19 46 65 46 50 0 64 -9 74 -46 5 -22 14
-30 35 -32 16 -2 33 1 38 6 9 9 -60 323 -82 380 -8 19 -17 22 -64 22 l-55 0
-10 -37z"
      />
      <path
        d="M3754 1936 c-17 -13 -19 -28 -19 -186 0 -171 0 -172 25 -192 21 -17
36 -19 107 -16 97 4 113 15 116 79 l2 44 -42 3 -42 3 -3 -38 c-3 -36 -5 -38
-38 -38 l-35 0 0 150 0 150 35 0 c33 0 35 -2 38 -37 3 -37 4 -38 42 -38 25 0
40 5 44 16 11 30 6 61 -15 88 -19 25 -25 26 -108 26 -59 0 -93 -4 -107 -14z"
      />
      <path
        d="M4072 1748 l3 -203 110 0 c106 0 110 1 113 23 3 21 0 22 -62 22 -72
0 -86 11 -86 69 0 54 8 61 65 61 55 0 71 13 58 45 -4 12 -18 15 -55 14 -55 -3
-68 7 -68 54 0 54 15 67 79 67 45 0 60 4 65 16 3 9 4 20 0 25 -3 5 -55 9 -115
9 l-109 0 2 -202z"
      />
    </g>
  </svg>
);