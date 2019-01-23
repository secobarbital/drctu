// Created by iWeb 2.0.4 local-build-20150122

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,132),url:'Articles_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Articles_files/stroke_1.png'},{rect:new IWRect(5,-5,204,10),url:'Articles_files/stroke_2.png'},{rect:new IWRect(209,-5,11,10),url:'Articles_files/stroke_3.png'},{rect:new IWRect(209,5,11,132),url:'Articles_files/stroke_4.png'},{rect:new IWRect(209,137,11,10),url:'Articles_files/stroke_5.png'},{rect:new IWRect(5,137,204,10),url:'Articles_files/stroke_6.png'},{rect:new IWRect(-5,137,10,10),url:'Articles_files/stroke_7.png'}],new IWSize(214,142))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Articles_files/ArticlesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
