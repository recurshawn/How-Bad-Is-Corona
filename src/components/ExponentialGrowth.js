import React from 'react';
import InputRange from 'react-input-range';
import '../rangeinput.css';

class ExponentialGrowth extends React.Component {
    state = {
        r0: 2.5,
        generations: 20,
        r0Text: 'between 2 to 3 other new persons',
    }

    // insertAt= (str, index, replacement) => {
    //     return str.substr(0, index-1) + replacement+ str.substr(index+1 + replacement.length);
    // }

    insertAt = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    getR0 = (num) => {

        this.setState({ r0: num.toPrecision(2), r0Text: this.getR0Text(num)});
    }

    getR0Text = (r0) =>
    {
        if(Number.isInteger(r0))
        {
            if(r0===1)
                return '1 other new person';
            else
                return (r0 +' other new persons');
        }
            
            
        else
            return ('between '+Math.floor(r0)+" to "+Math.ceil(r0)+" other new persons");
    }
    getInfected = () => {
        let infected = 1;
        for (let i = 1; i < this.state.generations; i++) {
            infected = Math.round(Math.pow(this.state.r0, i)) + infected;
            //console.log(infected);
        }
        let strInf = infected.toString();
        if(strInf.toString().length> 10)
        {
            strInf="Too many";
        }
        else
        {
            strInf = this.insertAt(strInf);
        }
        return (strInf);
    }


    
    render() {
        return (
            <div className="Exponential fixed block">
                <p>Suppose we have a single person infected with the Corona Virus (COVID-19).</p>

                
                    
                        <h3>R0 value</h3>
                        <br/>
                        <div className="range">
                        <InputRange
                            name = "R0 (how many new people each case infects)"
                            formatLabel={value => `${value}`}
                            step={0.1}
                            maxValue={4}
                            minValue={0}
                            value={this.state.r0}
                            onChange={value => this.getR0(value)}
                        />
                        </div>
                        <br/>
                        <p>Assuming each infected person infects <span className="variable">{this.state.r0Text}</span> (let's call this number R0).</p>
                        <p>Use the slider to vary this value.</p>
                    
        
                    

                
                <p className="scaryNum big">{this.getInfected()}</p>
                <h3> people will be infected <span className="scaryNum">from</span> that <span className="scaryNum">one first case</span> 😱</h3>
                <p>Total cases (ignoring deaths and recovery). Assuming 20 generations</p>
                <h2>The good news is that we can control this number. How?</h2>
                <p className="scaryNum"><span className="ans">Short answer: EVERYONE should compulsorily stay home. Even if they're fine</span> <br/> (also remember that the symptoms may take a while to show).</p>
                <p>If we can control the number of average new infections (R0), we can greatly reduce the number of new cases. If the average number of people infected by a infected person is between 2 and 3, we get 60 Million (6 crore) total cases in just 20 generations.</p><p>However, if we reduce the number of people a person infects to, say, 1.3, we get just 630 in 20 generations! Such a huge difference! Don't believe me? Enter 1.3 in the slider and see for yourself!</p>
                <p>To stop the spread of the virus, we need to reduce R0 as much as possible (China has managed to reduce their R0 greatly so we know it is possible). We have limited hospital beds and ICU facilities, we can't afford to overwhelm our healthcare pipeline at a time like this. <a href="https://twitter.com/JasonYanowitz/status/1238977743653687296">See what happens when the number of cases go beyond what hospitals can handle</a> </p>
                <p>🏠<span className="scaryNum">Our best shot at stopping COVID-19 is if each and every person (that includes you and your loved ones) stays home.</span>
                <br/>👐Washing your hands regularly and not touching your face will help a lot too. 
                <br/>🛀Have a bath each time you return home from the outside and keep your dirty clothes seperated.</p>
            </div>
        )
    }
}

export default ExponentialGrowth; 