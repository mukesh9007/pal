// Create viewer


viewer = pannellum.viewer('panorama', ﻿{

 
    "type": "equirectangular",
    "panorama": "https://demo.sirv.com/panoramas/civic.jpg",  
     "pitch": 2.3,
    "yaw": 15.4,
    "hfov": 120,
    //  "title": "Solitaire Animations",
    // "author": "Mukesh",
    "autoLoad": true,
    "autoRotate": -3,
    "autoRotateInactivityDelay":10000,
      "compass": true,
    "northOffset": 247.5,
    // "hotSpotDebug": true,
    "hotSpots": [
        {
            "pitch": 24.1,
            "yaw": 11.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Solitaire Infosys Mohali Punjab"
        },
            {
            "pitch": 314.9,
            "yaw": 12.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Housten Calling Housten"
        },
          {
            "pitch": 14.9,
            "yaw": -12.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Summer of 69 its Bryan ADAMS"
        },
          {
            "pitch": 114.9,
            "yaw": 52.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": " Troops have crossed the Tiger HILL ROGER THAT"
        },
          {
            "pitch": 214.9,
            "yaw": -342.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "GAMAA rays can penetrate steel"
        },
          {
            "pitch": 1454.9,
            "yaw": -32.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Zurik is fine Delhi is al ok"
        },
        {
            "pitch": -9.4,
            "yaw": 222.6,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Slinfy is the root"
        },
        {
            "pitch": -0.9,
            "yaw": 144.4,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Zabeen"
        },
               {
            "pitch": -0.9,
            "yaw": 14.4,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "TAJ IS MY PRESTIGE"
        },
            {
            "pitch": -17.9,
            "yaw": -784.4,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "TAJ IS MY PRESTIGE"
        }
    ]
});

viewer = pannellum.viewer('panorama2', ﻿{

 
    "type": "equirectangular",
    "panorama": "lake.jpg",  
     "pitch": 2.3,
    "yaw": 15.4,
    "hfov": 120,
     "title": "Solitaire Animations",
    "author": "Mukesh",
    "autoLoad": true,
    "autoRotate": -3,
    "autoRotateInactivityDelay":10000,
      "compass": true,
    "northOffset": 247.5,
    // "hotSpotDebug": true,
    "hotSpots": [
        {
            "pitch": 24.1,
            "yaw": 11.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Solitaire Infosys"
        },
            {
            "pitch": 314.9,
            "yaw": 12.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Frontend is Fine"
        },
          {
            "pitch": 14.9,
            "yaw": -12.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Summer of 69 its Bryan ADAMS"
        },
          {
            "pitch": 114.9,
            "yaw": 52.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "ROGER THAT"
        },
          {
            "pitch": 214.9,
            "yaw": -342.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "GAMAA CHECK"
        },
          {
            "pitch": 1454.9,
            "yaw": -32.5,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Zurik is fine"
        },
        {
            "pitch": -9.4,
            "yaw": 222.6,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Slinfy is the root"
        },
        {
            "pitch": -0.9,
            "yaw": 144.4,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "Zabeen"
        },
               {
            "pitch": -0.9,
            "yaw": 14.4,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "TAJ IS MY PRESTIGE"
        },
            {
            "pitch": -17.9,
            "yaw": -784.4,
            "cssClass": "custom-hotspot",
            "createTooltipFunc": hotspot,
            "createTooltipArgs": "TAJ IS MY PRESTIGE"
        }
    ]
});


// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}

    // $(document).ready(function() {
    //     $(".panorama").on("contextmenu",function(){
    //        return false;
    //     }); 

    // });
  
