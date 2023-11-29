window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.getOptimumX = function(_element){
    let dpr = window.devicePixelRatio || 1;
	if ( dpr > 1 ) {
		dpr = Math.log( dpr ) + 0.99;
	} else {
		dpr -= 0.01;
	}	
	return Math.min(Math.round(dpr * 100) / 100, 2.6);
};