import React from 'react';
const withCounter = (WrappedComponent, inc = 1) => {

    class WithCounter extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }


        handleInc = () => {
            this.setState(
                prevState => {
                    return { count: prevState.count + inc }
                }
            )
        }



        render() {
            return (
                <WrappedComponent
                    handleClick={this.handleInc}
                    count={this.state.count}
                    {...this.props} //to send all the props
                />)
        }
    }

    return WithCounter

}

export default withCounter;