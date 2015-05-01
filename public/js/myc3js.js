(function() {
  $.getJSON( '/igMediaCounts')
    .done(function( data ) {
      var yCounts = data.users.map(function(item){
        return item.counts.followed_by;
      });
      
      yCounts.unshift('Followers');
      
      var xCounts = data.users.map(function(item){
        return item.counts.follows;
      });
      
      xCounts.unshift('Follows');
      
      
      var zCounts = data.users.map(function(item){
        return item.counts.media;
      });
      
      zCounts.unshift('Media Count');
      
    
      


      var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            yCounts, xCounts, zCounts
          ],
          type:'bar'
        }
      });
    });
})();
