const collect_ratings = () => {
    const ratings = { 'count': 0, 'sum': 0, 'average': 0 };
  
    let rating = 0;
  
    const elements = document.querySelectorAll('.rating');
    console.log(elements);
  
    elements.forEach(element => {
  
      rating = parseInt(element.id.replace('star', ''));
      ratings.count += parseInt(element.value);
      ratings.sum += parseInt(element.value) * rating;
    });
  
    if (ratings.count !== 0) {
      ratings.average = ratings.sum / ratings.count;
    }
  
    return ratings;
  };
  
  document.addEventListener('change', () => {
    const ratings = collect_ratings();
    document.querySelector('#average').value = ratings.average.toFixed(2);
  });


/*
document.addEventListener('change', ()=>{

    calculator();

    const elements = document.querySelectorAll('.rating');

    let fiveStarCount = parseInt(document.getElementById('star5').value);

    let fourStarCount = parseInt(document.getElementById('star4').value);
    let threeStarCount = parseInt(document.getElementById('star3').value);
    let twoStarCount = parseInt(document.getElementById('star2').value);
    let oneStarCount = parseInt(document.getElementById('star1').value);

    let responseCount = fiveStarCount+fourStarCount+threeStarCount+twoStarCount+oneStarCount ;
   let numerator =  ((fiveStarCount*5)+(fourStarCount*4)+(threeStarCount*3)+(twoStarCount*2)+(oneStarCount*1));
   let average = (numerator/responseCount).toFixed(2);
    // const ratings = collect_ratings();
     document.getElementById('average').value = average ;

})*/