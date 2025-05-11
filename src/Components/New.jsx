// import React, { useState, useEffect } from 'react';
// import CountUp from 'react-countup';

// const New = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div style={{ height: '2000px' }}>
//       <h1>
//         <CountUp start={0} end={100} duration={5} redraw={true} />
//       </h1>
     
//     </div>
//   );
// };

// export default New;