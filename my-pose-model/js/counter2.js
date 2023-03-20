$('#percent').on('change', function(){
    var val = parseInt($(this).val());
    var $circle = $('#svg #bar');
    
    if (isNaN(val)) {
     val = 10; 
    }
    else{
      var r = $circle.attr('r');
      var c = Math.PI*(r*2);
     
      if (val < 0) { val = 0;}
      if (val > 10) { val = 10;}
      
      var pct = ((10-val)/10)*c;
      
      $circle.css({ strokeDashoffset: pct});
      
      $('#cont').attr('data-pct',val);
    }
  });

function count_change() {
    var val = parseInt($('#percent').val());
    var $circle = $('#svg #bar');
    
    if (isNaN(val)) {
     val = 10; 
    }
    else{
      var r = $circle.attr('r');
      var c = Math.PI*(r*2);
     
      if (val < 0) { val = 0;}
      if (val > 10) { val = 10;}
      
      var pct = ((10-val)/10)*c;
      
      $circle.css({ strokeDashoffset: pct});
      
      $('#cont').attr('data-pct',val);
    }
}

// $('#count-container').on('DOMSubtreeModified', function() {
//     var val = parseInt($(this).val());
//     var $circle = $('#svg #bar');
    
//     var r = $circle.attr('r');
//     var c = Math.PI*(r*2);
   
//     if (val < 0) { val = 0;}
//     if (val > 10) { val = 10;}
    
//     var pct = ((10-val)/10)*c;
    
//     $circle.css({ strokeDashoffset: pct });
    
//     $('#cont').attr('data-pct',val);

// });

// $('#percent').on('change', function(){
//     var val = parseInt($(this).val());
//     var $circle = $('#svg #bar');
    
//       var r = $circle.attr('r');
//       var c = Math.PI*(r*2);
     
//       if (val < 0) { val = 0;}
//       if (val > 10) { val = 10;}
      
//       var pct = ((10-val)/10)*c;
      
//       $circle.css({ strokeDashoffset: pct });
      
//       $('#cont').attr('data-pct',val);
    
//   });

//   $(function(){
//     var count2 = parseInt(document.getElementById("count-container").innerText);
//     var $circle = $('#svg #bar');

//     var r = $circle.attr('r');
//     var c = Math.PI*(r*2);
     
//     if (count2 < 0) { val = 0;}
//     if (count2 > 10) { val = 10;}
      
//     var pct = ((10-count2)/10)*c;
      
//     $circle.css({ strokeDashoffset: pct});
      
//     $('#cont').attr('data-pct',count2);
// });