// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20285__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20285__auto__){
return or__20285__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20285__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26441_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26441_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26446 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26447 = null;
var count__26448 = (0);
var i__26449 = (0);
while(true){
if((i__26449 < count__26448)){
var n = cljs.core._nth.call(null,chunk__26447,i__26449);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26450 = seq__26446;
var G__26451 = chunk__26447;
var G__26452 = count__26448;
var G__26453 = (i__26449 + (1));
seq__26446 = G__26450;
chunk__26447 = G__26451;
count__26448 = G__26452;
i__26449 = G__26453;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26446);
if(temp__4657__auto__){
var seq__26446__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26446__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__26446__$1);
var G__26454 = cljs.core.chunk_rest.call(null,seq__26446__$1);
var G__26455 = c__21099__auto__;
var G__26456 = cljs.core.count.call(null,c__21099__auto__);
var G__26457 = (0);
seq__26446 = G__26454;
chunk__26447 = G__26455;
count__26448 = G__26456;
i__26449 = G__26457;
continue;
} else {
var n = cljs.core.first.call(null,seq__26446__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26458 = cljs.core.next.call(null,seq__26446__$1);
var G__26459 = null;
var G__26460 = (0);
var G__26461 = (0);
seq__26446 = G__26458;
chunk__26447 = G__26459;
count__26448 = G__26460;
i__26449 = G__26461;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26512_26523 = cljs.core.seq.call(null,deps);
var chunk__26513_26524 = null;
var count__26514_26525 = (0);
var i__26515_26526 = (0);
while(true){
if((i__26515_26526 < count__26514_26525)){
var dep_26527 = cljs.core._nth.call(null,chunk__26513_26524,i__26515_26526);
topo_sort_helper_STAR_.call(null,dep_26527,(depth + (1)),state);

var G__26528 = seq__26512_26523;
var G__26529 = chunk__26513_26524;
var G__26530 = count__26514_26525;
var G__26531 = (i__26515_26526 + (1));
seq__26512_26523 = G__26528;
chunk__26513_26524 = G__26529;
count__26514_26525 = G__26530;
i__26515_26526 = G__26531;
continue;
} else {
var temp__4657__auto___26532 = cljs.core.seq.call(null,seq__26512_26523);
if(temp__4657__auto___26532){
var seq__26512_26533__$1 = temp__4657__auto___26532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26512_26533__$1)){
var c__21099__auto___26534 = cljs.core.chunk_first.call(null,seq__26512_26533__$1);
var G__26535 = cljs.core.chunk_rest.call(null,seq__26512_26533__$1);
var G__26536 = c__21099__auto___26534;
var G__26537 = cljs.core.count.call(null,c__21099__auto___26534);
var G__26538 = (0);
seq__26512_26523 = G__26535;
chunk__26513_26524 = G__26536;
count__26514_26525 = G__26537;
i__26515_26526 = G__26538;
continue;
} else {
var dep_26539 = cljs.core.first.call(null,seq__26512_26533__$1);
topo_sort_helper_STAR_.call(null,dep_26539,(depth + (1)),state);

var G__26540 = cljs.core.next.call(null,seq__26512_26533__$1);
var G__26541 = null;
var G__26542 = (0);
var G__26543 = (0);
seq__26512_26523 = G__26540;
chunk__26513_26524 = G__26541;
count__26514_26525 = G__26542;
i__26515_26526 = G__26543;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26516){
var vec__26520 = p__26516;
var seq__26521 = cljs.core.seq.call(null,vec__26520);
var first__26522 = cljs.core.first.call(null,seq__26521);
var seq__26521__$1 = cljs.core.next.call(null,seq__26521);
var x = first__26522;
var xs = seq__26521__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26520,seq__26521,first__26522,seq__26521__$1,x,xs,get_deps__$1){
return (function (p1__26462_SHARP_){
return clojure.set.difference.call(null,p1__26462_SHARP_,x);
});})(vec__26520,seq__26521,first__26522,seq__26521__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26556 = cljs.core.seq.call(null,provides);
var chunk__26557 = null;
var count__26558 = (0);
var i__26559 = (0);
while(true){
if((i__26559 < count__26558)){
var prov = cljs.core._nth.call(null,chunk__26557,i__26559);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26560_26568 = cljs.core.seq.call(null,requires);
var chunk__26561_26569 = null;
var count__26562_26570 = (0);
var i__26563_26571 = (0);
while(true){
if((i__26563_26571 < count__26562_26570)){
var req_26572 = cljs.core._nth.call(null,chunk__26561_26569,i__26563_26571);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26572,prov);

var G__26573 = seq__26560_26568;
var G__26574 = chunk__26561_26569;
var G__26575 = count__26562_26570;
var G__26576 = (i__26563_26571 + (1));
seq__26560_26568 = G__26573;
chunk__26561_26569 = G__26574;
count__26562_26570 = G__26575;
i__26563_26571 = G__26576;
continue;
} else {
var temp__4657__auto___26577 = cljs.core.seq.call(null,seq__26560_26568);
if(temp__4657__auto___26577){
var seq__26560_26578__$1 = temp__4657__auto___26577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26560_26578__$1)){
var c__21099__auto___26579 = cljs.core.chunk_first.call(null,seq__26560_26578__$1);
var G__26580 = cljs.core.chunk_rest.call(null,seq__26560_26578__$1);
var G__26581 = c__21099__auto___26579;
var G__26582 = cljs.core.count.call(null,c__21099__auto___26579);
var G__26583 = (0);
seq__26560_26568 = G__26580;
chunk__26561_26569 = G__26581;
count__26562_26570 = G__26582;
i__26563_26571 = G__26583;
continue;
} else {
var req_26584 = cljs.core.first.call(null,seq__26560_26578__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26584,prov);

var G__26585 = cljs.core.next.call(null,seq__26560_26578__$1);
var G__26586 = null;
var G__26587 = (0);
var G__26588 = (0);
seq__26560_26568 = G__26585;
chunk__26561_26569 = G__26586;
count__26562_26570 = G__26587;
i__26563_26571 = G__26588;
continue;
}
} else {
}
}
break;
}

var G__26589 = seq__26556;
var G__26590 = chunk__26557;
var G__26591 = count__26558;
var G__26592 = (i__26559 + (1));
seq__26556 = G__26589;
chunk__26557 = G__26590;
count__26558 = G__26591;
i__26559 = G__26592;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26556);
if(temp__4657__auto__){
var seq__26556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26556__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__26556__$1);
var G__26593 = cljs.core.chunk_rest.call(null,seq__26556__$1);
var G__26594 = c__21099__auto__;
var G__26595 = cljs.core.count.call(null,c__21099__auto__);
var G__26596 = (0);
seq__26556 = G__26593;
chunk__26557 = G__26594;
count__26558 = G__26595;
i__26559 = G__26596;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26556__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26564_26597 = cljs.core.seq.call(null,requires);
var chunk__26565_26598 = null;
var count__26566_26599 = (0);
var i__26567_26600 = (0);
while(true){
if((i__26567_26600 < count__26566_26599)){
var req_26601 = cljs.core._nth.call(null,chunk__26565_26598,i__26567_26600);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26601,prov);

var G__26602 = seq__26564_26597;
var G__26603 = chunk__26565_26598;
var G__26604 = count__26566_26599;
var G__26605 = (i__26567_26600 + (1));
seq__26564_26597 = G__26602;
chunk__26565_26598 = G__26603;
count__26566_26599 = G__26604;
i__26567_26600 = G__26605;
continue;
} else {
var temp__4657__auto___26606__$1 = cljs.core.seq.call(null,seq__26564_26597);
if(temp__4657__auto___26606__$1){
var seq__26564_26607__$1 = temp__4657__auto___26606__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26564_26607__$1)){
var c__21099__auto___26608 = cljs.core.chunk_first.call(null,seq__26564_26607__$1);
var G__26609 = cljs.core.chunk_rest.call(null,seq__26564_26607__$1);
var G__26610 = c__21099__auto___26608;
var G__26611 = cljs.core.count.call(null,c__21099__auto___26608);
var G__26612 = (0);
seq__26564_26597 = G__26609;
chunk__26565_26598 = G__26610;
count__26566_26599 = G__26611;
i__26567_26600 = G__26612;
continue;
} else {
var req_26613 = cljs.core.first.call(null,seq__26564_26607__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26613,prov);

var G__26614 = cljs.core.next.call(null,seq__26564_26607__$1);
var G__26615 = null;
var G__26616 = (0);
var G__26617 = (0);
seq__26564_26597 = G__26614;
chunk__26565_26598 = G__26615;
count__26566_26599 = G__26616;
i__26567_26600 = G__26617;
continue;
}
} else {
}
}
break;
}

var G__26618 = cljs.core.next.call(null,seq__26556__$1);
var G__26619 = null;
var G__26620 = (0);
var G__26621 = (0);
seq__26556 = G__26618;
chunk__26557 = G__26619;
count__26558 = G__26620;
i__26559 = G__26621;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26626_26630 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26627_26631 = null;
var count__26628_26632 = (0);
var i__26629_26633 = (0);
while(true){
if((i__26629_26633 < count__26628_26632)){
var ns_26634 = cljs.core._nth.call(null,chunk__26627_26631,i__26629_26633);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26634);

var G__26635 = seq__26626_26630;
var G__26636 = chunk__26627_26631;
var G__26637 = count__26628_26632;
var G__26638 = (i__26629_26633 + (1));
seq__26626_26630 = G__26635;
chunk__26627_26631 = G__26636;
count__26628_26632 = G__26637;
i__26629_26633 = G__26638;
continue;
} else {
var temp__4657__auto___26639 = cljs.core.seq.call(null,seq__26626_26630);
if(temp__4657__auto___26639){
var seq__26626_26640__$1 = temp__4657__auto___26639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26626_26640__$1)){
var c__21099__auto___26641 = cljs.core.chunk_first.call(null,seq__26626_26640__$1);
var G__26642 = cljs.core.chunk_rest.call(null,seq__26626_26640__$1);
var G__26643 = c__21099__auto___26641;
var G__26644 = cljs.core.count.call(null,c__21099__auto___26641);
var G__26645 = (0);
seq__26626_26630 = G__26642;
chunk__26627_26631 = G__26643;
count__26628_26632 = G__26644;
i__26629_26633 = G__26645;
continue;
} else {
var ns_26646 = cljs.core.first.call(null,seq__26626_26640__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26646);

var G__26647 = cljs.core.next.call(null,seq__26626_26640__$1);
var G__26648 = null;
var G__26649 = (0);
var G__26650 = (0);
seq__26626_26630 = G__26647;
chunk__26627_26631 = G__26648;
count__26628_26632 = G__26649;
i__26629_26633 = G__26650;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20285__auto__ = goog.require__;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26651__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26652__i = 0, G__26652__a = new Array(arguments.length -  0);
while (G__26652__i < G__26652__a.length) {G__26652__a[G__26652__i] = arguments[G__26652__i + 0]; ++G__26652__i;}
  args = new cljs.core.IndexedSeq(G__26652__a,0);
} 
return G__26651__delegate.call(this,args);};
G__26651.cljs$lang$maxFixedArity = 0;
G__26651.cljs$lang$applyTo = (function (arglist__26653){
var args = cljs.core.seq(arglist__26653);
return G__26651__delegate(args);
});
G__26651.cljs$core$IFn$_invoke$arity$variadic = G__26651__delegate;
return G__26651;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26655 = cljs.core._EQ_;
var expr__26656 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26655.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26656))){
var path_parts = ((function (pred__26655,expr__26656){
return (function (p1__26654_SHARP_){
return clojure.string.split.call(null,p1__26654_SHARP_,/[\/\\]/);
});})(pred__26655,expr__26656))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26655,expr__26656){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26658){if((e26658 instanceof Error)){
var e = e26658;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26658;

}
}})());
});
;})(path_parts,sep,root,pred__26655,expr__26656))
} else {
if(cljs.core.truth_(pred__26655.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26656))){
return ((function (pred__26655,expr__26656){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__26655,expr__26656){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26655,expr__26656))
);

return deferred.addErrback(((function (deferred,pred__26655,expr__26656){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26655,expr__26656))
);
});
;})(pred__26655,expr__26656))
} else {
return ((function (pred__26655,expr__26656){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26655,expr__26656))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26659,callback){
var map__26662 = p__26659;
var map__26662__$1 = ((((!((map__26662 == null)))?((((map__26662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26662):map__26662);
var file_msg = map__26662__$1;
var request_url = cljs.core.get.call(null,map__26662__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26662,map__26662__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26662,map__26662__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__){
return (function (state_26686){
var state_val_26687 = (state_26686[(1)]);
if((state_val_26687 === (7))){
var inst_26682 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
var statearr_26688_26708 = state_26686__$1;
(statearr_26688_26708[(2)] = inst_26682);

(statearr_26688_26708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (1))){
var state_26686__$1 = state_26686;
var statearr_26689_26709 = state_26686__$1;
(statearr_26689_26709[(2)] = null);

(statearr_26689_26709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (4))){
var inst_26666 = (state_26686[(7)]);
var inst_26666__$1 = (state_26686[(2)]);
var state_26686__$1 = (function (){var statearr_26690 = state_26686;
(statearr_26690[(7)] = inst_26666__$1);

return statearr_26690;
})();
if(cljs.core.truth_(inst_26666__$1)){
var statearr_26691_26710 = state_26686__$1;
(statearr_26691_26710[(1)] = (5));

} else {
var statearr_26692_26711 = state_26686__$1;
(statearr_26692_26711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (6))){
var state_26686__$1 = state_26686;
var statearr_26693_26712 = state_26686__$1;
(statearr_26693_26712[(2)] = null);

(statearr_26693_26712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (3))){
var inst_26684 = (state_26686[(2)]);
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26686__$1,inst_26684);
} else {
if((state_val_26687 === (2))){
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26686__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26687 === (11))){
var inst_26678 = (state_26686[(2)]);
var state_26686__$1 = (function (){var statearr_26694 = state_26686;
(statearr_26694[(8)] = inst_26678);

return statearr_26694;
})();
var statearr_26695_26713 = state_26686__$1;
(statearr_26695_26713[(2)] = null);

(statearr_26695_26713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (9))){
var inst_26670 = (state_26686[(9)]);
var inst_26672 = (state_26686[(10)]);
var inst_26674 = inst_26672.call(null,inst_26670);
var state_26686__$1 = state_26686;
var statearr_26696_26714 = state_26686__$1;
(statearr_26696_26714[(2)] = inst_26674);

(statearr_26696_26714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (5))){
var inst_26666 = (state_26686[(7)]);
var inst_26668 = figwheel.client.file_reloading.blocking_load.call(null,inst_26666);
var state_26686__$1 = state_26686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26686__$1,(8),inst_26668);
} else {
if((state_val_26687 === (10))){
var inst_26670 = (state_26686[(9)]);
var inst_26676 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26670);
var state_26686__$1 = state_26686;
var statearr_26697_26715 = state_26686__$1;
(statearr_26697_26715[(2)] = inst_26676);

(statearr_26697_26715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26687 === (8))){
var inst_26666 = (state_26686[(7)]);
var inst_26672 = (state_26686[(10)]);
var inst_26670 = (state_26686[(2)]);
var inst_26671 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26672__$1 = cljs.core.get.call(null,inst_26671,inst_26666);
var state_26686__$1 = (function (){var statearr_26698 = state_26686;
(statearr_26698[(9)] = inst_26670);

(statearr_26698[(10)] = inst_26672__$1);

return statearr_26698;
})();
if(cljs.core.truth_(inst_26672__$1)){
var statearr_26699_26716 = state_26686__$1;
(statearr_26699_26716[(1)] = (9));

} else {
var statearr_26700_26717 = state_26686__$1;
(statearr_26700_26717[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22490__auto__))
;
return ((function (switch__22378__auto__,c__22490__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22379__auto__ = null;
var figwheel$client$file_reloading$state_machine__22379__auto____0 = (function (){
var statearr_26704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26704[(0)] = figwheel$client$file_reloading$state_machine__22379__auto__);

(statearr_26704[(1)] = (1));

return statearr_26704;
});
var figwheel$client$file_reloading$state_machine__22379__auto____1 = (function (state_26686){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_26686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e26705){if((e26705 instanceof Object)){
var ex__22382__auto__ = e26705;
var statearr_26706_26718 = state_26686;
(statearr_26706_26718[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26719 = state_26686;
state_26686 = G__26719;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22379__auto__ = function(state_26686){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22379__auto____1.call(this,state_26686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22379__auto____0;
figwheel$client$file_reloading$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22379__auto____1;
return figwheel$client$file_reloading$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__))
})();
var state__22492__auto__ = (function (){var statearr_26707 = f__22491__auto__.call(null);
(statearr_26707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_26707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__))
);

return c__22490__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26720,callback){
var map__26723 = p__26720;
var map__26723__$1 = ((((!((map__26723 == null)))?((((map__26723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26723):map__26723);
var file_msg = map__26723__$1;
var namespace = cljs.core.get.call(null,map__26723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26723,map__26723__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26723,map__26723__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26725){
var map__26728 = p__26725;
var map__26728__$1 = ((((!((map__26728 == null)))?((((map__26728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26728):map__26728);
var file_msg = map__26728__$1;
var namespace = cljs.core.get.call(null,map__26728__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20273__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20273__auto__){
var or__20285__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
var or__20285__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20285__auto____$1)){
return or__20285__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20273__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26730,callback){
var map__26733 = p__26730;
var map__26733__$1 = ((((!((map__26733 == null)))?((((map__26733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26733):map__26733);
var file_msg = map__26733__$1;
var request_url = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22490__auto___26837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___26837,out){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___26837,out){
return (function (state_26819){
var state_val_26820 = (state_26819[(1)]);
if((state_val_26820 === (1))){
var inst_26793 = cljs.core.seq.call(null,files);
var inst_26794 = cljs.core.first.call(null,inst_26793);
var inst_26795 = cljs.core.next.call(null,inst_26793);
var inst_26796 = files;
var state_26819__$1 = (function (){var statearr_26821 = state_26819;
(statearr_26821[(7)] = inst_26795);

(statearr_26821[(8)] = inst_26796);

(statearr_26821[(9)] = inst_26794);

return statearr_26821;
})();
var statearr_26822_26838 = state_26819__$1;
(statearr_26822_26838[(2)] = null);

(statearr_26822_26838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (2))){
var inst_26796 = (state_26819[(8)]);
var inst_26802 = (state_26819[(10)]);
var inst_26801 = cljs.core.seq.call(null,inst_26796);
var inst_26802__$1 = cljs.core.first.call(null,inst_26801);
var inst_26803 = cljs.core.next.call(null,inst_26801);
var inst_26804 = (inst_26802__$1 == null);
var inst_26805 = cljs.core.not.call(null,inst_26804);
var state_26819__$1 = (function (){var statearr_26823 = state_26819;
(statearr_26823[(10)] = inst_26802__$1);

(statearr_26823[(11)] = inst_26803);

return statearr_26823;
})();
if(inst_26805){
var statearr_26824_26839 = state_26819__$1;
(statearr_26824_26839[(1)] = (4));

} else {
var statearr_26825_26840 = state_26819__$1;
(statearr_26825_26840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (3))){
var inst_26817 = (state_26819[(2)]);
var state_26819__$1 = state_26819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26819__$1,inst_26817);
} else {
if((state_val_26820 === (4))){
var inst_26802 = (state_26819[(10)]);
var inst_26807 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26802);
var state_26819__$1 = state_26819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26819__$1,(7),inst_26807);
} else {
if((state_val_26820 === (5))){
var inst_26813 = cljs.core.async.close_BANG_.call(null,out);
var state_26819__$1 = state_26819;
var statearr_26826_26841 = state_26819__$1;
(statearr_26826_26841[(2)] = inst_26813);

(statearr_26826_26841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (6))){
var inst_26815 = (state_26819[(2)]);
var state_26819__$1 = state_26819;
var statearr_26827_26842 = state_26819__$1;
(statearr_26827_26842[(2)] = inst_26815);

(statearr_26827_26842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26820 === (7))){
var inst_26803 = (state_26819[(11)]);
var inst_26809 = (state_26819[(2)]);
var inst_26810 = cljs.core.async.put_BANG_.call(null,out,inst_26809);
var inst_26796 = inst_26803;
var state_26819__$1 = (function (){var statearr_26828 = state_26819;
(statearr_26828[(12)] = inst_26810);

(statearr_26828[(8)] = inst_26796);

return statearr_26828;
})();
var statearr_26829_26843 = state_26819__$1;
(statearr_26829_26843[(2)] = null);

(statearr_26829_26843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22490__auto___26837,out))
;
return ((function (switch__22378__auto__,c__22490__auto___26837,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____0 = (function (){
var statearr_26833 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26833[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__);

(statearr_26833[(1)] = (1));

return statearr_26833;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____1 = (function (state_26819){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_26819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e26834){if((e26834 instanceof Object)){
var ex__22382__auto__ = e26834;
var statearr_26835_26844 = state_26819;
(statearr_26835_26844[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26845 = state_26819;
state_26819 = G__26845;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__ = function(state_26819){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____1.call(this,state_26819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___26837,out))
})();
var state__22492__auto__ = (function (){var statearr_26836 = f__22491__auto__.call(null);
(statearr_26836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___26837);

return statearr_26836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___26837,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26846,opts){
var map__26850 = p__26846;
var map__26850__$1 = ((((!((map__26850 == null)))?((((map__26850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26850):map__26850);
var eval_body = cljs.core.get.call(null,map__26850__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26850__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20273__auto__ = eval_body;
if(cljs.core.truth_(and__20273__auto__)){
return typeof eval_body === 'string';
} else {
return and__20273__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26852){var e = e26852;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26853_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26853_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26862){
var vec__26863 = p__26862;
var k = cljs.core.nth.call(null,vec__26863,(0),null);
var v = cljs.core.nth.call(null,vec__26863,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26866){
var vec__26867 = p__26866;
var k = cljs.core.nth.call(null,vec__26867,(0),null);
var v = cljs.core.nth.call(null,vec__26867,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26873,p__26874){
var map__27122 = p__26873;
var map__27122__$1 = ((((!((map__27122 == null)))?((((map__27122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27122):map__27122);
var opts = map__27122__$1;
var before_jsload = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27123 = p__26874;
var map__27123__$1 = ((((!((map__27123 == null)))?((((map__27123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27123):map__27123);
var msg = map__27123__$1;
var files = cljs.core.get.call(null,map__27123__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27123__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27123__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27277){
var state_val_27278 = (state_27277[(1)]);
if((state_val_27278 === (7))){
var inst_27140 = (state_27277[(7)]);
var inst_27139 = (state_27277[(8)]);
var inst_27137 = (state_27277[(9)]);
var inst_27138 = (state_27277[(10)]);
var inst_27145 = cljs.core._nth.call(null,inst_27138,inst_27140);
var inst_27146 = figwheel.client.file_reloading.eval_body.call(null,inst_27145,opts);
var inst_27147 = (inst_27140 + (1));
var tmp27279 = inst_27139;
var tmp27280 = inst_27137;
var tmp27281 = inst_27138;
var inst_27137__$1 = tmp27280;
var inst_27138__$1 = tmp27281;
var inst_27139__$1 = tmp27279;
var inst_27140__$1 = inst_27147;
var state_27277__$1 = (function (){var statearr_27282 = state_27277;
(statearr_27282[(11)] = inst_27146);

(statearr_27282[(7)] = inst_27140__$1);

(statearr_27282[(8)] = inst_27139__$1);

(statearr_27282[(9)] = inst_27137__$1);

(statearr_27282[(10)] = inst_27138__$1);

return statearr_27282;
})();
var statearr_27283_27369 = state_27277__$1;
(statearr_27283_27369[(2)] = null);

(statearr_27283_27369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (20))){
var inst_27180 = (state_27277[(12)]);
var inst_27188 = figwheel.client.file_reloading.sort_files.call(null,inst_27180);
var state_27277__$1 = state_27277;
var statearr_27284_27370 = state_27277__$1;
(statearr_27284_27370[(2)] = inst_27188);

(statearr_27284_27370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (27))){
var state_27277__$1 = state_27277;
var statearr_27285_27371 = state_27277__$1;
(statearr_27285_27371[(2)] = null);

(statearr_27285_27371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (1))){
var inst_27129 = (state_27277[(13)]);
var inst_27126 = before_jsload.call(null,files);
var inst_27127 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27128 = (function (){return ((function (inst_27129,inst_27126,inst_27127,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26870_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26870_SHARP_);
});
;})(inst_27129,inst_27126,inst_27127,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27129__$1 = cljs.core.filter.call(null,inst_27128,files);
var inst_27130 = cljs.core.not_empty.call(null,inst_27129__$1);
var state_27277__$1 = (function (){var statearr_27286 = state_27277;
(statearr_27286[(13)] = inst_27129__$1);

(statearr_27286[(14)] = inst_27127);

(statearr_27286[(15)] = inst_27126);

return statearr_27286;
})();
if(cljs.core.truth_(inst_27130)){
var statearr_27287_27372 = state_27277__$1;
(statearr_27287_27372[(1)] = (2));

} else {
var statearr_27288_27373 = state_27277__$1;
(statearr_27288_27373[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (24))){
var state_27277__$1 = state_27277;
var statearr_27289_27374 = state_27277__$1;
(statearr_27289_27374[(2)] = null);

(statearr_27289_27374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (39))){
var inst_27230 = (state_27277[(16)]);
var state_27277__$1 = state_27277;
var statearr_27290_27375 = state_27277__$1;
(statearr_27290_27375[(2)] = inst_27230);

(statearr_27290_27375[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (46))){
var inst_27272 = (state_27277[(2)]);
var state_27277__$1 = state_27277;
var statearr_27291_27376 = state_27277__$1;
(statearr_27291_27376[(2)] = inst_27272);

(statearr_27291_27376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (4))){
var inst_27174 = (state_27277[(2)]);
var inst_27175 = cljs.core.List.EMPTY;
var inst_27176 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27175);
var inst_27177 = (function (){return ((function (inst_27174,inst_27175,inst_27176,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26871_SHARP_){
var and__20273__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26871_SHARP_);
if(cljs.core.truth_(and__20273__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26871_SHARP_));
} else {
return and__20273__auto__;
}
});
;})(inst_27174,inst_27175,inst_27176,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27178 = cljs.core.filter.call(null,inst_27177,files);
var inst_27179 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27180 = cljs.core.concat.call(null,inst_27178,inst_27179);
var state_27277__$1 = (function (){var statearr_27292 = state_27277;
(statearr_27292[(12)] = inst_27180);

(statearr_27292[(17)] = inst_27174);

(statearr_27292[(18)] = inst_27176);

return statearr_27292;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27293_27377 = state_27277__$1;
(statearr_27293_27377[(1)] = (16));

} else {
var statearr_27294_27378 = state_27277__$1;
(statearr_27294_27378[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (15))){
var inst_27164 = (state_27277[(2)]);
var state_27277__$1 = state_27277;
var statearr_27295_27379 = state_27277__$1;
(statearr_27295_27379[(2)] = inst_27164);

(statearr_27295_27379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (21))){
var inst_27190 = (state_27277[(19)]);
var inst_27190__$1 = (state_27277[(2)]);
var inst_27191 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27190__$1);
var state_27277__$1 = (function (){var statearr_27296 = state_27277;
(statearr_27296[(19)] = inst_27190__$1);

return statearr_27296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27277__$1,(22),inst_27191);
} else {
if((state_val_27278 === (31))){
var inst_27275 = (state_27277[(2)]);
var state_27277__$1 = state_27277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27277__$1,inst_27275);
} else {
if((state_val_27278 === (32))){
var inst_27230 = (state_27277[(16)]);
var inst_27235 = inst_27230.cljs$lang$protocol_mask$partition0$;
var inst_27236 = (inst_27235 & (64));
var inst_27237 = inst_27230.cljs$core$ISeq$;
var inst_27238 = (cljs.core.PROTOCOL_SENTINEL === inst_27237);
var inst_27239 = (inst_27236) || (inst_27238);
var state_27277__$1 = state_27277;
if(cljs.core.truth_(inst_27239)){
var statearr_27297_27380 = state_27277__$1;
(statearr_27297_27380[(1)] = (35));

} else {
var statearr_27298_27381 = state_27277__$1;
(statearr_27298_27381[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (40))){
var inst_27252 = (state_27277[(20)]);
var inst_27251 = (state_27277[(2)]);
var inst_27252__$1 = cljs.core.get.call(null,inst_27251,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27253 = cljs.core.get.call(null,inst_27251,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27254 = cljs.core.not_empty.call(null,inst_27252__$1);
var state_27277__$1 = (function (){var statearr_27299 = state_27277;
(statearr_27299[(21)] = inst_27253);

(statearr_27299[(20)] = inst_27252__$1);

return statearr_27299;
})();
if(cljs.core.truth_(inst_27254)){
var statearr_27300_27382 = state_27277__$1;
(statearr_27300_27382[(1)] = (41));

} else {
var statearr_27301_27383 = state_27277__$1;
(statearr_27301_27383[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (33))){
var state_27277__$1 = state_27277;
var statearr_27302_27384 = state_27277__$1;
(statearr_27302_27384[(2)] = false);

(statearr_27302_27384[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (13))){
var inst_27150 = (state_27277[(22)]);
var inst_27154 = cljs.core.chunk_first.call(null,inst_27150);
var inst_27155 = cljs.core.chunk_rest.call(null,inst_27150);
var inst_27156 = cljs.core.count.call(null,inst_27154);
var inst_27137 = inst_27155;
var inst_27138 = inst_27154;
var inst_27139 = inst_27156;
var inst_27140 = (0);
var state_27277__$1 = (function (){var statearr_27303 = state_27277;
(statearr_27303[(7)] = inst_27140);

(statearr_27303[(8)] = inst_27139);

(statearr_27303[(9)] = inst_27137);

(statearr_27303[(10)] = inst_27138);

return statearr_27303;
})();
var statearr_27304_27385 = state_27277__$1;
(statearr_27304_27385[(2)] = null);

(statearr_27304_27385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (22))){
var inst_27193 = (state_27277[(23)]);
var inst_27190 = (state_27277[(19)]);
var inst_27198 = (state_27277[(24)]);
var inst_27194 = (state_27277[(25)]);
var inst_27193__$1 = (state_27277[(2)]);
var inst_27194__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27193__$1);
var inst_27195 = (function (){var all_files = inst_27190;
var res_SINGLEQUOTE_ = inst_27193__$1;
var res = inst_27194__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27193,inst_27190,inst_27198,inst_27194,inst_27193__$1,inst_27194__$1,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26872_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26872_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27193,inst_27190,inst_27198,inst_27194,inst_27193__$1,inst_27194__$1,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27196 = cljs.core.filter.call(null,inst_27195,inst_27193__$1);
var inst_27197 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27198__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27197);
var inst_27199 = cljs.core.not_empty.call(null,inst_27198__$1);
var state_27277__$1 = (function (){var statearr_27305 = state_27277;
(statearr_27305[(26)] = inst_27196);

(statearr_27305[(23)] = inst_27193__$1);

(statearr_27305[(24)] = inst_27198__$1);

(statearr_27305[(25)] = inst_27194__$1);

return statearr_27305;
})();
if(cljs.core.truth_(inst_27199)){
var statearr_27306_27386 = state_27277__$1;
(statearr_27306_27386[(1)] = (23));

} else {
var statearr_27307_27387 = state_27277__$1;
(statearr_27307_27387[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (36))){
var state_27277__$1 = state_27277;
var statearr_27308_27388 = state_27277__$1;
(statearr_27308_27388[(2)] = false);

(statearr_27308_27388[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (41))){
var inst_27252 = (state_27277[(20)]);
var inst_27256 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27257 = cljs.core.map.call(null,inst_27256,inst_27252);
var inst_27258 = cljs.core.pr_str.call(null,inst_27257);
var inst_27259 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27258)].join('');
var inst_27260 = figwheel.client.utils.log.call(null,inst_27259);
var state_27277__$1 = state_27277;
var statearr_27309_27389 = state_27277__$1;
(statearr_27309_27389[(2)] = inst_27260);

(statearr_27309_27389[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (43))){
var inst_27253 = (state_27277[(21)]);
var inst_27263 = (state_27277[(2)]);
var inst_27264 = cljs.core.not_empty.call(null,inst_27253);
var state_27277__$1 = (function (){var statearr_27310 = state_27277;
(statearr_27310[(27)] = inst_27263);

return statearr_27310;
})();
if(cljs.core.truth_(inst_27264)){
var statearr_27311_27390 = state_27277__$1;
(statearr_27311_27390[(1)] = (44));

} else {
var statearr_27312_27391 = state_27277__$1;
(statearr_27312_27391[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (29))){
var inst_27196 = (state_27277[(26)]);
var inst_27193 = (state_27277[(23)]);
var inst_27190 = (state_27277[(19)]);
var inst_27230 = (state_27277[(16)]);
var inst_27198 = (state_27277[(24)]);
var inst_27194 = (state_27277[(25)]);
var inst_27226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27229 = (function (){var all_files = inst_27190;
var res_SINGLEQUOTE_ = inst_27193;
var res = inst_27194;
var files_not_loaded = inst_27196;
var dependencies_that_loaded = inst_27198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27193,inst_27190,inst_27230,inst_27198,inst_27194,inst_27226,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27228){
var map__27313 = p__27228;
var map__27313__$1 = ((((!((map__27313 == null)))?((((map__27313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27313):map__27313);
var namespace = cljs.core.get.call(null,map__27313__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27193,inst_27190,inst_27230,inst_27198,inst_27194,inst_27226,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27230__$1 = cljs.core.group_by.call(null,inst_27229,inst_27196);
var inst_27232 = (inst_27230__$1 == null);
var inst_27233 = cljs.core.not.call(null,inst_27232);
var state_27277__$1 = (function (){var statearr_27315 = state_27277;
(statearr_27315[(28)] = inst_27226);

(statearr_27315[(16)] = inst_27230__$1);

return statearr_27315;
})();
if(inst_27233){
var statearr_27316_27392 = state_27277__$1;
(statearr_27316_27392[(1)] = (32));

} else {
var statearr_27317_27393 = state_27277__$1;
(statearr_27317_27393[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (44))){
var inst_27253 = (state_27277[(21)]);
var inst_27266 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27253);
var inst_27267 = cljs.core.pr_str.call(null,inst_27266);
var inst_27268 = [cljs.core.str("not required: "),cljs.core.str(inst_27267)].join('');
var inst_27269 = figwheel.client.utils.log.call(null,inst_27268);
var state_27277__$1 = state_27277;
var statearr_27318_27394 = state_27277__$1;
(statearr_27318_27394[(2)] = inst_27269);

(statearr_27318_27394[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (6))){
var inst_27171 = (state_27277[(2)]);
var state_27277__$1 = state_27277;
var statearr_27319_27395 = state_27277__$1;
(statearr_27319_27395[(2)] = inst_27171);

(statearr_27319_27395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (28))){
var inst_27196 = (state_27277[(26)]);
var inst_27223 = (state_27277[(2)]);
var inst_27224 = cljs.core.not_empty.call(null,inst_27196);
var state_27277__$1 = (function (){var statearr_27320 = state_27277;
(statearr_27320[(29)] = inst_27223);

return statearr_27320;
})();
if(cljs.core.truth_(inst_27224)){
var statearr_27321_27396 = state_27277__$1;
(statearr_27321_27396[(1)] = (29));

} else {
var statearr_27322_27397 = state_27277__$1;
(statearr_27322_27397[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (25))){
var inst_27194 = (state_27277[(25)]);
var inst_27210 = (state_27277[(2)]);
var inst_27211 = cljs.core.not_empty.call(null,inst_27194);
var state_27277__$1 = (function (){var statearr_27323 = state_27277;
(statearr_27323[(30)] = inst_27210);

return statearr_27323;
})();
if(cljs.core.truth_(inst_27211)){
var statearr_27324_27398 = state_27277__$1;
(statearr_27324_27398[(1)] = (26));

} else {
var statearr_27325_27399 = state_27277__$1;
(statearr_27325_27399[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (34))){
var inst_27246 = (state_27277[(2)]);
var state_27277__$1 = state_27277;
if(cljs.core.truth_(inst_27246)){
var statearr_27326_27400 = state_27277__$1;
(statearr_27326_27400[(1)] = (38));

} else {
var statearr_27327_27401 = state_27277__$1;
(statearr_27327_27401[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (17))){
var state_27277__$1 = state_27277;
var statearr_27328_27402 = state_27277__$1;
(statearr_27328_27402[(2)] = recompile_dependents);

(statearr_27328_27402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (3))){
var state_27277__$1 = state_27277;
var statearr_27329_27403 = state_27277__$1;
(statearr_27329_27403[(2)] = null);

(statearr_27329_27403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (12))){
var inst_27167 = (state_27277[(2)]);
var state_27277__$1 = state_27277;
var statearr_27330_27404 = state_27277__$1;
(statearr_27330_27404[(2)] = inst_27167);

(statearr_27330_27404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (2))){
var inst_27129 = (state_27277[(13)]);
var inst_27136 = cljs.core.seq.call(null,inst_27129);
var inst_27137 = inst_27136;
var inst_27138 = null;
var inst_27139 = (0);
var inst_27140 = (0);
var state_27277__$1 = (function (){var statearr_27331 = state_27277;
(statearr_27331[(7)] = inst_27140);

(statearr_27331[(8)] = inst_27139);

(statearr_27331[(9)] = inst_27137);

(statearr_27331[(10)] = inst_27138);

return statearr_27331;
})();
var statearr_27332_27405 = state_27277__$1;
(statearr_27332_27405[(2)] = null);

(statearr_27332_27405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (23))){
var inst_27196 = (state_27277[(26)]);
var inst_27193 = (state_27277[(23)]);
var inst_27190 = (state_27277[(19)]);
var inst_27198 = (state_27277[(24)]);
var inst_27194 = (state_27277[(25)]);
var inst_27201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27203 = (function (){var all_files = inst_27190;
var res_SINGLEQUOTE_ = inst_27193;
var res = inst_27194;
var files_not_loaded = inst_27196;
var dependencies_that_loaded = inst_27198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27193,inst_27190,inst_27198,inst_27194,inst_27201,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27202){
var map__27333 = p__27202;
var map__27333__$1 = ((((!((map__27333 == null)))?((((map__27333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27333):map__27333);
var request_url = cljs.core.get.call(null,map__27333__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27193,inst_27190,inst_27198,inst_27194,inst_27201,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27204 = cljs.core.reverse.call(null,inst_27198);
var inst_27205 = cljs.core.map.call(null,inst_27203,inst_27204);
var inst_27206 = cljs.core.pr_str.call(null,inst_27205);
var inst_27207 = figwheel.client.utils.log.call(null,inst_27206);
var state_27277__$1 = (function (){var statearr_27335 = state_27277;
(statearr_27335[(31)] = inst_27201);

return statearr_27335;
})();
var statearr_27336_27406 = state_27277__$1;
(statearr_27336_27406[(2)] = inst_27207);

(statearr_27336_27406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (35))){
var state_27277__$1 = state_27277;
var statearr_27337_27407 = state_27277__$1;
(statearr_27337_27407[(2)] = true);

(statearr_27337_27407[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (19))){
var inst_27180 = (state_27277[(12)]);
var inst_27186 = figwheel.client.file_reloading.expand_files.call(null,inst_27180);
var state_27277__$1 = state_27277;
var statearr_27338_27408 = state_27277__$1;
(statearr_27338_27408[(2)] = inst_27186);

(statearr_27338_27408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (11))){
var state_27277__$1 = state_27277;
var statearr_27339_27409 = state_27277__$1;
(statearr_27339_27409[(2)] = null);

(statearr_27339_27409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (9))){
var inst_27169 = (state_27277[(2)]);
var state_27277__$1 = state_27277;
var statearr_27340_27410 = state_27277__$1;
(statearr_27340_27410[(2)] = inst_27169);

(statearr_27340_27410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (5))){
var inst_27140 = (state_27277[(7)]);
var inst_27139 = (state_27277[(8)]);
var inst_27142 = (inst_27140 < inst_27139);
var inst_27143 = inst_27142;
var state_27277__$1 = state_27277;
if(cljs.core.truth_(inst_27143)){
var statearr_27341_27411 = state_27277__$1;
(statearr_27341_27411[(1)] = (7));

} else {
var statearr_27342_27412 = state_27277__$1;
(statearr_27342_27412[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (14))){
var inst_27150 = (state_27277[(22)]);
var inst_27159 = cljs.core.first.call(null,inst_27150);
var inst_27160 = figwheel.client.file_reloading.eval_body.call(null,inst_27159,opts);
var inst_27161 = cljs.core.next.call(null,inst_27150);
var inst_27137 = inst_27161;
var inst_27138 = null;
var inst_27139 = (0);
var inst_27140 = (0);
var state_27277__$1 = (function (){var statearr_27343 = state_27277;
(statearr_27343[(32)] = inst_27160);

(statearr_27343[(7)] = inst_27140);

(statearr_27343[(8)] = inst_27139);

(statearr_27343[(9)] = inst_27137);

(statearr_27343[(10)] = inst_27138);

return statearr_27343;
})();
var statearr_27344_27413 = state_27277__$1;
(statearr_27344_27413[(2)] = null);

(statearr_27344_27413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (45))){
var state_27277__$1 = state_27277;
var statearr_27345_27414 = state_27277__$1;
(statearr_27345_27414[(2)] = null);

(statearr_27345_27414[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (26))){
var inst_27196 = (state_27277[(26)]);
var inst_27193 = (state_27277[(23)]);
var inst_27190 = (state_27277[(19)]);
var inst_27198 = (state_27277[(24)]);
var inst_27194 = (state_27277[(25)]);
var inst_27213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27215 = (function (){var all_files = inst_27190;
var res_SINGLEQUOTE_ = inst_27193;
var res = inst_27194;
var files_not_loaded = inst_27196;
var dependencies_that_loaded = inst_27198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27193,inst_27190,inst_27198,inst_27194,inst_27213,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27214){
var map__27346 = p__27214;
var map__27346__$1 = ((((!((map__27346 == null)))?((((map__27346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27346):map__27346);
var namespace = cljs.core.get.call(null,map__27346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27193,inst_27190,inst_27198,inst_27194,inst_27213,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27216 = cljs.core.map.call(null,inst_27215,inst_27194);
var inst_27217 = cljs.core.pr_str.call(null,inst_27216);
var inst_27218 = figwheel.client.utils.log.call(null,inst_27217);
var inst_27219 = (function (){var all_files = inst_27190;
var res_SINGLEQUOTE_ = inst_27193;
var res = inst_27194;
var files_not_loaded = inst_27196;
var dependencies_that_loaded = inst_27198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27193,inst_27190,inst_27198,inst_27194,inst_27213,inst_27215,inst_27216,inst_27217,inst_27218,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27196,inst_27193,inst_27190,inst_27198,inst_27194,inst_27213,inst_27215,inst_27216,inst_27217,inst_27218,state_val_27278,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27220 = setTimeout(inst_27219,(10));
var state_27277__$1 = (function (){var statearr_27348 = state_27277;
(statearr_27348[(33)] = inst_27213);

(statearr_27348[(34)] = inst_27218);

return statearr_27348;
})();
var statearr_27349_27415 = state_27277__$1;
(statearr_27349_27415[(2)] = inst_27220);

(statearr_27349_27415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (16))){
var state_27277__$1 = state_27277;
var statearr_27350_27416 = state_27277__$1;
(statearr_27350_27416[(2)] = reload_dependents);

(statearr_27350_27416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (38))){
var inst_27230 = (state_27277[(16)]);
var inst_27248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27230);
var state_27277__$1 = state_27277;
var statearr_27351_27417 = state_27277__$1;
(statearr_27351_27417[(2)] = inst_27248);

(statearr_27351_27417[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (30))){
var state_27277__$1 = state_27277;
var statearr_27352_27418 = state_27277__$1;
(statearr_27352_27418[(2)] = null);

(statearr_27352_27418[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (10))){
var inst_27150 = (state_27277[(22)]);
var inst_27152 = cljs.core.chunked_seq_QMARK_.call(null,inst_27150);
var state_27277__$1 = state_27277;
if(inst_27152){
var statearr_27353_27419 = state_27277__$1;
(statearr_27353_27419[(1)] = (13));

} else {
var statearr_27354_27420 = state_27277__$1;
(statearr_27354_27420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (18))){
var inst_27184 = (state_27277[(2)]);
var state_27277__$1 = state_27277;
if(cljs.core.truth_(inst_27184)){
var statearr_27355_27421 = state_27277__$1;
(statearr_27355_27421[(1)] = (19));

} else {
var statearr_27356_27422 = state_27277__$1;
(statearr_27356_27422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (42))){
var state_27277__$1 = state_27277;
var statearr_27357_27423 = state_27277__$1;
(statearr_27357_27423[(2)] = null);

(statearr_27357_27423[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (37))){
var inst_27243 = (state_27277[(2)]);
var state_27277__$1 = state_27277;
var statearr_27358_27424 = state_27277__$1;
(statearr_27358_27424[(2)] = inst_27243);

(statearr_27358_27424[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27278 === (8))){
var inst_27150 = (state_27277[(22)]);
var inst_27137 = (state_27277[(9)]);
var inst_27150__$1 = cljs.core.seq.call(null,inst_27137);
var state_27277__$1 = (function (){var statearr_27359 = state_27277;
(statearr_27359[(22)] = inst_27150__$1);

return statearr_27359;
})();
if(inst_27150__$1){
var statearr_27360_27425 = state_27277__$1;
(statearr_27360_27425[(1)] = (10));

} else {
var statearr_27361_27426 = state_27277__$1;
(statearr_27361_27426[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22378__auto__,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____0 = (function (){
var statearr_27365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27365[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__);

(statearr_27365[(1)] = (1));

return statearr_27365;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____1 = (function (state_27277){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_27277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e27366){if((e27366 instanceof Object)){
var ex__22382__auto__ = e27366;
var statearr_27367_27427 = state_27277;
(statearr_27367_27427[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27428 = state_27277;
state_27277 = G__27428;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__ = function(state_27277){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____1.call(this,state_27277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22492__auto__ = (function (){var statearr_27368 = f__22491__auto__.call(null);
(statearr_27368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_27368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__,map__27122,map__27122__$1,opts,before_jsload,on_jsload,reload_dependents,map__27123,map__27123__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22490__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27431,link){
var map__27434 = p__27431;
var map__27434__$1 = ((((!((map__27434 == null)))?((((map__27434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27434):map__27434);
var file = cljs.core.get.call(null,map__27434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27434,map__27434__$1,file){
return (function (p1__27429_SHARP_,p2__27430_SHARP_){
if(cljs.core._EQ_.call(null,p1__27429_SHARP_,p2__27430_SHARP_)){
return p1__27429_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27434,map__27434__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27440){
var map__27441 = p__27440;
var map__27441__$1 = ((((!((map__27441 == null)))?((((map__27441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27441):map__27441);
var match_length = cljs.core.get.call(null,map__27441__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27441__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27436_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27436_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27443 = [];
var len__21393__auto___27446 = arguments.length;
var i__21394__auto___27447 = (0);
while(true){
if((i__21394__auto___27447 < len__21393__auto___27446)){
args27443.push((arguments[i__21394__auto___27447]));

var G__27448 = (i__21394__auto___27447 + (1));
i__21394__auto___27447 = G__27448;
continue;
} else {
}
break;
}

var G__27445 = args27443.length;
switch (G__27445) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27443.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27450_SHARP_,p2__27451_SHARP_){
return cljs.core.assoc.call(null,p1__27450_SHARP_,cljs.core.get.call(null,p2__27451_SHARP_,key),p2__27451_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27452){
var map__27455 = p__27452;
var map__27455__$1 = ((((!((map__27455 == null)))?((((map__27455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27455):map__27455);
var f_data = map__27455__$1;
var file = cljs.core.get.call(null,map__27455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27457,files_msg){
var map__27464 = p__27457;
var map__27464__$1 = ((((!((map__27464 == null)))?((((map__27464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27464):map__27464);
var opts = map__27464__$1;
var on_cssload = cljs.core.get.call(null,map__27464__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27466_27470 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27467_27471 = null;
var count__27468_27472 = (0);
var i__27469_27473 = (0);
while(true){
if((i__27469_27473 < count__27468_27472)){
var f_27474 = cljs.core._nth.call(null,chunk__27467_27471,i__27469_27473);
figwheel.client.file_reloading.reload_css_file.call(null,f_27474);

var G__27475 = seq__27466_27470;
var G__27476 = chunk__27467_27471;
var G__27477 = count__27468_27472;
var G__27478 = (i__27469_27473 + (1));
seq__27466_27470 = G__27475;
chunk__27467_27471 = G__27476;
count__27468_27472 = G__27477;
i__27469_27473 = G__27478;
continue;
} else {
var temp__4657__auto___27479 = cljs.core.seq.call(null,seq__27466_27470);
if(temp__4657__auto___27479){
var seq__27466_27480__$1 = temp__4657__auto___27479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27466_27480__$1)){
var c__21099__auto___27481 = cljs.core.chunk_first.call(null,seq__27466_27480__$1);
var G__27482 = cljs.core.chunk_rest.call(null,seq__27466_27480__$1);
var G__27483 = c__21099__auto___27481;
var G__27484 = cljs.core.count.call(null,c__21099__auto___27481);
var G__27485 = (0);
seq__27466_27470 = G__27482;
chunk__27467_27471 = G__27483;
count__27468_27472 = G__27484;
i__27469_27473 = G__27485;
continue;
} else {
var f_27486 = cljs.core.first.call(null,seq__27466_27480__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27486);

var G__27487 = cljs.core.next.call(null,seq__27466_27480__$1);
var G__27488 = null;
var G__27489 = (0);
var G__27490 = (0);
seq__27466_27470 = G__27487;
chunk__27467_27471 = G__27488;
count__27468_27472 = G__27489;
i__27469_27473 = G__27490;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27464,map__27464__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27464,map__27464__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1483335401853