"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r,a,c=n(439),i=n(791),l=n(689),u=n(25),o=n(168),s=n(444),p=s.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),f=s.ZP.li(a||(a=(0,o.Z)(["\n  width: calc((100% - 40px) / 5);\n"]))),h=n(184);var m=function(){var t=(0,i.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],a=(0,l.UO)().movieId;return(0,i.useEffect)((function(){u.h.getMovieCredits(a).then((function(t){var e=t.cast;r(e)})).catch((function(t){return console.log(t)}))}),[a]),n?(0,h.jsx)(p,{children:n.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return(0,h.jsxs)(f,{children:[(0,h.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://dummyimage.com/395x592/000/fff.jpg&text=MOVIE+POSTER+IS+NOT+DEFINED",alt:n}),(0,h.jsx)("h4",{children:n}),(0,h.jsx)("p",{children:r})]},e)}))}):null}}}]);
//# sourceMappingURL=387.42f3f495.chunk.js.map