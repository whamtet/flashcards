// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('flashcards.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('reagent.core');
goog.require('alandipert.storage_atom');
flashcards.core.stored = alandipert.storage_atom.local_storage((function (){var G__13635 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13635) : cljs.core.atom.call(null,G__13635));
})(),cljs.core.cst$kw$stored);
flashcards.core.stored_react = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.stored) : cljs.core.deref.call(null,flashcards.core.stored)));
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Hello world!"], 0));
flashcards.core.page = (function flashcards$core$page(contents){
var G__13638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contents], null);
var G__13639 = document.getElementById("content");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__13638,G__13639) : reagent.core.render_component.call(null,G__13638,G__13639));
});
flashcards.core.words = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("hi there\nold man");
flashcards.core.scrambled = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
flashcards.core.attempt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
flashcards.core.scramble = (function flashcards$core$scramble(write_english_QMARK_){
var G__13660 = flashcards.core.scrambled;
var G__13661 = cljs.core.shuffle((function (){var iter__6582__auto__ = ((function (G__13660){
return (function flashcards$core$scramble_$_iter__13662(s__13663){
return (new cljs.core.LazySeq(null,((function (G__13660){
return (function (){
var s__13663__$1 = s__13663;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13663__$1);
if(temp__4657__auto__){
var s__13663__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13663__$2)){
var c__6580__auto__ = cljs.core.chunk_first(s__13663__$2);
var size__6581__auto__ = cljs.core.count(c__6580__auto__);
var b__13665 = cljs.core.chunk_buffer(size__6581__auto__);
if((function (){var i__13664 = (0);
while(true){
if((i__13664 < size__6581__auto__)){
var line = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6580__auto__,i__13664);
if(cljs.core.truth_(cljs.core.not_empty(line))){
var words = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,line.split(" "));
var zh = cljs.core.first(words);
var en = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.rest(words)));
cljs.core.chunk_append(b__13665,(cljs.core.truth_(write_english_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zh,en], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [en,zh], null)));

var G__13668 = (i__13664 + (1));
i__13664 = G__13668;
continue;
} else {
var G__13669 = (i__13664 + (1));
i__13664 = G__13669;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13665),flashcards$core$scramble_$_iter__13662(cljs.core.chunk_rest(s__13663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13665),null);
}
} else {
var line = cljs.core.first(s__13663__$2);
if(cljs.core.truth_(cljs.core.not_empty(line))){
var words = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,line.split(" "));
var zh = cljs.core.first(words);
var en = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.rest(words)));
return cljs.core.cons((cljs.core.truth_(write_english_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zh,en], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [en,zh], null)),flashcards$core$scramble_$_iter__13662(cljs.core.rest(s__13663__$2)));
} else {
var G__13670 = cljs.core.rest(s__13663__$2);
s__13663__$1 = G__13670;
continue;
}
}
} else {
return null;
}
break;
}
});})(G__13660))
,null,null));
});})(G__13660))
;
return iter__6582__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.words) : cljs.core.deref.call(null,flashcards.core.words)).toLowerCase().split("\n"));
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13660,G__13661) : cljs.core.reset_BANG_.call(null,G__13660,G__13661));
});
flashcards.core.almost_EQ_ = (function flashcards$core$almost_EQ_(a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.toLowerCase(),b.toLowerCase());
});
flashcards.core.contents = (function flashcards$core$contents(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,((cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.scrambled) : cljs.core.deref.call(null,flashcards.core.scrambled))))?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,(25),cljs.core.cst$kw$cols,(50),cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.words) : cljs.core.deref.call(null,flashcards.core.words)),cljs.core.cst$kw$on_DASH_change,(function (p1__13671_SHARP_){
var G__13690 = flashcards.core.words;
var G__13691 = p1__13671_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13690,G__13691) : cljs.core.reset_BANG_.call(null,G__13690,G__13691));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Write English",cljs.core.cst$kw$on_DASH_click,(function (){
return flashcards.core.scramble(true);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Write Chinese",cljs.core.cst$kw$on_DASH_click,(function (){
return flashcards.core.scramble(false);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Save",cljs.core.cst$kw$on_DASH_click,(function (){
var v = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.words) : cljs.core.deref.call(null,flashcards.core.words));
var k = cljs.core.first(v.split("\n"));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(flashcards.core.stored,cljs.core.assoc,k,v);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(flashcards.core.stored_react,cljs.core.assoc,k,v);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),(function (){var iter__6582__auto__ = (function flashcards$core$contents_$_iter__13692(s__13693){
return (new cljs.core.LazySeq(null,(function (){
var s__13693__$1 = s__13693;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13693__$1);
if(temp__4657__auto__){
var s__13693__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13693__$2)){
var c__6580__auto__ = cljs.core.chunk_first(s__13693__$2);
var size__6581__auto__ = cljs.core.count(c__6580__auto__);
var b__13695 = cljs.core.chunk_buffer(size__6581__auto__);
if((function (){var i__13694 = (0);
while(true){
if((i__13694 < size__6581__auto__)){
var vec__13700 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6580__auto__,i__13694);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13700,(1),null);
cljs.core.chunk_append(b__13695,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"javascript:void(0)",cljs.core.cst$kw$on_DASH_click,((function (i__13694,vec__13700,k,v,c__6580__auto__,size__6581__auto__,b__13695,s__13693__$2,temp__4657__auto__){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(flashcards.core.words,v) : cljs.core.reset_BANG_.call(null,flashcards.core.words,v));
});})(i__13694,vec__13700,k,v,c__6580__auto__,size__6581__auto__,b__13695,s__13693__$2,temp__4657__auto__))
], null),k], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"X",cljs.core.cst$kw$on_DASH_click,((function (i__13694,vec__13700,k,v,c__6580__auto__,size__6581__auto__,b__13695,s__13693__$2,temp__4657__auto__){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(flashcards.core.stored,cljs.core.dissoc,k);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(flashcards.core.stored_react,cljs.core.dissoc,k);
});})(i__13694,vec__13700,k,v,c__6580__auto__,size__6581__auto__,b__13695,s__13693__$2,temp__4657__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__13707 = (i__13694 + (1));
i__13694 = G__13707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13695),flashcards$core$contents_$_iter__13692(cljs.core.chunk_rest(s__13693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13695),null);
}
} else {
var vec__13701 = cljs.core.first(s__13693__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"javascript:void(0)",cljs.core.cst$kw$on_DASH_click,((function (vec__13701,k,v,s__13693__$2,temp__4657__auto__){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(flashcards.core.words,v) : cljs.core.reset_BANG_.call(null,flashcards.core.words,v));
});})(vec__13701,k,v,s__13693__$2,temp__4657__auto__))
], null),k], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"X",cljs.core.cst$kw$on_DASH_click,((function (vec__13701,k,v,s__13693__$2,temp__4657__auto__){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(flashcards.core.stored,cljs.core.dissoc,k);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(flashcards.core.stored_react,cljs.core.dissoc,k);
});})(vec__13701,k,v,s__13693__$2,temp__4657__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),flashcards$core$contents_$_iter__13692(cljs.core.rest(s__13693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6582__auto__((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.stored_react) : cljs.core.deref.call(null,flashcards.core.stored_react)));
})()], null):(function (){var vec__13702 = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.scrambled) : cljs.core.deref.call(null,flashcards.core.scrambled)));
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13702,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13702,(1),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,(30)], null)], null),q], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.attempt) : cljs.core.deref.call(null,flashcards.core.attempt)),cljs.core.cst$kw$on_DASH_change,((function (vec__13702,q,a){
return (function (p1__13672_SHARP_){
var G__13703 = flashcards.core.attempt;
var G__13704 = p1__13672_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13703,G__13704) : cljs.core.reset_BANG_.call(null,G__13703,G__13704));
});})(vec__13702,q,a))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Go",cljs.core.cst$kw$on_DASH_click,((function (vec__13702,q,a){
return (function (){
if(cljs.core.truth_(flashcards.core.almost_EQ_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flashcards.core.attempt) : cljs.core.deref.call(null,flashcards.core.attempt)),a))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(flashcards.core.scrambled,cljs.core.rest);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(flashcards.core.attempt,"") : cljs.core.reset_BANG_.call(null,flashcards.core.attempt,""));
} else {
return null;
}
});})(vec__13702,q,a))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"Restart",cljs.core.cst$kw$on_DASH_click,((function (vec__13702,q,a){
return (function (){
var G__13705 = flashcards.core.scrambled;
var G__13706 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13705,G__13706) : cljs.core.reset_BANG_.call(null,G__13705,G__13706));
});})(vec__13702,q,a))
], null)], null)], null);
})())], null);
});
flashcards.core.page(flashcards.core.contents);
