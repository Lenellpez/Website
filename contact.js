$(window).scroll(function () {

    if ($("#menu").offset().top > 4100)
    {

        $("#menu").removeClass("navbar-light");
        $("#menu").addClass("navbar-dark");
        $("#menu").addClass("bg-dark")

    }
    else
    {
        $("#menu").removeClass("navbar-dark");
        $("#menu").removeClass("bg-dark");
        $("#menu").addClass("navbar-light");
     
    }
    if ($("#menu").offset().top > 5000)
    {
        $("#menu").removeClass("navbar-dark");
        $("#menu").removeClass("bg-dark");
        $("#menu").addClass("navbar-light");

    }
    
});





function setNewImagen()
{ document.getElementById("linkedin").src = "Images/icons8-linkedin (1).gif"; }
function setOldImagen()
{ document.getElementById("linkedin").src = "Images/icons8-linkedin.svg";}



function setNewImagen1()
{  document.getElementById("gmail").src="Images/icons8-gmail (1).gif";}
function setOldImagen1()
{ document.getElementById("gmail").src = "Images/icons8-gmail.svg"; }



function setNewImagen2()
{ document.getElementById("github").src = "Images/icons8-github (1).gif"; }
function setOldImagen2()
{ document.getElementById("github").src = "Images/icons8-github.svg";}



