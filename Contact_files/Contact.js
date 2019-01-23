// Created by iWeb 2.0.4 local-build-20150122

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,177),url:'Contact_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Contact_files/stroke_1.png'},{rect:new IWRect(5,-5,271,10),url:'Contact_files/stroke_2.png'},{rect:new IWRect(276,-5,11,10),url:'Contact_files/stroke_3.png'},{rect:new IWRect(276,5,11,177),url:'Contact_files/stroke_4.png'},{rect:new IWRect(276,182,11,10),url:'Contact_files/stroke_5.png'},{rect:new IWRect(5,182,271,10),url:'Contact_files/stroke_6.png'},{rect:new IWRect(-5,182,10,10),url:'Contact_files/stroke_7.png'}],new IWSize(282,187))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Contact_files/ContactMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
