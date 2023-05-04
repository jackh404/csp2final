function slide($lider,list,way,index)
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
    $lider.attr("src",list[index]);
    return index;
}