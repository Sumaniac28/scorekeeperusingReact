var score=0;
var wicket =0;

function scoreUpdate(num){
    score+=num;

    // we are re rendering the App componentto make changes in UI
    rootElement.render(<App/>);
}

const App=()=>{
    return (
        <>
            <h1>Score Display</h1>
            <h2>Score : {score}/{wicket}</h2>
            <div>
                <button class="btn" onClick={()=>scoreUpdate(1)}>1</button>
                <button class="btn" onClick={()=>scoreUpdate(2)}>2</button>
                <button class="btn" onClick={()=>scoreUpdate(3)}>3</button>
                <button class="btn" onClick={()=>scoreUpdate(4)}>4</button>
                <button class="btn" onClick={()=>scoreUpdate(5)}>5</button>
                <button class="btn" onClick={()=>scoreUpdate(6)}>6</button>
                <button class="btn">Wicket</button>
            </div>
        </>
    )
}

const rootElement=ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App/>);