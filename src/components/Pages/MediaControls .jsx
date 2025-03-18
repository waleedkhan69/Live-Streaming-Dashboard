import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

const MediaControls = () => {
 const [isCameraOn, setIsCameraOn] = useState(true);
 const [isMicOn, setIsMicOn] = useState(true);
 const [isScreenSharing, setIsScreenSharing] = useState(false);
 const [mediaOverlay, setMediaOverlay] = useState(null);

 const videoRef = useRef(null);


 const toggleCamera = () => {
  setIsCameraOn((prev) => !prev);
  toast.success(isCameraOn ? '📷 Camera Turned OFF' : '📷 Camera Turned ON');
 };


 const toggleMic = () => {
  setIsMicOn((prev) => !prev);
  toast.success(isMicOn ? '🎙️ Mic Turned OFF' : '🎙️  Mic Turned ON');
 };


 const toggleScreenShare = async () => {
  if (!isScreenSharing) {
   try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
    videoRef.current.srcObject = stream;
    setIsScreenSharing(true);
   } catch (error) {
    toast.error('❌ Screen sharing failed!');
   }
  } else {
   const tracks = videoRef.current.srcObject.getTracks();
   tracks.forEach((track) => track.stop());
   videoRef.current.srcObject = null;
   setIsScreenSharing(false);
  }
 };


 const selectMediaOverlay = (overlay) => {
  setMediaOverlay(overlay);
 };

 return (
  <div className="p-5  h-[90vh] overflow-auto  rounded-lg shadow-lg space-y-5">


   <div className="flex gap-4">
    <button
     onClick={toggleCamera}
     className={`p-2 w-1/2 rounded ${isCameraOn ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
    >
     {isCameraOn ? 'Camera ON' : 'Camera OFF'}
    </button>

    <button
     onClick={toggleMic}
     className={`p-2 w-1/2 rounded ${isMicOn ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
    >
     {isMicOn ? 'Mic ON' : 'Mic OFF'}
    </button>
   </div>


   <div>
    <button
     onClick={toggleScreenShare}
     className={`p-2 w-full rounded ${isScreenSharing ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
    >
     {isScreenSharing ? 'Stop Sharing' : 'Share Screen'}
    </button>

    <video ref={videoRef} autoPlay className="mt-3 w-full rounded-md shadow-md" />
   </div>


   <div>
    <h2 className="text-lg font-bold mb-2">🎨 Media Overlays</h2>
    <div className="flex gap-3">
     {['Image', 'Video', 'GIF'].map((media) => (
      <button
       key={media}
       onClick={() => selectMediaOverlay(media)}
       className={`p-2 rounded w-1/3 ${mediaOverlay === media ? 'bg-pink-500 text-white' : 'bg-gray-300'}`}
      >
       {media}
      </button>
     ))}
    </div>

    {mediaOverlay && (
     <div className="mt-3 bg-white p-3 rounded shadow-md">
      {mediaOverlay === 'Image' && <img src="https://via.placeholder.com/300" alt="Sample" className="rounded" />}
      {mediaOverlay === 'Video' && (
       <video controls className="w-full rounded">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
       </video>
      )}
      {mediaOverlay === 'GIF' && <img src="https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif" alt="GIF" className="rounded" />}
     </div>
    )}
   </div>
  </div>
 );
};

export default MediaControls;
