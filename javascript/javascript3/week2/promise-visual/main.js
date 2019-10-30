// translateOneByOne

function translateOneByOne(){
    moveElement(document.querySelector('ul.marks li:nth-child(1)'), {x: 20, y: 300})
    .then(() => { 
        console.log('redbox has been moved')
    })
    .then(() => moveElement(document.querySelector('ul.marks li:nth-child(2)'), {x: 400, y: 300}))
    .then(() => { console.log('bluebox has been moved')
    })
    .then(() => moveElement(document.querySelector('ul.marks li:nth-child(3)'), {x: 400, y: 20}))
    .then(() => console.log('greenbox has been moved'))    
}        
translateOneByOne()    

// translateAllAtOnce


function translateAllAtOnce(){
    Promise.all([moveElement(document.querySelector('ul.marks li:nth-child(1)'), {x: 20, y: 300}),
    moveElement(document.querySelector('ul.marks li:nth-child(2)'), {x: 400, y: 300}),
    moveElement(document.querySelector('ul.marks li:nth-child(3)'), {x: 400, y: 20})])
    .then(() => console.log('All boxes have been moved'))
}        
translateAllAtOnce()


