/*! seajs-build-example - v1.0.0 - 2014-03-12 */
define("dist/templates/index.js",["handlebars"],function(a){var b=a("handlebars");return this.MMTPL=this.MMTPL||{},this.MMTPL["index/description"]=b.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<p>\n    ",(f=c.desc)?f=f.call(b,{hash:{},data:e}):(f=b&&b.desc,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+"\n</p>"}),this.MMTPL["index/title"]=b.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<h2>\n    ",(f=c.title)?f=f.call(b,{hash:{},data:e}):(f=b&&b.title,f=typeof f===h?f.call(b,{hash:{},data:e}):f),g+=i(f)+"\n</h2>"}),this.MMTPL});