//import { departements_fr } from "departements-fr";

let autoLoop = false
let localStorageKey = ''
let btn = null
let txtarea = null
let contacts = {
    quoiqui: "medecin generaliste",
    ou: "Aube (10)",
    univers: "pagesjaunes",
    idOu: "D010",
    list: []
}

function getAutoLoopFromLocalStorage() {
    let x = JSON.parse(localStorage.getItem('auto_extraction_of_pages_jaunes'))
    if (x == null) {
        localStorage.setItem('auto_extraction_of_pages_jaunes', false)
        autoLoop = false
        debugger
    } else {
        autoLoop = x
        debugger
    }
}


function setLocalStorageKey(text) {
    return '_crawler_query_' + text.replace(/\s/g, '_')
}

function getFullListFromLocalStorage() {
    let queries = getActualQueryURL()
    if (queries.hasOwnProperty('quoiqui') == false) return
    let dataLocal = JSON.parse(localStorage.getItem(setLocalStorageKey(queries.quoiqui)))
    debugger
    if (dataLocal) {
        contacts = dataLocal
        if (autoLoop) {
            extractAllData()
        }
    } else {
        contacts = {
            ...queries,
            list: []
        }
    }
}

function setFullListInLocalStorage() {
    localStorage.setItem(setLocalStorageKey(contacts.quoiqui), JSON.stringify(contacts))
}

function getActualQueryURL() {
    var obj = {}
    decodeURI(window.location.search).substring(1).split(/\?|&/g).forEach(x => {
        let sp = x.split('=')
        let key = sp[0]
        obj[key] = sp[1].replace(/\+/g, ' ')
    })
    return obj
}

function insertTextArea() {
    let elm = document.querySelector("#pave1")

    if (elm == null) return
    if (txtarea != null) return

    txtarea = document.createElement('textarea')
    txtarea.id = 'clipboard-txtarea'
    // txtarea.style.position = 'absolute'
    // txtarea.style.top = 0
    // txtarea.style.left = 0

    elm.append(txtarea)
}

function insertButton(config) {
    let elm = document.querySelector("#pave1")

    if (elm == null) return
    if (btn != null) return

    btn = document.createElement('button')
    btn.innerText = config.innerText
    btn.id = config.id
    btn.style.cssText = `
        margin-top: 1.3rem;
        background-color:${config.backgroundColor};
        border-radius:13px;
        border:3px solid ${config.borderColor};
        display:inline-block;
        cursor:pointer;
        color:${config.color};
        font-family:Trebuchet MS;
        font-size:20px;
        padding:16px 31px;
        text-decoration:none;
        text-shadow:0px 1px 0px #333333;
    `
    btn.onclick = config.fx

    elm.append(btn)
}

function extractAllData() {
    contacts.list = contacts.list.concat(getLis())
    // remove duplications
    contacts.list = contacts.list
        .reduce((accum, curr) => {
            if (accum.indexOf(curr) === -1) {
                accum.push(curr)
            }
            return accum
        }, [])
    setFullListInLocalStorage()
    goToNext()
}

function autoExecutionUntilLastPage() {
    autoLoop = JSON.parse(localStorage.getItem('auto_extraction_of_pages_jaunes'))
    if (autoLoop == false) {
        let extractAll = prompt('Extraire toutes les pages restantes ? O ou N')
        if (extractAll == 'O') {
            localStorage.setItem('auto_extraction_of_pages_jaunes', true)
        } else {
            localStorage.setItem('auto_extraction_of_pages_jaunes', false)
        }
        autoLoop = JSON.parse(localStorage.getItem('auto_extraction_of_pages_jaunes'))
    }
}

function getLis() {
    let results = []
    let lis = document.querySelectorAll('.bi-bloc.blocs')
    debugger
    lis.forEach(li => {
        let img = li.querySelector('IMG') ? li.querySelector('IMG').src : ''
        let title = li.querySelector('H3').innerText
        //
        let adress = li.querySelector('.adresse-container a').innerText.split('\n')[0].match(/(^.+[,])|(?:.+\d{5}\s)|([^\d]+.+$)/gmi)
        let street = adress[0].replace(/,$/g, '').trim()
        let postalCode = adress[1].replace(/\s/g, '').trim()
        let city = adress[2].trim()
        //
        let email = ''
        let websites = Array.from(li.querySelectorAll('.bi-sites-internet li a[data-pjlb]')).map(x => window.atob(JSON.parse(x.dataset.pjlb).url))
        let phones = Array.from(li.querySelectorAll('.bi-contact-numbers .num')).map(x => {
            let val = x.innerText.trim()
            let key = val.match(/^06|^07/) ? 'mobile' : 'fixe'
            return {
                [key]: val
            }
        })

        let obj = {
            img,
            title,
            street,
            postalCode,
            city,
            email,
            websites,
            phones,
            notes: '',
            firstCallDate: '',
            feelingScore: 0, // from 1 to 5
        }
        results.push(obj)
    })

    return results

}

function goToNext() {

    autoExecutionUntilLastPage()
    let elm = document.querySelector("#pagination-next")
    let next = elm ? window.atob(JSON.parse(elm.dataset.pjlb).url) : false
    debugger
    if (next) {
        setTimeout(() => {
            window.location.href = next
        }, 1333 + Math.round(1333 * Math.random()));
    } else {
        localStorage.setItem('auto_extraction_of_pages_jaunes', false)
        console.log('Liste complète des contacts PJ : \n', contacts)
        alert('Tous les contacts de ce lieu ont été enregistrés')
    }
}

function copyClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("clipboard-txtarea");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}


/////////////////////////////////////////////////////////////////////////
// executions
/////////////////////////////////////////////////////////////////////////

insertTextArea()
getAutoLoopFromLocalStorage()
getFullListFromLocalStorage()
insertButton({
    id: 'extract-contacts',
    innerText: 'Extract all contacts',
    color: '#ffffff',
    backgroundColor: '#44c767',
    borderColor: '#18ab29',
    fx: extractAllData
})
insertButton({
    id: 'copy-report-clipboard',
    innerText: 'Copy contact report to clipboard',
    color: '#ffffff',
    backgroundColor: '#7A81DE',
    borderColor: '#101566',
    fx: copyClipboard
})





/////////////////////////////////////////////////////////////////////////
// executions
/////////////////////////////////////////////////////////////////////////