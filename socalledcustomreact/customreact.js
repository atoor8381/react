let rootelement=document.getElementById('meow')

let customelement={
    type : 'a',
    props : {
        href : 'www.google.com',
        target : '_target'
    },
    text : 'click meow'
}

function customrender(customelement, rootelement) {
    let finalelement =document.createElement('a')
    finalelement.innerHTML = customelement.text
    finalelement.setAttribute('href',customelement.props.href)
    finalelement.setAttribute('target',customelement.props.target)
    rootelement.appendChild(finalelement)
}

customrender(customelement, rootelement)