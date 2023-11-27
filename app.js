const searchBox= document.getElementById("search-box")
const searchForm= document.getElementById("search-form")
const searchResult=  document.getElementById("search-result")
const showMoreBtn= document.getElementById("show-more-btn")

const devDetails= document.getElementById("dev-details")

const myFooter= document.getElementById("my-footer")

let keyword= "";
let page=1;
let accessKey="EIVrxps6laVUihwXbb81kQNhTa9hqVkT29Mu5doJYvw"


async function searchImages(){
    keyword=searchBox.value;
    const url= ` https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=16`;
    const response= await fetch(url);
    const data= await response.json()

    const results=data.results

    results.map((result)=>{
        const image= document.createElement("img")
        image.src=result.urls.small;

        const imageLink= document.createElement("a")
        imageLink.href= result.links.html
        imageLink.target= "_blank"

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })

    console.log(data)
    showMoreBtn.style.display ="block";

    const currentYear= new Date().getFullYear()
    const footer="Copyright " + " © " + currentYear;
    devDetails.innerHTML= "Made with 💚 by Nyok"
    devDetails.style.display= "flex"
    myFooter.innerHTML=footer
    myFooter.style.display= "flex"

}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1

    searchImages();
})

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages()
})
