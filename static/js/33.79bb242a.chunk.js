"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{33:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,s,i,l,c,o=t(439),a=t(791),d=t(689),x=t(25),h=t(168),p=t(444),u=t(87),f=p.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-bottom: 40px;\n"]))),m=p.ZP.img(s||(s=(0,h.Z)(["\n  max-width: 350px;\n"]))),j=p.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),v=p.ZP.div(l||(l=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),g=(0,p.ZP)(u.rU)(c||(c=(0,h.Z)(["\n  display: block;\n  color: #fff;\n  text-align: center;\n  background-color: #fcba03;\n  padding: 10px;\n  border-radius: 4px;\n"]))),b=t(149),w=t(184);var Z=function(){var e,n,t=(0,a.useState)(null),r=(0,o.Z)(t,2),s=r[0],i=r[1],l=(0,d.UO)().movieId,c=null!==(e=null===(n=(0,d.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";if((0,a.useEffect)((function(){x.h.getMovieById(l).then(i).catch((function(e){return console.log(e)}))}),[l]),!s)return null;var h=s.poster_path,p=s.title,u=s.overview,Z=s.vote_average,k=s.genres.map((function(e){return e.name})).join(", "),y=10*Z.toFixed(1)+"%",P=h?"https://image.tmdb.org/t/p/w500/".concat(h):"https://dummyimage.com/395x592/000/fff.jpg&text=MOVIE+POSTER+IS+NOT+DEFINED";return(0,w.jsxs)(b.W,{children:[(0,w.jsxs)(f,{children:[(0,w.jsx)(m,{src:P,alt:p}),(0,w.jsxs)(v,{children:[(0,w.jsxs)(j,{children:[(0,w.jsx)("h2",{children:p}),(0,w.jsx)(g,{to:c,children:"Go back"})]}),(0,w.jsxs)("p",{children:["Userscore: ",y]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:u}),(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:k}),(0,w.jsxs)(f,{children:[(0,w.jsx)(g,{to:"cast",state:{from:c},children:"Cast"}),(0,w.jsx)(g,{to:"reviews",state:{from:c},children:"Reviews"})]})]})]}),(0,w.jsx)(a.Suspense,{fallback:null,children:(0,w.jsx)(d.j3,{})})]})}}}]);
//# sourceMappingURL=33.79bb242a.chunk.js.map