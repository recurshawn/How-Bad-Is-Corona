import React from 'react';

class ExponentialGrowth extends React.Component
{
    state = {
        r0: 2.5,
        generations: 20,
    }

    getR0 = (e) =>
    {
        if(e.target.value ==='')
            this.setState({r0: 2.5})
        else
            this.setState({r0: e.target.value});
    }

    getGenerations = (e) =>
    {
        this.setState({generations: e.target.value});
    }
    getInfected = () =>
    {
        let infected = 1;
        for(let i=1; i< this.state.generations;i++)
        {
            infected = Math.round(Math.pow(this.state.r0, i)) + infected;
            console.log(infected);
        }
        return infected;
    }
    render()
    {
        return(
            <div className="Exponential fixed block">
                <p>Suppose we have a single person infected with the Corona Virus (COVID-19).</p>
                <label>Assuming every infected person infects </label>
                <input type="number" placeholder="2.5" onChange = {this.getR0}/> <label> other people.</label>
                <br />
                <label>After the virus hops a chain of </label>
                <select onChange={this.getGenerations}>
                    <option value="20">20</option>
                    <option value="10">10</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="90">90</option>
                </select><label> people...</label>
                
                <br/>
                <h2>{this.getInfected()}</h2>
                <h3> people will be infected from that one first case 😱</h3>
                <h2>The good news is that we can control this number. How?</h2>
                <p>By reducing the number of interactions people make. <br/> INSERT TIPS ETC.</p>
            </div>
        )
    }
}

export default ExponentialGrowth; 