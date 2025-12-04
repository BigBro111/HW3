function ToBasket(id) {
  document.getElementById("zb" + id).style.display = "none"; 
  document.getElementById("cbd" + id).style.display = "inline"; 
  document.getElementById("c" + id).style.display = "inline"; 
  document.getElementById("cbi" + id).style.display = "inline"; 
  document.getElementById("cs" + id).style.display = "inline"; 
}

function ProdCntInc(id) { 
  n = 0; 
  nv = 0;
  n = parseInt(document.getElementById("c" + id).value); 
  nv = n + 1;
  document.getElementById("c" + id).value = n + 1; 
  document.getElementById("cs" + id).value = nv * 150; 
} 

function ProdCntDec(id) { 
  n = 0; 
  nv = 0; 
  n = parseInt(document.getElementById("c" + id).value); 
  nv = n - 1; 
  document.getElementById("c" + id).value = nv; 
  document.getElementById("cs" + id).value = nv * 150; 
  if (nv < 1) { 
    document.getElementById("zb" + id).style.display = "inline"; 
    document.getElementById("cbd" + id).style.display = "none"; 
    document.getElementById("c" + id).style.display = "none"; 
    document.getElementById("cbi" + id).style.display = "none"; 
    document.getElementById("cs" + id).style.display = "none"; 
  }
} 

document.addEventListener('DOMContentLoaded', function() {
  const orderButtons = document.querySelectorAll('.product-card .btn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const orderForm = document.getElementById('orderForm');
  const submitBtn = document.querySelector('.submit-btn');
  
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const agreeCheckbox = document.getElementById('agree');
  
  orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
       e.preventDefault();
       modalOverlay.style.display = 'flex'; 
       document.body.style.overflow = 'hidden'; 

      // orderButtons.button.hidden = true; 
      // button.style.display = "none"; 
    });
  });
  
  modalClose.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    orderForm.reset();
    submitBtn.disabled = true;
    
    alert('Ваш заказ принят! Мы свяжемся с вами в ближайшее время.');
  });
  
  function validateForm() {
    const isNameValid = nameInput.value.trim() !== '';
    const isPhoneValid = phoneInput.value.trim() !== '';
    const isAgreed = agreeCheckbox.checked;
    
    submitBtn.disabled = !(isNameValid && isPhoneValid && isAgreed);
  }
  
  nameInput.addEventListener('input', validateForm);
  phoneInput.addEventListener('input', validateForm);
  agreeCheckbox.addEventListener('change', validateForm);

  if (privacyLink) {
    privacyLink.addEventListener('click', function(e) {
      e.stopPropagation(); 
      
    });
  }

});