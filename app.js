        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
        import { getDatabase,ref , push ,onValue,set,get,child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH5dRDGlaUobjil4Hu5tq0hNG4oiPkq1A",
  authDomain: "national-exam-c980a.firebaseapp.com",
  projectId: "national-exam-c980a",
  storageBucket: "national-exam-c980a.appspot.com",
  messagingSenderId: "140611657000",
  appId: "1:140611657000:web:d2e72f0b57dbb75f72041d"
};
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        const database = getDatabase(app);







const form = document.querySelector('form');
const result = document.querySelector('.student-data')
form.addEventListener('submit', (event) => {
  event.preventDefault();
// const dbref = ref(database, 'users');

//   push(dbref, data);

    const name = form.querySelector('#name').value,
    school = form.querySelector('#school').value,
    rolNumber = form.querySelector('#role-n').value, 
    fRole = document.querySelector('.student-data .rol'),
    fSchol = document.querySelector('.student-data .dug'),
    fname = document.querySelector('.student-data .nam')

    fRole.innerHTML = rolNumber
    fSchol.innerHTML = school
    fname.innerHTML = name

    console.log(school , name , rolNumber)

  const inserData = () =>{
    set(ref(database , 'Sudents/'+name),{
        name : name , 
        school : school,
        rolNumber : rolNumber
    }).then(

    )


  }

  inserData()



form.reset()
form.style.display = 'none';
result.style.display = 'flex';
  // Send the JSON data to a server using fetch or XMLHttpRequest
});


function displayData(){
  const dbref = ref(database)

  get(child(dbref , 'posts/')).then(snapshot =>{

    let data = [];

    snapshot.forEach(childSnapshot => {
      data.push(childSnapshot.val())
    
    });
    getExtractData(data)
  })

}

function getExtractData(data){
  data.forEach(userData=>{
  })
}
