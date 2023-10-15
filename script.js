

//function navi(){
    navigator.geolocation.getCurrentPosition(function(position) {
        let coords = position.coords;
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
       // let path =  'https://www.openstreetmap.org/#map=18/' + latitude + '/' + longitude;
       // let link = document.querySelector('.link');
       // link.innerHTML = "<a href='" + path + "'>Посмотреть местоположение</a>";
       // console.log(coords);
        let map = new ol.Map({ 
            target: 'map',
            layers:[
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([latitude , longitude]),
                zoom: 10
        })
        
    });
     })
    // let b1 = document.querySelector('.b1');
    // b1.addEventListener('click',navi);
    