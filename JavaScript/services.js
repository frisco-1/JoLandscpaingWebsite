$(function(){
  $("#BtnLandDesign").click(function(){
    $("#LandDesign").collapse("show");
    $("#GardenDesign").collapse("hide");
    $("#TreeTrimming").collapse("hide");
    $("#LandMain").collapse("hide");
    $("#PressureClean").collapse("hide");
    $("#Pavers").collapse("hide");
    $("#Bobcat").collapse("hide");
    $("#CustomWater").collapse("hide");
  });

  $("#BtnGardenDesign").click(function(){
    $("#LandDesign").collapse("hide");
    $("#GardenDesign").collapse("show");
    $("#TreeTrimming").collapse("hide");
    $("#LandMain").collapse("hide");
    $("#PressureClean").collapse("hide");
    $("#Pavers").collapse("hide");
    $("#Bobcat").collapse("hide");
    $("#CustomWater").collapse("hide");
  });

  $("#BtnTreeTrimming").click(function(){
    $("#LandDesign").collapse("hide");
    $("#GardenDesign").collapse("hide");
    $("#TreeTrimming").collapse("show");
    $("#LandMain").collapse("hide");
    $("#PressureClean").collapse("hide");
    $("#Pavers").collapse("hide");
    $("#Bobcat").collapse("hide");
    $("#CustomWater").collapse("hide");
  });

  $("#BtnLandMain").click(function(){
    $("#LandDesign").collapse("hide");
    $("#GardenDesign").collapse("hide");
    $("#TreeTrimming").collapse("hide");
    $("#LandMain").collapse("show");
    $("#PressureClean").collapse("hide");
    $("#Pavers").collapse("hide");
    $("#Bobcat").collapse("hide");
    $("#CustomWater").collapse("hide");
  });

  $("#BtnPressureClean").click(function(){
    $("#LandDesign").collapse("hide");
    $("#GardenDesign").collapse("hide");
    $("#TreeTrimming").collapse("hide");
    $("#LandMain").collapse("hide");
    $("#PressureClean").collapse("show");
    $("#Pavers").collapse("hide");
    $("#Bobcat").collapse("hide");
    $("#CustomWater").collapse("hide");
  });

  $("#BtnPavers").click(function(){
    $("#LandDesign").collapse("hide");
    $("#GardenDesign").collapse("hide");
    $("#TreeTrimming").collapse("hide");
    $("#LandMain").collapse("hide");
    $("#PressureClean").collapse("hide");
    $("#Pavers").collapse("show");
    $("#Bobcat").collapse("hide");
    $("#CustomWater").collapse("hide");
  });

  $("#BtnBobcat").click(function(){
    $("#LandDesign").collapse("hide");
    $("#GardenDesign").collapse("hide");
    $("#TreeTrimming").collapse("hide");
    $("#LandMain").collapse("hide");
    $("#PressureClean").collapse("hide");
    $("#Pavers").collapse("hide");
    $("#Bobcat").collapse("show");
    $("#CustomWater").collapse("hide");
  });

  $("#BtnCustomWater").click(function(){
    $("#LandDesign").collapse("hide");
    $("#GardenDesign").collapse("hide");
    $("#TreeTrimming").collapse("hide");
    $("#LandMain").collapse("hide");
    $("#PressureClean").collapse("hide");
    $("#Pavers").collapse("hide");
    $("#Bobcat").collapse("hide");
    $("#CustomWater").collapse("show");
  });
  

})