/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 1. 项目名称：ACY稀万国际后台管理中心
 2. 页面名称：联系我们
 3. 作者：penny.yu@acyfx.com
 4. 备注：对api的依赖：jQuery
 -----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function contactUs() {
    //焦点图
    this.slider();
};
//焦点图
contactUs.prototype.slider = function () {
    $(".innercon .save-infor button").on('click', function (event) {
        $(".innercon .innercon-from").hide();
        $(".innercon .succeed-status").show();
    })

}

$(function () {
    new contactUs();
})

