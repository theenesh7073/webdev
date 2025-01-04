
const sortbtn=document.querySelectorAll(".jobid >*");
const sortitems=document.querySelectorAll(".jobcontainer > *");
sortbtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        sortbtn.forEach((btn)=> btn.classList.remove("active"));
        btn.classList.add("active");

const targetData=btn.getAttribute("data-target");
        sortitems.forEach((item)=> {
            item.classList.add("delete");
            if(item.getAttribute("data-item")===targetData || targetData==="all" )
            {
                item.classList.remove("delete");
            }
        });
    });
});
