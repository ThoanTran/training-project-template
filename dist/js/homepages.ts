//interface file sun
interface Filesun {
    filename: string;
    filetype: string;
    creatat?: string;
    creatby?: string;
    modifiedat?: string;
    modifiedby?: string;
    isfile: boolean;

}
//class doing with localstorage
class StorageS {

    Write(file: Filesun): void {
        localStorage.setItem(file.filename, JSON.stringify(file))
    }
    readfile(name1: string): Filesun {
        return JSON.parse(name1);
    }
    reafile1 = (name2: string): Filesun => JSON.parse(name2);
    Set(file: Filesun): void {

    }

}

// creat default file
let file1: Filesun = { filename: "f1", filetype: "text", creatat: "10PM", creatby: "sun", modifiedat: "2AM", modifiedby: "ST", isfile: true }
let store1 = new StorageS;
store1.Write(file1);
var a: string;
a = localStorage.getItem(file1.filename);
console.log(Date());
//function get array item of local storage

var filelist1 = (): Array<Filesun> => {
    var filelist: Array<Filesun> = [];
    var storge3 = new StorageS;
    for (var i = 0, len = localStorage.length; i < len; ++i) {        
        var s = storge3.reafile1(localStorage.getItem(localStorage.key(i)))
        filelist.push(s);
    }    
    return filelist;
}

//function load list items in localstorage

var loadlist = () => {
    let filelist_current = filelist1();

    for (var i = 0, len = filelist_current.length; i < len; ++i) {
        var html1;
        var html2;
        var modifyA;
if(filelist_current[i].modifiedby===""){modifyA=""}
else{

        modifyA = "Modified at "+filelist_current[i].modifiedat + " Modified by "+ filelist_current[i].modifiedby;}
        html1 =
            `
<div class="row" id="row-51" onclick = modify("`+ filelist_current[i].filename + `")>` +
            `
			<div class="col-sm-1"> </div>
			<div class="col-sm-4">
				<i class="ms-Icon ms-Icon--ExcelDocument"></i>
				<span>`+ filelist_current[i].filename + `</span>
			</div>
			<div class="col-sm-2">
				<span> `+ filelist_current[i].creatat + `</span>
			</div>
			<div class="col-sm-2">
				<span>`+ filelist_current[i].creatby + `</span>
			</div>
            <div class="col-sm-3">
				<i class="ms-Icon ms-Icon--Edit"></i>
				<span>`+modifyA+`</span>
			</div>
            </div>
			`
        html2 =
            `
<div class="row" id="row-51" onclick = modify("`+ filelist_current[i].filename + `")>` +
            `
			<div class="col-sm-1"> </div>
			<div class="col-sm-4">
				<i class="ms-Icon ms-Icon--FabricFolder"></i>
				<span>`+ filelist_current[i].filename + `</span>
			</div>
			<div class="col-sm-2">
				<span> `+ filelist_current[i].creatat + `</span>
			</div>
			<div class="col-sm-2">
				<span>`+ filelist_current[i].creatby + `</span>
			</div>
            <div class="col-sm-3">
				<i class="ms-Icon ms-Icon--Edit"></i>
				<span>`+ modifyA + `</span>
			</div>
            </div>
			`
        if(filelist_current[i].isfile){
            document.getElementById("sun_filelist")?.insertAdjacentHTML('beforeend', html2);
        }else{
        document.getElementById("sun_filelist")?.insertAdjacentHTML('beforeend', html1); }
        }
    }
    loadlist();
    //function call form

    var creatnew = (f: boolean) => {

        displayblock("formsun");
        if (f === true) {
            document.getElementById("headersun")?.innerHTML = "Creat new Folder";
        }
        else { document.getElementById("headersun")?.innerHTML = "Creat new File"; }

        document.getElementById("bt_Modify")?.innerHTML = "Create";
        document.getElementById("bt_delete")?.style.display = 'none';
    }
    //function display form
    var displayblock = (y: string) => {
        var x = document.getElementById(y);
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }
//function submit create and modify
    var creatnewfile = () => {
        var store2 = new StorageS;
        var c_name;
        var c_type;
        var c_creat_by;
        var c_creat_at;
        var is_folder: boolean;
        c_name = (<HTMLInputElement>document.querySelector("#input_filename")).value;
        c_type = (<HTMLInputElement>document.querySelector("#input_filetype")).value;
        c_creat_by = (<HTMLInputElement>document.querySelector("#input_by")).value;
        c_creat_at = (<HTMLInputElement>document.querySelector("#input_at")).value;
        if (document.getElementById("headersun")?.innerHTML === "Creat new Folder") {
            is_folder = true;
        }
        else { is_folder = false; }

        let file3: Filesun;
        if (document.getElementById("bt_Modify")?.innerHTML === "Create") {
            console.log('Thoan dang Create.');
            file3 = { filename: c_name, filetype: c_type, creatby: c_creat_by, creatat: c_creat_at,modifiedat:"",modifiedby:"", isfile: is_folder }
            store2.Write(file3);
            console.log('create ' + file3);
        }
        else {
            console.log('Thoan dang Modify.');            
            var file4: Filesun = store2.reafile1(localStorage.getItem(c_name));
            file3 = { filename: c_name, filetype: c_type, creatat: file4.creatat, creatby: file4.creatby, modifiedby: c_creat_by, modifiedat: c_creat_at, isfile: file4.isfile };
            store2.Write(file3);
            console.log('Modify ' + file3);
        }
        (<HTMLInputElement>document.querySelector("#input_filename")).value = "";
        (<HTMLInputElement>document.querySelector("#input_filetype")).value = "";
        (<HTMLInputElement>document.querySelector("#input_by")).value = "";
        (<HTMLInputElement>document.querySelector("#input_at")).value = "";
    }
    //function exit form
    var  exit = () => {        
        console.log("list loca " + localStorage.length);  
        var x = document.getElementById("formsun");
        x?.style.display = 'none';

        //wait delay(1000);
        //deletelist();
       // loadlist();
       testAsync();
    }
    //delay =))

    async function  testAsync() {
        deletelist();
        document.getElementById("loading_Sun")?.style.display='block';
        console.log("Loading");
        await delay(3000);
        console.log("Loaded");
        document.getElementById("loading_Sun")?.style.display='none';
        
        loadlist();
    }
    // modify function
    var modify = (name: string) => {
        var store4 = new StorageS;
        var item_: Filesun;
        var isfo;
        item_ = store4.reafile1(localStorage.getItem(name) as string);
        displayblock("formsun");
        document.getElementById("bt_delete")?.style.display = 'block';
        if(item_.isfile){isfo="Modify Folder"} else{isfo = "Modify File"} 

        document.getElementById("bt_Modify")?.innerHTML = "Modify";
        document.getElementById("headersun")?.innerHTML = "Modify file";
        (<HTMLInputElement>document.querySelector("#input_filename")).value = item_.filename;
        (<HTMLInputElement>document.querySelector("#input_filetype")).value = item_.filetype;
        document.getElementById("input_filename").disabled=true;

    }
    //delete function
    var deletes = () => {
        var name = (<HTMLInputElement>document.querySelector("#input_filename")).value;
        localStorage.removeItem(name);
        (<HTMLInputElement>document.querySelector("#input_filename")).value = "";
        (<HTMLInputElement>document.querySelector("#input_filetype")).value = "";
        (<HTMLInputElement>document.querySelector("#input_by")).value = "";
        (<HTMLInputElement>document.querySelector("#input_at")).value = "";    }
    var deletelist = () => { document.getElementById("sun_filelist")?.innerHTML = ""; }
    var delay =(ms: number)=> {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }