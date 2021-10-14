import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center text-lg-start bg-light text-muted">
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" class="me-4 text-reset">
            <i class="fa fa-facebook-f footer-soc-icon"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fa fa-twitter footer-soc-icon"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fa fa-google footer-soc-icon"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fa fa-instagram footer-soc-icon"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fa fa-linkedin footer-soc-icon"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fa fa-github  footer-soc-icon"></i>
          </a>
        </div>
      </section>
      <section class="">
        <div class="container text-center text-md-start mt-5 myClass">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fa fa-gem me-3"></i>scooters rent
              </h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                praesentium facilis ipsum quod at, nobis hic dicta illo voluptas
                animi.
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" class="text-reset">Scooters</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Rental</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Repair</a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a
                  href="https://github.com/GedasPupa/kolt-fe"
                  class="text-reset"
                  >Angular(FE) GIT</a
                >
              </p>
              <p>
                <a
                  href="https://github.com/GedasPupa/kolt-be"
                  class="text-reset"
                  >Nodejs(BE) GIT</a
                >
              </p>
              <p>
                <a href="#!" class="text-reset">Help</a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fa fa-home me-3"></i> Vilnius, Užupis 01205, LT</p>
              <p>
                <i class="fa fa-envelope me-3"></i>
                gedosas@gmail.com
              </p>
              <p><i class="fa fa-phone me-3"></i> + 370 656 173 41</p>
            </div>
          </div>
        </div>
      </section>
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05);"
      >
        © 2021 Copyright:
        <a
          class="footer-link text-reset fw-bold"
          target="_blank"
          href="https://github.com/GedasPupa"
          >Gedas Pupa</a
        >
      </div>
    </footer>
  `,
  styles: [
    '.footer-link {text-decoration: none;}',
    '.footer-soc-icon {transition: transform .4s ease-in-out;}',
    '.footer-soc-icon:hover {transform: rotate(360deg); transition: 0.5s;}',
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
