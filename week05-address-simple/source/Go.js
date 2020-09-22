import React from 'react';
import Button from '@material-ui/core/Button';

class Go extends React.Component {

    constructor(props) {
        super(props);
        this.state = {result: 'bar'}
    }

    setFooData = (json) => {
        console.log('parsed json', json);
        this.setState(json);
    };

    elfQuery = (url, setData, event) => {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then((json) => {
                setData(json)
            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };


    render() {
        return (
            <div>
                <h1>React and Jest</h1>
                <p>Hello {this.state.result}</p>
                <Button
                    id="elfQueryAction"
                    variant="contained"
                    color="primary"
                    data-url="/git-gist-you-rang"
                    onClick={event =>
                        this.elfQuery('/foo', this.setFooData, event)}>
                    Query Foo
                </Button>
            </div>
        )
    }
};

export default Go;