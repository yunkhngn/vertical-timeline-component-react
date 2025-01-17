import { DefaultValues } from '../interfaces';

export const defaultValues: DefaultValues = {
	theme: {
		yearColor: '#888',
		lineColor: '#c5c5c5',
		dotColor: '#c5c5c5',
		borderDotColor: '#fff',
		titleColor: '#ccc',
		subtitleColor: '#888',
		textColor: '#ccc',
	},
	lang: 'en',
	dateFormat: 'only-number',
};

export const mapText = {
	en: { from: 'From', to: 'To' },
	es: { from: 'Desde', to: 'Hasta' },
	de: { from: 'Von', to: 'Bis' },
	tr: { from: 'Başlangıç', to: 'Bitiş' },
	zh: { from: '从', to: '到' },
};
