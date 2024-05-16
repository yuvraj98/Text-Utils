import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const navigate = useNavigate();
    const [text, setText] = useState('Enter Text here');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleTransform = (transformFunction) => {
        setText(transformFunction(text));
    };

    const handleClearText = () => {
        setText('');
    };

    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
    };

    const handleExtractText = () => {
        const newText = text.split(/\s+/).join(' ');
        setText(newText);
    };

    const handleTranslate = () => {
        navigate("/translate")
    }
    return (
        <div className='bg-richblack-900'>
                <div className="container= px-4 py-8 flex flex-col  w-10/12  mx-auto" >
                    <h1 className="text-2xl font-bold">{props.heading}</h1>
                    <textarea
                        className="w-full h-[300px] px-4 py-2 mt-4 border border-gray-300 rounded-md resize-none"
                        value={text}
                        onChange={handleChange}
                        placeholder="Enter Text here"
                    ></textarea>
                <div className="flex flex-col gap-3 mt-4 w-9/12 mx-auto ">
                    <button className="btn" onClick={() => handleTransform((text) => text.toUpperCase())}>Convert to UPPERCASE</button>
                    <button className="btn mx-2" onClick={() => handleTransform((text) => text.toLowerCase())}>Convert to lowercase</button>
                    <button className="btn mx-2" onClick={handleClearText}>Clear Text</button>
                    <button className="btn mx-2" onClick={handleCopyText}>Copy Text</button>
                    <button className="btn mx-2" onClick={handleExtractText}>Remove Extra Space</button>
                    
                </div>


                
                </div>

                <div className='flex flex-col gap-3 mt-4 w-9/12 mx-auto'>
                    <button className="btn mx-2" onClick={handleTranslate}>Translate</button>
                </div>
        </div>

        // Second Section
    );
}

export default Home;
