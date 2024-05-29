document.addEventListener("DOMContentLoaded", function() {
    const line = document.querySelector(".line");
    const menu = document.querySelector(".menu");
    line.addEventListener("click", () => {
        menu.classList.toggle('active');
        
        if(menu.style.maxHeight) {
            menu.style.maxHeight = null;
        }
        else{
            menu.style.maxHeight =  menu.scrollHeight + "px";
        }
    });

    $(document).ready(function() {
        $(".Things-to-know").on("click", function(e) {
            e.preventDefault();
            var target = $(this).data("target");
            $(".section").hide();
            $("#" + target).show();
        })
    })
    
});

