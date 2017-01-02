// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25983__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25980 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__25981 = cljs.core.seq.call(null,vec__25980);
var first__25982 = cljs.core.first.call(null,seq__25981);
var seq__25981__$1 = cljs.core.next.call(null,seq__25981);
var tag = first__25982;
var body = seq__25981__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25984__i = 0, G__25984__a = new Array(arguments.length -  0);
while (G__25984__i < G__25984__a.length) {G__25984__a[G__25984__i] = arguments[G__25984__i + 0]; ++G__25984__i;}
  args = new cljs.core.IndexedSeq(G__25984__a,0);
} 
return G__25983__delegate.call(this,args);};
G__25983.cljs$lang$maxFixedArity = 0;
G__25983.cljs$lang$applyTo = (function (arglist__25985){
var args = cljs.core.seq(arglist__25985);
return G__25983__delegate(args);
});
G__25983.cljs$core$IFn$_invoke$arity$variadic = G__25983__delegate;
return G__25983;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__21068__auto__ = (function sablono$core$update_arglists_$_iter__25990(s__25991){
return (new cljs.core.LazySeq(null,(function (){
var s__25991__$1 = s__25991;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25991__$1);
if(temp__4657__auto__){
var s__25991__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25991__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__25991__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__25993 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__25992 = (0);
while(true){
if((i__25992 < size__21067__auto__)){
var args = cljs.core._nth.call(null,c__21066__auto__,i__25992);
cljs.core.chunk_append.call(null,b__25993,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25994 = (i__25992 + (1));
i__25992 = G__25994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25993),sablono$core$update_arglists_$_iter__25990.call(null,cljs.core.chunk_rest.call(null,s__25991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25993),null);
}
} else {
var args = cljs.core.first.call(null,s__25991__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25990.call(null,cljs.core.rest.call(null,s__25991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26000 = arguments.length;
var i__21394__auto___26001 = (0);
while(true){
if((i__21394__auto___26001 < len__21393__auto___26000)){
args__21400__auto__.push((arguments[i__21394__auto___26001]));

var G__26002 = (i__21394__auto___26001 + (1));
i__21394__auto___26001 = G__26002;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__21068__auto__ = (function sablono$core$iter__25996(s__25997){
return (new cljs.core.LazySeq(null,(function (){
var s__25997__$1 = s__25997;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25997__$1);
if(temp__4657__auto__){
var s__25997__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25997__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__25997__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__25999 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__25998 = (0);
while(true){
if((i__25998 < size__21067__auto__)){
var style = cljs.core._nth.call(null,c__21066__auto__,i__25998);
cljs.core.chunk_append.call(null,b__25999,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26003 = (i__25998 + (1));
i__25998 = G__26003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25999),sablono$core$iter__25996.call(null,cljs.core.chunk_rest.call(null,s__25997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25999),null);
}
} else {
var style = cljs.core.first.call(null,s__25997__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25996.call(null,cljs.core.rest.call(null,s__25997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25995){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25995));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26004 = (function sablono$core$link_to26004(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26007 = arguments.length;
var i__21394__auto___26008 = (0);
while(true){
if((i__21394__auto___26008 < len__21393__auto___26007)){
args__21400__auto__.push((arguments[i__21394__auto___26008]));

var G__26009 = (i__21394__auto___26008 + (1));
i__21394__auto___26008 = G__26009;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26004.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.link_to26004.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26004.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26004.cljs$lang$applyTo = (function (seq26005){
var G__26006 = cljs.core.first.call(null,seq26005);
var seq26005__$1 = cljs.core.next.call(null,seq26005);
return sablono.core.link_to26004.cljs$core$IFn$_invoke$arity$variadic(G__26006,seq26005__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26004);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26010 = (function sablono$core$mail_to26010(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26017 = arguments.length;
var i__21394__auto___26018 = (0);
while(true){
if((i__21394__auto___26018 < len__21393__auto___26017)){
args__21400__auto__.push((arguments[i__21394__auto___26018]));

var G__26019 = (i__21394__auto___26018 + (1));
i__21394__auto___26018 = G__26019;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26010.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.mail_to26010.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26013){
var vec__26014 = p__26013;
var content = cljs.core.nth.call(null,vec__26014,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__20285__auto__ = content;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26010.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26010.cljs$lang$applyTo = (function (seq26011){
var G__26012 = cljs.core.first.call(null,seq26011);
var seq26011__$1 = cljs.core.next.call(null,seq26011);
return sablono.core.mail_to26010.cljs$core$IFn$_invoke$arity$variadic(G__26012,seq26011__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26010);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26020 = (function sablono$core$unordered_list26020(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21068__auto__ = (function sablono$core$unordered_list26020_$_iter__26025(s__26026){
return (new cljs.core.LazySeq(null,(function (){
var s__26026__$1 = s__26026;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26026__$1);
if(temp__4657__auto__){
var s__26026__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26026__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__26026__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__26028 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__26027 = (0);
while(true){
if((i__26027 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__26027);
cljs.core.chunk_append.call(null,b__26028,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26029 = (i__26027 + (1));
i__26027 = G__26029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26028),sablono$core$unordered_list26020_$_iter__26025.call(null,cljs.core.chunk_rest.call(null,s__26026__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26028),null);
}
} else {
var x = cljs.core.first.call(null,s__26026__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26020_$_iter__26025.call(null,cljs.core.rest.call(null,s__26026__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26020);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26030 = (function sablono$core$ordered_list26030(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21068__auto__ = (function sablono$core$ordered_list26030_$_iter__26035(s__26036){
return (new cljs.core.LazySeq(null,(function (){
var s__26036__$1 = s__26036;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26036__$1);
if(temp__4657__auto__){
var s__26036__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26036__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__26036__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__26038 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__26037 = (0);
while(true){
if((i__26037 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__26037);
cljs.core.chunk_append.call(null,b__26038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26039 = (i__26037 + (1));
i__26037 = G__26039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26038),sablono$core$ordered_list26030_$_iter__26035.call(null,cljs.core.chunk_rest.call(null,s__26036__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26038),null);
}
} else {
var x = cljs.core.first.call(null,s__26036__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26030_$_iter__26035.call(null,cljs.core.rest.call(null,s__26036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26030);
/**
 * Create an image element.
 */
sablono.core.image26040 = (function sablono$core$image26040(var_args){
var args26041 = [];
var len__21393__auto___26044 = arguments.length;
var i__21394__auto___26045 = (0);
while(true){
if((i__21394__auto___26045 < len__21393__auto___26044)){
args26041.push((arguments[i__21394__auto___26045]));

var G__26046 = (i__21394__auto___26045 + (1));
i__21394__auto___26045 = G__26046;
continue;
} else {
}
break;
}

var G__26043 = args26041.length;
switch (G__26043) {
case 1:
return sablono.core.image26040.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26040.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26041.length)].join('')));

}
});

sablono.core.image26040.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26040.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26040.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26040);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26048_SHARP_,p2__26049_SHARP_){
return [cljs.core.str(p1__26048_SHARP_),cljs.core.str("["),cljs.core.str(p2__26049_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26050_SHARP_,p2__26051_SHARP_){
return [cljs.core.str(p1__26050_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26051_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26052 = (function sablono$core$color_field26052(var_args){
var args26053 = [];
var len__21393__auto___26120 = arguments.length;
var i__21394__auto___26121 = (0);
while(true){
if((i__21394__auto___26121 < len__21393__auto___26120)){
args26053.push((arguments[i__21394__auto___26121]));

var G__26122 = (i__21394__auto___26121 + (1));
i__21394__auto___26121 = G__26122;
continue;
} else {
}
break;
}

var G__26055 = args26053.length;
switch (G__26055) {
case 1:
return sablono.core.color_field26052.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26052.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26053.length)].join('')));

}
});

sablono.core.color_field26052.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.color_field26052.call(null,name__25967__auto__,null);
});

sablono.core.color_field26052.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.color_field26052.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26052);

/**
 * Creates a date input field.
 */
sablono.core.date_field26056 = (function sablono$core$date_field26056(var_args){
var args26057 = [];
var len__21393__auto___26124 = arguments.length;
var i__21394__auto___26125 = (0);
while(true){
if((i__21394__auto___26125 < len__21393__auto___26124)){
args26057.push((arguments[i__21394__auto___26125]));

var G__26126 = (i__21394__auto___26125 + (1));
i__21394__auto___26125 = G__26126;
continue;
} else {
}
break;
}

var G__26059 = args26057.length;
switch (G__26059) {
case 1:
return sablono.core.date_field26056.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26056.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26057.length)].join('')));

}
});

sablono.core.date_field26056.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.date_field26056.call(null,name__25967__auto__,null);
});

sablono.core.date_field26056.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.date_field26056.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26056);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26060 = (function sablono$core$datetime_field26060(var_args){
var args26061 = [];
var len__21393__auto___26128 = arguments.length;
var i__21394__auto___26129 = (0);
while(true){
if((i__21394__auto___26129 < len__21393__auto___26128)){
args26061.push((arguments[i__21394__auto___26129]));

var G__26130 = (i__21394__auto___26129 + (1));
i__21394__auto___26129 = G__26130;
continue;
} else {
}
break;
}

var G__26063 = args26061.length;
switch (G__26063) {
case 1:
return sablono.core.datetime_field26060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26061.length)].join('')));

}
});

sablono.core.datetime_field26060.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.datetime_field26060.call(null,name__25967__auto__,null);
});

sablono.core.datetime_field26060.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.datetime_field26060.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26060);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26064 = (function sablono$core$datetime_local_field26064(var_args){
var args26065 = [];
var len__21393__auto___26132 = arguments.length;
var i__21394__auto___26133 = (0);
while(true){
if((i__21394__auto___26133 < len__21393__auto___26132)){
args26065.push((arguments[i__21394__auto___26133]));

var G__26134 = (i__21394__auto___26133 + (1));
i__21394__auto___26133 = G__26134;
continue;
} else {
}
break;
}

var G__26067 = args26065.length;
switch (G__26067) {
case 1:
return sablono.core.datetime_local_field26064.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26064.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26065.length)].join('')));

}
});

sablono.core.datetime_local_field26064.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.datetime_local_field26064.call(null,name__25967__auto__,null);
});

sablono.core.datetime_local_field26064.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.datetime_local_field26064.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26064);

/**
 * Creates a email input field.
 */
sablono.core.email_field26068 = (function sablono$core$email_field26068(var_args){
var args26069 = [];
var len__21393__auto___26136 = arguments.length;
var i__21394__auto___26137 = (0);
while(true){
if((i__21394__auto___26137 < len__21393__auto___26136)){
args26069.push((arguments[i__21394__auto___26137]));

var G__26138 = (i__21394__auto___26137 + (1));
i__21394__auto___26137 = G__26138;
continue;
} else {
}
break;
}

var G__26071 = args26069.length;
switch (G__26071) {
case 1:
return sablono.core.email_field26068.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26069.length)].join('')));

}
});

sablono.core.email_field26068.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.email_field26068.call(null,name__25967__auto__,null);
});

sablono.core.email_field26068.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.email_field26068.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26068);

/**
 * Creates a file input field.
 */
sablono.core.file_field26072 = (function sablono$core$file_field26072(var_args){
var args26073 = [];
var len__21393__auto___26140 = arguments.length;
var i__21394__auto___26141 = (0);
while(true){
if((i__21394__auto___26141 < len__21393__auto___26140)){
args26073.push((arguments[i__21394__auto___26141]));

var G__26142 = (i__21394__auto___26141 + (1));
i__21394__auto___26141 = G__26142;
continue;
} else {
}
break;
}

var G__26075 = args26073.length;
switch (G__26075) {
case 1:
return sablono.core.file_field26072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26073.length)].join('')));

}
});

sablono.core.file_field26072.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.file_field26072.call(null,name__25967__auto__,null);
});

sablono.core.file_field26072.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.file_field26072.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26072);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26076 = (function sablono$core$hidden_field26076(var_args){
var args26077 = [];
var len__21393__auto___26144 = arguments.length;
var i__21394__auto___26145 = (0);
while(true){
if((i__21394__auto___26145 < len__21393__auto___26144)){
args26077.push((arguments[i__21394__auto___26145]));

var G__26146 = (i__21394__auto___26145 + (1));
i__21394__auto___26145 = G__26146;
continue;
} else {
}
break;
}

var G__26079 = args26077.length;
switch (G__26079) {
case 1:
return sablono.core.hidden_field26076.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26076.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26077.length)].join('')));

}
});

sablono.core.hidden_field26076.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.hidden_field26076.call(null,name__25967__auto__,null);
});

sablono.core.hidden_field26076.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.hidden_field26076.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26076);

/**
 * Creates a month input field.
 */
sablono.core.month_field26080 = (function sablono$core$month_field26080(var_args){
var args26081 = [];
var len__21393__auto___26148 = arguments.length;
var i__21394__auto___26149 = (0);
while(true){
if((i__21394__auto___26149 < len__21393__auto___26148)){
args26081.push((arguments[i__21394__auto___26149]));

var G__26150 = (i__21394__auto___26149 + (1));
i__21394__auto___26149 = G__26150;
continue;
} else {
}
break;
}

var G__26083 = args26081.length;
switch (G__26083) {
case 1:
return sablono.core.month_field26080.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26081.length)].join('')));

}
});

sablono.core.month_field26080.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.month_field26080.call(null,name__25967__auto__,null);
});

sablono.core.month_field26080.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.month_field26080.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26080);

/**
 * Creates a number input field.
 */
sablono.core.number_field26084 = (function sablono$core$number_field26084(var_args){
var args26085 = [];
var len__21393__auto___26152 = arguments.length;
var i__21394__auto___26153 = (0);
while(true){
if((i__21394__auto___26153 < len__21393__auto___26152)){
args26085.push((arguments[i__21394__auto___26153]));

var G__26154 = (i__21394__auto___26153 + (1));
i__21394__auto___26153 = G__26154;
continue;
} else {
}
break;
}

var G__26087 = args26085.length;
switch (G__26087) {
case 1:
return sablono.core.number_field26084.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26084.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26085.length)].join('')));

}
});

sablono.core.number_field26084.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.number_field26084.call(null,name__25967__auto__,null);
});

sablono.core.number_field26084.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.number_field26084.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26084);

/**
 * Creates a password input field.
 */
sablono.core.password_field26088 = (function sablono$core$password_field26088(var_args){
var args26089 = [];
var len__21393__auto___26156 = arguments.length;
var i__21394__auto___26157 = (0);
while(true){
if((i__21394__auto___26157 < len__21393__auto___26156)){
args26089.push((arguments[i__21394__auto___26157]));

var G__26158 = (i__21394__auto___26157 + (1));
i__21394__auto___26157 = G__26158;
continue;
} else {
}
break;
}

var G__26091 = args26089.length;
switch (G__26091) {
case 1:
return sablono.core.password_field26088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26089.length)].join('')));

}
});

sablono.core.password_field26088.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.password_field26088.call(null,name__25967__auto__,null);
});

sablono.core.password_field26088.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.password_field26088.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26088);

/**
 * Creates a range input field.
 */
sablono.core.range_field26092 = (function sablono$core$range_field26092(var_args){
var args26093 = [];
var len__21393__auto___26160 = arguments.length;
var i__21394__auto___26161 = (0);
while(true){
if((i__21394__auto___26161 < len__21393__auto___26160)){
args26093.push((arguments[i__21394__auto___26161]));

var G__26162 = (i__21394__auto___26161 + (1));
i__21394__auto___26161 = G__26162;
continue;
} else {
}
break;
}

var G__26095 = args26093.length;
switch (G__26095) {
case 1:
return sablono.core.range_field26092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26093.length)].join('')));

}
});

sablono.core.range_field26092.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.range_field26092.call(null,name__25967__auto__,null);
});

sablono.core.range_field26092.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.range_field26092.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26092);

/**
 * Creates a search input field.
 */
sablono.core.search_field26096 = (function sablono$core$search_field26096(var_args){
var args26097 = [];
var len__21393__auto___26164 = arguments.length;
var i__21394__auto___26165 = (0);
while(true){
if((i__21394__auto___26165 < len__21393__auto___26164)){
args26097.push((arguments[i__21394__auto___26165]));

var G__26166 = (i__21394__auto___26165 + (1));
i__21394__auto___26165 = G__26166;
continue;
} else {
}
break;
}

var G__26099 = args26097.length;
switch (G__26099) {
case 1:
return sablono.core.search_field26096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26097.length)].join('')));

}
});

sablono.core.search_field26096.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.search_field26096.call(null,name__25967__auto__,null);
});

sablono.core.search_field26096.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.search_field26096.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26096);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26100 = (function sablono$core$tel_field26100(var_args){
var args26101 = [];
var len__21393__auto___26168 = arguments.length;
var i__21394__auto___26169 = (0);
while(true){
if((i__21394__auto___26169 < len__21393__auto___26168)){
args26101.push((arguments[i__21394__auto___26169]));

var G__26170 = (i__21394__auto___26169 + (1));
i__21394__auto___26169 = G__26170;
continue;
} else {
}
break;
}

var G__26103 = args26101.length;
switch (G__26103) {
case 1:
return sablono.core.tel_field26100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26101.length)].join('')));

}
});

sablono.core.tel_field26100.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.tel_field26100.call(null,name__25967__auto__,null);
});

sablono.core.tel_field26100.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.tel_field26100.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26100);

/**
 * Creates a text input field.
 */
sablono.core.text_field26104 = (function sablono$core$text_field26104(var_args){
var args26105 = [];
var len__21393__auto___26172 = arguments.length;
var i__21394__auto___26173 = (0);
while(true){
if((i__21394__auto___26173 < len__21393__auto___26172)){
args26105.push((arguments[i__21394__auto___26173]));

var G__26174 = (i__21394__auto___26173 + (1));
i__21394__auto___26173 = G__26174;
continue;
} else {
}
break;
}

var G__26107 = args26105.length;
switch (G__26107) {
case 1:
return sablono.core.text_field26104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26105.length)].join('')));

}
});

sablono.core.text_field26104.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.text_field26104.call(null,name__25967__auto__,null);
});

sablono.core.text_field26104.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.text_field26104.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26104);

/**
 * Creates a time input field.
 */
sablono.core.time_field26108 = (function sablono$core$time_field26108(var_args){
var args26109 = [];
var len__21393__auto___26176 = arguments.length;
var i__21394__auto___26177 = (0);
while(true){
if((i__21394__auto___26177 < len__21393__auto___26176)){
args26109.push((arguments[i__21394__auto___26177]));

var G__26178 = (i__21394__auto___26177 + (1));
i__21394__auto___26177 = G__26178;
continue;
} else {
}
break;
}

var G__26111 = args26109.length;
switch (G__26111) {
case 1:
return sablono.core.time_field26108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26109.length)].join('')));

}
});

sablono.core.time_field26108.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.time_field26108.call(null,name__25967__auto__,null);
});

sablono.core.time_field26108.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.time_field26108.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26108);

/**
 * Creates a url input field.
 */
sablono.core.url_field26112 = (function sablono$core$url_field26112(var_args){
var args26113 = [];
var len__21393__auto___26180 = arguments.length;
var i__21394__auto___26181 = (0);
while(true){
if((i__21394__auto___26181 < len__21393__auto___26180)){
args26113.push((arguments[i__21394__auto___26181]));

var G__26182 = (i__21394__auto___26181 + (1));
i__21394__auto___26181 = G__26182;
continue;
} else {
}
break;
}

var G__26115 = args26113.length;
switch (G__26115) {
case 1:
return sablono.core.url_field26112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26113.length)].join('')));

}
});

sablono.core.url_field26112.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.url_field26112.call(null,name__25967__auto__,null);
});

sablono.core.url_field26112.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.url_field26112.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26112);

/**
 * Creates a week input field.
 */
sablono.core.week_field26116 = (function sablono$core$week_field26116(var_args){
var args26117 = [];
var len__21393__auto___26184 = arguments.length;
var i__21394__auto___26185 = (0);
while(true){
if((i__21394__auto___26185 < len__21393__auto___26184)){
args26117.push((arguments[i__21394__auto___26185]));

var G__26186 = (i__21394__auto___26185 + (1));
i__21394__auto___26185 = G__26186;
continue;
} else {
}
break;
}

var G__26119 = args26117.length;
switch (G__26119) {
case 1:
return sablono.core.week_field26116.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26116.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26117.length)].join('')));

}
});

sablono.core.week_field26116.cljs$core$IFn$_invoke$arity$1 = (function (name__25967__auto__){
return sablono.core.week_field26116.call(null,name__25967__auto__,null);
});

sablono.core.week_field26116.cljs$core$IFn$_invoke$arity$2 = (function (name__25967__auto__,value__25968__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25967__auto__,value__25968__auto__);
});

sablono.core.week_field26116.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26116);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26188 = (function sablono$core$check_box26188(var_args){
var args26189 = [];
var len__21393__auto___26192 = arguments.length;
var i__21394__auto___26193 = (0);
while(true){
if((i__21394__auto___26193 < len__21393__auto___26192)){
args26189.push((arguments[i__21394__auto___26193]));

var G__26194 = (i__21394__auto___26193 + (1));
i__21394__auto___26193 = G__26194;
continue;
} else {
}
break;
}

var G__26191 = args26189.length;
switch (G__26191) {
case 1:
return sablono.core.check_box26188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26188.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26189.length)].join('')));

}
});

sablono.core.check_box26188.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26188.call(null,name,null);
});

sablono.core.check_box26188.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26188.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26188.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26188.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26188);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26196 = (function sablono$core$radio_button26196(var_args){
var args26197 = [];
var len__21393__auto___26200 = arguments.length;
var i__21394__auto___26201 = (0);
while(true){
if((i__21394__auto___26201 < len__21393__auto___26200)){
args26197.push((arguments[i__21394__auto___26201]));

var G__26202 = (i__21394__auto___26201 + (1));
i__21394__auto___26201 = G__26202;
continue;
} else {
}
break;
}

var G__26199 = args26197.length;
switch (G__26199) {
case 1:
return sablono.core.radio_button26196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26196.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26197.length)].join('')));

}
});

sablono.core.radio_button26196.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26196.call(null,group,null);
});

sablono.core.radio_button26196.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26196.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26196.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26196.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26196);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26204 = (function sablono$core$select_options26204(coll){
var iter__21068__auto__ = (function sablono$core$select_options26204_$_iter__26221(s__26222){
return (new cljs.core.LazySeq(null,(function (){
var s__26222__$1 = s__26222;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26222__$1);
if(temp__4657__auto__){
var s__26222__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26222__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__26222__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__26224 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__26223 = (0);
while(true){
if((i__26223 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__26223);
cljs.core.chunk_append.call(null,b__26224,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26231 = x;
var text = cljs.core.nth.call(null,vec__26231,(0),null);
var val = cljs.core.nth.call(null,vec__26231,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26231,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26204.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26237 = (i__26223 + (1));
i__26223 = G__26237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26224),sablono$core$select_options26204_$_iter__26221.call(null,cljs.core.chunk_rest.call(null,s__26222__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26224),null);
}
} else {
var x = cljs.core.first.call(null,s__26222__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26234 = x;
var text = cljs.core.nth.call(null,vec__26234,(0),null);
var val = cljs.core.nth.call(null,vec__26234,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26234,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options26204.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26204_$_iter__26221.call(null,cljs.core.rest.call(null,s__26222__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26204);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26238 = (function sablono$core$drop_down26238(var_args){
var args26239 = [];
var len__21393__auto___26242 = arguments.length;
var i__21394__auto___26243 = (0);
while(true){
if((i__21394__auto___26243 < len__21393__auto___26242)){
args26239.push((arguments[i__21394__auto___26243]));

var G__26244 = (i__21394__auto___26243 + (1));
i__21394__auto___26243 = G__26244;
continue;
} else {
}
break;
}

var G__26241 = args26239.length;
switch (G__26241) {
case 2:
return sablono.core.drop_down26238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26238.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26239.length)].join('')));

}
});

sablono.core.drop_down26238.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26238.call(null,name,options,null);
});

sablono.core.drop_down26238.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26238.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26238);
/**
 * Creates a text area element.
 */
sablono.core.text_area26246 = (function sablono$core$text_area26246(var_args){
var args26247 = [];
var len__21393__auto___26250 = arguments.length;
var i__21394__auto___26251 = (0);
while(true){
if((i__21394__auto___26251 < len__21393__auto___26250)){
args26247.push((arguments[i__21394__auto___26251]));

var G__26252 = (i__21394__auto___26251 + (1));
i__21394__auto___26251 = G__26252;
continue;
} else {
}
break;
}

var G__26249 = args26247.length;
switch (G__26249) {
case 1:
return sablono.core.text_area26246.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26246.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26247.length)].join('')));

}
});

sablono.core.text_area26246.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26246.call(null,name,null);
});

sablono.core.text_area26246.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26246.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26246);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26254 = (function sablono$core$label26254(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26254);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26255 = (function sablono$core$submit_button26255(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26255);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26256 = (function sablono$core$reset_button26256(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26256);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26257 = (function sablono$core$form_to26257(var_args){
var args__21400__auto__ = [];
var len__21393__auto___26264 = arguments.length;
var i__21394__auto___26265 = (0);
while(true){
if((i__21394__auto___26265 < len__21393__auto___26264)){
args__21400__auto__.push((arguments[i__21394__auto___26265]));

var G__26266 = (i__21394__auto___26265 + (1));
i__21394__auto___26265 = G__26266;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26257.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.form_to26257.cljs$core$IFn$_invoke$arity$variadic = (function (p__26260,body){
var vec__26261 = p__26260;
var method = cljs.core.nth.call(null,vec__26261,(0),null);
var action = cljs.core.nth.call(null,vec__26261,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26257.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26257.cljs$lang$applyTo = (function (seq26258){
var G__26259 = cljs.core.first.call(null,seq26258);
var seq26258__$1 = cljs.core.next.call(null,seq26258);
return sablono.core.form_to26257.cljs$core$IFn$_invoke$arity$variadic(G__26259,seq26258__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26257);

//# sourceMappingURL=core.js.map?rel=1483335400388