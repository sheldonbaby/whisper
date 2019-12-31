export default {
	bgImage: function(el, {value}) {
		el.style.backgroundImage = `url(${value})`
		el.style.backgroundRepeat = 'no-repeat';
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
	}
}