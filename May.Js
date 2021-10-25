c=self;
c.F={};
F.M1631010270500respond_with______=function(M1631016028636fetch_event_arg___){
  let e = M1631016028636fetch_event_arg___;
  let url = e.request.url;
  e.respondWith(c.M1631016182853response_body_indx[url])
}
self.addEventListener('fetch', function(M1631010512244fetch_event_______) {
    if(M1631010512244fetch_event_______.request=='https://maygame.xxx')
    M1631010512244fetch_event_______.respondWith(
        new Response(c.M1631015901555index_markup______,c.M1631015695037html_header_______ )
     );
    else c.F.M1631010270500respond_with______(M1631010512244fetch_event_______);
  });
c.M1631015695037html_header_______={
  headers: {'Content-Type': 'text/html'}
}
c.M1631015901555index_markup______=`J`;
c.M1631026464930c_response_bodyInd={}
c.M1631016182853response_body_indx=new Proxy(c.M1631016288028response_body_indx);