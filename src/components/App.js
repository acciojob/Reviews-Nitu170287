import React,{useState} from "react"
import Reviews from "./Reviews"


const App = ()=>{
const[index, setIndex] = useState(0)

function handleRandomNum(){

 let randomNum = Math.floor(Math.random()*Reviews.length) 
 console.log(randomNum)  
 if(randomNum === index){
    handleRandomNum()
 }else{
    setIndex(randomNum)
 }
}

    return(
        <div>
            <h1 id="review-heading">Our Reviews</h1>
            <div className="review">
                <p id={"author -"+Reviews[index].id} className="author">{Reviews[index].name}</p>
                <p className="job">{Reviews[index].job}</p>
                <img className="person-img" src={Reviews[index].image} width="200" height="200" />
                <p className="info">{Reviews[index].text}</p>
            <button className="prev-btn" onClick={()=>{if(index>0){setIndex(index-1)}}}>Previous</button>
            <button className="next-btn" onClick={()=>{if(index<Reviews.length-1){setIndex(index+1)}}}>Next</button>
            <button className="random-btn" onClick={handleRandomNum}>surprise me</button>
            </div>

        </div>
    )
}
export default App



