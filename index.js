/**
 * Created by thangnv on 8/3/15.
 */
'use strict';
let fs = require('fs');
let path = require('path');


let file = process.argv[3];
let directory = process.argv[2]||'';


//console.log(args_1+' -- '+args_2);
let index = 0;


function findFile(file,folder){

    fs.readdir(folder, function (err,list) {
        if (err){
            console.log('Sai duong dan . Hay nhap lai !');
        }else{
            for (let i=0 ; i<list.length ; i++ ){
                fs.stat(path.join(folder,list[i]), function (err,stats) {
                    if(stats.isDirectory()) {
                        findFile(file,path.join(folder,list[i]))
                    }
                    if (stats.isFile()){
                        if (list[i] == file){
                            console.log('Found : '+ ++index +' in : '+path.join(folder));
                        }
                    }
                })
            }
            return;
        }
    })
}


findFile(file,directory)
