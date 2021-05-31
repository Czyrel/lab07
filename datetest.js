
function currentDate() {

    /*var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();

    if(day<10) 
    {
        day='0'+day;
    } 

    if(month<10) 
    {
        month='0'+month;
    } 
    //const formatYmd = date => date.toISOString().slice(0, 10);
    //formatYmd(new Date());      // 2020-05-06
    console.log('h');
    console.log(year + '-'+ month + '-' + day);
    console.log(year + '/'+ month + '/' + day.toISOString());
    return(year + '-'+ month + '-' + day);
    
    
    

};*/


        var d = new Date();
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

        console.log([year, month, day].join('-'));
        console.log(typeof [year, month, day].join('-'));
        console.log('2019-06-11T00:00');
        return('2019-06-11T00:00');
  

}