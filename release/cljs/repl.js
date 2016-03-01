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
var seq__12690_12704 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__12691_12705 = null;
var count__12692_12706 = (0);
var i__12693_12707 = (0);
while(true){
if((i__12693_12707 < count__12692_12706)){
var f_12708 = chunk__12691_12705.cljs$core$IIndexed$_nth$arity$2(null,i__12693_12707);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_12708], 0));

var G__12709 = seq__12690_12704;
var G__12710 = chunk__12691_12705;
var G__12711 = count__12692_12706;
var G__12712 = (i__12693_12707 + (1));
seq__12690_12704 = G__12709;
chunk__12691_12705 = G__12710;
count__12692_12706 = G__12711;
i__12693_12707 = G__12712;
continue;
} else {
var temp__4657__auto___12713 = cljs.core.seq(seq__12690_12704);
if(temp__4657__auto___12713){
var seq__12690_12714__$1 = temp__4657__auto___12713;
if(cljs.core.chunked_seq_QMARK_(seq__12690_12714__$1)){
var c__6613__auto___12715 = cljs.core.chunk_first(seq__12690_12714__$1);
var G__12716 = cljs.core.chunk_rest(seq__12690_12714__$1);
var G__12717 = c__6613__auto___12715;
var G__12718 = cljs.core.count(c__6613__auto___12715);
var G__12719 = (0);
seq__12690_12704 = G__12716;
chunk__12691_12705 = G__12717;
count__12692_12706 = G__12718;
i__12693_12707 = G__12719;
continue;
} else {
var f_12720 = cljs.core.first(seq__12690_12714__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_12720], 0));

var G__12721 = cljs.core.next(seq__12690_12714__$1);
var G__12722 = null;
var G__12723 = (0);
var G__12724 = (0);
seq__12690_12704 = G__12721;
chunk__12691_12705 = G__12722;
count__12692_12706 = G__12723;
i__12693_12707 = G__12724;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12725 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5810__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5810__auto__)){
return or__5810__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_12725], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_12725)))?cljs.core.second(arglists_12725):arglists_12725)], 0));
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
var seq__12694 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__12695 = null;
var count__12696 = (0);
var i__12697 = (0);
while(true){
if((i__12697 < count__12696)){
var vec__12698 = chunk__12695.cljs$core$IIndexed$_nth$arity$2(null,i__12697);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12698,(0),null);
var map__12699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12698,(1),null);
var map__12699__$1 = ((((!((map__12699 == null)))?((((map__12699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12699):map__12699);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12699__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12699__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__12726 = seq__12694;
var G__12727 = chunk__12695;
var G__12728 = count__12696;
var G__12729 = (i__12697 + (1));
seq__12694 = G__12726;
chunk__12695 = G__12727;
count__12696 = G__12728;
i__12697 = G__12729;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12694);
if(temp__4657__auto__){
var seq__12694__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12694__$1)){
var c__6613__auto__ = cljs.core.chunk_first(seq__12694__$1);
var G__12730 = cljs.core.chunk_rest(seq__12694__$1);
var G__12731 = c__6613__auto__;
var G__12732 = cljs.core.count(c__6613__auto__);
var G__12733 = (0);
seq__12694 = G__12730;
chunk__12695 = G__12731;
count__12696 = G__12732;
i__12697 = G__12733;
continue;
} else {
var vec__12701 = cljs.core.first(seq__12694__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12701,(0),null);
var map__12702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12701,(1),null);
var map__12702__$1 = ((((!((map__12702 == null)))?((((map__12702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12702):map__12702);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12702__$1,cljs.core.cst$kw$doc);
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12702__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(cljs.core.truth_(doc)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__12734 = cljs.core.next(seq__12694__$1);
var G__12735 = null;
var G__12736 = (0);
var G__12737 = (0);
seq__12694 = G__12734;
chunk__12695 = G__12735;
count__12696 = G__12736;
i__12697 = G__12737;
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
