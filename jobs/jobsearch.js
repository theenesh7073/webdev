const categories=Array.from(jcat);
const sbar=document.getElementById("searchbar");

addEventListener("keyup",(e)=>{
    const searchdata=e.target.value.toLowerCase();
    const filterdata=categories.filter((item)=>item.title.toLowerCase().includes(searchdata));
        displayitems(filterdata);
});

const displayitems=(items)=>{
    const rootelement=document.getElementById("root");
    rootelement.innerHTML="";

    items.forEach((item)=>{
        const {index,image,title,rate,av}=item;
        const jlist=document.createElement("div");
        jlist.className="jlist";
        jlist.innerHTML=`
       <img src="${image}">
                    <h3>${title}</h3>
                    <p>${rate}</p>
                    <span  id="key">${av}</span>
        `;
        rootelement.appendChild(jlist);
        jlist.addEventListener('click',()=>{
            window.location.href=`job-details.html?id=${index}`;
        });
    });

};

displayitems(categories);