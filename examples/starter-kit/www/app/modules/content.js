define(["rebar"],function(){var e={};return e.ContentView=Backbone.Rebar.CompositeView.extend({initialize:function(){var e=Backbone.Rebar.Application.instance;e.on("routeDidChange",this.handleRouteChange,this),Backbone.Rebar.CompositeView.prototype.initialize.call(this)},addSubView:function(e){Backbone.Rebar.CompositeView.prototype.addSubView.call(this,e),e.transitionIn()},handleRouteChange:function(t){var n=this,r=_.isUndefined(t.directory)?"":t.directory,i=_.isUndefined(t.file)?"":t.file,s=t.view,o=r+"/"+i,u=_.isUndefined(t.data)?{}:t.data;if(o==="/"||s===""){if(e[s]){var a=new e[s];this.removeAllSubViews(),this.addSubView(a)}return}var f=require([o],function(e){var t=e[s];if(_.isUndefined(t)){console.log("Error: view constructor is undefined");return}var r=new t({routeData:u});n.addSubView(r)},function(e){console.log("Error: "+e)})}}),e.View1=Backbone.Rebar.View.extend({className:"custom-one custom",initialize:function(){this.persistence=new Backbone.Rebar.PersistenceModel({url:"content-persistence"}),this.persistence.fetch(),Backbone.Rebar.View.prototype.initialize.call(this)},render:function(e){this.$el.html("<p>Custom Subview One</p>"),this.persistence.set("view1-timestamp",(new Date).getTime()),e(this.el)},destroy:function(){this.persistence.save(),Backbone.Rebar.View.prototype.destroy.call(this)},transitionIn:function(){this.$el.css("opacity","0"),this.$el.fadeTo(350,1)}}),e.View2=Backbone.Rebar.View.extend({className:"custom-two custom",initialize:function(){this.persistence=new Backbone.Rebar.PersistenceModel({url:"content-persistence"}),this.persistence.fetch(),Backbone.Rebar.View.prototype.initialize.call(this)},render:function(e){this.$el.html("<p>Custom Subview Two</p>"),this.persistence.set("view2-timestamp",(new Date).getTime()),e(this.el)},destroy:function(){this.persistence.save(),Backbone.Rebar.View.prototype.destroy.call(this)},transitionIn:function(){this.$el.css("opacity","0"),this.$el.fadeTo(350,1)}}),e});