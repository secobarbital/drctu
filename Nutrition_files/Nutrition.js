// Created by iWeb 2.0.4 local-build-20150414

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,306),url:'Nutrition_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Nutrition_files/stroke_1.png'},{rect:new IWRect(5,-5,201,10),url:'Nutrition_files/stroke_2.png'},{rect:new IWRect(206,-5,10,10),url:'Nutrition_files/stroke_3.png'},{rect:new IWRect(206,5,10,306),url:'Nutrition_files/stroke_4.png'},{rect:new IWRect(206,311,10,11),url:'Nutrition_files/stroke_5.png'},{rect:new IWRect(5,311,201,11),url:'Nutrition_files/stroke_6.png'},{rect:new IWRect(-5,311,10,11),url:'Nutrition_files/stroke_7.png'}],new IWSize(211,316))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Nutrition_files/NutritionMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id5');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
