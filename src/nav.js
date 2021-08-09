const nav = () => {
    const nav = document.createElement('nav');
    nav.className = 'nav-bar';
  
    const ul = document.createElement('ul');
    ul.className = 'nav-link';
    nav.appendChild(ul);
  
    const link1 = document.createElement('li');
    link1.className = 'links';
    link1.id = 'home';
    link1.innerHTML = 'Home';
    ul.appendChild(link1);
  
    const link2 = document.createElement('li');
    link2.className = 'links';
    link2.id = 'menu';
    link2.innerHTML = 'Menu';
    ul.appendChild(link2);
  
    const link3 = document.createElement('li');
    link3.className = 'links';
    link3.id = 'contact';
    link3.innerHTML = 'Contact';
    ul.appendChild(link3);
  
    return nav;
  };
  
  export default nav;