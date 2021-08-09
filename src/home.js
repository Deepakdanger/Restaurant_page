const home1 = () => {
    const homepic = document.createElement('div');
    homepic.className = 'home_div';

    const content1 = document.createElement('div');
    content1.className = 'content1';
    homepic.appendChild(content1);

    const title1 = document.createElement('h2');
    title1.className = 'title1';
    title1.innerHTML= "SPICY FLOOR"
    content1.appendChild(title1);

    const content2 = document.createElement('div');
    content2.className = 'content2';
    content2.innerHTML= "Taste is everything"
    content1.appendChild(content2);

    return home1;
  };
  
  export default home1;