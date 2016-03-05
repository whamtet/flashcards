// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__13500_13514 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__13501_13515 = null;
var count__13502_13516 = (0);
var i__13503_13517 = (0);
while(true){
if((i__13503_13517 < count__13502_13516)){
var f_13518 = chunk__13501_13515.cljs$core$IIndexed$_nth$arity$2(null,i__13503_13517);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_13518], 0));

var G__13519 = seq__13500_13514;
var G__13520 = chunk__13501_13515;
var G__13521 = count__13502_13516;
var G__13522 = (i__13503_13517 + (1));
seq__13500_13514 = G__13519;
chunk__13501_13515 = G__13520;
count__13502_13516 = G__13521;
i__13503_13517 = G__13522;
continue;
} else {
var temp__4657__auto___13523 = cljs.core.seq(seq__13500_13514);
if(temp__4657__auto___13523){
var seq__13500_13524__$1 = temp__4657__auto___13523;
if(cljs.core.chunked_seq_QMARK_(seq__13500_13524__$1)){
var c__6613__auto___13525 = cljs.core.chunk_first(seq__13500_13524__$1);
var G__13526 = cljs.core.chunk_rest(seq__13500_13524__$1);
var G__13527 = c__6613__auto___13525;
var G__13528 = cljs.core.count(c__6613__auto___13525);
var G__13529 = (0);
seq__13500_13514 = G__13526;
chunk__13501_13515 = G__13527;
count__13502_13516 = G__13528;
i__13503_13517 = G__13529;
continue;
} else {
var f_13530 = cljs.core.first(seq__13500_13524__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_13530], 0));

var G__13531 = cljs.core.next(seq__13500_13524__$1);
var G__13532 = null;
var G__13533 = (0);
var G__13534 = (0);
seq__13500_13514 = G__13531;
chunk__13501_13515 = G__13532;
count__13502_13516 = G__13533;
i__13503_13517 = G__13534;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13535 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5810__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5810__auto__)){
return or__5810__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_13535], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_13535)))?cljs.core.second(arglists_13535):arglists_13535)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__13504 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__13505 = null;
var count__13506 = (0);
var i__13507 = (0);
while(true){
if((i__13507 < count__13506)){
var vec__13508 = chunk__13505.cljs$core$IIndexed$_nth$arity$2(null,i__13507);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13508,(0),null);
var map__13509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13508,(1),null);
var map__13509__$1 = ((((!((map__13509 == null)))?((((map__13509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13509):map__13509);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13509__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13509__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__13536 = seq__13504;
var G__13537 = chunk__13505;
var G__13538 = count__13506;
var G__13539 = (i__13507 + (1));
seq__13504 = G__13536;
chunk__13505 = G__13537;
count__13506 = G__13538;
i__13507 = G__13539;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13504);
if(temp__4657__auto__){
var seq__13504__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13504__$1)){
var c__6613__auto__ = cljs.core.chunk_first(seq__13504__$1);
var G__13540 = cljs.core.chunk_rest(seq__13504__$1);
var G__13541 = c__6613__auto__;
var G__13542 = cljs.core.count(c__6613__auto__);
var G__13543 = (0);
seq__13504 = G__13540;
chunk__13505 = G__13541;
count__13506 = G__13542;
i__13507 = G__13543;
continue;
} else {
var vec__13511 = cljs.core.first(seq__13504__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13511,(0),null);
var map__13512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13511,(1),null);
var map__13512__$1 = ((((!((map__13512 == null)))?((((map__13512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13512):map__13512);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13512__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13512__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__13544 = cljs.core.next(seq__13504__$1);
var G__13545 = null;
var G__13546 = (0);
var G__13547 = (0);
seq__13504 = G__13544;
chunk__13505 = G__13545;
count__13506 = G__13546;
i__13507 = G__13547;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
