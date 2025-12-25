const people = [
  {
    fullName: "Emma Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "Software Engineer",
    description: "Emma specializes in frontend development and creates scalable interfaces."
  },
  {
    fullName: "Arjun Mehta",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Data Scientist",
    description: "Arjun works with machine learning models and big data analytics."
  },
  {
    fullName: "Sophia Martinez",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    profession: "Graphic Designer",
    description: "Sophia designs brand identities and visual experiences for startups."
  },
  {
    fullName: "Liam Carter",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    profession: "Cybersecurity Analyst",
    description: "Liam focuses on threat detection, risk analysis, and security encryption."
  }
];

let sum = ''

var main = document.querySelector('main')

people.forEach(function(elem){
  sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

main.innerHTML = sum