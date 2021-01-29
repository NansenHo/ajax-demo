getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
        }
    }
    request.send()
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/demo.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }
        }
    }
    request.send()
}

getXML.onclick = ()=>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET','/demo.xml')
    xhr.onreadystatechange =()=>{
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                // xhr 有 responseXML 属性
                const xmlDom = xhr.responseXML
                const text = xmlDom.querySelector('warning')
                console.log(text);
            }
        }
    }
    xhr.send()
}

getJSON.onclick = ()=>{
    const xhr = new XMLHttpRequest()
    xhr.open('GET','/demo.json')
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300){
                console.log(xhr.response);
                const object = JSON.parse(xhr.response)
                myName.textContent = object.name
            }
        }
    }
    xhr.send()
}



