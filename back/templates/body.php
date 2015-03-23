<div class="navbar navbar-fixed-top navbar-primary main" role="navigation">
  <div class="navbar-header pull-left">
    <div class="navbar-brand">
      <div class="pull-left"> <a href="" class="toggle-button toggle-sidebar btn-navbar"><i class="fa fa-bars"></i></a> </div>
      <a href="index.html?lang=en" class="appbrand innerL">Melis CMS</a>

    </div>
  </div>
  <ul class="nav navbar-nav navbar-right hidden-xs">
    <li class="dropdown notification"> <a href="#" class="dropdown-toggle menu-icon" data-toggle="dropdown"><i class="fa fa-fw fa-envelope-o"></i><span class="badge badge-primary">2</span></a>
      <ul class="dropdown-menu inbox">
        <li class="headline">Inbox</li>
        <li>
          <input type="text" class="form-control border-none" placeholder="Search Email..." />
        </li>
        <li>
          <div class="media"> <a class="pull-left" href="#"><img src="../assets/images/people/50/8.jpg" alt="" class="img-circle media-object"></a>
            <div class="media-body"> <a href="" class="strong text-primary"> <i class="fa fa-circle"></i> Adrian Demian</a> <span>(3)</span><span class="pull-right time-email">10:20 AM</span>
              <div class="clearfix"></div>
              Lorem ipsum dolor sit amet, consecte adipisicing elit. </div>
            </div>
          </li>
          <li>
            <div class="media"> <a class="pull-left" href="#"><img src="../assets/images/people/50/3.jpg" alt="" class="img-circle media-object"></a>
              <div class="media-body"> <a href="" class="strong text-primary"> Joanne Smith</a><span>(1)</span><span class="pull-right time-email">06:48 PM</span>
                <div class="clearfix"></div>
                Lorem ipsum dolor sit amet, consecte adipisicing elit. </div>
              </div>
            </li>
            <li>
              <div class="media"> <a class="pull-left" href="#"><img src="../assets/images/people/50/20.jpg" alt="" class="img-circle media-object"></a>
                <div class="media-body"> <a href="" class="strong text-primary"> <i class="fa fa-circle"></i> Mister Awesome</a> <span>(7)</span><span class="pull-right time-email">04:22 PM</span>
                  <div class="clearfix"></div>
                  Lorem ipsum dolor sit amet, consecte adipisicing elit. </div>
                </div>
              </li>
            </ul>
          </li>


          <li class="dropdown"> <a href="" class="dropdown-toggle" data-toggle="dropdown"><img src="../assets//images/lang/en-flat.jpg" /></a>
            <ul class="dropdown-menu pull-right">
              <li class="active"><a href="">English</a></li>
              <li><a href="">Francais</a></li>
            </ul>
          </li>
          <li><a href="" class="menu-icon"><i class="fa fa-sign-out"></i></a></li>
        </ul>
      </div>
      <div id="menu" class="hidden-print hidden-xs">
        <div class="sidebar sidebar-inverse">
          <div class="user-profile media innerAll"> <a href="" class="pull-left"><img src="../assets/images/people/50/26.jpg" alt="" class="img-circle"><span class="badge badge-primary">2</span></a>
            <div class="media-body"> <a href="" class="strong">Fabrice FESCH</a>
              <p class="text-success"><i class="fa fa-fw fa-circle"></i> Online</p>
            </div>
            <ul>
              <li class="active"><a href=""><i class="fa fa-fw fa-user"></i></a></li>
              <li><a href=""><i class="fa fa-fw fa-envelope"></i></a></li>
              <li><a href=""><i class="fa fa-fw fa-lock"></i></a></li>
            </ul>
          </div>
          <div class="sidebarMenuWrapper" id="id-menu-dynatree">
            <div class="mod-menu-dynatree" id="id-mod-menu-dynatree">
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <div class="content-nav-tabs nav-tabs-fixed-top heading-buttons bg-white border-bottom clearfix" id="id-wrap-maintabs-tabs">
          <div class="relativeWrap" >
            <div class="widget widget-tabs widget-tabs-double-2 widget-tabs-responsive clear-margin" id="id-maintabs-tabs">
              <!-- Tabs Heading -->
              <div class="widget-head mod-maintabs-tabs" id="id-mod-maintabs-tabs">
                <ul>
                  <li class="nav-tabs-li-id-home active" id="id-mod-maintabs-tabs-item-home">
                    <a class="glyphicons home" href="#tabContent-id-home" data-toggle="tab">
                      <i></i>Dashboard
                    </a>
                  </li>
                </ul>
              </div>
              <!-- // Tabs Heading END -->      
            </div>
          </div>
        </div>
        <div class="content-options options-fixed-top heading-buttons bg-white clearfix" id="id-wrap-maintabs-tabs-options">
          <div class="relativeWrap" >
            <div class="widget widget-tabs widget-tabs-icons-only-2 widget-activity margin-none border-none" >

              <!-- Tabs Heading -->
              <div class="widget-head" id="id-maintabs-tabs-options">
                <div class="tabsbar" id="id-mod-maintabs-tabs-options">
                  <ul class="row row-merge">
                    <li class="active glyphicons pencil" data-option="edit"><a class="" data-toggle="tab" data-option="edit" href="#edit-tab-1"><i></i>Edit</a></li>
                    <li class="glyphicons settings" data-option="properties"><a class="" data-toggle="tab" data-option="properties" href="#properties-tab-1"><i></i>Properties</a></li>
                    <li class="glyphicons list" data-option="meta"><a class="" data-toggle="tab" data-option="meta" href="#meta-tab-1"><i></i>Meta</a></li>
                    <li class="glyphicons history" data-option="versionning"><a class="" data-toggle="tab" data-option="versionning" href="#versionning-tab-1"><i></i>Versionning</a></li>
                  </ul>
                </div>
              </div>
              <!-- // Tabs Heading END -->
            </div>
          </div>
        </div>



        <div class="content-iframe iframe-top ">
          <!-- Tabs -->
          <div class="relativeWrap full-width">
            <div class="widget widget-tabs widget-tabs-responsive full-width">


              <div class="widget-body full-width">
                <div class="tab-content full-width body-content-loader" id="id-body-content-loader">




    <?php
                  // Include dashboard.php
                  include "view/dashboard.php" ?>
                  <!-- // Tab content 1 END -->
  


                  
                </div>
              </div>
            </div>
          </div>
          <!-- // Tabs END -->
        </div>
        <!-- // Content END -->

        <div class="clearfix"></div>
        <!-- // Sidebar menu & content wrapper END -->

        <div id="footer" class="hidden-print"> 

          <!--  Copyright Line -->
          <div class="copy">&copy; 2014 - <a href="http://www.melistechnology.com/">Melis Technology</a> - All Rights Reserved. <a href="http://www.melistechnology.com/resources/download-&-documentation/id/21" target="_blank">Melis CMS</a> - Current version: v1.1.3 </div>
          <!--  End Copyright Line --> 

        </div>
        <!-- // Footer END -->

      </div>
      <!-- // Main Container Fluid END --> 

      <!-- Context Menu -->
      <div id="context-menu">
        <ul class="mls mls-dropdown-menu dropdown-menu" role="menu">
          <li><a tabindex="-1" href="#" class="glyphicons glyphicons-circle-plus glyphicons-color-shamrock">New page</a></li>
          <li><a tabindex="-2" href="#" class="glyphicons glyphicons-circle-minus glyphicons-color-sinnabar desebled">Delete</a></li>
          <li class="divider" href="#"></li>
          <li><a tabindex="-3" href="#" class="glyphicons glyphicons-play-button glyphicons-color-shamrock">Show online</a></li>
          <li><a tabindex="-4" href="#" class="glyphicons glyphicons-record glyphicons-color-shamrock">Publish</a></li>
          <li><a tabindex="-5" href="#" class="glyphicons glyphicons-record glyphicons-color-sandstorm">UnPublish</a></li>
        </ul>
      </div>
      <!-- // Context Menu -->

      <!-- Bootstrap Modal -->
      <!-- Modal -->
      <div class="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
              <h4 class="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <!-- // Bootstrap Modal -->