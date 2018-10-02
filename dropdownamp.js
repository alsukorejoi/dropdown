body,html{margin:0;}
*,*:before,*:after{box-sizing:border-box;}
.nav-mobile{background:#446CB3;color:#FFF;padding:0;margin:0;cursor:auto;font-size:18px;list-style-type:none;box-shadow:0 5px 5px -5px #333;}
.nav-mobile:after{content:"";display:table;clear:both;}
.nav-mobile svg{height:45px;width:65px;padding:9px;}
.nav-mobile svg path{fill:#fff;}
.nav-mobile svg.icon-close{display:none;padding:15px;}
.nav-mobile li{width:100%;height:45px;line-height:46px;text-align:center;float:left;}
.nav-mobile li a{display:block;color:#333;width:100%;height:100%;text-decoration:none;}
.nav-mobile .menu-button{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;cursor:pointer;display:block;}
.nav-mobile .menu-button:after{opacity:0;top:45px;content:"";width:100vw;display:block;position:fixed;height:100vh;background:rgba(0,0,0,0.5);content:"";pointer-events:none;transition:opacity 0.2s cubic-bezier(0,0,0.3,1);transition-delay:0.1s;}
.nav-mobile #menu-toggle{display:none;}
.nav-mobile #menu-toggle.active ~ .menu-button .icon-close,.nav-mobile #menu-toggle:checked ~ .menu-button .icon-close{display:block;}
.nav-mobile #menu-toggle.active ~ .menu-button .icon-open,.nav-mobile #menu-toggle:checked ~ .menu-button .icon-open{display:none;}
.nav-mobile #menu-toggle.active ~ .menu-button:after,.nav-mobile #menu-toggle:checked ~ .menu-button:after{opacity:1;pointer-events:auto;transition:opacity 0.3s cubic-bezier(0,0,0.3,1);}
.nav-mobile #menu-toggle.active ~ .menu-sidebar,.nav-mobile #menu-toggle:checked ~ .menu-sidebar{transform:translateX(0);transition:transform 0.3s cubic-bezier(0,0,0.3,1);}
.nav-mobile .menu-container{width:65px;float:left;cursor:pointer;position:absolute;}
.nav-mobile .menu-container .menu-sidebar{box-shadow:5px 0 5px -5px #333;display:block;width:65vw;bottom:0;background:white;color:#333;position:fixed;transform:translateX(-405px);transition:transform 0.3s cubic-bezier(0,0,0.3,1);top:45px;z-index:2;list-style-type:none;padding:0;max-width:400px;}
.nav-mobile .menu-container .menu-sidebar .arrow{position:absolute;line-height:50px;font-size:32px;color:#555;top:0;z-index:0;}
.nav-mobile .menu-container .menu-sidebar .arrow.left{left:25px;}
.nav-mobile .menu-container .menu-sidebar .arrow.right{right:25px;}
.nav-mobile .menu-container .menu-sidebar li{height:55px;line-height:55px;font-size:16px;text-align:left;position:relative;border-bottom:1px solid rgba(0,0,0,0.1);padding-left:20px;}
.nav-mobile .menu-container .menu-sidebar li:hover{background:#eee;}
.nav-mobile .menu-container .menu-sidebar li .menu-sub{position:fixed;top:0;right:0;bottom:0;width:0;overflow:hidden;background:white;visibility:hidden;transition:all 0.3s cubic-bezier(0,0,0.3,1);border-left:1px solid #ccc;list-style-type:none;padding:0;margin:0;z-index:2;max-width:400px;}
.nav-mobile .menu-container .menu-sidebar li .menu-sub li{overflow:hidden;}
.nav-mobile .menu-container .menu-sidebar li .menu-sub .menu-sub-title{padding-left:50px;}
.nav-mobile .menu-container .menu-sidebar li .submenu-label{cursor:pointer;width:100%;height:100%;display:block;}
.nav-mobile .menu-container .menu-sidebar li .submenu-toggle{display:none;}
.nav-mobile .menu-container .menu-sidebar li .submenu-toggle.active ~ .menu-sub,.nav-mobile .menu-container .menu-sidebar li .submenu-toggle:checked ~ .menu-sub{width:65vw;visibility:visible;z-index:1;transition:width 0.35s cubic-bezier(0,0,0.3,1);}