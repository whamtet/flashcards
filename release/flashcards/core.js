// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('flashcards.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hello world!"], 0));
flashcards.core.page = (function flashcards$core$page(contents){
var G__12799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contents], null);
var G__12800 = document.getElementById("content");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__12799,G__12800) : reagent.core.render_component.call(null,G__12799,G__12800));
});
flashcards.core.words = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("hi there\nold man");
flashcards.core.scrambled = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
flashcards.core.attempt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
flashcards.core.scramble = (function flashcards$core$scramble(write_english_QMARK_){
var G__12821 = flashcards.core.scrambled;
var G__12822 = cljs.core.shuffle((function (){var iter__6582__auto__ = ((function (G__12821){
return (function flashcards$core$scramble_$_iter__12823(s__12824){
return (new cljs.core.LazySeq(null,((function (G__12821){
return (function (){
var s__12824__$1 = s__12824;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12824__$1);
if(temp__4657__auto__){
var s__12824__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12824__$2)){
var c__6580__auto__ = cljs.core.chunk_first(s__12824__$2);
var size__6581__auto__ = cljs.core.count(c__6580__auto__);
var b__12826 = cljs.core.chunk_buffer(size__6581__auto__);
if((function (){var i__12825 = (0);
while(true){
if((i__12825 < size__6581__auto__)){
var line = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6580__auto__,i__12825);
if(cljs.core.truth_(cljs.core.not_empty(line))){
var words = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,line.split(" "));
var zh = cljs.core.first(words);
var en = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.rest(words)));
cljs.core.chunk_append(b__12826,(cljs.core.truth_(write_english_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zh,en], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [en,zh], null)));

var G__12829 = (i__12825 + (1));
i__12825 = G__12829;
continue;
} else {
var G__12830 = (i__12825 + (1));
i__12825 = G__12830;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12826),flashcards$core$scramble_$_iter__12823(cljs.core.chunk_rest(s__12824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12826),null);
}
} else {
var line = cljs.core.first(s__12824__$2);
if(cljs.core.truth_(cljs.core.not_empty(line))){
var words = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,line.split(" "));
var zh = cljs.core.first(words);
var en = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.rest(words)));
return cljs.core.cons((cljs.core.truth_(write_english_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zh,en], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [en,zh], null)),flashcards$core$scramble_$_iter__12823(cljs.core.rest(s__12824__$2)));
} else {
var G__12831 = cljs.core.rest(s__12824__$2);
s__12824__$1 = G__12831;
continue;
}
}
} else {
return null;
}
break;
}
});})(G__12821))
,null,null));
});})(G__12821))
;
return iter__6582__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.words) : cljs.core.deref.call(null,flashcards.core.words)).toLowerCase().split("\n"));
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12821,G__12822) : cljs.core.reset_BANG_.call(null,G__12821,G__12822));
});
flashcards.core.almost_EQ_ = (function flashcards$core$almost_EQ_(a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.toLowerCase(),b.toLowerCase());
});
flashcards.core.contents = (function flashcards$core$contents(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.scrambled) : cljs.core.deref.call(null,flashcards.core.scrambled))))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(25),cljs.core.cst$kw$cols,(50),cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.words) : cljs.core.deref.call(null,flashcards.core.words)),cljs.core.cst$kw$on_DASH_change,(function (p1__12832_SHARP_){
var G__12841 = flashcards.core.words;
var G__12842 = p1__12832_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12841,G__12842) : cljs.core.reset_BANG_.call(null,G__12841,G__12842));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Write English",cljs.core.cst$kw$on_DASH_click,(function (){
return flashcards.core.scramble(true);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Write Chinese",cljs.core.cst$kw$on_DASH_click,(function (){
return flashcards.core.scramble(false);
})], null)], null)], null):(function (){var vec__12843 = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.scrambled) : cljs.core.deref.call(null,flashcards.core.scrambled)));
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12843,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12843,(1),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(30)], null)], null),q], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.attempt) : cljs.core.deref.call(null,flashcards.core.attempt)),cljs.core.cst$kw$on_DASH_change,((function (vec__12843,q,a){
return (function (p1__12833_SHARP_){
var G__12844 = flashcards.core.attempt;
var G__12845 = p1__12833_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12844,G__12845) : cljs.core.reset_BANG_.call(null,G__12844,G__12845));
});})(vec__12843,q,a))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Go",cljs.core.cst$kw$on_DASH_click,((function (vec__12843,q,a){
return (function (){
if(cljs.core.truth_(flashcards.core.almost_EQ_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.attempt) : cljs.core.deref.call(null,flashcards.core.attempt)),a))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(flashcards.core.scrambled,cljs.core.rest);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(flashcards.core.attempt,"") : cljs.core.reset_BANG_.call(null,flashcards.core.attempt,""));
} else {
return null;
}
});})(vec__12843,q,a))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Restart",cljs.core.cst$kw$on_DASH_click,((function (vec__12843,q,a){
return (function (){
var G__12846 = flashcards.core.scrambled;
var G__12847 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12846,G__12847) : cljs.core.reset_BANG_.call(null,G__12846,G__12847));
});})(vec__12843,q,a))
], null)], null)], null);
})())], null);
});
flashcards.core.page(flashcards.core.contents);
