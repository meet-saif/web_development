const calculateFormEl=document.getElementById("calculateForm");

const calculateMarks=(event)=>{
    const maxMrks=400;

    event.preventDefault();

    const formData=new FormData(calculateFormEl)

    const data={};
    formData.forEach((value,key)=>{

        data[key]= +value;
    })

    const totalMarks=data.math+ data.english+ data.urdu+data.science;

    const percetage = (totalMarks/maxMrks) * 100;
    // console.log({totalMarks , percetage})
    const resultEl =document.createElement("p");
    resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMrks} and your persentage is ${percetage} %`;
    calculateFormEl.after(resultEl);
};

calculateFormEl.addEventListener('submit', calculateMarks);
