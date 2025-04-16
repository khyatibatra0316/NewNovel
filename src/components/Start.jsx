import React from 'react';
import './Start.css'; 
import bookcover from './assets/Cover1.jpg'
import { useNavigate } from 'react-router-dom';
import book from './assets/BoundToYou.jpeg';
import comp from './assets/Computr.jpeg' 

const Start = () => {
  const navigate = useNavigate();

  const stories = [
    {
      id: 1,
      title: "A and D",
      cover: bookcover,
      content: "I could hear his voice yelling my name, telling me to wake up. But I didn’t want to wake up..."
    },
    {
      id: 2,
      title: "Bound To You",
      cover: book,
      content: "You were the calm in my chaos, the peace in my storm. And I couldn't let go of that."
    },
    {
      id:3,
      title:"Computer",
      cover:comp,
      content:"is it coming"
    }
  ];

  const handleClick = (story) => {
    navigate(`/story/${story.id}`, { state: story });
  };

  return (
    <div className="start-container">
      <h5>Let's Read Because You Like FanFiction</h5>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {stories.map((story) => (
          <img
            key={story.id}
            src={story.cover}
            alt={story.title}
            style={{ height: '30vh', marginRight: '2vh', cursor: 'pointer' }}
            onClick={() => handleClick(story)}
          />
        ))}
      </div>
      <div style={{display:'flex', flexDirection:'row',margin:'1vh'}}>
      <p>YoungAdult</p>
      
      <p> Khyati Batra</p>
      </div>
     
      
    </div>
  );
};

export default Start;
