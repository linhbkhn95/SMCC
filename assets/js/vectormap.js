$(function(){
                $('#map').vectorMap({
                    map: 'vietnam',
                    backgroundColor: "transparent",
                    onRegionClick:function(event, code){
                        var name = (code);
                        localStorage.setItem('city_id', code);

                        // $('id_city').text('test');

                    },
                    zoomOnScroll: false,
                    zoomButtons : false,
                    regionStyle: {
                        initial: {
                            fill: '#00398f',
                        },

                    },
                    series: {
                        regions: [{
                            attribute: 'fill',
                            normalizeFunction: 'polynomial'
                        }]
                    },
                });
            });