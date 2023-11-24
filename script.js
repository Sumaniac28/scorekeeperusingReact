// defining the variables

let score=0;
let wicket =0;
let hit;
let ScoreTracker=[];
let reactRef=React.createRef();

// function works on clicking scores buttons
function scoreUpdate(num){
    if(wicket<10){
        hit=num;
    }
    // we are re rendering the App componentto make changes in UI
    rootElement.render(<App/>);
}

// function works on clicking wicket button
function wicketUpdate(){
    if(wicket<10){
        hit='W';
    }
    rootElement.render(<App/>);
}

// Component for buttons
const AppBtn=()=>{
    return (
        <div id="AppBtn">
                <button className="btn" onClick={()=>scoreUpdate(0)}>0</button>
                <button className="btn" onClick={()=>scoreUpdate(1)}>1</button>
                <button className="btn" onClick={()=>scoreUpdate(2)}>2</button>
                <button className="btn" onClick={()=>scoreUpdate(3)}>3</button>
                <button className="btn" onClick={()=>scoreUpdate(4)}>4</button>
                <button className="btn" onClick={()=>scoreUpdate(5)}>5</button>
                <button className="btn" onClick={()=>scoreUpdate(6)}>6</button>
                <button className="btn" onClick={wicketUpdate}>Wicket</button>
            </div>
    )
}

// component to show scorecard with commentary on screen
const Result=()=>{
    return (
        <div>
            {ScoreTracker.map((res,index)=>{
               return <p key={index}>{res}</p>
    })}
        </div>
    )
}


// function works on submitting the form
const handleSubmit=(event)=>{
    event.preventDefault();
    if(wicket>=10){
        return;
    }
    ScoreTracker.unshift(<span>{`${hit}, ${reactRef.current.value}`}</span>);
    if(hit=='W'){
        wicket++;
    }else{
        score+=hit;
    }
    hit=0;
    reactRef.current.value="";
    rootElement.render(<App/>);
}

// Component for form
const ScoreForm=()=>{
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="Scoreinput" value={hit}></input>
                <input type="text" id="Commentary" placeholder="Add a comment" ref={reactRef}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

// Our major App component
const App=()=>{
    return (
        <>
            <h1>Score Display</h1>
            <h2>Score : {score}/{wicket}</h2>
            <AppBtn/>
            <ScoreForm/>
            <br/>
            <hr/>
            <Result/>
        </>
    )
}

// creating root and rendering App component
const rootElement=ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App/>);