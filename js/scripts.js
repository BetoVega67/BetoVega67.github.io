var vlJan;
var vlFev;
var vlMar;
var vlAbr;
var vlMai;
var vlJun;
var vlJul;
var vlAgo;
var vlSet;
var vlOut;
var vlNov;
var vlDez;

var dataCorrente = new Date(); 
var anoConsulta = dataCorrente.getFullYear();

consultaIPCA();

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function trocaAno() {

    var select  = document.getElementById('selectAno');

    anoConsulta = select.options[select.selectedIndex].value;

    if (anoConsulta == 0000) {
        alert("Selecione uma Data");
    } else {
        consultaIPCA();
        drawBasic();
    };
}

function consultaIPCA() {
/*      
    Esta função é temporária
    Será substituída pelo acesso ao site do Banco Central
*/
    if (anoConsulta == 2021) {
        vlJan = 3.14;
        vlFev = 3.92;
        vlMar = 4.31;
        vlAbr = 4.52;
        vlMai = 4.56;
        vlJun = 5.2;
        vlJul = 6.1;
        vlAgo = 6.76;
        vlSet = 8.06;
        vlOut = 8.35;
        vlNov = 8.99;
        vlDez = 9.68;
    } else {
        vlJan = ((anoConsulta - 2000) / 4);
        vlFev = ((anoConsulta - 2000) / 4);
        vlMar = 1 + ((anoConsulta - 2000) / 4);
        vlAbr = 1 + ((anoConsulta - 2000) / 4);
        vlMai = 2 + ((anoConsulta - 2000) / 4);
        vlJun = 2 + ((anoConsulta - 2000) / 4);
        vlJul = 3 + ((anoConsulta - 2000) / 4);
        vlAgo = 4 + ((anoConsulta - 2000) / 4);
        vlSet = 5 + ((anoConsulta - 2000) / 4);
        vlOut = 5 + ((anoConsulta - 2000) / 4);
        vlNov = 8 + ((anoConsulta - 2000) / 4);
        vlDez = 9 + ((anoConsulta - 2000) / 4);
    }
}

function drawBasic() {

    var data = new google.visualization.DataTable();

    data.addColumn('string', 'mês');
    data.addColumn('number', 'IPCA');

    data.addRows([
        ['jan',  vlJan],
        ['fev',  vlFev],
        ['mar',  vlMar],
        ['abr',  vlAbr],
        ['mai',  vlMai],
        ['jun',  vlJun],
        ['jul',  vlJul],
        ['ago',  vlAgo],
        ['set',  vlSet],
        ['out',  vlOut],
        ['nov',  vlNov],
        ['dez',  vlDez]
    ]);

    var options = {
        width: 600,
        height: 300,
        hAxis: {
        title: anoConsulta
        },
        vAxis: {
        title: '% a.a.'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}