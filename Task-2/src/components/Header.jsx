import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
   <div className="bg">
   <div className="container-fluid">
      <div className="d-flex align-items-center">
     <div className="logo">
     <img className='m-2' width="50" src="https://cdn.discordapp.com/attachments/1064953230091624448/1146021226469408871/logo2.png" alt="" /> 
     </div>
        <div className="layer"></div>

        <div className="menu">
        <LinkContainer to="/feed">
        <div className="box1">
        <i className="fa-solid fa-rss"></i>
        <p>FEED</p>
        <div className="layer1"></div>
        </div>
        </LinkContainer>
        <LinkContainer to="/network">
        <div className="box">
        <i className="fa-solid fa-users"></i>
        <p>Network</p>
        </div>
        </LinkContainer>
        <LinkContainer to="/works">
        <div className="box">
        <i class="fa-solid fa-briefcase"></i>
        <p>İŞLƏR</p>
        </div>
        </LinkContainer>
        <LinkContainer to="/chat">
        <div className="box">
        <i class="fa-solid fa-comment-dots"></i>
        <p>CHAT</p>
        </div>
        </LinkContainer>
        <LinkContainer to="/bildirisler">
        <div className="box">
        <i class="fa-solid fa-bell"></i>
        <p>BİLDİRİŞLƏR</p>
        </div>
        </LinkContainer>
        </div>
        <div className="layer ms-4"></div>
        <div className="d-flex search">
            <div className="input-group mb-3">
            <button className="btn btn border-none " type="button" id="button-addon1"> <i class="fa-solid fa-magnifying-glass ms-3  "></i></button>
            <input type="text" className="form-control" placeholder="Axtarış " aria-label="Example text with button addon" aria-describedby="button-addon1" />
            </div>
        </div>
       <div className="layer"></div>
       <div className="box3 ms-3">
        <div className="d-flex align-items-center">
            <img  src="https://cdn.discordapp.com/attachments/1064953230091624448/1146035509697728552/Rectangle.png" alt="" />
       <div className="card-body ms-3">
        <p className="card-text">Ş.İsa-zadə  <span className='text-muted'>SƏN</span></p>
        <p className="card-text"><small className="text-muted">367 bugün baxış</small></p>
        </div>
        </div>
       </div>
     <div className="layer"></div>
       <div className="box4">
       <div className="d-flex flex-column">
        <i class="fa-solid fa-ellipsis"></i>
        <p>Digər</p>
        </div>
       </div>
       <div className="layer"></div>
       
      </div>
    </div>
   </div>
    
    <div className="bg2">
    <div className="container-fluid">
      <div className="d-flex align-items-center">
      <img className='m-2' width="50" src="https://cdn.discordapp.com/attachments/1064953230091624448/1146021226469408871/logo2.png" alt="" /> 
        <div className="layer"></div>

        <div className="d-flex search">
            <div className="input-group mb-3">
            <button className="btn btn border-none " type="button" id="button-addon1"> <i class="fa-solid fa-magnifying-glass ms-3  "></i></button>
            <input type="text" className="form-control" placeholder="Axtarış " aria-label="Example text with button addon" aria-describedby="button-addon1" />
            </div>
        </div>

    <button class="btn btn-dark border mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <i class="fa-solid fa-ellipsis"></i>
</button>
      </div>
    </div>
  

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body ">
    
   <div className="d-flex align-items-center justify-content-center">
   <div className="menu">
        <LinkContainer to="/feed">
        <div className="box1">
        <i className="fa-solid fa-rss"></i>
        <p>FEED</p>
        <div className="layer1"></div>
        </div>
        </LinkContainer>
        <LinkContainer to="/network">
        <div className="box">
        <i className="fa-solid fa-users"></i>
        <p>Network</p>
        </div>
        </LinkContainer>
        <LinkContainer to="/works">
        <div className="box">
        <i class="fa-solid fa-briefcase"></i>
        <p>İŞLƏR</p>
        </div>
        </LinkContainer>
        <LinkContainer to="/chat">
        <div className="box">
        <i class="fa-solid fa-comment-dots"></i>
        <p>CHAT</p>
        </div>
        </LinkContainer>
        <LinkContainer to="/bildirisler">
        <div className="box">
        <i class="fa-solid fa-bell"></i>
        <p>BİLDİRİŞLƏR</p>
        </div>
        </LinkContainer>
        
        </div>
   </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Header