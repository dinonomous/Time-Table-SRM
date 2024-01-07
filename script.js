let randimg = Math.floor(Math.random() * 13) + 2;
let body = document.getElementById("body");
document.body.style.backgroundImage = `url('background/${randimg}.jpg')`;



let timetable = {};

// Function to update the timetable on form submission
function updateTimetable(event) {
    event.preventDefault(); // Prevent form submission (to avoid page reload)

    // Reset the timetable object
    timetable = {};

    // Iterate through each select element with class 'subject'
    document.querySelectorAll('.subject').forEach(select => {
        const slot = select.getAttribute('data-slot');
        const selectedSubject = select.value;
        timetable[slot] = selectedSubject;
    });

    // Log the timetable object to the console
    console.log(timetable);

    // Update the HTML content based on the timetable
    batch()
}

// Function to update HTML content based on the timetable
function updateHTML() {
    for (let r = 1; r < 6; r++) {
        let row = document.getElementById(`row-${r}`);
        if (row) {
            for (const key in timetable) {
                if (timetable[key] == 'NA') {
                    let cell = row.querySelector(`#${key}`);
                    if (cell) {
                        cell.innerHTML = '---';
                    }
                }
                else {
                    let cell = row.querySelector(`#${key}`);
                    if (cell) {
                        cell.innerHTML = `${timetable[key]}`
                        cell.style.backgroundColor = getRandomColor();
                    }
                }
            }
        }
    }
}

let batch1 = `
<div class="tablediv">
            <table>
             <thead>
                <tr>
                   <td id="sub1"></td>
                   <td id="sub">8:00-8:50</td>
                   <td id="sub">8:50-9:40</td>
                   <td id="sub">9:45-10:35</td>
                   <td id="sub">10:40-11:30</td>
                   <td id="sub">11:35-12:25</td>
                   <td id="sub">12:30-1:20</td>
                   <td id="sub">1:25-2:15</td>
                   <td id="sub">2:20-3:10</td>
                   <td id="sub">3:10-4:00</td>
                   <td id="sub">4:00-4:50</td>
                </tr>
             </thead>
             <tbody>
                <tr id="row-1">
                   <td id="sub">DAY - 1</td>
                   <td colspan="2" id="A"></td>
                   <td id="F" colspan="2"></td>
                   <td id="G"></td>
                   <td id="p6"></td>
                   <td id="p7"></td>
                   <td id="p8"></td>
                   <td id="p9"></td>
                   <td id="p10"></td>
                </tr>
                <tr id="row-2">
                    <td id="sub">DAY - 2</td>
                    <td id="p11"></td>
                    <td id="p12"></td>
                    <td id="p13"></td>
                    <td id="p14"></td>
                    <td id="p15"></td>
                    <td id="B" colspan="2"></td>
                    <td id="G" colspan="2"></td>
                    <td id="A"></td>
                </tr>
                <tr id="row-3">
                   <td id="sub">DAY - 3</td>
                   <td id="C" colspan="2"></td>
                   <td id="A"></td>
                   <td id="D"></td>
                   <td id="B"></td>
                   <td id="p26"></td>
                   <td id="p27"></td>
                   <td id="p28"></td>
                   <td id="p29"></td>
                   <td id="p30"></td>
                </tr>
                <tr id="row-4">
                   <td id="sub">DAY - 4</td>
                   <td id="p31"></td>
                   <td id="p32"></td>
                   <td id="p33"></td>
                   <td id="p34"></td>
                   <td id="p35"></td>
                   <td id="D" colspan="2"></td>
                   <td id="B"></td>
                   <td id="E"></td>
                   <td id="C"></td>
                </tr>
                <tr id="row-5">
                   <td id="sub">DAY - 5</td>
                   <td id="E" colspan="2"></td>
                   <td id="C"></td>
                   <td id="F"></td>
                   <td id="D"></td>
                   <td id="p46"></td>
                   <td id="p47"></td>
                   <td id="p48"></td>
                   <td id="p49"></td>
                   <td id="p50"></td>
                </tr>
             </tbody>
          </table>
          </div>
          `

let batch2 = `
<div class="tablediv">
        <table>
        <thead>
           <tr>
              <td id="sub1"></td>
              <td id="sub">8:00-8:50</td>
              <td id="sub">8:50-9:40</td>
              <td id="sub">9:45-10:35</td>
              <td id="sub">10:40-11:30</td>
              <td id="sub">11:35-12:25</td>
              <td id="sub">12:30-1:20</td>
              <td id="sub">1:25-2:15</td>
              <td id="sub">2:20-3:10</td>
              <td id="sub">3:10-4:00</td>
              <td id="sub">4:00-4:50</td>
           </tr>
        </thead>
        <tbody>
           <tr id="row-1">
              <td id="sub">DAY - 1</td>
              <td id="p1"></td>
              <td id="p2"></td>
              <td id="p3"></td>
              <td id="p4"></td>
              <td id="p5"></td>
              <td colspan="2" id="A"></td>
              <td id="F" colspan="2"></td>
              <td id="G"></td>
           </tr>
           <tr id="row-2">
               <td id="sub">DAY - 2</td>
               <td id="B" colspan="2"></td>
               <td id="G" colspan="2"></td>
               <td id="A"></td>
               <td id="p16"></td>
               <td id="p17"></td>
               <td id="p18"></td>
               <td id="p19"></td>
               <td id="p20"></td>
           </tr>
           <tr id="row-3">
              <td id="sub">DAY - 3</td>
              <td id="p21"></td>
              <td id="p22"></td>
              <td id="p23"></td>
              <td id="p24"></td>
              <td id="p25"></td>
              <td id="C" colspan="2"></td>
              <td id="A"></td>
              <td id="D"></td>
              <td id="B"></td>
              
           </tr>
           <tr id="row-4">
              <td id="sub">DAY - 4</td>
              <td id="D" colspan="2"></td>
              <td id="B"></td>
              <td id="E"></td>
              <td id="C"></td>
              <td id="p36"></td>
              <td id="p37"></td>
              <td id="p38"></td>
              <td id="p39"></td>
              <td id="p40"></td>
           </tr>
           <tr id="row-5">
              <td id="sub">DAY - 5</td>
              <td id="p41"></td>
              <td id="p42"></td>
              <td id="p43"></td>
              <td id="p44"></td>
              <td id="p45"></td>
              <td id="E" colspan="2"></td>
              <td id="C"></td>
              <td id="F"></td>
              <td id="D"></td>
           </tr>
        </tbody>
     </table>
     </div>`

     function batch() {
        var selectedBatch = document.querySelector('.batch').value;
    
        // Create a new div for the tablebox
        var tablebox = document.createElement('div');
        tablebox.id = 'tablebox';
    
        if (selectedBatch == 'Batch 1') {
            tablebox.innerHTML = batch1;
        } else {
            tablebox.innerHTML = batch2;
        }
    
        // Append the tablebox before the summary div
        var summaryDiv = document.querySelector('.summary');
        document.body.insertBefore(tablebox, summaryDiv);
    
        // Call updateHTML function
        updateHTML();
    }

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Attach form submission event listener to the subjectForm forms
document.getElementById('subjectFormA').addEventListener('submit', updateTimetable);
document.getElementById('subjectFormB').addEventListener('submit', updateTimetable);
document.getElementById('subjectFormC').addEventListener('submit', updateTimetable);
document.getElementById('subjectFormD').addEventListener('submit', updateTimetable);
document.getElementById('subjectFormE').addEventListener('submit', updateTimetable);
document.getElementById('subjectFormF').addEventListener('submit', updateTimetable);
document.getElementById('subjectFormG').addEventListener('submit', updateTimetable);
document.getElementById('batchform').addEventListener('submit', updateTimetable);
// Repeat the above line for other forms (subjectFormB, subjectFormC, etc.) as needed