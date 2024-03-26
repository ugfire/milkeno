function contactus() {
  Swal.fire({
    html: `
          <div> <h4><button class="btn-sm btn-danger rounded-5 border-0" onclick="closePopup()"> &times; close
          </button></h4>
          <h4 class="bg-info p-1">15% discount for Orders > 200</h4>
            
            <div class="w-100 bg-light text-center"><img src="img/blue.png" alt="Your Photo" class="w-50 text-center" /></div>
          
           <div class="my-3 text-center">
            
           <p class="py-3"> <button class="btn-lg btn-primary border-0" onclick="whatsappUs()">
              <i class="bi bi-whatsapp"></i>  +256703 367138
            </button>
           
  </p>
  
         
       
      
            <p class="pb-3">
             <a class="btn btn-light shadow-2 shadow rounded rounded-5" href="tel:+256703 367138" href="mailto:info@milkeno.com.com ">
             <i class="bi bi-envelope-fill"></i>  info@milkeno.com.com</a>
            </p>
          
            </div>
  
          </div>
        `,
    showConfirmButton: false,
    showCancelButton: false,
  });
}

function closePopup() {
  Swal.close();
}

function whatsappUs() {
  window.location.href = "https://wa.me/+256703367138?text=Hello Milkeno! ";
}
