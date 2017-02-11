function timeline(nodes,line,inner){
	/*添加节点*/
	var node = ''
	node +='<div class="nodes b_node"></div>'
	node +='<div class="line"></div>'
	for (var i =0; i <=nodes; i++) {
		$('.timeline').html(node);
	}
	$('.timeline').find('.nodes').each(function(index, el) {
		var nodeP = inner[index];
		console.log(index+nodeP);
		var nodeInner = '';
		nodeInner+= '<span></span>';
		nodeInner+= '<div>"'+nodeP+'"</div>';
		$(this).append(nodeInner)
		
	});
	$('.timeline').find('.line').each(function(index,el) {
		var lineInner = '';
		lineInner+= '<span></span>';
		$(this).append(lineInner);
		$(this).find('span').height(line+"rem");
		$(this).css({
			width: line+"rem",
			height: line+"rem"
		});
	});
	
}