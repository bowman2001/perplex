window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.getOptimumX = function(_element){
    var dpr = window.devicePixelRatio || 1;
	if(dpr > 2.6){
		dpr *= 0.6666; 
	} else if(dpr > 1.9){
		dpr *= 0.85; 
	} else {
		dpr -= 0.01;
	}
	return Math.min(Math.round(dpr * 100) / 100, 2);
};