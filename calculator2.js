function calculate(){
	var ipadd=document.getElementById('ip').value,
	iparr=String(ipadd);
	//разделение строки на отдельные элементы
	var arr=iparr.split('.');
	var len=arr.length
		if (arr.length==4){
	
var cidr=document.getElementById('cidr').value,
q1="", q2="",q3="",q4="";
q1=Number(arr[0]), q2=Number(arr[1]), q3=Number(arr[2]), q4=Number(arr[3]);
//проверка введеных значений
if(
(q1>=0 && q1<=255 && q1!='') &&
(q2>=0 && q2<=255 && q2!='') &&
(q3>=0 && q3<=255 && q3!='') &&
(q4>=0 && q4<=255 && q4!='') &&
(cidr>=0 && cidr<=32 && cidr!='')
)
//получение двоичного ип
{
var ipBin={};
ipBin[1]=String("00000000"+parseInt(q1,10).toString(2)).slice(-8);
ipBin[2]=String("00000000"+parseInt(q2,10).toString(2)).slice(-8);
ipBin[3]=String("00000000"+parseInt(q3,10).toString(2)).slice(-8);
ipBin[4]=String("00000000"+parseInt(q4,10).toString(2)).slice(-8);
var ClassIP="";
//выбор класса по первому октету
if(q1<=126) {
ClassIP="A";
}else if (q1==127) {
ClassIP="loopback IP"
}else if (q1>=128 && q1<=191) {
ClassIP="B";
}else if (q1>=192 && q1<=223) {
ClassIP="C";
}else if (q1>=224 && q1<=239) {
ClassIP="D";
}else {
ClassIP="E";
}
//маска
var msk=cidr,
ImpBlck=Math.ceil(msk/8),
ImpBlckBin=ipBin[ImpBlck],
mskBinBlckCount=msk%8,
MskBinBlck="",
maskBlock="";
if(mskBinBlckCount==0)ImpBlck++;
for(var j=1;j<=8;j++){
if(mskBinBlckCount>=j){
MskBinBlck+="1";
}else{
MskBinBlck+="0";
}
}
maskBlock=parseInt(MskBinBlck,2);
var netBlckBin="",
bcBlckBin="";
for(var k=1;k<=8;k++){
if(MskBinBlck.substr(k-1,1)=="1"){
netBlckBin+=ImpBlckBin.substr(k-1,1);
bcBlckBin+=ImpBlckBin.substr(k-1,1);
}else{
netBlckBin+="0";
bcBlckBin+="1";
}
}
var msk="",
maskBinary="",
net="",
bc="",
netBinary="",
bcBinary="",
rangeA="",
rangeB="";
for(var i=1;i<=4;i++){
if(ImpBlck>i) {
msk+="255";
maskBinary+="11111111";
netBinary+=ipBin[i];
bcBinary+=ipBin[i];
net+=parseInt(ipBin[i],2);
bc+=parseInt(ipBin[i],2);
rangeA+=parseInt(ipBin[i],2);
rangeB+=parseInt(ipBin[i],2);
}else if (ImpBlck==i) {
msk+=maskBlock;
maskBinary+=MskBinBlck;
netBinary+=netBlckBin;
bcBinary+=bcBlckBin;
net+=parseInt(netBlckBin,2);
bc+=parseInt(bcBlckBin,2);
rangeA+=(parseInt(netBlckBin,2));
rangeB+=(parseInt(bcBlckBin,2));
}
else {
msk+=0;
maskBinary+="00000000";
netBinary+="00000000";
bcBinary+="11111111";
net+="0";
bc+="255";
rangeA+=0;
rangeB+=255;
}
if(i<4){
msk+=".";
maskBinary+=".";
netBinary+=".";
bcBinary+=".";
net+=".";
bc+=".";
rangeA+=".";
rangeB+=".";
}
}
var binaryHost="";
for(var q=(31-cidr);q>=0;q--){
binaryHost=binaryHost+"1";
}
var maxHost=(parseInt(binaryHost,2)-1),

 binarySubnet="";

for(var a=cidr;a>=0;a--){
binarySubnet=binarySubnet+"1";
}
var maxSubnet=parseInt(binarySubnet,2),
 binaryCurrentSubnetBlock="";
for(var z=mskBinBlckCount;z>=0;z--){
binaryCurrentSubnetBlock=binaryCurrentSubnetBlock+"1";
}

//var num1=document.getElementById('ip').value,
//num2=document.getElementById('cidr').value,
 //str=String(num1)+"/"+String(num2);


//var array=[1,2,3];
//var tab=document.querySelectorAll('.hist');
//tab.forEach((el,  i)=>el.textContent=array[i]);

//for (let i=1; i<=5;i++)
	
	//{
		//array[i]=str;
	//}

//document.getElementById('History').innerHTML=tab;




//document.getElementById('testIP').innerHTML=q1;


//document.getElementById('resIP').innerHTML=q1 + "." + q2 + "." + q3 + "." + q4;

document.getElementById('resMask').innerHTML=msk;
document.getElementById('resNet').innerHTML=net;
document.getElementById('resBC').innerHTML=bc;
document.getElementById('resClass').innerHTML=ClassIP;
document.getElementById('resRange').innerHTML=rangeA + " - " + rangeB;
document.getElementById('resMaxHost').innerHTML=maxHost+" possible host(s) in current subnet";
//document.getElementById('resBinIP').innerHTML=ipBin[1]+"."+ipBin[2]+"."+ipBin[3]+"."+ipBin[4];
//document.getElementById('resBinMask').innerHTML=maskBinary;
//document.getElementById('resBinNet').innerHTML=netBinary;
//document.getElementById('resBinBC').innerHTML=bcBinary;




}else{
alert("invalid value");
}
		}
else {alert ("invalid value");}
}

function calculateBin(){
		var ipadd=document.getElementById('ipb').value,
	iparr=String(ipadd);
	//разделение строки на отдельные элементы
	var arr=iparr.split('.');
	var len=arr.length
		if (arr.length==4){
	
var cidr=document.getElementById('cidrb').value,
q1="", q2="",q3="",q4="";
q1=Number(arr[0]), q2=Number(arr[1]), q3=Number(arr[2]), q4=Number(arr[3]);
//проверка введеных значений


if(
(q1>=0 && q1<=255 && q1!='') &&
(q2>=0 && q2<=255 && q2!='') &&
(q3>=0 && q3<=255 && q3!='') &&
(q4>=0 && q4<=255 && q4!='') &&
(cidr>=0 && cidr<=32 && cidr!='')
)
//получение двоичного ип
{
var ipBin={};
ipBin[1]=String("00000000"+parseInt(q1,10).toString(2)).slice(-8);
ipBin[2]=String("00000000"+parseInt(q2,10).toString(2)).slice(-8);
ipBin[3]=String("00000000"+parseInt(q3,10).toString(2)).slice(-8);
ipBin[4]=String("00000000"+parseInt(q4,10).toString(2)).slice(-8);
var ClassIP="";
//выбор класса по первому октету
if(q1<=126) {
ClassIP="A";
}else if (q1==127) {
ClassIP="loopback IP"
}else if (q1>=128 && q1<=191) {
ClassIP="B";
}else if (q1>=192 && q1<=223) {
ClassIP="C";
}else if (q1>=224 && q1<=239) {
ClassIP="D";
}else {
ClassIP="E";
}
//маска
var msk=cidr,
ImpBlck=Math.ceil(msk/8),
ImpBlckBin=ipBin[ImpBlck],
mskBinBlckCount=msk%8,
MskBinBlck="",
maskBlock="";
if(mskBinBlckCount==0)ImpBlck++;
for(var j=1;j<=8;j++){
if(mskBinBlckCount>=j){
MskBinBlck+="1";
}else{
MskBinBlck+="0";
}
}
maskBlock=parseInt(MskBinBlck,2);
var netBlckBin="",
bcBlckBin="";
for(var k=1;k<=8;k++){
if(MskBinBlck.substr(k-1,1)=="1"){
netBlckBin+=ImpBlckBin.substr(k-1,1);
bcBlckBin+=ImpBlckBin.substr(k-1,1);
}else{
netBlckBin+="0";
bcBlckBin+="1";
}
}
var msk="",
maskBinary="",
net="",
bc="",
netBinary="",
bcBinary="",
rangeA="",
rangeB="";
for(var i=1;i<=4;i++){
if(ImpBlck>i) {
msk+="255";
maskBinary+="11111111";
netBinary+=ipBin[i];
bcBinary+=ipBin[i];
net+=parseInt(ipBin[i],2);
bc+=parseInt(ipBin[i],2);
rangeA+=parseInt(ipBin[i],2);
rangeB+=parseInt(ipBin[i],2);
}else if (ImpBlck==i) {
msk+=maskBlock;
maskBinary+=MskBinBlck;
netBinary+=netBlckBin;
bcBinary+=bcBlckBin;
net+=parseInt(netBlckBin,2);
bc+=parseInt(bcBlckBin,2);
rangeA+=(parseInt(netBlckBin,2));
rangeB+=(parseInt(bcBlckBin,2));
}
else {
msk+=0;
maskBinary+="00000000";
netBinary+="00000000";
bcBinary+="11111111";
net+="0";
bc+="255";
rangeA+=0;
rangeB+=255;
}
if(i<4){
msk+=".";
maskBinary+=".";
netBinary+=".";
bcBinary+=".";
net+=".";
bc+=".";
rangeA+=".";
rangeB+=".";
}
}
var binaryHost="";
for(var q=(31-cidr);q>=0;q--){
binaryHost=binaryHost+"1";
}
var maxHost=(parseInt(binaryHost,2)-1),

 binarySubnet="";

for(var a=cidr;a>=0;a--){
binarySubnet=binarySubnet+"1";
}
var maxSubnet=parseInt(binarySubnet,2),
 binaryCurrentSubnetBlock="";
for(var z=mskBinBlckCount;z>=0;z--){
binaryCurrentSubnetBlock=binaryCurrentSubnetBlock+"1";
}

document.getElementById('resBinIP').innerHTML=ipBin[1]+"."+ipBin[2]+"."+ipBin[3]+"."+ipBin[4];
document.getElementById('resBinMask').innerHTML=maskBinary;
document.getElementById('resBinNet').innerHTML=netBinary;
document.getElementById('resBinBC').innerHTML=bcBinary;




}else{
alert("invalid value");
}
		}
else {alert ("invalid value");}
}

function delip(){

document.getElementById('resMask').innerHTML="";
document.getElementById('resNet').innerHTML="";
document.getElementById('resBC').innerHTML="";
document.getElementById('resClass').innerHTML="";
document.getElementById('resRange').innerHTML="";
document.getElementById('resMaxHost').innerHTML="";}
function delipbin(){

document.getElementById('resBinMask').innerHTML="";
document.getElementById('resBinNet').innerHTML="";
document.getElementById('resBinBC').innerHTML="";
document.getElementById('resBinIP').innerHTML="";
}
