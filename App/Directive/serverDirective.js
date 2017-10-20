/**
 * Created by ∞◊»„»„ on 2017/10/19.
 */
app.directive('server',function($timeout){
    return{
        restrict:'EA',
        templateUrl:'App/View/temp/_server.html',
        controller:'serverController',
        link:function(){
            $timeout(function(){
                var swiper=new Swiper(".banner",{
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    centeredSlides: true,
                    autoplay: 1000
                });
                var myScroll = new iScroll("iscroll",{
                    //scrollX: true,
                    //scrollY: false
                });

            },0);
        }
    }
})