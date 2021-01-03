// Instagram Sub-Application

const selectButton = document.getElementById("instagramSelectButton");
selectButton.addEventListener("click", selectWinner);

const instagramPostUrl = document.getElementById("instagramPostUrl");

function selectWinner() {
    var postUrl = instagramPostUrl.value;
    console.log(`fetching results for url ${postUrl}`);
}