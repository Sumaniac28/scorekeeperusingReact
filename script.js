var score=0;
var wicket =0;
var ScoreTracker=[];

function scoreUpdate(num){
    if(wicket<10){
        score+=num;
        ScoreTracker.push(num);
    }
    // we are re rendering the App componentto make changes in UI
    rootElement.render(<App/>);
}

function wicketUpdate(){
    if(wicket<10){
        wicket++;
        ScoreTracker.push('W');
    }
    rootElement.render(<App/>);
}

const AppBtn=()=>{
    return (
        <div>
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

const Result=()=>{
    return (
        <div>
            {ScoreTracker.map((res,index)=>{
                // to display the score in new line after every 6 balls
                

                return (
                <>
                {(index%6==0 && index!=0)?<br/>:null}
                <span key={index}>{res}</span>&nbsp;&nbsp;&nbsp;
                </>
                )
            })}
        </div>
    )
}

const App=()=>{
    return (
        <>
            <h1>Score Display</h1>
            <h2>Score : {score}/{wicket}</h2>
            <AppBtn/>
            <Result/>
        </>
    )
}

const rootElement=ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App/>);