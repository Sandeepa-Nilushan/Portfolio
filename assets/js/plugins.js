
/**
 * mailtoui - A simple way to enhance your mailto links with a convenient user interface.
 * @version v1.0.3
 * @link https://mailtoui.com
 * @author Mario Rodriguez - https://twitter.com/mariordev
 * @license MIT
 */
var mailtouiApp=mailtouiApp||{};!function(t){var o=document.getElementsByTagName("html")[0],e=document.getElementsByTagName("body")[0],i=null,n=null,l='<svg viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentColor" stroke="currentColor"><path data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" d="M5.704,2.979 c0.694,0.513,1.257,1.164,1.767,2.02C7.917,5.746,8.908,7.826,8,9c-1.027,1.328-4,1.776-4,3c0,0.921,1.304,1.972,2,3 c1.047,1.546,0.571,3.044,0,4c-0.296,0.496-0.769,0.92-1.293,1.234" stroke-linecap="butt"/> <path data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" d="M20.668,5.227 C18.509,6.262,15.542,6.961,15,7c-1.045,0.075-1.2-0.784-2-2c-0.6-0.912-2-2.053-2-3c0-0.371,0.036-0.672,0.131-0.966" stroke-linecap="butt"/> <circle fill="none" stroke="currentColor" stroke-miterlimit="10" cx="12" cy="12" r="11"/> <path data-cap="butt" data-color="color-2" fill="none" stroke-miterlimit="10" d="M19.014,12.903 C19.056,15.987,15.042,19.833,13,19c-1.79-0.73-0.527-2.138-0.986-6.097c-0.191-1.646,1.567-3,3.5-3S18.992,11.247,19.014,12.903z" stroke-linecap="butt"/></g></svg>',a='<svg viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke="currentColor"><polyline fill="none" stroke="currentColor" stroke-miterlimit="10" points="20,4 22,4 22,23 2,23 2,4 4,4 "/> <path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M14,3c0-1.105-0.895-2-2-2 s-2,0.895-2,2H7v4h10V3H14z"/> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="7" y1="11" x2="17" y2="11"/> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="7" y1="15" x2="17" y2="15"/> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="7" y1="19" x2="11" y2="19"/></g></svg>',r=new Object;r.linkClass="mailtoui",r.autoClose=!0,r.disableOnMobile=!0,r.title="Compose new email with",r.buttonText1="Gmail in browser",r.buttonText2="Outlook in browser",r.buttonText3="Yahoo in browser",r.buttonText4="Default email app",r.buttonIcon1=l,r.buttonIcon2=l,r.buttonIcon3=l,r.buttonIcon4='<svg viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="currentColor" stroke="currentColor"><line data-color="color-2" fill="none" stroke-miterlimit="10" x1="5" y1="6" x2="6" y2="6"/> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="10" y1="6" x2="11" y2="6"/> <line data-color="color-2" fill="none" stroke-miterlimit="10" x1="15" y1="6" x2="19" y2="6"/> <line fill="none" stroke="currentColor" stroke-miterlimit="10" x1="1" y1="10" x2="23" y2="10"/> <rect x="1" y="2" fill="none" stroke="currentColor" stroke-miterlimit="10" width="22" height="20"/></g></svg>',r.buttonIconCopy=a,r.buttonTextCopy="Copy",r.buttonTextCopyAction="Copied!";var c=0,s="auto";t.buildStyleTag=function(){var o=document.createElement("style"),e=".mailtoui-modal{background-color:#000;background-color:rgba(0,0,0,.4);bottom:0;color:#303131;display:none;height:100%;left:0;margin:0;padding:0;position:fixed;right:0;top:0;width:100%;z-index:1000}.mailtoui-modal-content{-webkit-animation:mailtoui-appear .4s;animation:mailtoui-appear .4s;background-color:#f1f5f8;border-radius:8px;bottom:auto;-webkit-box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);left:50%;max-height:calc(100% - 100px);overflow:auto;padding:0;position:fixed;right:-45%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.mailtoui-modal-content:focus,.mailtoui-modal-content:hover{overflow-y:auto}@media only screen and (min-width:768px){.mailtoui-modal-content{right:auto}}.mailtoui-modal-head{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;clear:both;display:-webkit-box;display:-ms-flexbox;display:flex;min-width:0;padding:10px 20px}.mailtoui-modal-title{color:#303131;-webkit-box-flex:1;-ms-flex:1;flex:1;font-family:sans-serif;font-size:120%;font-weight:700;margin:0;overflow:hidden;padding:0;text-overflow:ellipsis;white-space:nowrap}.mailtoui-modal-close{color:#aaa;-webkit-box-flex:initial;-ms-flex:initial;flex:initial;font-size:38px;margin-left:20px;position:relative;text-align:right;text-decoration:none;top:-4px}.mailtoui-modal-close:focus,.mailtoui-modal-close:hover{color:#000;cursor:pointer;font-weight:700;outline:0}.mailtoui-modal-body{height:100%;padding:20px}.mailtoui-button{color:#333;text-decoration:none}.mailtoui-button:focus{outline:0}.mailtoui-button:focus .mailtoui-button-content{background-color:#555;color:#fff}.mailtoui-button-content{background-color:#fff;border:none;border-radius:8px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.18);box-shadow:0 2px 4px rgba(0,0,0,.18);margin-bottom:20px;overflow:hidden;padding:15px 20px;text-overflow:ellipsis;white-space:nowrap}.mailtoui-button-content:hover{background-color:#555;color:#fff}.mailtoui-button:last-child .mailtoui-button-content{margin-bottom:0}.mailtoui-button-icon{display:inline-block;font-weight:700;position:relative;top:4px}.mailtoui-button-icon svg{height:24px;width:24px}.mailtoui-button-text{display:inline-block;margin-left:5px;position:relative;top:-2px}.mailtoui-copy{border-radius:8px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.18);box-shadow:0 2px 4px rgba(0,0,0,.18);height:59px;margin-top:20px;position:relative}.mailtoui-button-copy{background-color:#fff;border:none;border-bottom-left-radius:8px;border-top-left-radius:8px;bottom:21px;color:#333;font-size:100%;height:100%;left:0;overflow:hidden;padding:15px 20px;position:absolute;text-overflow:ellipsis;top:0;white-space:nowrap;width:120px}.mailtoui-button-copy:focus,.mailtoui-button-copy:hover{background-color:#555;color:#fff;cursor:pointer;outline:0}.mailtoui-button-copy-clicked,.mailtoui-button-copy-clicked:focus,.mailtoui-button-copy-clicked:hover{background-color:#1f9d55;color:#fff}.mailtoui-button-copy-clicked .mailtoui-button-icon,.mailtoui-button-copy-clicked:focus .mailtoui-button-icon,.mailtoui-button-copy-clicked:hover .mailtoui-button-icon{display:none;visibility:hidden}.mailtoui-button-copy-clicked .mailtoui-button-text,.mailtoui-button-copy-clicked:focus .mailtoui-button-text,.mailtoui-button-copy-clicked:hover .mailtoui-button-text{color:#fff;top:2px}.mailtoui-email-address{background-color:#d8dcdf;border:none;border-radius:8px;-webkit-box-shadow:unset;box-shadow:unset;-webkit-box-sizing:border-box;box-sizing:border-box;color:#48494a;font-size:100%;height:100%;overflow:hidden;padding:20px 20px 20px 140px;text-overflow:ellipsis;white-space:nowrap;width:100%}.mailtoui-brand{color:#888;font-size:80%;margin-top:20px;text-align:center}.mailtoui-brand a{color:#888}.mailtoui-brand a:focus,.mailtoui-brand a:hover{font-weight:700;outline:0}.mailtoui-no-scroll{overflow:hidden;position:fixed;width:100%}.mailtoui-is-hidden{display:none;visibility:hidden}@-webkit-keyframes mailtoui-appear{0%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(0,0);transform:translate(-50%,-50%) scale(0,0)}100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1,1);transform:translate(-50%,-50%) scale(1,1)}}@keyframes mailtoui-appear{0%{opacity:0;-webkit-transform:translate(-50%,-50%) scale(0,0);transform:translate(-50%,-50%) scale(0,0)}100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1,1);transform:translate(-50%,-50%) scale(1,1)}}";return e=e.replace(/mailtoui/g,t.prefix()),o.setAttribute("id",t.prefix("-styles")),o.setAttribute("type","text/css"),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),o},t.embedStyleTag=function(){if(!t.styleTagExists()){var o=document.head.firstChild;document.head.insertBefore(t.buildStyleTag(),o)}},t.styleTagExists=function(){return!!document.getElementById(t.prefix("-styles"))},t.buildModal=function(){var o=document.createElement("div"),e=`<div class="mailtoui-modal-content"><div class="mailtoui-modal-head"><div id="mailtoui-modal-title" class="mailtoui-modal-title">${r.title}</div><a id="mailtoui-modal-close" class="mailtoui-modal-close" href="#">&times</a></div><div class="mailtoui-modal-body"><div class="mailtoui-clients"><a id="mailtoui-button-1" class="mailtoui-button" href="#"><div class="mailtoui-button-content"><span id="mailtoui-button-icon-1" class="mailtoui-button-icon">${r.buttonIcon1}</span> <span id="mailtoui-button-text-1" class="mailtoui-button-text">${r.buttonText1}</span></div></a><a id="mailtoui-button-2" class="mailtoui-button" href="#"><div class="mailtoui-button-content"><span id="mailtoui-button-icon-2" class="mailtoui-button-icon">${r.buttonIcon2}</span> <span id="mailtoui-button-text-2" class="mailtoui-button-text">${r.buttonText2}</span></div></a><a id="mailtoui-button-3" class="mailtoui-button" href="#"><div class="mailtoui-button-content"><span id="mailtoui-button-icon-3" class="mailtoui-button-icon">${r.buttonIcon3}</span> <span id="mailtoui-button-text-3" class="mailtoui-button-text">${r.buttonText3}</span></div></a><a id="mailtoui-button-4" class="mailtoui-button" href="#"><div class="mailtoui-button-content"><span id="mailtoui-button-icon-4" class="mailtoui-button-icon">${r.buttonIcon4}</span> <span id="mailtoui-button-text-4" class="mailtoui-button-text">${r.buttonText4}</span></div></a></div><div id="mailtoui-copy" class="mailtoui-copy"><div id="mailtoui-email-address" class="mailtoui-email-address"></div><button id="mailtoui-button-copy" class="mailtoui-button-copy" data-copytargetid="mailtoui-email-address"><span id="mailtoui-button-icon-copy" class="mailtoui-button-icon">${r.buttonIconCopy}</span> <span id="mailtoui-button-text-copy" class="mailtoui-button-text">${r.buttonTextCopy}</span></button></div><div class="mailtoui-brand"><a href="index.html" target="index.html">Powered by Sandeepa Nilushan</a></div></div></div>`;return e=e.replace(/mailtoui/g,t.prefix()),o.setAttribute("id",t.prefix("-modal")),o.setAttribute("class",t.prefix("-modal")),o.setAttribute("style","display: none;"),o.setAttribute("aria-hidden",!0),o.innerHTML=e,o},t.embedModal=function(){if(!t.modalExists()){var o=t.buildModal(),e=document.body.firstChild;document.body.insertBefore(o,e)}},t.modalExists=function(){return!!document.getElementById(t.prefix("-modal"))},t.getModal=function(o){return t.hydrateModal(o),document.getElementById(t.prefix("-modal"))},t.hydrateModal=function(o){var e=t.getEmail(o),i=t.getLinkField(o,"subject"),n=t.getLinkField(o,"cc"),l=t.getLinkField(o,"bcc"),a=t.getLinkField(o,"body");document.getElementById(t.prefix("-button-1")).href="https://mail.google.com/mail/?view=cm&fs=1&to="+e+"&su="+i+"&cc="+n+"&bcc="+l+"&body="+a,document.getElementById(t.prefix("-button-2")).href="https://outlook.office.com/owa/?path=/mail/action/compose&to="+e+"&subject="+i+"&body="+a,document.getElementById(t.prefix("-button-3")).href="https://compose.mail.yahoo.com/?to="+e+"&subject="+i+"&cc="+n+"&bcc="+l+"&body="+a,document.getElementById(t.prefix("-button-4")).href="mailto:"+e+"?subject="+i+"&cc="+n+"&bcc="+l+"&body="+a,document.getElementById(t.prefix("-email-address")).innerHTML=e,document.getElementById(t.prefix("-button-icon-1")).innerHTML=r.buttonIcon1,document.getElementById(t.prefix("-button-icon-2")).innerHTML=r.buttonIcon2,document.getElementById(t.prefix("-button-icon-3")).innerHTML=r.buttonIcon3,document.getElementById(t.prefix("-button-icon-4")).innerHTML=r.buttonIcon4,document.getElementById(t.prefix("-button-icon-copy")).innerHTML=r.buttonIconCopy,t.toggleHideCopyUi(e)},t.savePageScrollPosition=function(){c=window.pageYOffset,e.style.top=-c+"px"},t.restorePageScrollPosition=function(){window.scrollTo(0,c),e.style.top=0},t.saveScrollBehavior=function(){s=o.style.scrollBehavior,o.style.scrollBehavior="auto"},t.restoreScrollBehavior=function(){o.style.scrollBehavior=s},t.saveLastDocElementFocused=function(){n=document.activeElement},t.openModal=function(o){r.disableOnMobile&&t.isMobileDevice()||(o.preventDefault(),t.saveLastDocElementFocused(),t.savePageScrollPosition(),t.saveScrollBehavior(),t.displayModal(o),t.hideModalFromScreenReader(!1),t.enablePageScrolling(!1),t.modalFocus(),t.triggerEvent(i,"open"))},t.displayModal=function(o){var e=t.getParentElement(o.target,"a");(i=t.getModal(e)).style.display="block"},t.modalFocus=function(){i.focusableChildren=Array.from(i.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')),i.focusableChildren[1].focus()},t.closeModal=function(o){o.preventDefault(),t.hideModal(),t.enablePageScrolling(!0),t.restorePageScrollPosition(),t.restoreScrollBehavior(),t.docRefocus(),t.triggerEvent(i,"close")},t.hideModal=function(){t.hideModalFromScreenReader(!0),t.isDefined(i)&&(i.style.display="none")},t.hideModalFromScreenReader=function(o){t.isDefined(i)&&i.setAttribute("aria-hidden",o)},t.enablePageScrolling=function(i){i?(e.classList.remove(t.prefix("-no-scroll")),o.classList.remove(t.prefix("-no-scroll"))):(e.classList.add(t.prefix("-no-scroll")),o.classList.add(t.prefix("-no-scroll")))},t.docRefocus=function(){n.focus()},t.openClient=function(o,e){var i="_blank";t.isDefaultEmailAppButton(o)&&(i="_self"),window.open(o.href,i),t.triggerEvent(o,"compose"),r.autoClose&&t.closeModal(e)},t.isDefaultEmailAppButton=function(o){return o.id==t.prefix("-button-4")},t.getParentElement=function(t,o){for(;null!==t;){if(t.tagName.toUpperCase()==o.toUpperCase())return t;t=t.parentNode}return null},t.triggerEvent=function(t,o){var e=new Event(o);t.dispatchEvent(e)},t.isMobileDevice=function(){var t,o=!1;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(o=!0),o},t.listenForEvents=function(){t.listenForClickOnLink(),t.listenForClickOnClient(),t.listenForClickOnCopy(),t.listenForClickOnClose(),t.listenForClickOnWindow(),t.listenForKeys()},t.listenForClickOnLink=function(){for(var o=document.getElementsByClassName(t.prefix()),e=0;e<o.length;e++)o[e].addEventListener("click",function(o){t.openModal(o)},!1)},t.listenForClickOnClient=function(){for(var o=document.getElementsByClassName(t.prefix("-button")),e=0;e<o.length;e++)o[e].addEventListener("click",function(o){o.preventDefault(),o.stopPropagation();var e=t.getParentElement(o.target,"a");t.openClient(e,o)},!1)},t.listenForClickOnCopy=function(){document.getElementById(t.prefix("-button-copy")).addEventListener("click",function(o){t.copy(o)},!1)},t.listenForClickOnClose=function(){document.getElementById(t.prefix("-modal-close")).addEventListener("click",function(o){t.closeModal(o)},!1)},t.listenForClickOnWindow=function(){window.addEventListener("click",function(o){var e=o.target;null!==e&&e.classList.contains(t.prefix("-modal"))&&t.closeModal(o)},!1)},t.listenForKeys=function(){document.addEventListener("keydown",function(o){t.escapeModal(o),t.trapTabWithinModal(o)},!1)},t.escapeModal=function(o){27===o.keyCode&&t.closeModal(o)},t.trapTabWithinModal=function(t){if(9===t.keyCode&&null!==i){var o=document.activeElement,e=i.focusableChildren.length,n=i.focusableChildren.indexOf(o);t.shiftKey?0===n&&(t.preventDefault(),i.focusableChildren[e-1].focus()):n==e-1&&(t.preventDefault(),i.focusableChildren[0].focus())}},t.getLinks=function(){return document.getElementsByClassName(t.prefix())},t.splitLink=function(t){var o=t.href.replace("mailto:","").trim(),e=o.split("?",1);return null!==e&&e.length>0&&(e[1]=o.replace(e[0]+"?","").trim()),e},t.getLinkField=function(o,e){var i=t.splitLink(o),n="",l=[],a=[];null!==i&&i.length>0&&(n=i[1]),null!==n&&n.length>0&&(l=(n=n.replace("%20&%20","%20%26%20")).split("&"));for(var r=0;r<l.length;r++){l[r]=l[r].replace("%20=%20","%20%3D%20"),a=l[r].split("=");for(var c=0;c<a.length;c++)if(a[0]==e)return a[1]}return""},t.getEmail=function(o){var e=t.splitLink(o),i="";return null!==e&&e.length>0&&(i=e[0]),decodeURIComponent(i)},t.getClassHideCopyUi=function(){return t.prefix("-is-hidden")},t.toggleHideCopyUi=function(o){var e=document.getElementById(t.prefix("-copy"));0==o.length?e.classList.add(t.getClassHideCopyUi()):e.classList.remove(t.getClassHideCopyUi())},t.toggleCopyButton=function(){button=document.getElementById(t.prefix("-button-copy")),buttonText=document.getElementById(t.prefix("-button-text-copy")),buttonText.innerHTML=r.buttonTextCopyAction,button.classList.add(t.prefix("-button-copy-clicked")),setTimeout(function(){buttonText.innerHTML=r.buttonTextCopy,button.classList.remove(t.prefix("-button-copy-clicked"))},600)},t.copy=function(o){o.preventDefault();var e=t.getParentElement(o.target,"button").getAttribute("data-copytargetid"),i=document.getElementById(e),n=document.createRange();n.selectNodeContents(i);var l=window.getSelection();l.removeAllRanges(),l.addRange(n),document.execCommand("copy"),t.triggerEvent(i,"copy"),t.toggleCopyButton()},t.isiOSDevice=function(){return navigator.userAgent.match(/ipad|iphone/i)},t.setOptions=function(o){if(o)var e=JSON.stringify(o);else e=t.getOptionsFromScriptTag();if(e&&e.trim().length>0)for(var i in e=JSON.parse(e),r)e.hasOwnProperty(i)&&(r[i]=t.sanitizeUserOption(i,e[i]))},t.sanitizeUserOption=function(o,e){return t.stringContains(o,"icon")?t.validateSvg(o,e):t.isString(e)?t.stripHtml(e):e},t.validateSvg=function(o,e){t.getSvg(o,e).then(function(i){if(!t.stringIsSvg(i.responseText))throw new Error(o+": "+e+" is not an SVG file.");if(t.stringHasScript(i.responseText))throw new Error(o+": "+e+" is an invalid SVG file.");r[o]=i.responseText}).catch(function(t){r[o]="buttonIconCopy"==o?a:l,console.log(t)})},t.loadSvg=function(t,o){return new Promise((t,e)=>{var i=new XMLHttpRequest;i.open("GET",o,!0),i.onload=function(o){200==i.status?t(i):e(i)},i.send()})},t.getSvg=async function(o,e){return await t.loadSvg(o,e)},t.isString=function(t){return"string"==typeof t},t.stripHtml=function(t){return t.replace(/(<([^>]+)>)/g,"")},t.stringContains=function(t,o){return-1!==t.toLowerCase().indexOf(o.toLowerCase())},t.stringIsSvg=function(t){return t.startsWith("<svg")},t.stringHasScript=function(o){return t.stringContains(o,"<script")},t.isDefined=function(t){return void 0!==t},t.getOptionsFromScriptTag=function(){var t=document.getElementsByTagName("script");return t[t.length-1].getAttribute("data-options")},t.prefix=function(t=""){return r.linkClass+t},t.run=function(o=null){t.setOptions(o),t.embedModal(),t.embedStyleTag(),t.listenForEvents()}}(mailtouiApp),"undefined"!=typeof module&&void 0!==module.exports?module.exports={run:mailtouiApp.run}:mailtouiApp.run();

