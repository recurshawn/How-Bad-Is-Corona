import React from 'react';


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
        return (strInf.charAt(0).toUpperCase() + strInf.slice(1));
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
                <label>Assuming every infected person infects </label>
                <input type="number" placeholder="2.5" onChange={this.getR0} /> <label> other people.</label>
                <br />
                <label>After the virus hops a chain of </label>
                <select onChange={this.getGenerations}>
                    <option value="20">20</option>
                    <option value="10">10</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="90">90</option>
                </select><label> people...</label>

                <br />
                <h2>{this.getInWords(this.getInfected())}</h2>
                <h3> people will be infected from that one first case 😱</h3>
                <h2>The good news is that we can control this number. How?</h2>
                <p>By reducing the number of interactions people make. <br /> INSERT TIPS ETC.</p>
            </div>
        )
    }
}

export default ExponentialGrowth; 