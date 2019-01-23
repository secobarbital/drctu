// Created by iWeb 2.0.4 local-build-20150414

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,182),url:'Backpack_article_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Backpack_article_files/stroke_1.png'},{rect:new IWRect(5,-5,136,10),url:'Backpack_article_files/stroke_2.png'},{rect:new IWRect(141,-5,11,10),url:'Backpack_article_files/stroke_3.png'},{rect:new IWRect(141,5,11,182),url:'Backpack_article_files/stroke_4.png'},{rect:new IWRect(141,187,11,10),url:'Backpack_article_files/stroke_5.png'},{rect:new IWRect(5,187,136,10),url:'Backpack_article_files/stroke_6.png'},{rect:new IWRect(-5,187,10,10),url:'Backpack_article_files/stroke_7.png'}],new IWSize(146,192))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Backpack_article_files/Backpack_articleMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Backpack_article_files','shapeimage_2','0');fixupIECSS3Opacity('id4');fixupIECSS3Opacity('id5');applyEffects()}
function onPageUnload()
{Widget.onunload();}
