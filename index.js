window.onload 
{
    function loadItems()
    {
        var galleryitems = document.querySelector('itemimg');

        //onload, create array to store all 10 battlepass item photos.
        var battlepassitems =
        [
            src="images/BPimg_Amstrigian_Icon.png",
            src="images/BP-img_Dapperwing.png"
        ];
        
    }


}
function itemSelected(items)
{
    //Create variables for the DOM elements being affected.
    var galleryitems = document.querySelector('itemimg');
    var selecteditem = document.getElementById("mainactor");

    //get the src of the gallery item selected.
    galleryitems = items.src;

    //change the src of the Mainactor to the selected gallery item src
    selecteditem.src = galleryitems;

}