/*! For license information please see cypher.js.LICENSE.txt */
"use strict";define("vs/basic-languages/cypher/cypher",["require"],(e=>(()=>{var e=Object.defineProperty,i=Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,s={};((i,t)=>{for(var n in t)e(i,n,{get:t[n],enumerable:!0})})(s,{conf:()=>r,language:()=>a});var o,r={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}]},a={defaultToken:"",tokenPostfix:".cypher",ignoreCase:!0,brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"}],keywords:["ALL","AND","AS","ASC","ASCENDING","BY","CALL","CASE","CONTAINS","CREATE","DELETE","DESC","DESCENDING","DETACH","DISTINCT","ELSE","END","ENDS","EXISTS","IN","IS","LIMIT","MANDATORY","MATCH","MERGE","NOT","ON","ON","OPTIONAL","OR","ORDER","REMOVE","RETURN","SET","SKIP","STARTS","THEN","UNION","UNWIND","WHEN","WHERE","WITH","XOR","YIELD"],builtinLiterals:["true","TRUE","false","FALSE","null","NULL"],builtinFunctions:["abs","acos","asin","atan","atan2","avg","ceil","coalesce","collect","cos","cot","count","degrees","e","endNode","exists","exp","floor","head","id","keys","labels","last","left","length","log","log10","lTrim","max","min","nodes","percentileCont","percentileDisc","pi","properties","radians","rand","range","relationships","replace","reverse","right","round","rTrim","sign","sin","size","split","sqrt","startNode","stDev","stDevP","substring","sum","tail","tan","timestamp","toBoolean","toFloat","toInteger","toLower","toString","toUpper","trim","type"],operators:["+","-","*","/","%","^","=","<>","<",">","<=",">=","->","<-","--\x3e","<--"],escapes:/\\(?:[tbnrf\\"'`]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+/,octaldigits:/[0-7]+/,hexdigits:/[0-9a-fA-F]+/,tokenizer:{root:[[/[{}[\]()]/,"@brackets"],{include:"common"}],common:[{include:"@whitespace"},{include:"@numbers"},{include:"@strings"},[/:[a-zA-Z_][\w]*/,"type.identifier"],[/[a-zA-Z_][\w]*(?=\()/,{cases:{"@builtinFunctions":"predefined.function"}}],[/[a-zA-Z_$][\w$]*/,{cases:{"@keywords":"keyword","@builtinLiterals":"predefined.literal","@default":"identifier"}}],[/`/,"identifier.escape","@identifierBacktick"],[/[;,.:|]/,"delimiter"],[/[<>=%+\-*/^]+/,{cases:{"@operators":"delimiter","@default":""}}]],numbers:[[/-?(@digits)[eE](-?(@digits))?/,"number.float"],[/-?(@digits)?\.(@digits)([eE]-?(@digits))?/,"number.float"],[/-?0x(@hexdigits)/,"number.hex"],[/-?0(@octaldigits)/,"number.octal"],[/-?(@digits)/,"number"]],strings:[[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@stringDouble"],[/'/,"string","@stringSingle"]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/\/\/.*/,"comment"],[/[^/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[/*]/,"comment"]],stringDouble:[[/[^\\"]+/,"string"],[/@escapes/,"string"],[/\\./,"string.invalid"],[/"/,"string","@pop"]],stringSingle:[[/[^\\']+/,"string"],[/@escapes/,"string"],[/\\./,"string.invalid"],[/'/,"string","@pop"]],identifierBacktick:[[/[^\\`]+/,"identifier.escape"],[/@escapes/,"identifier.escape"],[/\\./,"identifier.escape.invalid"],[/`/,"identifier.escape","@pop"]]}};return o=s,((s,o,r,a)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let r of t(o))n.call(s,r)||undefined===r||e(s,r,{get:()=>o[r],enumerable:!(a=i(o,r))||a.enumerable});return s})(e({},"__esModule",{value:!0}),o)})()));