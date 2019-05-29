function doGet(e) {
  
  //Disclaimer:Using Paths is not allowed.with result in Cors issue,use parameters instead
    var output = JSON.stringify({
      
      status: 'Error 401 Unauthorised',
    
    });
    
//get spreadsheet connected to  this script
    var apisheet = SpreadsheetApp.getActiveSpreadsheet();
  
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    try{
      //get paramter to choose sheet  
       var sheetjson=e.parameter.sheet;
    //choose sheet to work with   
       var source = ss.getSheetByName(sheetjson);
      
      var lastrow=source.getLastRow();
    }
  
    catch(e){
      
      var output = JSON.stringify({
      
      status: 'Error 400 Bad Request-Sheet Name Parameter Missing',      
      
    });
 
    return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON); 
    }
    
//get last row of sheet
  
//get last colomn of sheet
    var last_col=source.getLastColumn();
  
//get headers for json keys
    var headers=source.getRange(1,1,1,last_col);
    
    var arr_header=headers.getValues()[0];
//get key values from spreadsheet
    var myresults=source.getRange(2,1,lastrow-1,last_col);
    
//convert range to array
    var arr_results=myresults.getValues();
    

    var datajson=[];
    
  //get actual key value pair json objects ie filling json objects with keys and values
    arr_results.forEach(function(result){
    //initialize a single json object
      var singleobject={};
      
      arr_header.forEach(function(header,index){
        
        if(result[index] instanceof Date){
          //filling key with value of  date  type
          singleobject[header.toLowerCase()]= new Date(result[index]);
        }
        else{
          //filling key with value of any other type
          singleobject[header.toLowerCase()]=result[index];
          
        }
      });
      //push the single object into the datajson array
      datajson.push(singleobject);
      
    });
    
  
   try{
     //get sort parameter
      var sortby = e.parameter.sort;
      
    }
    catch(err){
      //blank and do nothing if no sort parameter
      var sortby = "";
      
    }
  //detect if sortby is not blank
    if(sortby!=null || sortby!=""){
      
      datajson  = datajson.sort(function(sortfirstproperty, sortsecondproperty) {
        
        if(typeof sortfirstproperty[sortby]=="number"){
          
          if(sortfirstproperty[sortby] > sortsecondproperty[sortby]) {
            
            return 1;
            
          } 
          
          else if(sortfirstproperty[sortby] < sortsecondproperty[sortby]){
            
            return -1;
            
          }        
          
          else{
            
            return 0;
            
          }
          
        }
        
        else if(typeof sortfirstproperty[sortby]=="string"){
          
          if(sortfirstproperty[sortby].localeCompare(sortsecondproperty[sortby])==1) {
            
            return 1;
            
          } 
          
          else if(sortfirstproperty[sortby].localeCompare(sortsecondproperty[sortby])==-1){
            
            return -1;
            
          }
          
          else{
            
            return 0;
            
          }
          
        }
        
      });
      
    }

    var output = JSON.stringify({
      
      status: '200 OK',      
      
      data : datajson, 
      
    });
  

    return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);   
}
