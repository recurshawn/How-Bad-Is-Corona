import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class ExponentialGrowth extends React.Component {
    state = {
        r0: 2.5,
        generations: 20,
    }

    replaceAt= (str, index, replacement) => {
        return str.substr(0, index) + replacement+ str.substr(index + replacement.length);
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
        if(strInf.length > 4)
        {
            for(let i=3; i< (strInf.length);i++)
                strInf = this.replaceAt(strInf, i, '0');
        }
        return ((strInf.charAt(0)).toUpperCase() + strInf.slice(1));
    }

    getInWords = (num) => {
        var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        if((num=num.toString()).length < 6) return num;
        if ((num = num.toString()).length > 9) return 'Too many';
        let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
        return str;

    }
    render() {
        return (
            <div className="Exponential fixed block">
                <p>Suppose we have a single person infected with the Corona Virus (COVID-19).</p>

                <div className="wrapper">
                    <div className="left-grid">
        
                        <p>Assuming every infected person infects <span className="variable">{this.state.r0.toPrecision(2)}</span> other new people (on average).</p>
                        <br/>
                        <InputRange
                            name = "R0 (how many new people each case infects)"
                            formatLabel={value => `${value.toPrecision(2)}`}
                            step={0.1}
                            maxValue={6}
                            minValue={0}
                            value={this.state.r0}
                            onChange={value => this.setState({ r0: value })}
                        />
                        <p>Use the slider to vary this value.</p>
                    </div>
        
                    <div className="right-grid">
                        <p>Choose how far into the future you want to estimate for (you can ignore this).</p>
                        <br/>
                    <InputRange
                        name = "Generations (how many hops the virus needs to make)"
                        formatLabel={value => `${value}`}
                        maxValue={50}
                        minValue={0}
                        value={this.state.generations}
                        onChange={value => this.setState({ generations: value })}
                    />
                    <p>Use the slider to vary this value.</p>
                    </div>

                </div>


        
                <br />
                <h2 className="scaryNum big">{this.getInWords(this.getInfected())}</h2>
                <h3> people will be infected <span className="scaryNum">from</span> that <span className="scaryNum">one first case</span> 😱</h3>
                <h2>The good news is that we can control this number. How?</h2>
                <p>By reducing the number of interactions people make. <br /> INSERT TIPS ETC.</p>
            </div>
        )
    }
}

export default ExponentialGrowth; 