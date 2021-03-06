head.ready(function() {

	console.log($('body').html());
	(function($){
		$(document).ready(function() {
			var image_array = new Array();
			image_array = [
				{image: 'content/our_team/1.jpg', link_url: 'content/our_team/1big.jpg', link_rel: 'prettyPhoto'},
					// image for the first layer, goes with the text from id="sw0"
				{image: 'content/our_team/2.jpg', link_url: 'content/our_team/2big.jpg', link_rel: 'prettyPhoto'},
					// image for the second layer, goes with the text from id="sw1"
				{image: 'content/our_team/3.jpg', link_url: 'content/our_team/3big.jpg', link_rel: 'prettyPhoto'},
					// image for the third layer, goes with the text from id="sw2"
				{image: 'content/our_team/4.jpg', link_url: 'content/our_team/4big.jpg', link_rel: 'prettyPhoto'},
					// ...
				{image: 'content/our_team/5.jpg', link_url: 'content/our_team/5big.jpg', link_rel: 'prettyPhoto'},
				{image: 'content/our_team/6.jpg', link_url: 'content/our_team/6big.jpg', link_rel: 'prettyPhoto'},
				{image: 'content/our_team/7.jpg', link_url: 'content/our_team/7big.jpg', link_rel: 'prettyPhoto'}
			];
			$('#slider1').content_slider({		// bind plugin to div id="slider1"
				map : image_array,				// pointer to the image map
				max_shown_items: 7,				// number of visible circles
				hv_switch: 0,					// 0 = horizontal slider, 1 = vertical
				active_item: 0,					// layer that will be shown at start, 0=first, 1=second...
				wrapper_text_max_height: 450,	// height of widget, displayed in pixels
				middle_click: 1,				// when main circle is clicked: 1 = slider will go to the previous layer/circle, 2 = to the next
				under_600_max_height: 1200,		// if resolution is below 600 px, set max height of content
				border_radius:	-1,				// -1 = circle, 0 and other = radius
				automatic_height_resize: 1,
				border_on_off: 0,
				allow_shadow: 0
			});
		});
	})(jQuery);


		$('.slider__main_in').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			prevArrow: $('#arr_l-btn'),
			nextArrow: $('#arr_r-btn'),
			// variableWidth: true,
			responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        arrows: false
		      }}]
		 });

		$('.pop-up-item__main_slider_main_in').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			// variableWidth: true,
			arrows: true,
			prevArrow: $('.pop-up-item_prev_btn'),
			nextArrow: $('.pop-up-item_nxt_btn'),
			// respondTo: 'min',
			// slide: $('.item__slider_img'),


			responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        arrows: false
		      }}]
		 });
		$('.item_about_add').click(function() {
			if($(this).find('i').hasClass('heart_pr')) {
				$(this).find('i').removeClass('heart_pr').addClass('heart_b')
			}
			else	$(this).find('i').removeClass('heart_b').addClass('heart_pr');
		})
	// });
	//popUpMenu
	var $popUpMenu = $(".pop-up-menu");
	$('.humb').click(function() {
		if($popUpMenu.hasClass("is-visible")) {
			$(this).css("background-color", "#4d4d4d");
			$popUpMenu.removeClass("is-visible");
		}
		else {
			$(this).css("background-color", "#96c833");
			$popUpMenu.addClass("is-visible");
		}
	});
	//baseTopP
	var $baseTopP = $(".base_top_text").find('p');
	$(".base_top_text p").click(function() {
		if($baseTopP.hasClass('is-active')) {
			$baseTopP.removeClass('is-active');
		};
		if(!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');
		}
	});
	var $baseFormLi = $(".base__form_nav").find('li span');
	var $commerceNav = $('#base_form_nav_commerce');
	var $aliveNav = $('#base_form_nav_alive');
	var $gardenNav = $('#base_form_nav_garden');
	var $newestNav = $('#base_form_nav_newest');
	var $formMain = $(".base__form_main").find('form');
	$(".base__form_nav li span").click(function() {
		if($baseFormLi.hasClass('is-active')) {
			$baseFormLi.removeClass('is-active');
		};
		if(!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');

			if($commerceNav.hasClass('is-active')) {
				$formMain.removeClass('is-visible');
				$('.form__commerce').addClass('is-visible')
			}
			else if($aliveNav.hasClass('is-active')) {
				$formMain.removeClass('is-visible');
				$('.form__alive').addClass('is-visible')
			}
			else if($gardenNav.hasClass('is-active')) {
				$formMain.removeClass('is-visible');
				$('.form__garden').addClass('is-visible')
			}
			else if($newestNav.hasClass('is-active')) {
				$formMain.removeClass('is-visible');
				$('.form__newest').addClass('is-visible');
			}
		}
	});
	$('.commercial .header__foo_main_header').click(function() {
		if($('.commercial_in').hasClass('is-visible')) {
			$('.commercial_in').removeClass('is-visible');
		}
		else $('.commercial_in').addClass('is-visible');
	});
	$('.resident .header__foo_main_header').click(function() {
	if($('.resident_in').hasClass('is-visible')) {
		$('.resident_in').removeClass('is-visible');
	}
	else $('.resident_in').addClass('is-visible');
	});
	$('.country .header__foo_main_header').click(function() {
	if($('.country_in').hasClass('is-visible')) {
		$('.country_in').removeClass('is-visible');
	}
	else $('.country_in').addClass('is-visible');
	});
	$('.country .header__foo_main_header_new').click(function() {
	if($('.newest_in').hasClass('is-visible')) {
		$('.newest_in').removeClass('is-visible');
	}
	else $('.newest_in').addClass('is-visible');
	});
	$('.pop-up-menu__company .pop-up-menu__header').click(function() {
	if($('.pop-up-menu__company .pop-up-menu_info').hasClass('is-visible')) {
		$(' .pop-up-menu__company .pop-up-menu_info').removeClass('is-visible');
	}
	else $(' .pop-up-menu__company .pop-up-menu_info').addClass('is-visible');
	});
	$('.pop-up-menu__service .pop-up-menu__header').click(function() {
	if($('.pop-up-menu__service .pop-up-menu_info').hasClass('is-visible')) {
		$(' .pop-up-menu__service .pop-up-menu_info').removeClass('is-visible');
	}
	else $(' .pop-up-menu__service .pop-up-menu_info').addClass('is-visible');
	});
	$('.pop-up-menu__contacts .pop-up-menu__header').click(function() {
	if($('.pop-up-menu__contacts .pop-up-menu_info').hasClass('is-visible')) {
		$(' .pop-up-menu__contacts .pop-up-menu_info').removeClass('is-visible');
	}
	else $(' .pop-up-menu__contacts .pop-up-menu_info').addClass('is-visible');
	});
	$cover = $('.cover');
	$popUpCallback = $('.pop-up-callback');
	$('.btn_recall').click(function() {
		$('.pop-up-callback').addClass('is-visible');
		$cover.addClass('is-visible');
	});
	$cover.click(function() {
		if($popUpCallback.hasClass('is-visible'))	closeCallback();
	});
	$('.pop-up-callback__header_close').click(function() {
		closeCallback();
	})
	function closeCallback() {
		$cover.removeClass('is-visible');
		$popUpCallback.removeClass('is-visible');
	};
	var $containerHeaderNav = $(".container__header_nav").find('span');
	$(".container__header_nav_marked").click(function() {
			if($containerHeaderNav.hasClass('is-active')) {
				$containerHeaderNav.removeClass('is-active');
			}
		containerHeaderNav($(this));
	});
	$(".container__header_nav_cards").click(function() {
		if($containerHeaderNav.hasClass('is-active')) {
			$containerHeaderNav.removeClass('is-active');
		}
		containerHeaderNav($(this));
	});
	$(".container__header_nav_loc").click(function() {
	if($containerHeaderNav.hasClass('is-active')) {
		$containerHeaderNav.removeClass('is-active');
	}
		containerHeaderNav($(this));
	});
	function containerHeaderNav (el) {
		el.find('span').addClass('is-active');
		if($(".container__header_nav_marked span").hasClass('is-active')) {
		$(".container__header_nav_marked span").find('i').removeClass('inf').addClass('inf_wh');
		$('.content').addClass('list');
		}
		else  {
			$(".container__header_nav_marked span").find('i').removeClass('inf_wh').addClass('inf');
			$('.content').removeClass('list');
		}
		if($(".container__header_nav_cards span").hasClass('is-active')) {
		$(".container__header_nav_cards span").find('i').removeClass('sqr').addClass('sqr_wh');
		}
		else {
			$(".container__header_nav_cards span").find('i').removeClass('sqr_wh').addClass('sqr');
		}
		if($(".container__header_nav_loc span").hasClass('is-active')) {
		$(".container__header_nav_loc span").find('i').removeClass('loc_b').addClass('loc_wh');
			$('.content').addClass('map');
		}
		else {
			$(".container__header_nav_loc span").find('i').removeClass('loc_wh').addClass('loc_b');
			$('.content').removeClass('map');
		}
	};
	var $copyItems = $('.copy_box .item');
	$('#show_more').click(function() {
		$copyItems.clone().appendTo('.content');
	});
	$('.circle').click(function() {
			if($('.nav').hasClass('is-visible')) $('.nav').removeClass('is-visible')
			else $('.nav').addClass('is-visible')
	});
	var sabwaysName = ["Авиамоторная", "Автозаводская", "Алексеевская", "Алтуфьево", "Арбатская (Арбатско-Покровская линия)", "Аэропорт", "Баррикадная", "Бауманская", "Белорусская (Замоскворецкая линия)", "Белорусская (кольцевая)", "Беляево", "Библиотека имени Ленина (станция метро)", "Боровицкая", "Ботанический сад", "Бульвар Дмитрия Донского", "Варшавская", "ВДНХ", "Водный стадион", "Войковская", "Воробьёвы горы", "Динамо (Москва)", "Дмитровская", "Добрынинская", "Знамя Революции", "Измайловская", "Кантемировская", "Каховская", "Каширская", "Киевская (Арбатско-Покровская линия)", "Киевская (Филёвская линия)", "Кировская", "Китай-город", "Коломенская", "Комсомольская (кольцевая)", "Комсомольская (Сокольническая линия)", "Краснопресненская", "Красносельская", "Красные ворота", "Кузнецкий Мост", "Курская (Арбатско-Покровская линия)", "Курская (кольцевая)", "Курская (радиальная)", "Лубянка", "Люблино", "Марксистская", "Маяковская", "Менделеевская", "Молодёжная", "Нагатинская", "Нагорная", "Нахимовский проспект", "Новокузнецкая", "Новослободская", "Новоясеневская", "Октябрьская (Калужско-Рижская линия)", "Октябрьская (кольцевая)", "Октябрьское поле", "Охотный ряд", "Павелецкая (Замоскворецкая линия)", "Павелецкая (Кольцевая линия)", "Парк Победы", "Партизанская (Москва)", "Первомайская (Москва)", "Перово", "Печатники", "Планерная", "Площадь Ильича", "Площадь Революции", "Полежаевская", "Полянка", "Проспект Вернадского", "Проспект Маркса", "Проспект Мира (Калужско-Рижская линия)", "Проспект Мира (кольцевая)", "Пушкинская (Москва)", "Речной вокзал", "Рижская", "Савёловская", "Севастопольская", "Семёновская", "Серпуховская", "Смоленская (Арбатско-Покровская линия)", "Сокол", "Спартак", "Сталинская", "Станция имени Че Гевары", "Сухаревская", "Сходненская", "Таганская (кольцевая)", "Таганская (радиальная)", "Тверская", "Театральная", "Технопарк", "Тимирязевская (Серпуховско-Тимирязевская линия)", "Третьяковская", "Тульская", "Тургеневская", "Тушинская", "Улица 1905 года", "Улица Старокачаловская", "Университет (Москва)", "Цветной бульвар", "Чёрная станция", "Черкизовская", "Чертановская", "Чеховская", "Чкаловская", "Шоссе Энтузиастов", "Щёлковская", "Щукинская", "Электрозаводская" ];
	$('.subway').autocomplete({
		source: sabwaysName
	});
	var districtsName = ["Центральный", "Северный", "Северо-Восточный", "Восточный", "Юго-Восточный", "Южный", "Юго-Западный", "Западный", "Северо-Западный", "Зеленоградский"];
	$('.district').autocomplete({
		source: districtsName 
	});
	// (function( $ ) {
	//   $.widget( "custom.combobox", {
	//     _create: function() {
	//       this.wrapper = $( "<span>" )
	//         .addClass( "custom-combobox" )
	//         .insertAfter( this.element );
	
	//       this.element.hide();
	//       this._createAutocomplete();
	//       this._createShowAllButton();
	//     },
	
	//     _createAutocomplete: function() {
	//       var selected = this.element.children( ":selected" ),
	//         value = selected.val() ? selected.text() : "";
	
	//       this.input = $( "<input>" )
	//         .appendTo( this.wrapper )
	//         .val( value )
	//         .attr( "title", "" )
	//         .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
	//         .autocomplete({
	//           delay: 0,
	//           minLength: 0,
	//           source: $.proxy( this, "_source" )
	//         })
	//         .tooltip({
	//           tooltipClass: "ui-state-highlight"
	//         });
	
	//       this._on( this.input, {
	//         autocompleteselect: function( event, ui ) {
	//           ui.item.option.selected = true;
	//           this._trigger( "select", event, {
	//             item: ui.item.option
	//           });
	//         },
	
	//         autocompletechange: "_removeIfInvalid"
	//       });
	//     },
	
	//     _createShowAllButton: function() {
	//       var input = this.input,
	//         wasOpen = false;
	
	//       $( "<a>" )
	//         .attr( "tabIndex", -1 )
	//         .attr( "title", "Show All Items" )
	//         .tooltip()
	//         .appendTo( this.wrapper )
	//         .button({
	//           icons: {
	//             primary: "ui-icon-triangle-1-s"
	//           },
	//           text: false
	//         })
	//         .removeClass( "ui-corner-all" )
	//         .addClass( "custom-combobox-toggle ui-corner-right" )
	//         .mousedown(function() {
	//           wasOpen = input.autocomplete( "widget" ).is( ":visible" );
	//         })
	//         .click(function() {
	//           input.focus();
	
	//           // Close if already visible
	//           if ( wasOpen ) {
	//             return;
	//           }
	
	//           // Pass empty string as value to search for, displaying all results
	//           input.autocomplete( "search", "" );
	//         });
	//     },
	
	//     _source: function( request, response ) {
	//       var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
	//       response( this.element.children( "option" ).map(function() {
	//         var text = $( this ).text();
	//         if ( this.value && ( !request.term || matcher.test(text) ) )
	//           return {
	//             label: text,
	//             value: text,
	//             option: this
	//           };
	//       }) );
	//     },
	
	//     _removeIfInvalid: function( event, ui ) {
	
	//       // Selected an item, nothing to do
	//       if ( ui.item ) {
	//         return;
	//       }
	
	//       // Search for a match (case-insensitive)
	//       var value = this.input.val(),
	//         valueLowerCase = value.toLowerCase(),
	//         valid = false;
	//       this.element.children( "option" ).each(function() {
	//         if ( $( this ).text().toLowerCase() === valueLowerCase ) {
	//           this.selected = valid = true;
	//           return false;
	//         }
	//       });
	
	//       // Found a match, nothing to do
	//       if ( valid ) {
	//         return;
	//       }
	
	//       // Remove invalid value
	//       this.input
	//         .val( "" )
	//         .attr( "title", value + " didn't match any item" )
	//         .tooltip( "open" );
	//       this.element.val( "" );
	//       this._delay(function() {
	//         this.input.tooltip( "close" ).attr( "title", "" );
	//       }, 2500 );
	//       this.input.autocomplete( "instance" ).term = "";
	//     },
	
	//     _destroy: function() {
	//       this.wrapper.remove();
	//       this.element.show();
	//     }
	//   });
	// })( jQuery );
	 $( "#combobox").combobox();

});