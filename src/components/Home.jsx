import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import booksImg from './assets/Books.jpeg';
import booksImage from './assets/BookCover.jpeg';


function Home() {
    const navigate = useNavigate();
    return (
        <div className='yess'>
            <h1 className="animated-heading">Want To Read some interesting Stories.</h1>
            <div className="sparkle-wrapper">
    {Array.from({ length: 40 }).map((_, i) => (
      <span key={i} className="sparkle"></span>
    ))}
  </div>
            <div className="left-section">
  

                <h2 className="smu-heading">Hi, SMUReaders</h2>
                    < div style={{display:'flex',flexDirection:'row'}} className='button-row'><button onClick={() => navigate('/c4')} className="pretty-button spaced-button">
                    Start Reading
                </button>

                <button onClick={() => navigate('/c1')} className="chapter-button">Start Writing</button>
                <button onClick={() => navigate('/c2')} className="chapter-button">Chapter 2</button>
                <button onClick={() => navigate('/c3')} className="chapter-button">Chapter 3</button></div>
                
            </div>
            <div className='image-text-container'>
            <img src={booksImg} alt="Books" className='image' />
            <p className="image-caption">Your original story could be the next big hit with
            SMUReaders Studios discovers untapped, unsigned, and talented writers on SMUReaders and connects them to global multi-media entertainment companies.</p>
            </div>
            <div>
                    <img src={booksImage} alt="cover" style={{height:'10vh',marginLeft:'100vh',padding:'0.5vh'}} />
                </div>
           

            <div className="why-write-section">
                <h3>Why Write With SMU?</h3>
                <ul>
                    <li>✨ Share your imagination with the world</li>
                    <li>📝 Easy-to-use writing tools</li>
                    <li>🚀 Get discovered by readers & publishers</li>
                </ul>
               
</div>

        </div>
    );
}

export default Home;
