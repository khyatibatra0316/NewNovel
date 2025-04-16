// import React,{useState} from 'react';
// import { useLocation, useParams } from 'react-router-dom';


// const StoryPage = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const story = location.state;
//   const[vote,setVote]=useState(0);
//   function increment(){
//     if(vote>4){
//         return
//     }
//     setVote(vote+1)
//   }
//   function decrement(){
//     if (vote<1){
//         return
//     }
//     setVote(vote-1)
//   }
//   return (
//     <div style={{ padding: '2rem', background:'white'}}>
//       <h2>{story?.title || "fdefr"}</h2>
//       <img src={story?.cover} alt={story?.title} style={{ width: '200px', borderRadius: '10px' }} />
//       <p style={{ marginTop: '1rem' }}>{story?.content || "I could hear his voice yelling my name, telling me to wake up.But I"}</p>
    
//       <h5 style={{paddingTop:'3vh'}}>Vote:{vote}</h5>
//       <button onClick={increment} style={{marginRight:'3vh'}}>Increase</button>
//       <button onClick={decrement}>Decrease</button>
//     </div>
//   );
// };

// export default StoryPage;
