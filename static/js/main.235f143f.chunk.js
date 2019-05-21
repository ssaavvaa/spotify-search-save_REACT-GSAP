(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},29:function(e,t,a){e.exports=a(47)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),s=(a(34),a(8)),o=a(9),l=a(11),u=a(10),m=a(12),h=(a(35),{colors:{font_main:"white",bg_main:"#222326",scnd_main:"#1DB954"},fonts:{main:"Didact Gothic, sans-serif"},main_wrapper:{margin:"0 auto",maxWidth:1400,padding:20},get playListButton(){return{color:this.colors.font_main,fontFamily:this.fonts.main,backgroundColor:this.colors.scnd_main}},get searchButton(){return{color:this.colors.font_main,fontFamily:this.fonts.main,backgroundColor:this.colors.bg_main}},get main_heading(){return{backgroundColor:this.colors.bg_main,fontFamily:this.fonts.main}},get playlist_heading(){return{fontFamily:this.fonts.main,color:this.colors.scnd_main}},get track_name(){return{fontFamily:this.fonts.main,color:this.colors.scnd_main}},get track_description(){return{fontFamily:this.fonts.main,color:this.colors.font_main}}}),p=a(6);a(36);var d,f=a(4),y=a(13),g=a.n(y),v=window.location.href.match(/access_token=([^&]*)/),k=window.location.href.match(/expires_in=([^&]*)/),b={getAccessToken:function(){if(d)return d;if(v&&k)return d=v[1],window.history.pushState("Access Token",null,"/"),d;var e="https://accounts.spotify.com/authorize?client_id=".concat("b2c5900815984920b0af23be399fbd54","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("https://ssaavvaa_spotify.surge.sh/");window.location=e},recommendArtists:function(e){return fetch("https://api.spotify.com/v1/search?type=artist&q=".concat(e),{headers:{Authorization:"Bearer ".concat(d)}}).then(function(e){return e.json()}).then(function(e){return fetch("https://api.spotify.com/v1/artists/".concat(e.artists.items[0].id,"/related-artists"),{headers:{Authorization:"Bearer ".concat(d)}})}).then(function(e){return e.json()}).then(function(e){if(!e.artists.length)return[];for(var t=[],a=function(a){var n=Math.floor(Math.random()*e.artists.length),r=e.artists,c=r[n].name?r[n].name:"unknown",i=r[n].images[2].url?r[n].images[2].url:"https://static.thenounproject.com/png/340719-200.png";t.some(function(e){return e.name===c})||(t=[].concat(Object(f.a)(t),[{name:c,img:i}]))},n=0;n<6;n+=1)a();return t})},search:function(e){var t=this.getAccessToken(e);return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e,"&limit=15"),{headers:{Authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(e){return e.tracks?e.tracks.items.map(function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri,img:e.album.images[1]?e.album.images[1].url:"https://static.thenounproject.com/png/340719-200.png"}}):[]})},savePlaylist:function(e,t){var a,n,r={Authorization:"Bearer ".concat(d)};if(!e)return g()("Saving failure!","Please specify the playlist name!","error"),!1;fetch("https://api.spotify.com/v1/me",{headers:r}).then(function(e){return e.json()}).then(function(c){return a=c.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:r,method:"POST",body:JSON.stringify({name:e})}).then(function(e){return e.json()}).then(function(e){return n=e.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:r,method:"POST",body:JSON.stringify({uris:t})})},g()("Done!","Playlist was added to Spotify!","success"))})}};function E(e,t){return function(a){""!==e&&null!==e&&b.search(e).then(function(e){if(e.length)if(t.length){var n=Object(f.a)(e).reduce(function(e,a){return t.some(function(e){return e.id===a.id})||(e=[].concat(Object(f.a)(e),[a])),e},[]);b.recommendArtists(e[0].artist).then(function(e){a({type:"SEARCH_TRACKS",search_tracks:n,recommendations:e})})}else b.recommendArtists(e[0].artist).then(function(t){a({type:"SEARCH_TRACKS",search_tracks:e,recommendations:t})});else a({type:"SEARCH_TRACKS",search_tracks:!1,recommendations:[]})})}}var _=a(2),T=a(3),O=a.n(T),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onMouseSearch=a.onMouseSearch.bind(Object(p.a)(a)),a.onEnterSearch=a.onEnterSearch.bind(Object(p.a)(a)),a.inputValue=r.a.createRef(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.inputValue.current.value=localStorage.getItem("search_value")}},{key:"onMouseSearch",value:function(){O()("#loading_animation").show();var e=this.inputValue.current.value;localStorage.setItem("search_value",e),this.props.search_tracks(e,this.props.playListTracks)}},{key:"onEnterSearch",value:function(e){13===e.keyCode&&this.onMouseSearch()}},{key:"render",value:function(){var e=this.props.playListTracks.length;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"search_wrapper"},r.a.createElement("input",{ref:this.inputValue,placeholder:"Enter A Song, Album, or Artist",onKeyUp:this.onEnterSearch}),r.a.createElement("span",{className:"material-icons search_icon",onClick:this.onMouseSearch},"search")),r.a.createElement("div",{className:"option_buttons"},r.a.createElement("button",{className:"option_button",style:h.searchButton,onClick:this.props.setActivePage.bind(this,"search")},"Results"),r.a.createElement("button",{className:"option_button",style:h.searchButton,onClick:this.props.setActivePage.bind(this,"playlist")},"Playlist",e>0&&r.a.createElement("span",{id:"searchBar_counter"},e))))}}]),t}(r.a.Component);var L=Object(_.b)(function(e){return{playListTracks:e.tracks.playListTracks}},function(e){return{setActivePage:function(t){e(function(e){return{type:"ACTIVE_PAGE",page:e}}(t))},search_tracks:function(t,a){e(E(t,a))}}})(A);a(42),a(43);var j=Object(_.b)(function(e){return{playListTracks:e.tracks.playListTracks,recommendations:e.tracks.recommendations}},function(e){return{search_tracks:function(t,a){e(E(t,a))}}})(function(e){function t(t){O()("#loading_animation").show(),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(function(){e.search_tracks(t,e.playListTracks)},300)}return r.a.createElement("section",{className:"rec_wrapper"},r.a.createElement("h2",{className:"rec_heading"},"Other Artists you might like"),r.a.createElement("div",{className:"rec_artists-wrapper"},e.recommendations.map(function(e){return r.a.createElement("div",{key:e.name,onClick:t.bind(void 0,e.name),className:"rec_artist"},r.a.createElement("p",{className:"rec_artist-name"},e.name),r.a.createElement("img",{className:"rec_artist-img",alt:e.name,src:e.img}))})))}),w=(a(25),a(48));var S=new w.a;var C=Object(_.b)(null,function(e){return{addTrackToPlayList:function(t){e(function(e){return{type:"ADD_TRACK_TO_PLAYLIST",id:e}}(t))}}})(function(e){var t=r.a.createRef();return r.a.createElement("div",{ref:function(e){return t=e},className:"searchTrack-wrapper"},r.a.createElement("img",{src:"./add.svg",alt:"AddTrack",className:"action-addTrack",onClick:function(a){S.to(t,.3,{scale:1.02}).to(t,.3,{scale:0,rotation:100}),S.eventCallback("onComplete",function(){e.addTrackToPlayList(a)})}.bind(void 0,e.id)}),r.a.createElement("img",{className:"searchTrack-image",src:e.img,alt:e.name}),r.a.createElement("div",{className:"searchTrack_info-cover",style:{backgroundColor:h.colors.bg_main,zIndex:2}},r.a.createElement("h3",{style:h.track_name},e.name),r.a.createElement("p",{style:h.track_description},e.artist," | ",e.album," ")))}),P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){O()("#loading_animation").hide()}},{key:"componentDidMount",value:function(){O()("#loading_animation").hide()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.props.searchResults?r.a.createElement("section",{className:"searchResults-wrapper"},r.a.createElement("h2",{className:"hidden"},"Section - searching  artists"),this.props.searchResults.map(function(e){return r.a.createElement(C,{uri:e.uri,key:e.id,name:e.name,album:e.album,artist:e.artist,id:e.id,img:e.img})})):r.a.createElement("div",{className:"no_results-message"},"Nothing has been found with your Search request"),this.props.recommendations.length>0&&r.a.createElement(j,null))}}]),t}(r.a.Component);var R=Object(_.b)(function(e){return{searchResults:e.tracks.searchResults,recommendations:e.tracks.recommendations}})(P);a(44);var N=new w.a;var D=Object(_.b)(null,function(e){return{removePlaylistTrack:function(t){e(function(e){return{type:"REMOVE_PLAYLIST_TRACK",id:e}}(t))}}})(function(e){var t=r.a.createRef();return r.a.createElement("div",{className:"PL_track-wrapper"},r.a.createElement("div",{ref:function(e){return t=e}},r.a.createElement("h3",{style:h.playlist_heading},e.name),r.a.createElement("p",{style:{fontFamily:h.fonts.main}},e.artist," | ",e.album)),r.a.createElement("div",{css:{textAlign:"right"}},r.a.createElement("i",{className:"material-icons  action_deleteTrack",onClick:function(a){N.to(t,.3,{transformOrigin:"left top",scale:1.02}).to(t,.3,{scale:0,rotation:3}),N.eventCallback("onComplete",function(){e.removePlaylistTrack(a)})}.bind(void 0,e.id)},"delete")))});var F=Object(_.b)(function(e){return{playListTracks:e.tracks.playListTracks}},function(e){return{delete_playlist:function(){e({type:"DELETE_PLAYLIST"})}}})(function(e){var t=r.a.createRef();return r.a.createElement(n.Fragment,null,e.playListTracks.length>0&&r.a.createElement("div",{className:"playlist_Wrapper"},r.a.createElement("input",{placeholder:"New Playlist",ref:t,style:{fontFamily:h.fonts.main},className:"playlist_input"}),e.playListTracks.map(function(e){return r.a.createElement(D,{uri:e.uri,id:e.id,album:e.album,key:e.id,artist:e.artist,name:e.name})}),r.a.createElement("button",{className:"Playlist-save",onClick:function(){var a=t.current.value,n=e.playListTracks.map(function(e){return e.uri});if(!1!==b.savePlaylist(a,n))return e.delete_playlist()},style:h.playListButton},"SAVE TO SPOTIFY"),r.a.createElement("button",{className:"Playlist-Delete",onClick:function(){g()({title:"Are you sure?",text:"This action gonna delete all tracks in current playlist...",icon:"warning",buttons:!0,dangerMode:!0}).then(function(t){t&&(g()("Success!Playlist is cleared out...",{title:"Deleted!",buttons:!1,timer:1e3}),e.delete_playlist())})},style:h.playListButton},"DELETE ALL")),!e.playListTracks.length&&r.a.createElement("div",{className:"no_results-message"},"Your playlist is empty."))}),I=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{id:"bottomPageFixedTracksCounter"},e.counter),r.a.createElement("div",{id:"loading_animation"},r.a.createElement("div",{id:"loading-text",style:{fontFamily:h.fonts.main}},"LOADING"),r.a.createElement("div",{id:"loading-content"})))},B=a(27),M=a(49),x=a(50),K=(M.a,x.a,function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=O()("#bottomPageFixedTracksCounter");window.addEventListener("scroll",function(){O()(this).scrollTop()>150?O()(e).fadeIn(1e3):O()(e).fadeOut(1e3)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:h.main_heading},"Ja",r.a.createElement("span",{className:"highlight"},"mmm"),"ing"),r.a.createElement(L,null),r.a.createElement("div",{style:h.main_wrapper},"search"===this.props.activePage&&r.a.createElement(R,null),"playlist"===this.props.activePage&&r.a.createElement(F,null)),r.a.createElement(B.CircleArrow,{style:{zIndex:"10"}}),r.a.createElement(I,{counter:this.props.playListTracks.length}))}}]),t}(r.a.Component));var V=Object(_.b)(function(e){return{playListTracks:e.tracks.playListTracks,activePage:e.tracks.activePage}})(K);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(7),z=a(14),J={active_page:"search",searchResults:[],playListTracks:[],recommendations:[],activePage:"search"};var G=Object(Y.c)({tracks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_TRACKS":return Object(z.a)({},e,{searchResults:t.search_tracks,recommendations:t.recommendations,activePage:"search"});case"ADD_TRACK_TO_PLAYLIST":var a=e.searchResults.find(function(e){return e.id===t.id}),n=e.searchResults.filter(function(e){return e.id!==t.id});return Object(z.a)({},e,{searchResults:n,playListTracks:[].concat(Object(f.a)(e.playListTracks),[a])});case"REMOVE_PLAYLIST_TRACK":var r=e.playListTracks.find(function(e){return e.id===t.id}),c=e.playListTracks.filter(function(e){return e.id!==t.id});return Object(z.a)({},e,{searchResults:[].concat(Object(f.a)(e.searchResults),[r]),playListTracks:c});case"DELETE_PLAYLIST":return Object(z.a)({},e,{searchResults:[].concat(Object(f.a)(e.playListTracks),Object(f.a)(e.searchResults)),playListTracks:[]});case"ACTIVE_PAGE":return Object(z.a)({},e,{activePage:t.page});default:return e}}}),H=a(28),W=Object(Y.d)(G,Object(Y.a)(H.a));i.a.render(r.a.createElement(_.a,{store:W},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.235f143f.chunk.js.map