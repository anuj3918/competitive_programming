function finder(n, conditions){
	conditions = conditions.split("");
	var gt = conditions.filter(function(item){
		return item == ">";
	}).length;
	var lt = conditions.length - gt;

	var list = [];
	for(var i=1; i<=n; i++)
		list.push(i);

	if(lt < gt)
		list.reverse();
	
	for(var j=0; j<conditions.length; j++){
		var swapped = false;
		for(var i=0; i<list.length-1; i++){
			if(conditions[i] == ">"){
				if(!(list[i] > list[i+1])){
					var temp = list[i];
					list[i] = list[i+1];
					list[i+1] = temp;
					swapped = true;
				}
			}
			else {
				if(!(list[i] < list[i+1])){
					var temp = list[i];
					list[i] = list[i+1];
					list[i+1] = temp;
					swapped = true;
				}
			}
		}
		if(swapped == false)
			break;
	}
	console.log(list);
}

finder(3, "><");
