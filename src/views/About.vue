<template>
  <ViewWrapper>
    <template v-slot:header>
      <Header></Header>
    </template>
    <template v-slot:body>
      <div class="bg-light py-5">
        <div class="container py-5">
          <div class="row mb-4">
            <div class="col-lg-5">
              <h2 class="display-4 font-weight-light">Our team</h2>
              <p class="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div class="row text-center">
            <!-- Team item-->
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Manuella Nevoresky</h5>
                <span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-instagram"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End-->

            <!-- Team item-->
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Samuel Hardy</h5>
                <span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-instagram"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End-->

            <!-- Team item-->
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Tom Sunderland</h5>
                <span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-instagram"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End-->

            <!-- Team item-->
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">John Tarly</h5>
                <span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-instagram"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="social-link"><i class="fa fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End-->
          </div>
        </div>
      </div>
    </template>
  </ViewWrapper>
</template>

<script>
import ViewWrapper from '@/components/ViewWrapper'
import Header from '@/components/Header'
export default {
  components: {
    ViewWrapper,
    Header
  }
}
</script>

<style lang="stylus" scoped></style>
