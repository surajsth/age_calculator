import './App.css';

function App() {
  const handleAge =()=>{
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1+date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(d1>d2){
      d2 = d2 +month[m2-1];
      m2=m2-1;
    }

    if(m1>m2){
      m2=m2-12;
      y2=y2-1;
    }

    var d = d2-d1;
    var m = m2-m1;
    var y = y2-y1;

    document.getElementById('age').innerHTML = 'Your age is '+y+' Years '+m+' Months '+d+' Days';
  }
  return (
    <>
      <div className="container">
         <h2>Age Calculator</h2>
          <div className="block">
            <p className="title">Date</p>
            <input type="text" className="date" id="date" placeholder='dd' minLength={1} maxLength={2} required/>
          </div>
          <div className="block">
            <p className="title">Month</p>
            <input type="text" className="month" id="month" placeholder='mm' minLength={1} maxLength={2} required/>
          </div>
          <div className="block">
            <p className="title">Year</p>
            <input type="text" className="year" id="year" placeholder='yy' minLength={1} maxLength={4} required/>
          </div>
          <div className="base">
            <input type="submit" value="Submit" onClick={handleAge}/>
          </div>
          <div className="age" id="age">

          </div>
      </div>
    </>
  );
}

export default App;
