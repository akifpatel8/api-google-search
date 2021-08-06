    async function search(){
        let val=document.getElementById("inp").value;
        let res=await fetch(`http://api.serpstack.com/search?access_key=83b32b31b825db5d975972b67aa6a186&query=${val}`)
        let data=await res.json()
        console.log(data);
        appendSearch(data.organic_results)
    }
let main_div=document.querySelector('.search-content') 

    async function appendSearch(details){
        main_div.innerHTML=null
        let res=await details
        res.forEach(({title,url})=>{
            let mini_div=document.createElement("div")
            mini_div.setAttribute("class","minidiv")
            mini_div.innerHTML=` <div onclick="take()"><h4>${title}</h4> <p>${url}</p></div>`
            mini_div.addEventListener("click",function(){
                window.location.href=`${url}`
            })
            main_div.append(mini_div)
        })

    }
   