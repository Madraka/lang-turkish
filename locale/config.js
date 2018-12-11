moment.locale('pt-br', {
	months : 'Ocak_Şubat_Mart_Nisan_Nayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	monthsShort : 'Oc_Şbt_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Ekm_Kas_Ara'.split('_'),
	weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	weekdaysShort : 'Paz_Pzt_Sa_Ça_Pe_Cu_Cmt'.split('_'),
	weekdaysMin : 'Paz_2._3._4._5._6._Cts'.split('_'),
	longDateFormat : {
		LT : 'HH:mm',
		LTS : 'HH:mm:ss',
		L : 'DD/MM/YYYY',
		LL : 'D [arasında] MMMM [arasında] YYYY',
		LLL : 'D [arasında] MMMM [arasında] YYYY [içinde] HH:mm',
		LLLL : 'dddd, D [arasında] MMMM [arasında] YYYY [içinde] HH:mm'
	},
	calendar : {
		sameDay: '[Bugün] LT',
		nextDay: '[Yarın] LT',
		nextWeek: 'dddd [içinde] LT',
		lastDay: '[Dün] LT',
		lastWeek: function () {
		return (this.day() === 0 || this.day() === 6) ?
		'[son] dddd [içinde] LT' : // Saturday + Sunday
		'[son] dddd [içinde] LT'; // Monday - Friday
	},
	sameElse: 'L'
	},
	relativeTime : {
		future : '%s içinde',
		past : '%s önce',
		s : 'birkaç saniye',
		m : 'bir dakika',
		mm : '%d Dakika',
		h : 'bir saat',
		hh : '%d saat',
		d : 'bir gün',
		dd : '%d gün',
		M : 'bir ay',
		MM : '%d ay',
		y : 'bir yıl',
		yy : '%d yıl'
	},
	ordinalParse: /\d{1,2}./,
	ordinal : '%d.'
});
