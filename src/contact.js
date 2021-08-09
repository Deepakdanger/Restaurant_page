const contact = () => {
    const spec = document.createElement('div');
    spec.className = 'contact';
  
    const name = document.createElement('h1');
    name.innerHTML = 'Deepak Kumar';
    name.className = 'contact-para name';
    spec.appendChild(name);
  
    const gmail = document.createElement('h4');
    gmail.innerHTML = 'depk.96.kumar@gmail.com';
    gmail.className = 'contact-para gmail';
    spec.appendChild(gmail);
  
    const phone = document.createElement('p');
    phone.innerHTML = '+91-123456789';
    phone.className = 'contact-para phone';
    spec.appendChild(phone);
  
    return spec;
  };
  
  export default contact;