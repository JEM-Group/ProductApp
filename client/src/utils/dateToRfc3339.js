export default {
	dateToRfc3339: function(date)
	{
	  var dd = date.getDate();
	  var mm = date.getMonth()+1;
	  var yyyy = date.getFullYear();
	  
	  var hour= date.getHours();
	  var minutes=date.getMinutes();
	  var seconds=date.getSeconds();
	  
	  if (hour<10){
	    hour='0'+hour;
	  }
	  if (minutes<10){
	    minutes='0'+minutes;
	  }
	  if (seconds<10){
	    seconds='0'+seconds;
	  }
	  
	  if(dd<10){
	    dd='0'+dd
	  } 
	  if(mm<10){
	    mm='0'+mm
	  } 
	  
	  var n = date.getTimezoneOffset()/60;
	  var offset="";
	  
	  if (n>0){
	    offset="-";
	  }
	  else{
	    offset="+"
	    n=(-1)*n;
	  }
	  
	  if (n<9){
	    offset+="0"+n;
	  }
	  else{
	    offset+=n;
	  }
	  
	  var result = yyyy + '-' + mm + '-' + dd + "T" + hour + ":" + minutes + ":" + seconds + offset + ":00";
	  
	  return result;
	}
}