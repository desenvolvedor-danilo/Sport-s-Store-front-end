import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-dark bg-dark fixed-top" id="navegar">
        <div className="container-fluid">
          
          <Link className="navbar-brand" href="/"><Image src={require("./imagens/2985284b-260f-4cea-a4d8-9c8f72234f6f.png")} alt="dk modas" width="68" height="61"/></Link>             
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><Link href="/login"><Image src={require("./imagens/pngegg.png")} alt="icone login" width="25" height="25"/></Link>
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link active" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/sobre">Quem somos</Link>
                  </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" href="/masculino" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Moda masculina
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" href="/camisas">Camisas</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="/camisetas">Camisetas</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="/calcas">Calças</Link> </li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="/tenis">Tênis</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="/sapatos">Sapatos</Link></li>
                      </ul>
                      </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" href="/feminina" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Moda feminina
                      </Link>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><Link className="dropdown-item" href="/camisasfemininas">Camisas</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" href="/camisetasfemininas">Camisetas</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" href="/calcasfemininas">Calças</Link> </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" href="/tenisfemininas">Tênis</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" href="/sapatosfemininos">Sapatos</Link></li>
          
                        <li><hr className="dropdown-divider"/></li>
                        </ul>
                        </li>
                        <li>
                        <Link className="nav-link dropdown-toggle" href="/infantil" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Moda infantil
                        </Link>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" href="/camisasinfantis">Camisas</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="/camisetasinfantis">Camisetas</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="/calcasinfantis">Calças</Link> </li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="/tenisinfantis">Tênis</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" href="/sapatosinfantis">Sapatos</Link></li>
                    </ul>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </nav>
        </>
    )
}