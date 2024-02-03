class Spinner{

    handleClear(){
        ROOT_SPINNER.innerHTML = ''
    }

    render(){
        const html = `
        <div class='spinner-container'>
        <img class='spinner__img' src='images/Spinner-2.9s-264px.svg'/>
        </div>
        `
        ROOT_SPINNER.innerHTML = html
    }

}

const spinnerPage = new Spinner()
spinnerPage.render()