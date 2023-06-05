var data1={image:"aab.jpeg",name:"Veldhandi Kavya",designation:"Student & developer"};
var data2={image:"abcd.jpeg",name:"Kavya",designation:"Intern"};
var isdata1=true;
var displaydata;
var changemypic=function(){
     if(isdata1){
        displaydata=data2;
        isdata1=false;
     }
     else{
        displaydata=data1;
        isdata1=true;
     }
     document.getElementById("myimage").src=displaydata.image;
     document.getElementById("para1").innerHTML=displaydata.name;
     document.getElementById("para2").innerHTML=displaydata.designation;

}