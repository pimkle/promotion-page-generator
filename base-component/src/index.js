import CarList from './components/car-list';

const components = [
		CarList,
];

components.forEach(c => {
	c.install = function(Vue) {
		Vue.component(c.name, c);
	}
})

const install = function(Vue) {
	/* istanbul ignore if */
	if (install.installed) return;

	components.forEach((component) => {
		Vue.component(component.name, component);
	});
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default install;

export {
	CarList,
};
