// Created by iWeb 2.0.4 local-build-20150414

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,208),url:'resources_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'resources_files/stroke_1.png'},{rect:new IWRect(5,-5,305,10),url:'resources_files/stroke_2.png'},{rect:new IWRect(310,-5,11,10),url:'resources_files/stroke_3.png'},{rect:new IWRect(310,5,11,208),url:'resources_files/stroke_4.png'},{rect:new IWRect(310,213,11,10),url:'resources_files/stroke_5.png'},{rect:new IWRect(5,213,305,10),url:'resources_files/stroke_6.png'},{rect:new IWRect(-5,213,10,10),url:'resources_files/stroke_7.png'}],new IWSize(316,218))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('resources_files/resourcesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
