
document.getElementById('task-box-con')
    .addEventListener('click', function (event) {

        let taskAssignNum = getsElementbyId('assign-num');
        let taskCompleteNum = getsElementbyId("task-com-num");
        let logContainer = getContainer('activity-con');
        const newDiv = document.createElement('div')
        let slogan = document.getElementById('slogan-1').innerText;


        if (event.target.id === 'btn1') {
            alert('Board Updated Successfully')

            const UpdatedNum = taskAssignNum - 1;
            document.getElementById('assign-num').innerText = UpdatedNum;

            const UpdatedComNum = taskCompleteNum + 1;
            document.getElementById('task-com-num').innerText = UpdatedComNum;

            const currentTime = new Date();
            const formateTime = currentTime.toLocaleTimeString();

            const newDiv = document.createElement('div')
            newDiv.innerHTML = `<div id = "clear" class = "border-thin bg-[#F4F7FF] py-1  px-1 rounded-sm shadow-sm mt-2">You have completed the task ${slogan} at ${formateTime} </div>`
            logContainer.appendChild(newDiv);

            getButton('btn1');
        }


        if (event.target.id === 'btn2') {
            alert('Board Updated Successfully')
            
            const UpdatedNum = taskAssignNum - 1;
            document.getElementById('assign-num').innerText = UpdatedNum;

            const UpdatedComNum = taskCompleteNum + 1;
            document.getElementById('task-com-num').innerText = UpdatedComNum;

            const currentTime = new Date();
            const formateTime = currentTime.toLocaleTimeString();

            const newDiv = document.createElement('div')
            newDiv.innerHTML = `<div id = "clear" class = "border-thin bg-[#F4F7FF] py-1  px-1 rounded-sm shadow-sm mt-4">You have completed the task ${getSlogan('slogan2')} at ${formateTime} </div>`
            logContainer.appendChild(newDiv);

            getButton('btn2');
        }


        if (event.target.id === 'btn3') {
            alert('Board Updated Successfully')

            const UpdatedNum = taskAssignNum - 1;
            document.getElementById('assign-num').innerText = UpdatedNum;

            const UpdatedComNum = taskCompleteNum + 1;
            document.getElementById('task-com-num').innerText = UpdatedComNum;

            const currentTime = new Date();
            const formateTime = currentTime.toLocaleTimeString();

            const newDiv = document.createElement('div')
            newDiv.innerHTML = `<div id = "clear"  class = "border-thin bg-[#F4F7FF] py-1  px-1 rounded-sm shadow-sm mt-4">You have completed the task ${getSlogan('slogan3')} at ${formateTime} </div>`
    
            getButton('btn3');
        }


        
        if (event.target.id === 'btn4') {
            alert('Board Updated Successfully')

            const UpdatedNum = taskAssignNum - 1;
            document.getElementById('assign-num').innerText = UpdatedNum;

            const UpdatedComNum = taskCompleteNum + 1;
            document.getElementById('task-com-num').innerText = UpdatedComNum;

            const currentTime = new Date();
            const formateTime = currentTime.toLocaleTimeString();

            const newDiv = document.createElement('div')
            newDiv.innerHTML = `<div id = "clear" class = "border-thin bg-[#F4F7FF] py-1  px-1 rounded-sm shadow-sm mt-4">You have completed the task ${getSlogan('slogan4')} at ${formateTime} </div>`
            logContainer.appendChild(newDiv);

            getButton('btn4');
        }


        if (event.target.id === 'btn5') {
            alert('Board Updated Successfully')

            const UpdatedNum = taskAssignNum - 1;
            document.getElementById('assign-num').innerText = UpdatedNum;

            const UpdatedComNum = taskCompleteNum + 1;
            document.getElementById('task-com-num').innerText = UpdatedComNum;

            const currentTime = new Date();
            const formateTime = currentTime.toLocaleTimeString();

            const newDiv = document.createElement('div')
            newDiv.innerHTML = `<div id = "clear" class = "border-thin bg-[#F4F7FF] py-1  px-1 rounded-sm shadow-sm mt-4">You have completed the task ${getSlogan('slogan5')} at ${formateTime} </div>`
            logContainer.appendChild(newDiv);

            getButton('btn5');
        }




        if (event.target.id === 'btn6') {
            alert('Board Updated Successfully')
            alert('Congrates!!! You Have completed all the current task' )


            const UpdatedNum = taskAssignNum - 1;
            document.getElementById('assign-num').innerText = UpdatedNum;

            const UpdatedComNum = taskCompleteNum + 1;
            document.getElementById('task-com-num').innerText = UpdatedComNum;

            const currentTime = new Date();
            const formateTime = currentTime.toLocaleTimeString();

            const newDiv = document.createElement('div')
            newDiv.innerHTML = `<div id = "clear"  class = "border-thin bg-[#F4F7FF] py-1  px-1 rounded-sm shadow-sm mt-4">You have completed the task ${getSlogan('slogan6')} at ${formateTime} </div>`
            logContainer.appendChild(newDiv);

            getButton('btn6');
        }

        document.getElementById("clear-history")
    .addEventListener('click', function(){
       const targetdiv = document.getElementById('activity-con');
      targetdiv.innerHTML = '';
    })

    })

    const containerDate = document.getElementById('current-date');
    const date = new Date();
    const formatedDate = date.toDateString();
    const datePTag = document.createElement('p');
    datePTag.innerText = formatedDate;
    containerDate.appendChild(datePTag);

    