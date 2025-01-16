// import { useState } from 'react'

// const App = () => {
//     const  [text, settext] = useState("")
//     function showText() {
//         console.log(text);
//     }


//     return (
//       <div>
//         <input onChange={(y) =>settext(y.target.value)} type="text" />
//         <button onClick={showText}>show Text</button>
//       </div>
//     )

//   }



//   export default App
// import React, { useState } from 'react';

// function App() {
//     const [ism, setIsm] = useState("");
//     const [familiya, setFamiliya] = useState("");
//     const [yosh, setYosh] = useState("");

//     const inpu = () => {
//         alert(`Ism: ${ism}, Familiya: ${familiya}, Yosh: ${yosh}`);
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Ism"
//                 value={ism}
//                 onChange={(e) => setIsm(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Familiya"
//                 value={familiya}
//                 onChange={(e) => setFamiliya(e.target.value)}
//             />
//             <input
//                 type="number"
//                 placeholder="Yosh"
//                 value={yosh}
//                 onChange={(e) => setYosh(e.target.value)}
//             />
//             <button onClick={inpu}>Yuborish</button>
//         </div>
        
//     );
// }

// export default App;
import React from 'react'
import sec from './assets/section.png'
function Section() {
  return (
   <header className='container'>
        <img src={sec} alt="" />
        <div className="texts">
            <h4>About VR Glasses</h4>
            <h1 className='ht'>The New VR Glasses <br />
            Series</h1>
            <p>
            It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. The <br /> point of using Lorem Ipsum is that it has a more-or-less normal <br /> distribution of letters as opposed.
            </p>
            <button>Get Started Now</button>
            
        </div>
        </header>
  )
}

export default Section
