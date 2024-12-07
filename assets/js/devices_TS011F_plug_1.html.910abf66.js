"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84976],{20896:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>l});var i=o(6254);const n={},a=(0,o(39583).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[26]||(t[26]=(0,i.Lk)("h1",{id:"tuya-ts011f-plug-1",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-ts011f-plug-1"},[(0,i.Lk)("span",null,"Tuya TS011F_plug_1")])],-1)),(0,i.Lk)("table",null,[t[7]||(t[7]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TS011F_plug_1")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Smart plug (with power monitoring)")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"switch (state), countdown, power_outage_memory, indicator_mode, power, current, voltage, energy, lock (state), linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS011F_plug_1.png",alt:"Tuya TS011F_plug_1"})])],-1)),t[6]||(t[6]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"White-label"),(0,i.Lk)("td",null,"LELLKI TS011F_plug, Neo NAS-WR01B, BlitzWolf BW-SHP15, BlitzWolf BW-SHP13, MatSee Plus PJ-ZSW01, MODEMIX MOD037, MODEMIX MOD048, Coswall CS-AJ-DE2U-ZG-11, Aubess TS011F_plug_1")],-1))])]),t[27]||(t[27]=(0,i.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,i.Lk)("span",null,"Notes")])],-1)),t[28]||(t[28]=(0,i.Lk)("h3",{id:"issues-with-device-turning-off",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#issues-with-device-turning-off"},[(0,i.Lk)("span",null,"Issues with device turning off")])],-1)),(0,i.Lk)("p",null,[t[9]||(t[9]=(0,i.Lk)("a",{href:"https://github.com/Koenkk/zigbee2mqtt/issues/11648",target:"_blank",rel:"noopener noreferrer"},"It's been reported by several people that this plug turns off randomly",-1)),t[10]||(t[10]=(0,i.eW)(".")),t[11]||(t[11]=(0,i.Lk)("br",null,null,-1)),t[12]||(t[12]=(0,i.eW)(" If you're affected by this, try if it can be solved by ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.eW)("installing an OTA update")]))),_:1}),t[13]||(t[13]=(0,i.eW)("."))]),t[29]||(t[29]=(0,i.Lk)("h3",{id:"broken-attribute-reporting-functionality",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#broken-attribute-reporting-functionality"},[(0,i.Lk)("span",null,"Broken attribute reporting functionality")])],-1)),t[30]||(t[30]=(0,i.Lk)("p",null,[(0,i.eW)("Starting with firmware version 1.0.5 (which comes pre-flashed on plugs produced since Q4 2021) core functionality on this plug is broken. TuYa has disabled the automatic reporting of power, voltage and current values meaning they need to be polled instead. The poll interval can be controlled through the "),(0,i.Lk)("code",null,"measurement_poll_interval"),(0,i.eW)(" option.")],-1)),(0,i.Lk)("p",null,[t[15]||(t[15]=(0,i.eW)("If your plug is affected, it will be detected as ")),(0,i.bF)(o,{to:"/devices/TS011F_plug_3.html"},{default:(0,i.k6)((()=>t[14]||(t[14]=[(0,i.eW)("TS011F_plug_3")]))),_:1}),t[16]||(t[16]=(0,i.eW)(" instead of ")),t[17]||(t[17]=(0,i.Lk)("code",null,"TS011F_plug_1",-1)),t[18]||(t[18]=(0,i.eW)("."))]),t[31]||(t[31]=(0,i.Fv)('<h3 id="broken-attribute-reporting-functionality-in-devices-sold-as-bw-shp13" tabindex="-1"><a class="header-anchor" href="#broken-attribute-reporting-functionality-in-devices-sold-as-bw-shp13"><span>Broken attribute reporting functionality in devices sold as BW-SHP13</span></a></h3><p>In 2022, BlitzWolf started to sell BW-SHP13 that identify as <code>_TZ3000_amdymr7l</code>. Those devices report power, current and voltage unreliably: Changes in any of those metrics sometimes take a few minutes before being reported and constant loads are reported as 0 for a few minutes just to return to their expected values a few minutes later. There is no known workaround for that behaviour.</p><h3 id="reset-energy" tabindex="-1"><a class="header-anchor" href="#reset-energy"><span>Reset energy</span></a></h3><p>To reset <code>Sum of consumed energy</code>, use the Dev console and execute:<br><code>Endpoint</code>: <code>1</code><br><code>Cluster</code>: <code>0x00</code><br><code>Command</code>: <code>0</code><br><code>Payload</code>: (don&#39;t change this)</p><p>Next time the plug gets polled, <code>Sum of consumed energy</code> will start from zero again.</p><h3 id="reset-lock" tabindex="-1"><a class="header-anchor" href="#reset-lock"><span>Reset lock</span></a></h3><p>To reset <code>Child Lock</code> without Z2M, quickly press the physical button 4 times</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Pair this device with a long press (5 seconds) on the on/off button. The button will flash blue to indicate it&#39;s in pairing mode. When the blue flashing stops it should be paired and the led will turn solid red. If the led is solid blue, the device is not paired or paring was not successful.</p><h3 id="alternative-firmware" tabindex="-1"><a class="header-anchor" href="#alternative-firmware"><span>Alternative firmware</span></a></h3>',10)),(0,i.Lk)("p",null,[t[20]||(t[20]=(0,i.eW)("An alternative firmware version can be installed by creating a custom my_index.json file and setting zigbee_ota_override_index_location as described in the ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html#local-ota-index-and-firmware-files"},{default:(0,i.k6)((()=>t[19]||(t[19]=[(0,i.eW)("guide")]))),_:1}),t[21]||(t[21]=(0,i.eW)(". This firmware can be used if the plug automatically turns off indeterminably or when the overvoltage protection from later versions is unwanted. To use v1.0.13 use the following json file:"))]),t[32]||(t[32]=(0,i.Fv)('<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[</span>\n<span class="line">    {</span>\n<span class="line">        &quot;fileVersion&quot;: 77,</span>\n<span class="line">        &quot;fileSize&quot;: 307682,</span>\n<span class="line">        &quot;manufacturerCode&quot;: 4417,</span>\n<span class="line">        &quot;imageType&quot;: 54179,</span>\n<span class="line">        &quot;sha512&quot;: &quot;97ea8413e8ab662f2bebf3b013b3030754cbc2c0744b91b14741fff17a2d8d99e7088aa22a3b6e43b3595ccd65433f96d32516fc057fddcc13a816c921af8c97&quot;,</span>\n<span class="line">        &quot;url&quot;: &quot;https://github.com/Koenkk/zigbee-OTA/raw/master/images/Telink/1654157434-oem_zg_tl8258_plug_OTA_1.0.13.bin&quot;</span>\n<span class="line">    }</span>\n<span class="line">]</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',2)),(0,i.Lk)("p",null,[t[23]||(t[23]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[22]||(t[22]=[(0,i.eW)("OTA updates")]))),_:1}),t[24]||(t[24]=(0,i.eW)("."))]),t[33]||(t[33]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[25]||(t[25]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[34]||(t[34]=(0,i.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="countdown-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-numeric"><span>Countdown (numeric)</span></a></h3><p>Countdown to turn device off after a certain time. Value can be found in the published state on the <code>countdown</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;countdown&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>s</code>.</p><h3 id="power-outage-memory-enum" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-enum"><span>Power outage memory (enum)</span></a></h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum"><span>Indicator mode (enum)</span></a></h3><p>LED indicator mode. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>off/on</code>, <code>on/off</code>, <code>on</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock"><span>Child lock (lock)</span></a></h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22))])}]]),l=JSON.parse('{"path":"/devices/TS011F_plug_1.html","title":"Tuya TS011F_plug_1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS011F_plug_1 control via MQTT","description":"Integrate your Tuya TS011F_plug_1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Issues with device turning off","slug":"issues-with-device-turning-off","link":"#issues-with-device-turning-off","children":[]},{"level":3,"title":"Broken attribute reporting functionality","slug":"broken-attribute-reporting-functionality","link":"#broken-attribute-reporting-functionality","children":[]},{"level":3,"title":"Broken attribute reporting functionality in devices sold as BW-SHP13","slug":"broken-attribute-reporting-functionality-in-devices-sold-as-bw-shp13","link":"#broken-attribute-reporting-functionality-in-devices-sold-as-bw-shp13","children":[]},{"level":3,"title":"Reset energy","slug":"reset-energy","link":"#reset-energy","children":[]},{"level":3,"title":"Reset lock","slug":"reset-lock","link":"#reset-lock","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Alternative firmware","slug":"alternative-firmware","link":"#alternative-firmware","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Countdown (numeric)","slug":"countdown-numeric","link":"#countdown-numeric","children":[]},{"level":3,"title":"Power outage memory (enum)","slug":"power-outage-memory-enum","link":"#power-outage-memory-enum","children":[]},{"level":3,"title":"Indicator mode (enum)","slug":"indicator-mode-enum","link":"#indicator-mode-enum","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733428931000},"filePathRelative":"devices/TS011F_plug_1.md"}')}}]);