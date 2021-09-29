var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//class doing with localstorage
var StorageS = /** @class */ (function () {
    function StorageS() {
        this.reafile1 = function (name2) { return JSON.parse(name2); };
    }
    StorageS.prototype.Write = function (file) {
        localStorage.setItem(file.filename, JSON.stringify(file));
    };
    StorageS.prototype.readfile = function (name1) {
        return JSON.parse(name1);
    };
    StorageS.prototype.Set = function (file) {
    };
    return StorageS;
}());
// creat default file
var file1 = { filename: "f1", filetype: "text", creatat: "10PM", creatby: "sun", modifiedat: "2AM", modifiedby: "ST", isfile: true };
var store1 = new StorageS;
store1.Write(file1);
var a;
a = localStorage.getItem(file1.filename);
console.log(Date());
//function get array item of local storage
var filelist1 = function () {
    var filelist = [];
    var storge3 = new StorageS;
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        var s = storge3.reafile1(localStorage.getItem(localStorage.key(i)));
        filelist.push(s);
    }
    return filelist;
};
//function load list items in localstorage
var loadlist = function () {
    var _a, _b;
    var filelist_current = filelist1();
    for (var i = 0, len = filelist_current.length; i < len; ++i) {
        var html1;
        var html2;
        var modifyA;
        if (filelist_current[i].modifiedby === "") {
            modifyA = "";
        }
        else {
            modifyA = "Modified at " + filelist_current[i].modifiedat + " Modified by " + filelist_current[i].modifiedby;
        }
        html1 =
            "\n<div class=\"row\" id=\"row-51\" onclick = modify(\"" + filelist_current[i].filename + "\")>" +
                "\n\t\t\t<div class=\"col-sm-1\"> </div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<i class=\"ms-Icon ms-Icon--ExcelDocument\"></i>\n\t\t\t\t<span>" + filelist_current[i].filename + "</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<span> " + filelist_current[i].creatat + "</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<span>" + filelist_current[i].creatby + "</span>\n\t\t\t</div>\n            <div class=\"col-sm-3\">\n\t\t\t\t<i class=\"ms-Icon ms-Icon--Edit\"></i>\n\t\t\t\t<span>" + modifyA + "</span>\n\t\t\t</div>\n            </div>\n\t\t\t";
        html2 =
            "\n<div class=\"row\" id=\"row-51\" onclick = modify(\"" + filelist_current[i].filename + "\")>" +
                "\n\t\t\t<div class=\"col-sm-1\"> </div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<i class=\"ms-Icon ms-Icon--FabricFolder\"></i>\n\t\t\t\t<span>" + filelist_current[i].filename + "</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<span> " + filelist_current[i].creatat + "</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<span>" + filelist_current[i].creatby + "</span>\n\t\t\t</div>\n            <div class=\"col-sm-3\">\n\t\t\t\t<i class=\"ms-Icon ms-Icon--Edit\"></i>\n\t\t\t\t<span>" + modifyA + "</span>\n\t\t\t</div>\n            </div>\n\t\t\t";
        if (filelist_current[i].isfile) {
            (_a = document.getElementById("sun_filelist")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', html2);
        }
        else {
            (_b = document.getElementById("sun_filelist")) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML('beforeend', html1);
        }
    }
};
loadlist();
//function call form
var creatnew = function (f) {
    var _a, _b, _c, _d;
    displayblock("formsun");
    if (f === true) {
        (_a = document.getElementById("headersun")) === null || _a === void 0 ? void 0 : _a.innerHTML = "Creat new Folder";
    }
    else {
        (_b = document.getElementById("headersun")) === null || _b === void 0 ? void 0 : _b.innerHTML = "Creat new File";
    }
    (_c = document.getElementById("bt_Modify")) === null || _c === void 0 ? void 0 : _c.innerHTML = "Create";
    (_d = document.getElementById("bt_delete")) === null || _d === void 0 ? void 0 : _d.style.display = 'none';
};
//function display form
var displayblock = function (y) {
    var x = document.getElementById(y);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
    }
};
//function submit create and modify
var creatnewfile = function () {
    var _a, _b;
    var store2 = new StorageS;
    var c_name;
    var c_type;
    var c_creat_by;
    var c_creat_at;
    var is_folder;
    c_name = document.querySelector("#input_filename").value;
    c_type = document.querySelector("#input_filetype").value;
    c_creat_by = document.querySelector("#input_by").value;
    c_creat_at = document.querySelector("#input_at").value;
    if (((_a = document.getElementById("headersun")) === null || _a === void 0 ? void 0 : _a.innerHTML) === "Creat new Folder") {
        is_folder = true;
    }
    else {
        is_folder = false;
    }
    var file3;
    if (((_b = document.getElementById("bt_Modify")) === null || _b === void 0 ? void 0 : _b.innerHTML) === "Create") {
        console.log('Thoan dang Create.');
        file3 = { filename: c_name, filetype: c_type, creatby: c_creat_by, creatat: c_creat_at, modifiedat: "", modifiedby: "", isfile: is_folder };
        store2.Write(file3);
        console.log('create ' + file3);
    }
    else {
        console.log('Thoan dang Modify.');
        var file4 = store2.reafile1(localStorage.getItem(c_name));
        file3 = { filename: c_name, filetype: c_type, creatat: file4.creatat, creatby: file4.creatby, modifiedby: c_creat_by, modifiedat: c_creat_at, isfile: file4.isfile };
        store2.Write(file3);
        console.log('Modify ' + file3);
    }
    document.querySelector("#input_filename").value = "";
    document.querySelector("#input_filetype").value = "";
    document.querySelector("#input_by").value = "";
    document.querySelector("#input_at").value = "";
};
//function exit form
var exit = function () {
    console.log("list loca " + localStorage.length);
    var x = document.getElementById("formsun");
    x === null || x === void 0 ? void 0 : x.style.display = 'none';
    //wait delay(1000);
    //deletelist();
    // loadlist();
    testAsync();
};
//delay =))
function testAsync() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    deletelist();
                    (_a = document.getElementById("loading_Sun")) === null || _a === void 0 ? void 0 : _a.style.display = 'block';
                    console.log("Loading");
                    return [4 /*yield*/, delay(3000)];
                case 1:
                    _c.sent();
                    console.log("Loaded");
                    (_b = document.getElementById("loading_Sun")) === null || _b === void 0 ? void 0 : _b.style.display = 'none';
                    loadlist();
                    return [2 /*return*/];
            }
        });
    });
}
// modify function
var modify = function (name) {
    var _a, _b, _c;
    var store4 = new StorageS;
    var item_;
    var isfo;
    item_ = store4.reafile1(localStorage.getItem(name));
    displayblock("formsun");
    (_a = document.getElementById("bt_delete")) === null || _a === void 0 ? void 0 : _a.style.display = 'block';
    if (item_.isfile) {
        isfo = "Modify Folder";
    }
    else {
        isfo = "Modify File";
    }
    (_b = document.getElementById("bt_Modify")) === null || _b === void 0 ? void 0 : _b.innerHTML = "Modify";
    (_c = document.getElementById("headersun")) === null || _c === void 0 ? void 0 : _c.innerHTML = "Modify file";
    document.querySelector("#input_filename").value = item_.filename;
    document.querySelector("#input_filetype").value = item_.filetype;
    document.getElementById("input_filename").disabled = true;
};
//delete function
var deletes = function () {
    var name = document.querySelector("#input_filename").value;
    localStorage.removeItem(name);
    document.querySelector("#input_filename").value = "";
    document.querySelector("#input_filetype").value = "";
    document.querySelector("#input_by").value = "";
    document.querySelector("#input_at").value = "";
};
var deletelist = function () { var _a; (_a = document.getElementById("sun_filelist")) === null || _a === void 0 ? void 0 : _a.innerHTML = ""; };
var delay = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
