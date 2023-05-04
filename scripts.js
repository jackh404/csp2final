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