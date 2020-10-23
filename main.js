function change_color(item){
	arr=["black","blue","green","red","aqua"];
	if(item.colorid==undefined)item.colorid=0;
	item.colorid++;
	item.colorid%=4;
	item.style.color=arr[item.colorid];
}