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
return (function (p__12739){
var vec__12740 = p__12739;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12740,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__12741){
var vec__12742 = p__12741;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12742,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function clojure$browser$event$listen(var_args){
var args12743 = [];
var len__6868__auto___12750 = arguments.length;
var i__6869__auto___12751 = (0);
while(true){
if((i__6869__auto___12751 < len__6868__auto___12750)){
args12743.push((arguments[i__6869__auto___12751]));

var G__12752 = (i__6869__auto___12751 + (1));
i__6869__auto___12751 = G__12752;
continue;
} else {
}
break;
}

var G__12745 = args12743.length;
switch (G__12745) {
case 3:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12743.length)].join('')));

}
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__12746 = src;
var G__12747 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__12748 = fn;
var G__12749 = capture_QMARK_;
return goog.events.listen(G__12746,G__12747,G__12748,G__12749);
});

clojure.browser.event.listen.cljs$lang$maxFixedArity = 4;
clojure.browser.event.listen_once = (function clojure$browser$event$listen_once(var_args){
var args12754 = [];
var len__6868__auto___12761 = arguments.length;
var i__6869__auto___12762 = (0);
while(true){
if((i__6869__auto___12762 < len__6868__auto___12761)){
args12754.push((arguments[i__6869__auto___12762]));

var G__12763 = (i__6869__auto___12762 + (1));
i__6869__auto___12762 = G__12763;
continue;
} else {
}
break;
}

var G__12756 = args12754.length;
switch (G__12756) {
case 3:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12754.length)].join('')));

}
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.listen_once.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__12757 = src;
var G__12758 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__12759 = fn;
var G__12760 = capture_QMARK_;
return goog.events.listenOnce(G__12757,G__12758,G__12759,G__12760);
});

clojure.browser.event.listen_once.cljs$lang$maxFixedArity = 4;
clojure.browser.event.unlisten = (function clojure$browser$event$unlisten(var_args){
var args12765 = [];
var len__6868__auto___12772 = arguments.length;
var i__6869__auto___12773 = (0);
while(true){
if((i__6869__auto___12773 < len__6868__auto___12772)){
args12765.push((arguments[i__6869__auto___12773]));

var G__12774 = (i__6869__auto___12773 + (1));
i__6869__auto___12773 = G__12774;
continue;
} else {
}
break;
}

var G__12767 = args12765.length;
switch (G__12767) {
case 3:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12765.length)].join('')));

}
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (src,type,fn){
return clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});

clojure.browser.event.unlisten.cljs$core$IFn$_invoke$arity$4 = (function (src,type,fn,capture_QMARK_){
var G__12768 = src;
var G__12769 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__12770 = fn;
var G__12771 = capture_QMARK_;
return goog.events.unlisten(G__12768,G__12769,G__12770,G__12771);
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
