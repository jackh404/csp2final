Slide = function(caption,url,alt,link)
{
    this.url=url;
    this.caption=caption;
    this.alt=alt;
    this.link=link;
}
function slide($lider,list,way,$caption,$link,index)
{
    index+=way;
    if(index<0)
    {
        index = list.length-1;
    }
    else if(index>=list.length)
    {
        index = 0;
    }
    $lider.attr("src",list[index].url);
    $lider.attr("alt",list[index].alt);
    $caption.html(list[index].caption);
    $link.attr("href",list[index].link)
    return index;
}
var menuText = "<div class = \"menu\"><ul class = \"menu\"><li class = \"menu\"><a href=\"index.html\">Home</a></li><li class = \"menu\"><a href=\"solar.html\">Solar</a></li><li class = \"menu\"><a href=\"wind.html\">Wind</a></li><li class = \"menu\"><a href=\"hydro.html\">Hydro</a></li><li class = \"menu\"><a href=\"thermal.html\">Solar Thermal</a></li><li class = \"menu\"><a href=\"csp.html\">Concentrating</a></li></ul></div>"
function navMenu($navBar)
{
    $navBar.html("<div class = \"menu\"><ul class = \"menu\"><li class = \"menu\"><a href=\"index.html\">Home</a></li><li class = \"menu\"><a href=\"solar.html\">Solar</a></li><li class = \"menu\"><a href=\"wind.html\">Wind</a></li><li class = \"menu\"><a href=\"hydro.html\">Hydro</a></li><li class = \"menu\"><a href=\"thermal.html\">Solar Thermal</a></li><li class = \"menu\"><a href=\"csp.html\">Concentrating</a></li></ul></div>");
}