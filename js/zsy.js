/**
 * Created by uid on 2016/4/30.
 */

    $(function () {
        var ie6 = document.all;
        var dv = $('#nav'), st;
        dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
        $(window).scroll(function () {
            st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (st > parseInt(dv.attr('otop'))) {
                if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                    dv.css({ position: 'absolute', top: st });
                }
                else if (dv.css('position') != 'fixed') dv.css({ 'position': 'fixed', top: 0 });
            } else if (dv.css('position') != 'static') dv.css({ 'position': 'static' });
        });

        //导航点击状态切换
        $("#myNav li a").click($(this).addClass("active").siblings().removeClass("active"))

        //右悬浮侧栏效果
        if(screen.width <= 1024) {
            document.getElementById("rightsead").style.display = "none";
        }

    });


