import "../Meme.css"
import React, {useState, useEffect} from "react"
import Draggable from "react-draggable";
export default function Meme(){
    const [meme, setMeme] = useState({
                                        topText: "",
                                        bottomText: "",
                                        randomImage:"https://i.imgflip.com/30b1gx.jpg"
                                    });
    const [allMemeImages, setAllMemeImages] = useState([]);
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, []);
    function randomMeme(){
        const randomIndex = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomIndex].url;
        setMeme(prevMeme =>{
            return {
                ...prevMeme,
                randomImage: url
            }
        });
    }
    //meme text handler
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        });

    }
    
    return(
        <main>
            <div className="meme-container">
                <div className='meme-form' >
                    <div className="input-container">
                        <div className="input-field">
                            <label htmlFor="topText" className="meme--label">Top Text</label>
                            <input 
                                type="text"
                                id="top-text"
                                name="topText"
                                className="meme--input"
                                value={meme.topText}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="bottomText" className="meme--label">Bottom Text</label>
                            <input 
                                type="text" 
                                id="bottom-text" 
                                name="bottomText" 
                                className="meme--input"
                                value={meme.bottomText}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button className="meme--submit" onClick={randomMeme}>Get a new meme image 🖼</button>
                </div>
                <div className="meme--image-container">
                    <img src={meme.randomImage} className="meme--image"/>

                    <Draggable bounds="parent">
                        <h2 className="meme--text top">{meme.topText}</h2>
                    </Draggable>

                    <Draggable bounds="parent">
                        <h2 className="meme--text bottom">{meme.bottomText}</h2>
                    </Draggable>
                </div>
            </div>
        </main>

    )
}