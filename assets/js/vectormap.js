
// // load jvectormap jquery plugin
// require('jvectormap-next')($);
$(function(){
       setTimeout(function(){
                $('#map').vectorMap({
                    map: 'vietnam',
                    backgroundColor: "transparent",
                    onRegionClick:function(event, code){
                        var name = (code);
                        localStorage.setItem('city_id', code);

                        // $('id_city').text('test');

                    },
                    onRegionTipShow: function (e, el, code) {

                      // el.html(el.html() + '<p  id="popop"></p>').css("zIndex","5");
                      el.html(el.html()).css("zIndex","5");

                    },
                    zoomOnScroll: false,
                    zoomButtons : false,
                    regionStyle: {
                        initial: {
                            fill: '#0f5acb',
                        },
                        selected: {
                          fill: 'black',
                          "fill-opacity": 0.7,

                        },
                        hover : {
                           fill:'#002864',
                           "fill-opacity": 1,
                           cursor: 'pointer',
                      },
                    },
                    series: {
                        regions: [{
                            attribute: 'fill',
                            normalizeFunction: 'polynomial'
                        }]
                    },
                });
              },1000);
            });

