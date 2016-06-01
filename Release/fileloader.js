
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'slideme.data';
    var REMOTE_PACKAGE_BASE = 'slideme.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
    var REMOTE_PACKAGE_SIZE = 177363892;
    var PACKAGE_UUID = '0aad389f-5c19-4585-a649-60cca96a7f49';
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'Il2CppData', true, true);
Module['FS_createPath']('/Il2CppData', 'Metadata', true, true);
Module['FS_createPath']('/', 'Resources', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 16476, 0, 0).open('GET', '/level0');
    new DataRequest(16476, 47584, 0, 0).open('GET', '/level1');
    new DataRequest(47584, 148364, 0, 0).open('GET', '/level10');
    new DataRequest(148364, 252808, 0, 0).open('GET', '/level11');
    new DataRequest(252808, 353588, 0, 0).open('GET', '/level12');
    new DataRequest(353588, 456204, 0, 0).open('GET', '/level13');
    new DataRequest(456204, 563624, 0, 0).open('GET', '/level14');
    new DataRequest(563624, 668108, 0, 0).open('GET', '/level15');
    new DataRequest(668108, 772224, 0, 0).open('GET', '/level16');
    new DataRequest(772224, 879644, 0, 0).open('GET', '/level17');
    new DataRequest(879644, 910752, 0, 0).open('GET', '/level18');
    new DataRequest(910752, 941852, 0, 0).open('GET', '/level19');
    new DataRequest(941852, 1043208, 0, 0).open('GET', '/level2');
    new DataRequest(1043208, 1074308, 0, 0).open('GET', '/level20');
    new DataRequest(1074308, 1179664, 0, 0).open('GET', '/level21');
    new DataRequest(1179664, 1290636, 0, 0).open('GET', '/level22');
    new DataRequest(1290636, 1405272, 0, 0).open('GET', '/level23');
    new DataRequest(1405272, 1519912, 0, 0).open('GET', '/level24');
    new DataRequest(1519912, 1632724, 0, 0).open('GET', '/level25');
    new DataRequest(1632724, 1752536, 0, 0).open('GET', '/level26');
    new DataRequest(1752536, 1871668, 0, 0).open('GET', '/level27');
    new DataRequest(1871668, 1989320, 0, 0).open('GET', '/level28');
    new DataRequest(1989320, 2120608, 0, 0).open('GET', '/level29');
    new DataRequest(2120608, 2215980, 0, 0).open('GET', '/level3');
    new DataRequest(2215980, 2343264, 0, 0).open('GET', '/level30');
    new DataRequest(2343264, 2470884, 0, 0).open('GET', '/level31');
    new DataRequest(2470884, 2605864, 0, 0).open('GET', '/level32');
    new DataRequest(2605864, 2737180, 0, 0).open('GET', '/level33');
    new DataRequest(2737180, 2870704, 0, 0).open('GET', '/level34');
    new DataRequest(2870704, 3002396, 0, 0).open('GET', '/level35');
    new DataRequest(3002396, 3137008, 0, 0).open('GET', '/level36');
    new DataRequest(3137008, 3239144, 0, 0).open('GET', '/level37');
    new DataRequest(3239144, 3346032, 0, 0).open('GET', '/level38');
    new DataRequest(3346032, 3452916, 0, 0).open('GET', '/level39');
    new DataRequest(3452916, 3559696, 0, 0).open('GET', '/level4');
    new DataRequest(3559696, 3666584, 0, 0).open('GET', '/level40');
    new DataRequest(3666584, 3773468, 0, 0).open('GET', '/level41');
    new DataRequest(3773468, 3880352, 0, 0).open('GET', '/level42');
    new DataRequest(3880352, 3991968, 0, 0).open('GET', '/level43');
    new DataRequest(3991968, 4098864, 0, 0).open('GET', '/level44');
    new DataRequest(4098864, 4205804, 0, 0).open('GET', '/level45');
    new DataRequest(4205804, 4317472, 0, 0).open('GET', '/level46');
    new DataRequest(4317472, 4433880, 0, 0).open('GET', '/level47');
    new DataRequest(4433880, 4540820, 0, 0).open('GET', '/level48');
    new DataRequest(4540820, 4647760, 0, 0).open('GET', '/level49');
    new DataRequest(4647760, 4746860, 0, 0).open('GET', '/level5');
    new DataRequest(4746860, 4853800, 0, 0).open('GET', '/level50');
    new DataRequest(4853800, 4960744, 0, 0).open('GET', '/level51');
    new DataRequest(4960744, 5081892, 0, 0).open('GET', '/level52');
    new DataRequest(5081892, 5184880, 0, 0).open('GET', '/level53');
    new DataRequest(5184880, 5287868, 0, 0).open('GET', '/level54');
    new DataRequest(5287868, 5396320, 0, 0).open('GET', '/level55');
    new DataRequest(5396320, 5523844, 0, 0).open('GET', '/level56');
    new DataRequest(5523844, 5626928, 0, 0).open('GET', '/level57');
    new DataRequest(5626928, 5746724, 0, 0).open('GET', '/level58');
    new DataRequest(5746724, 5864396, 0, 0).open('GET', '/level59');
    new DataRequest(5864396, 5963496, 0, 0).open('GET', '/level6');
    new DataRequest(5963496, 6084804, 0, 0).open('GET', '/level60');
    new DataRequest(6084804, 6198776, 0, 0).open('GET', '/level61');
    new DataRequest(6198776, 6323684, 0, 0).open('GET', '/level62');
    new DataRequest(6323684, 6443120, 0, 0).open('GET', '/level63');
    new DataRequest(6443120, 6578964, 0, 0).open('GET', '/level64');
    new DataRequest(6578964, 6703824, 0, 0).open('GET', '/level65');
    new DataRequest(6703824, 6826860, 0, 0).open('GET', '/level66');
    new DataRequest(6826860, 6951724, 0, 0).open('GET', '/level67');
    new DataRequest(6951724, 7078408, 0, 0).open('GET', '/level68');
    new DataRequest(7078408, 7175508, 0, 0).open('GET', '/level7');
    new DataRequest(7175508, 7278120, 0, 0).open('GET', '/level8');
    new DataRequest(7278120, 7380736, 0, 0).open('GET', '/level9');
    new DataRequest(7380736, 7460908, 0, 0).open('GET', '/mainData');
    new DataRequest(7460908, 7482179, 0, 0).open('GET', '/methods_pointedto_by_uievents.xml');
    new DataRequest(7482179, 23437367, 0, 0).open('GET', '/resources.assets');
    new DataRequest(23437367, 26319945, 0, 0).open('GET', '/resources.resource');
    new DataRequest(26319945, 44718045, 0, 0).open('GET', '/sharedassets0.assets');
    new DataRequest(44718045, 46265564, 0, 0).open('GET', '/sharedassets0.resource');
    new DataRequest(46265564, 51897488, 0, 0).open('GET', '/sharedassets1.assets');
    new DataRequest(51897488, 51906228, 0, 0).open('GET', '/sharedassets10.assets');
    new DataRequest(51906228, 54930448, 0, 0).open('GET', '/sharedassets11.assets');
    new DataRequest(54930448, 55787048, 0, 0).open('GET', '/sharedassets11.resource');
    new DataRequest(55787048, 55795716, 0, 0).open('GET', '/sharedassets12.assets');
    new DataRequest(55795716, 55804384, 0, 0).open('GET', '/sharedassets13.assets');
    new DataRequest(55804384, 55813052, 0, 0).open('GET', '/sharedassets14.assets');
    new DataRequest(55813052, 59038988, 0, 0).open('GET', '/sharedassets15.assets');
    new DataRequest(59038988, 59047656, 0, 0).open('GET', '/sharedassets16.assets');
    new DataRequest(59047656, 59056348, 0, 0).open('GET', '/sharedassets17.assets');
    new DataRequest(59056348, 59065040, 0, 0).open('GET', '/sharedassets18.assets');
    new DataRequest(59065040, 66351208, 0, 0).open('GET', '/sharedassets19.assets');
    new DataRequest(66351208, 66636976, 0, 0).open('GET', '/sharedassets2.assets');
    new DataRequest(66636976, 73923160, 0, 0).open('GET', '/sharedassets20.assets');
    new DataRequest(73923160, 81209412, 0, 0).open('GET', '/sharedassets21.assets');
    new DataRequest(81209412, 90737728, 0, 0).open('GET', '/sharedassets22.assets');
    new DataRequest(90737728, 90953356, 0, 0).open('GET', '/sharedassets23.assets');
    new DataRequest(90953356, 90959624, 0, 0).open('GET', '/sharedassets24.assets');
    new DataRequest(90959624, 90965916, 0, 0).open('GET', '/sharedassets25.assets');
    new DataRequest(90965916, 94127528, 0, 0).open('GET', '/sharedassets26.assets');
    new DataRequest(94127528, 94654804, 0, 0).open('GET', '/sharedassets26.resource');
    new DataRequest(94654804, 94754888, 0, 0).open('GET', '/sharedassets27.assets');
    new DataRequest(94754888, 94895196, 0, 0).open('GET', '/sharedassets28.assets');
    new DataRequest(94895196, 94955104, 0, 0).open('GET', '/sharedassets29.assets');
    new DataRequest(94955104, 125824956, 0, 0).open('GET', '/sharedassets3.assets');
    new DataRequest(125824956, 126346575, 0, 0).open('GET', '/sharedassets3.resource');
    new DataRequest(126346575, 131856299, 0, 0).open('GET', '/sharedassets30.assets');
    new DataRequest(131856299, 132840851, 0, 0).open('GET', '/sharedassets30.resource');
    new DataRequest(132840851, 132951823, 0, 0).open('GET', '/sharedassets31.assets');
    new DataRequest(132951823, 132958091, 0, 0).open('GET', '/sharedassets32.assets');
    new DataRequest(132958091, 132964383, 0, 0).open('GET', '/sharedassets33.assets');
    new DataRequest(132964383, 138564219, 0, 0).open('GET', '/sharedassets34.assets');
    new DataRequest(138564219, 139512052, 0, 0).open('GET', '/sharedassets34.resource');
    new DataRequest(139512052, 139518344, 0, 0).open('GET', '/sharedassets35.assets');
    new DataRequest(139518344, 139524612, 0, 0).open('GET', '/sharedassets36.assets');
    new DataRequest(139524612, 139530928, 0, 0).open('GET', '/sharedassets37.assets');
    new DataRequest(139530928, 145489260, 0, 0).open('GET', '/sharedassets38.assets');
    new DataRequest(145489260, 146030557, 0, 0).open('GET', '/sharedassets38.resource');
    new DataRequest(146030557, 146089997, 0, 0).open('GET', '/sharedassets39.assets');
    new DataRequest(146089997, 146098689, 0, 0).open('GET', '/sharedassets4.assets');
    new DataRequest(146098689, 146104609, 0, 0).open('GET', '/sharedassets40.assets');
    new DataRequest(146104609, 146110529, 0, 0).open('GET', '/sharedassets41.assets');
    new DataRequest(146110529, 146237069, 0, 0).open('GET', '/sharedassets42.assets');
    new DataRequest(146237069, 148090667, 0, 0).open('GET', '/sharedassets42.resource');
    new DataRequest(148090667, 148096587, 0, 0).open('GET', '/sharedassets43.assets');
    new DataRequest(148096587, 148102507, 0, 0).open('GET', '/sharedassets44.assets');
    new DataRequest(148102507, 148108427, 0, 0).open('GET', '/sharedassets45.assets');
    new DataRequest(148108427, 148234871, 0, 0).open('GET', '/sharedassets46.assets');
    new DataRequest(148234871, 148240791, 0, 0).open('GET', '/sharedassets47.assets');
    new DataRequest(148240791, 148246711, 0, 0).open('GET', '/sharedassets48.assets');
    new DataRequest(148246711, 148252631, 0, 0).open('GET', '/sharedassets49.assets');
    new DataRequest(148252631, 148355115, 0, 0).open('GET', '/sharedassets5.assets');
    new DataRequest(148355115, 148521763, 0, 0).open('GET', '/sharedassets50.assets');
    new DataRequest(148521763, 148527683, 0, 0).open('GET', '/sharedassets51.assets');
    new DataRequest(148527683, 148533603, 0, 0).open('GET', '/sharedassets52.assets');
    new DataRequest(148533603, 148539523, 0, 0).open('GET', '/sharedassets53.assets');
    new DataRequest(148539523, 157821003, 0, 0).open('GET', '/sharedassets54.assets');
    new DataRequest(157821003, 159047990, 0, 0).open('GET', '/sharedassets54.resource');
    new DataRequest(159047990, 159054282, 0, 0).open('GET', '/sharedassets55.assets');
    new DataRequest(159054282, 159060574, 0, 0).open('GET', '/sharedassets56.assets');
    new DataRequest(159060574, 159066842, 0, 0).open('GET', '/sharedassets57.assets');
    new DataRequest(159066842, 162012062, 0, 0).open('GET', '/sharedassets58.assets');
    new DataRequest(162012062, 162018354, 0, 0).open('GET', '/sharedassets59.assets');
    new DataRequest(162018354, 162027094, 0, 0).open('GET', '/sharedassets6.assets');
    new DataRequest(162027094, 162033386, 0, 0).open('GET', '/sharedassets60.assets');
    new DataRequest(162033386, 162039678, 0, 0).open('GET', '/sharedassets61.assets');
    new DataRequest(162039678, 164971586, 0, 0).open('GET', '/sharedassets62.assets');
    new DataRequest(164971586, 164977878, 0, 0).open('GET', '/sharedassets63.assets');
    new DataRequest(164977878, 164984170, 0, 0).open('GET', '/sharedassets64.assets');
    new DataRequest(164984170, 164990462, 0, 0).open('GET', '/sharedassets65.assets');
    new DataRequest(164990462, 168116446, 0, 0).open('GET', '/sharedassets66.assets');
    new DataRequest(168116446, 168510758, 0, 0).open('GET', '/sharedassets66.resource');
    new DataRequest(168510758, 168517098, 0, 0).open('GET', '/sharedassets67.assets');
    new DataRequest(168517098, 168523438, 0, 0).open('GET', '/sharedassets68.assets');
    new DataRequest(168523438, 168529778, 0, 0).open('GET', '/sharedassets69.assets');
    new DataRequest(168529778, 173614778, 0, 0).open('GET', '/sharedassets7.assets');
    new DataRequest(173614778, 173997028, 0, 0).open('GET', '/sharedassets7.resource');
    new DataRequest(173997028, 174005744, 0, 0).open('GET', '/sharedassets8.assets');
    new DataRequest(174005744, 174014484, 0, 0).open('GET', '/sharedassets9.assets');
    new DataRequest(174014484, 175286204, 0, 0).open('GET', '/Il2CppData/Metadata/global-metadata.dat');
    new DataRequest(175286204, 176861240, 0, 0).open('GET', '/Resources/unity_default_resources');
    new DataRequest(176861240, 177363892, 0, 0).open('GET', '/Resources/unity_builtin_extra');

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
      // Reuse the bytearray from the XHR as the source for file reads.
      DataRequest.prototype.byteArray = byteArray;
          DataRequest.prototype.requests["/level0"].onload();
          DataRequest.prototype.requests["/level1"].onload();
          DataRequest.prototype.requests["/level10"].onload();
          DataRequest.prototype.requests["/level11"].onload();
          DataRequest.prototype.requests["/level12"].onload();
          DataRequest.prototype.requests["/level13"].onload();
          DataRequest.prototype.requests["/level14"].onload();
          DataRequest.prototype.requests["/level15"].onload();
          DataRequest.prototype.requests["/level16"].onload();
          DataRequest.prototype.requests["/level17"].onload();
          DataRequest.prototype.requests["/level18"].onload();
          DataRequest.prototype.requests["/level19"].onload();
          DataRequest.prototype.requests["/level2"].onload();
          DataRequest.prototype.requests["/level20"].onload();
          DataRequest.prototype.requests["/level21"].onload();
          DataRequest.prototype.requests["/level22"].onload();
          DataRequest.prototype.requests["/level23"].onload();
          DataRequest.prototype.requests["/level24"].onload();
          DataRequest.prototype.requests["/level25"].onload();
          DataRequest.prototype.requests["/level26"].onload();
          DataRequest.prototype.requests["/level27"].onload();
          DataRequest.prototype.requests["/level28"].onload();
          DataRequest.prototype.requests["/level29"].onload();
          DataRequest.prototype.requests["/level3"].onload();
          DataRequest.prototype.requests["/level30"].onload();
          DataRequest.prototype.requests["/level31"].onload();
          DataRequest.prototype.requests["/level32"].onload();
          DataRequest.prototype.requests["/level33"].onload();
          DataRequest.prototype.requests["/level34"].onload();
          DataRequest.prototype.requests["/level35"].onload();
          DataRequest.prototype.requests["/level36"].onload();
          DataRequest.prototype.requests["/level37"].onload();
          DataRequest.prototype.requests["/level38"].onload();
          DataRequest.prototype.requests["/level39"].onload();
          DataRequest.prototype.requests["/level4"].onload();
          DataRequest.prototype.requests["/level40"].onload();
          DataRequest.prototype.requests["/level41"].onload();
          DataRequest.prototype.requests["/level42"].onload();
          DataRequest.prototype.requests["/level43"].onload();
          DataRequest.prototype.requests["/level44"].onload();
          DataRequest.prototype.requests["/level45"].onload();
          DataRequest.prototype.requests["/level46"].onload();
          DataRequest.prototype.requests["/level47"].onload();
          DataRequest.prototype.requests["/level48"].onload();
          DataRequest.prototype.requests["/level49"].onload();
          DataRequest.prototype.requests["/level5"].onload();
          DataRequest.prototype.requests["/level50"].onload();
          DataRequest.prototype.requests["/level51"].onload();
          DataRequest.prototype.requests["/level52"].onload();
          DataRequest.prototype.requests["/level53"].onload();
          DataRequest.prototype.requests["/level54"].onload();
          DataRequest.prototype.requests["/level55"].onload();
          DataRequest.prototype.requests["/level56"].onload();
          DataRequest.prototype.requests["/level57"].onload();
          DataRequest.prototype.requests["/level58"].onload();
          DataRequest.prototype.requests["/level59"].onload();
          DataRequest.prototype.requests["/level6"].onload();
          DataRequest.prototype.requests["/level60"].onload();
          DataRequest.prototype.requests["/level61"].onload();
          DataRequest.prototype.requests["/level62"].onload();
          DataRequest.prototype.requests["/level63"].onload();
          DataRequest.prototype.requests["/level64"].onload();
          DataRequest.prototype.requests["/level65"].onload();
          DataRequest.prototype.requests["/level66"].onload();
          DataRequest.prototype.requests["/level67"].onload();
          DataRequest.prototype.requests["/level68"].onload();
          DataRequest.prototype.requests["/level7"].onload();
          DataRequest.prototype.requests["/level8"].onload();
          DataRequest.prototype.requests["/level9"].onload();
          DataRequest.prototype.requests["/mainData"].onload();
          DataRequest.prototype.requests["/methods_pointedto_by_uievents.xml"].onload();
          DataRequest.prototype.requests["/resources.assets"].onload();
          DataRequest.prototype.requests["/resources.resource"].onload();
          DataRequest.prototype.requests["/sharedassets0.assets"].onload();
          DataRequest.prototype.requests["/sharedassets0.resource"].onload();
          DataRequest.prototype.requests["/sharedassets1.assets"].onload();
          DataRequest.prototype.requests["/sharedassets10.assets"].onload();
          DataRequest.prototype.requests["/sharedassets11.assets"].onload();
          DataRequest.prototype.requests["/sharedassets11.resource"].onload();
          DataRequest.prototype.requests["/sharedassets12.assets"].onload();
          DataRequest.prototype.requests["/sharedassets13.assets"].onload();
          DataRequest.prototype.requests["/sharedassets14.assets"].onload();
          DataRequest.prototype.requests["/sharedassets15.assets"].onload();
          DataRequest.prototype.requests["/sharedassets16.assets"].onload();
          DataRequest.prototype.requests["/sharedassets17.assets"].onload();
          DataRequest.prototype.requests["/sharedassets18.assets"].onload();
          DataRequest.prototype.requests["/sharedassets19.assets"].onload();
          DataRequest.prototype.requests["/sharedassets2.assets"].onload();
          DataRequest.prototype.requests["/sharedassets20.assets"].onload();
          DataRequest.prototype.requests["/sharedassets21.assets"].onload();
          DataRequest.prototype.requests["/sharedassets22.assets"].onload();
          DataRequest.prototype.requests["/sharedassets23.assets"].onload();
          DataRequest.prototype.requests["/sharedassets24.assets"].onload();
          DataRequest.prototype.requests["/sharedassets25.assets"].onload();
          DataRequest.prototype.requests["/sharedassets26.assets"].onload();
          DataRequest.prototype.requests["/sharedassets26.resource"].onload();
          DataRequest.prototype.requests["/sharedassets27.assets"].onload();
          DataRequest.prototype.requests["/sharedassets28.assets"].onload();
          DataRequest.prototype.requests["/sharedassets29.assets"].onload();
          DataRequest.prototype.requests["/sharedassets3.assets"].onload();
          DataRequest.prototype.requests["/sharedassets3.resource"].onload();
          DataRequest.prototype.requests["/sharedassets30.assets"].onload();
          DataRequest.prototype.requests["/sharedassets30.resource"].onload();
          DataRequest.prototype.requests["/sharedassets31.assets"].onload();
          DataRequest.prototype.requests["/sharedassets32.assets"].onload();
          DataRequest.prototype.requests["/sharedassets33.assets"].onload();
          DataRequest.prototype.requests["/sharedassets34.assets"].onload();
          DataRequest.prototype.requests["/sharedassets34.resource"].onload();
          DataRequest.prototype.requests["/sharedassets35.assets"].onload();
          DataRequest.prototype.requests["/sharedassets36.assets"].onload();
          DataRequest.prototype.requests["/sharedassets37.assets"].onload();
          DataRequest.prototype.requests["/sharedassets38.assets"].onload();
          DataRequest.prototype.requests["/sharedassets38.resource"].onload();
          DataRequest.prototype.requests["/sharedassets39.assets"].onload();
          DataRequest.prototype.requests["/sharedassets4.assets"].onload();
          DataRequest.prototype.requests["/sharedassets40.assets"].onload();
          DataRequest.prototype.requests["/sharedassets41.assets"].onload();
          DataRequest.prototype.requests["/sharedassets42.assets"].onload();
          DataRequest.prototype.requests["/sharedassets42.resource"].onload();
          DataRequest.prototype.requests["/sharedassets43.assets"].onload();
          DataRequest.prototype.requests["/sharedassets44.assets"].onload();
          DataRequest.prototype.requests["/sharedassets45.assets"].onload();
          DataRequest.prototype.requests["/sharedassets46.assets"].onload();
          DataRequest.prototype.requests["/sharedassets47.assets"].onload();
          DataRequest.prototype.requests["/sharedassets48.assets"].onload();
          DataRequest.prototype.requests["/sharedassets49.assets"].onload();
          DataRequest.prototype.requests["/sharedassets5.assets"].onload();
          DataRequest.prototype.requests["/sharedassets50.assets"].onload();
          DataRequest.prototype.requests["/sharedassets51.assets"].onload();
          DataRequest.prototype.requests["/sharedassets52.assets"].onload();
          DataRequest.prototype.requests["/sharedassets53.assets"].onload();
          DataRequest.prototype.requests["/sharedassets54.assets"].onload();
          DataRequest.prototype.requests["/sharedassets54.resource"].onload();
          DataRequest.prototype.requests["/sharedassets55.assets"].onload();
          DataRequest.prototype.requests["/sharedassets56.assets"].onload();
          DataRequest.prototype.requests["/sharedassets57.assets"].onload();
          DataRequest.prototype.requests["/sharedassets58.assets"].onload();
          DataRequest.prototype.requests["/sharedassets59.assets"].onload();
          DataRequest.prototype.requests["/sharedassets6.assets"].onload();
          DataRequest.prototype.requests["/sharedassets60.assets"].onload();
          DataRequest.prototype.requests["/sharedassets61.assets"].onload();
          DataRequest.prototype.requests["/sharedassets62.assets"].onload();
          DataRequest.prototype.requests["/sharedassets63.assets"].onload();
          DataRequest.prototype.requests["/sharedassets64.assets"].onload();
          DataRequest.prototype.requests["/sharedassets65.assets"].onload();
          DataRequest.prototype.requests["/sharedassets66.assets"].onload();
          DataRequest.prototype.requests["/sharedassets66.resource"].onload();
          DataRequest.prototype.requests["/sharedassets67.assets"].onload();
          DataRequest.prototype.requests["/sharedassets68.assets"].onload();
          DataRequest.prototype.requests["/sharedassets69.assets"].onload();
          DataRequest.prototype.requests["/sharedassets7.assets"].onload();
          DataRequest.prototype.requests["/sharedassets7.resource"].onload();
          DataRequest.prototype.requests["/sharedassets8.assets"].onload();
          DataRequest.prototype.requests["/sharedassets9.assets"].onload();
          DataRequest.prototype.requests["/Il2CppData/Metadata/global-metadata.dat"].onload();
          DataRequest.prototype.requests["/Resources/unity_default_resources"].onload();
          DataRequest.prototype.requests["/Resources/unity_builtin_extra"].onload();
          Module['removeRunDependency']('datafile_slideme.data');

    };
    Module['addRunDependency']('datafile_slideme.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();
