//Define slide objects to be used in slideshows
Slide = function(caption,url,alt,link)
{
    this.url=url;
    this.caption=caption;
    this.alt=alt;
    this.link=link;
}

/*Change the image, caption, alt text, and link based on the
contents of the next slide object in order to advance the slideshow*/
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