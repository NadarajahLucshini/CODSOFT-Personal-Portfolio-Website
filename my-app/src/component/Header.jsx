import React, { useTransition } from 'react'; // Import only useTransition
import { useNavigate } from 'react-router-dom';
import './style.css';

function Header() {
    const navigate = useNavigate();
    const [isPending, startTransition] = useTransition();

    const handlehome = () => {
        startTransition(() => {
          navigate('/');
        });
    };

    const handleprojects = () => {
        startTransition(() => {
          navigate('/project');
        });
    };

    const handleabout = () => {
        startTransition(() => {
          navigate('/aboutme');
        });
    };

    const handleContact = () => {
        startTransition(() => {
          navigate('/contact');
        });
    };


    return (
        <>
        <div className='sidebar'>
          <div className='home'>
            <button type='button' onClick={handlehome}>Home</button>
          </div>
          <div className='my_projects'>
            <button type='button' onClick={handleprojects}>My Projects</button>
          </div>
          <div className='about_me'>
            <button type='button' onClick={handleabout}>About Me</button>
          </div>
          <div className='contact_me'>
            <button type='button' onClick={handleContact}>Contact Me</button>
          </div>
        </div>
        {isPending && <div>Loading...</div>} {/* Optional: Show loading indicator */}
      </>
    );
  }
  
  export default Header;
  