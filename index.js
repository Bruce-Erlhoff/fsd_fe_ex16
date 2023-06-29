
// create the root where the components will be rendered (reactdiv)
let root = ReactDOM.createRoot(document.getElementById('myreactdiv'));

// Functional component
let MyFunComponent = () => {
    return (
       <fragment>
            <h1>Exercise 16</h1>
            <br></br>
            <h2 className="text-primary">Hello, this is a React functional component</h2>
            <p> <i>Four score and seven years ago...</i></p>
       </fragment>
    )
}

// Class component with props
class MyClassComponent extends React.Component {

    render (props) {
        return (<fragment>
                    
                    <h2 className="text-danger"> Hey {this.props.name}, this is a React Class component</h2>
                    <p> <i>Our forefathers brought forth upon this continent a new nation</i></p>
                </fragment>);
    }

}
// since you can only render once, render both components in an array
root.render ([<MyFunComponent/>,<MyClassComponent name = "Dude"/>]);


