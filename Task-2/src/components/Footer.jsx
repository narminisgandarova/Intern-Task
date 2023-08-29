import React from 'react'

const Footer = () => {
  return (
   <>
   <div className="footer">
    <div className="container py-5">
      
      <div className="row">
        <div className="col-12 col-sm-6 col-md-2">
        <div className="d-flex flex-column">
      <img width={50} src="https://cdn.discordapp.com/attachments/1064953230091624448/1146021226469408871/logo2.png" alt="" />
      <p>YÜKSEL <span>İŞ</span></p>
      </div>
        </div>
        <div className="col-12 col-sm-6 col-md-2">
          {/* <p className='text'>yukselis</p> */}
        <ul className='list-unstyled'>
            <li>Haqqimizda</li>
            <li>Karyera</li>
            <li>Bizimlə əlaqə</li>
            <li>Sənədlər</li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-2">
        <ul className='list-unstyled'>
            <li>Mərhələlər</li>
            <li>Xəbərlər</li>
            <li>Sual-Cavab</li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-2">
        <ul className='list-unstyled'>
            <li>Qaydalar</li>
            <li>Məxfilik və Şərtlər</li>
            <li>Mobil tətbiq</li>
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-md-2">
          <p>Sürətli keçid</p>
         <div className="d-flex flex-column">
         <button type="button" class="btn btn mybtn">SUALLAR <i class="fa-regular fa-circle-question ms-3"></i></button>
          <button type="button" class="btn btn mybtn2 mt-3">AYARLAR<i class="fa-solid fa-gear ms-3"></i></button>
         </div>
        </div>
        <div className="col-12 col-sm-6 col-md-2">
        <p>Dil</p>
        <div class="dropdown-center">
  <button class="btn mybtn4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   <div className="d-flex justify-content-between">
   <p>ENGLISH</p> <i class="fa-solid fa-chevron-down"></i>
   </div>
  </button>
</div>

        </div>
      </div>
    </div>
   </div>
   
   </>
  )
}

export default Footer