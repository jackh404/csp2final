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

//gets current time and changes elements' class to appear on or off 
//based on a binary clock where each vertical column represents one digit
function binaryWatch(){
    var now = new Date();
    var hour = now.getHours();
    if(hour>12){
      hour-=12;
    }
    var min = now.getMinutes();
    var hour1 = Math.floor(hour/10).toString(2).split("");
    var hour0 = Math.floor(hour%10).toString(2).split("");
    var min1 = Math.floor(min/10).toString(2).split("");
    var min0 = Math.floor(min%10).toString(2).split("");

    //calculate minute bits in ones' place
    for(var i = 1; i<=8; i*=2){
      if(min0[0]&& min0.pop()==1){
        
        $("#min0"+i).addClass("lit").removeClass("dark");
        
      } else {
        $("#min0"+i).addClass("dark").removeClass("lit");
      }
    }

    //calculate the minute bits in the tens' place
    for(var i = 1; i<=4; i*=2){
      if(min1[0]&& min1.pop()==1){
        
        $("#min1"+i).addClass("lit").removeClass("dark");
        
      } else {
        $("#min1"+i).addClass("dark").removeClass("lit");
      }
    }

    //calculate the hour bits in the ones' place
    for(var i = 1; i<=8; i*=2){
      if(hour0[0]&& hour0.pop()==1){
        
        $("#hour0"+i).addClass("lit").removeClass("dark");
        
      } else {
        $("#hour0"+i).addClass("dark").removeClass("lit");
      }
    }

    //calculate the hour bits in the tens' place
    for(var i = 1; i<=2; i*=2){
      if(hour1[0]&& hour1.pop()==1){
        
        $("#hour1"+i).addClass("lit").removeClass("dark");
        
      } else {
        $("#hour1"+i).addClass("dark").removeClass("lit");
      }
    }
  }