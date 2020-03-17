import React from 'react';
import InputRange from 'react-input-range';
import '../rangeinput.css';

class ExponentialGrowth extends React.Component {
    state = {
        r0: 2.5,
        generations: 20,
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

    getR0 = (e) => {
        if (e.target.value === '')
            this.setState({ r0: 2.5 })
        else
            this.setState({ r0: e.target.value });
    }

    getGenerations = (e) => {
        this.setState({ generations: e.target.value });
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


    // getInWords = (num) => {
    //     var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    //     var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    //     if((num=num.toString()).length < 6) return num;
    //     if ((num = num.toString()).length > 9) return 'Too many';
    //     let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    //     if (!n) return; var str = '';
    //     str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    //     str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    //     str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    //     str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    //     str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    //     return str;

    // }
    render() {
        return (
            <div className="Exponential fixed block">
                <p>Suppose we have a single person infected with the Corona Virus (COVID-19).</p>

                
                    
                        <h3>R0 value</h3>
                        <br/>
                        <div className="range">
                        <InputRange
                            name = "R0 (how many new people each case infects)"
                            formatLabel={value => `${value.toPrecision(2)}`}
                            step={0.1}
                            maxValue={6}
                            minValue={0}
                            value={this.state.r0}
                            onChange={value => this.setState({ r0: value })}
                        />
                        </div>
                        <br/>
                        <p>Assuming each infected person infects <span className="variable">{this.state.r0.toPrecision(2)}</span> other new people on average (called R0).</p>
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