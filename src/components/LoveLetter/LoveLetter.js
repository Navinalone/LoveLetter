import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const [isRead, setIsRead] = useState(false); // Read confirmation
  const [message, setMessage] = useState(`My Dearest Kundanapu Bomma,\n\n\
    It is with a heart overflowing with affection that I write to you today.\n\
    Never before have I felt such joy as when I am with you, my love.\n\
    My dearest, you are the most wonderful person I have ever known, and I am endlessly thankful for your love.\n\n\
    With love,\n\
    Navin😉`);

  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
      setIsRead(true); // Show read confirmation
    }, 800);
  };

  const handleShare = () => {
    // Implement sharing functionality
    alert("Share functionality will be implemented soon!");
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      {isOpen && (
        <div className="letter-container">
          <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
            <i>
              {message.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </i>
          </div>
        </div>
      )}
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
      {isOpen && !isFullSize && !isRead && (
        <button className="share-button" onClick={handleShare}>Share</button>
      )}
      {isRead && (
        <div className="read-confirmation">Open Here</div>
      )}
    </div>
  );
};

export default LoveLetter;


// import React, { useState, useRef } from 'react';
// import './LoveLetter.css';
// import audioFile from './kushi.mp3';

// const LoveLetter = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isFullSize, setIsFullSize] = useState(false);
//   const audioRef = useRef(null);

//   const handleOpenLetter = () => {
//     setIsOpen(true);
//     setTimeout(() => {
//       setIsFullSize(true);
//       // Ensuring audio play is directly a result of this user interaction
//       if (audioRef.current) {
//         audioRef.current.play()
//           .then(() => console.log("Playback succeeded"))
//           .catch(e => console.error("Playback failed:", e));
//       }
//     }, 800);
//   };

//   const handleCloseLetter = () => {
//     setIsFullSize(false);
//     setTimeout(() => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//       }
//       setIsOpen(false);
//     }, 800);
//   };

//   return (
//     <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
//       <div className="flap"></div>
//       <div className="body"></div>
//       <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
//         my dear kundanapu bomma🖤,<br />
//         never have i been so blessed as to fall in love with someone as wonderful as you...<br />i loveeee youuuu :)<br />
//         yours,<br />
//         @navin
//       </div>
//       <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
//     </div>
//   );
// };

// export default LoveLetter;
