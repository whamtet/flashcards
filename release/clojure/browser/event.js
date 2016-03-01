// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');

/**
 * @interface
 */
clojure.browser.event.IEventType = function(){};

clojure.browser.event.event_types = (function clojure$browser$event$event_types(this$){
if((!((this$ == null))) && (!((this$.clojure$browser$event$IEventType$event_types$arity$1 == null)))){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__6465__auto__ = (((this$ == null))?null:this$);
var m__6466__auto__ = (clojure.browser.event.event_types[goog.typeOf(x__6465__auto__)]);
if(!((m__6466__auto__ == null))){
return (m__6466__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6466__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6466__auto__.call(null,this$));
} else {
var m__6466__auto____$1 = (clojure.browser.event.event_types["_"]);
if(!((m__6466__auto____$1 == null))){
return (m__6466__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6466__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6466__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventType.event-types",this$);
}
}
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__11929){
var vec__11930 = p__11929;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11930,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__11931){
var vec__11932 = p__11931;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function clojure$browser$event$listen(var_args){
var args11933 = [];
var len__6868__auto___11940 = arguments.length;
var i__6869__auto___11941 = (0);
while(true){
if((i__6869__auto___11941 < len__6868__auto___11940)){
args11933.push((arguments[i__6869__auto___11941]));

var G__11942 = (i__6869__auto___11941 + (1));
i__6869__auto___11941 = G__11942;
continue;
} else {
}
break;
}

var G__11935 = args11933.length;
switch (G__11935) {
case 3:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11933.length)].join('')));

}
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__11936 = src;
var G__11937 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__11938 = fn;
var G__11939 = capture_QMARK_;
return goog.events.listen(G__11936,G__11937,G__11938,G__11939);
});

clojure.browser.event.listen.cljs$lang$maxFixedArity = 4;
clojure.browser.event.listen_once = (function clojure$browser$event$listen_once(var_args){
var args11944 = [];
var len__6868__auto___11951 = arguments.length;
var i__6869__auto___11952 = (0);
while(true){
if((i__6869__auto___11952 < len__6868__auto___11951)){
args11944.push((arguments[i__6869__auto___11952]));

var G__11953 = (i__6869__auto___11952 + (1));
i__6869__auto___11952 = G__11953;
continue;
} else {
}
break;
}

var G__11946 = args11944.length;
switch (G__11946) {
case 3:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11944.length)].join('')));

}
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__11947 = src;
var G__11948 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__11949 = fn;
var G__11950 = capture_QMARK_;
return goog.events.listenOnce(G__11947,G__11948,G__11949,G__11950);
});

clojure.browser.event.listen_once.cljs$lang$maxFixedArity = 4;
clojure.browser.event.unlisten = (function clojure$browser$event$unlisten(var_args){
var args11955 = [];
var len__6868__auto___11962 = arguments.length;
var i__6869__auto___11963 = (0);
while(true){
if((i__6869__auto___11963 < len__6868__auto___11962)){
args11955.push((arguments[i__6869__auto___11963]));

var G__11964 = (i__6869__auto___11963 + (1));
i__6869__auto___11963 = G__11964;
continue;
} else {
}
break;
}

var G__11957 = args11955.length;
switch (G__11957) {
case 3:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11955.length)].join('')));

}
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__11958 = src;
var G__11959 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__11960 = fn;
var G__11961 = capture_QMARK_;
return goog.events.unlisten(G__11958,G__11959,G__11960,G__11961);
});

clojure.browser.event.unlisten.cljs$lang$maxFixedArity = 4;
clojure.browser.event.unlisten_by_key = (function clojure$browser$event$unlisten_by_key(key){
return goog.events.unlistenByKey(key);
});
clojure.browser.event.dispatch_event = (function clojure$browser$event$dispatch_event(src,event){
return goog.events.dispatchEvent(src,event);
});
clojure.browser.event.expose = (function clojure$browser$event$expose(e){
return goog.events.expose(e);
});
clojure.browser.event.fire_listeners = (function clojure$browser$event$fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function clojure$browser$event$total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function clojure$browser$event$get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function clojure$browser$event$all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function clojure$browser$event$unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function clojure$browser$event$has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function clojure$browser$event$remove_all(opt_obj,opt_type,opt_capt){
return null;
});
