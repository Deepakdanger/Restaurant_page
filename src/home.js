const home = () => {
    const homepic = document.createElement('div');
    homepic.className = 'home_div';

    const content1 = document.createElement('div');
    content1.className = 'content1';
    homepic.appendChild(content1);

    const title1 = document.createElement('h1');
    title1.className = 'title1';
    title1.innerHTML= "SPICY FLOOR";
    content1.appendChild(title1);

    const content2 = document.createElement('div');
    content2.className = 'content2';
    content2.innerHTML= "A restaurant, more informally, an eatery, is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments.";
    content1.appendChild(content2);

    return homepic;
  };
  
  export default home;