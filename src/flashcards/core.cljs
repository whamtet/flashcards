(ns flashcards.core
  (:require
   [clojure.browser.repl :as repl]
   [reagent.core :as reagent :refer [atom]]
   [alandipert.storage-atom :refer [local-storage]]
   ))

(def stored (local-storage (cljs.core/atom {}) :stored))
(def stored-react (atom @stored))

(enable-console-print!)

(println "Hello world!")

(defn page [contents]
  (reagent/render-component
   [contents]
   (js/document.getElementById "content")))

(def words (atom "hi there\nold man"))
(def scrambled (atom []))
(def attempt (atom ""))

(defn scramble [write-english?]
  (reset! scrambled
          (shuffle (for [line (.split (.toLowerCase @words) "\n")
                         :when (not-empty line)
                         :let [
                               words (remove empty? (.split line " "))
                               zh (first words)
                               en (apply str (interpose " " (rest words)))
                               ]]
                     (if write-english?
                       [zh en]
                       [en zh])))))

(defn almost= [a b]
  (= (.toLowerCase a) (.toLowerCase b)))

(defn contents []
  [:div
   (if (empty? @scrambled)
     [:div
      [:textarea {
                  :rows 25
                  :cols 50
                  :value @words
                  :on-change #(reset! words (-> % .-target .-value))
                  }] [:br]
      [:input {
               :type "button"
               :value "Write English"
               :on-click #(scramble true)
               }]
      [:input {
               :type "button"
               :value "Write Chinese"
               :on-click #(scramble false)
               }][:br][:br]
      [:input {
               :type "button"
               :value "Save"
               :on-click #(let [
                                v @words
                                k (first (.split v "\n"))
                                ]
                            (swap! stored assoc k v)
                            (swap! stored-react assoc k v))}][:br][:br]
      (for [[k v] @stored-react]
        ^{:key k}
        [:div
         [:a {:href "javascript:void(0)" :on-click #(reset! words v)} k] " "
         [:input {
                  :type "button"
                  :value "X"
                  :on-click (fn []
                              (swap! stored dissoc k)
                              (swap! stored-react dissoc k))}]])
      ]
     (let [
           [q a] (first @scrambled)
           ]
       [:div
        [:div {:style {:font-size 30}} q]
        [:input {
                 :type "text"
                 :value @attempt
                 :on-change #(reset! attempt (-> % .-target .-value))
                 }]
        [:input {
                 :type "button"
                 :value "Go"
                 :on-click #(when (almost= @attempt a)
                              (swap! scrambled rest)
                              (reset! attempt ""))
                 }][:br][:br][:br]
        [:input {
                 :type "button"
                 :value "Skip"
                 :on-click #(swap! scrambled rest)}]
        [:br][:br][:br]
        [:input {
                 :type "button"
                 :value "Restart"
                 :on-click #(reset! scrambled [])
                 }]
        ]))])

(page contents)
