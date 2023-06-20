        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
        import { getDatabase,ref , push ,onValue,set,get,child } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD87dn4Nb-FQ8eo-Mj0-4mOSYjCQns2zeA",
  authDomain: "jackan-f7100.firebaseapp.com",
  databaseURL: "https://jackan-f7100-default-rtdb.firebaseio.com",
  projectId: "jackan-f7100",
  storageBucket: "jackan-f7100.appspot.com",
  messagingSenderId: "677584601589",
  appId: "1:677584601589:web:76152cef2d7cf43e93e0bc"
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
