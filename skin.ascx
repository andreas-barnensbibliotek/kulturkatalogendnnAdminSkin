<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="DNNLINK" Src="~/Admin/Skins/DnnLink.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKTOMOBILE" Src="~/Admin/Skins/LinkToMobileSite.ascx" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="fortyfingers" TagName="STYLEHELPER" Src="~/DesktopModules/40Fingers/SkinObjects/StyleHelper/StyleHelper.ascx" %>

<!-- Html Meta header -->
<fortyfingers:STYLEHELPER ID="headMeta1" AddToHead='<meta http-equiv="X-UA-Compatible" content="IE=edge">' runat="server" />
<fortyfingers:STYLEHELPER ID="headMeta2" AddToHead='<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">' runat="server" />

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<fortyfingers:STYLEHELPER ID="IE_LEE9" IfBrowser="IE<9" AddJsFile="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js" runat="server" />
<fortyfingers:STYLEHELPER ID="IE_LEE9_2" IfBrowser="IE<9" AddJsFile="https://oss.maxcdn.com/respond/1.4.2/respond.min.js" runat="server" />

    
<!-- ################################################################################################ -->
    <!--meny -->
        <dnn:MENU ID="MENU1" MenuStyle="Simple" runat="Server"/>
    <!--meny end -->
    
    <!-- content -->		
        <div id="ContentPane" class="contentPane" runat="server"></div>
    <!-- content end-->	             
<!-- ################################################################################################ -->

<div class="wrapper">

  <!-- Main Header -->
  <header class="main-header">

    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><img src="Portals/_default/Skins/kk_Admin_Acklay/img/kulturkatalogen/kulturkatalogMinilogo.png" /></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><img src="Portals/_default/Skins/kk_Admin_Acklay/img/kulturkatalogen/kulturkatalogen250.png" /></span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="dropdown messages-menu">
            <!-- Menu toggle button -->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 4 messages</li>
              <li>
                <!-- inner menu: contains the messages -->
                <ul class="menu">
                  <li><!-- start message -->
                    <a href="#">
                      <div class="pull-left">
                        <!-- User Image -->
                        <img src="Portals/_default/Skins/kk_Admin_Acklay/img/alf-aj.jpg" class="img-circle" alt="User Image">
                      </div>
                      <!-- Message title and timestamp -->
                      <h4>
                        Support Team
                        <small><i class="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <!-- The message -->
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <!-- end message -->
                </ul>
                <!-- /.menu -->
              </li>
              <li class="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>
          <!-- /.messages-menu -->

          <!-- Notifications Menu -->
          <li class="dropdown notifications-menu">
            <!-- Menu toggle button -->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">10</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 10 notifications</li>
              <li>
                <!-- Inner Menu: contains the notifications -->
                <ul class="menu">
                  <li><!-- start notification -->
                    <a href="#">
                      <i class="fa fa-users text-aqua"></i> 5 new members joined today
                    </a>
                  </li>
                  <!-- end notification -->
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
          <!-- Tasks Menu -->
          <li class="dropdown tasks-menu">
            <!-- Menu Toggle Button -->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">9</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 9 tasks</li>
              <li>
                <!-- Inner menu: contains the tasks -->
                <ul class="menu">
                  <li><!-- Task item -->
                    <a href="#">
                      <!-- Task title and progress text -->
                      <h3>
                        Design some buttons
                        <small class="pull-right">20%</small>
                      </h3>
                      <!-- The progress bar -->
                      <div class="progress xs">
                        <!-- Change the css width attribute to simulate progress -->
                        <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
          <!-- User Account Menu -->
          <li class="dropdown user user-menu">
            <!-- Menu Toggle Button -->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <!-- The user image in the navbar-->
              <img src="Portals/_default/Skins/kk_Admin_Acklay/img/alf-aj.jpg" class="user-image" alt="User Image">
              <!-- hidden-xs hides the username on small devices so only the image appears. -->
              <span class="hidden-xs">Andreas Josefsson</span>
            </a>
            <ul class="dropdown-menu">
              <!-- The user image in the menu -->
              <li class="user-header">
                <img src="Portals/_default/Skins/kk_Admin_Acklay/img/alf-aj.jpg" class="img-circle" alt="User Image">

                <p>
                  Andreas Josefsson - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="Portals/_default/Skins/kk_Admin_Acklay/img/alf-aj.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Andreas Josefsson</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
              

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
            <li class="header">Meny</li>
            <li class="active"><a href="../kulturkatalogenGlobal/userstart.html"><i class="fa fa-home" aria-hidden="true"></i> <span>Start</span></a></li>

            <!-- Optionally, you can add icons to the links -->
            <li><a href="../ansokningar/nyaansokningar.html"><i class="fa fa-users" aria-hidden="true"></i> <span>Ans&ouml;kningar</span></a></li>
            <li><a href="../kulturkatalogenGlobal/diarie.html"><i class="fa fa-folder-open-o" aria-hidden="true"></i> <span>Diarie/ Logg</span></a></li>
        </ul>
        <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Kulturkatalogen V&auml;st - Administration
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i>Start</a></li>                
            </ol>
        </section>
        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-md-3">
                    <!-- Profile Image -->
                    <div class="box box-primary">
                        <div class="box-body box-profile">
                            <img class="profile-user-img img-responsive img-circle" src="Portals/_default/Skins/kk_Admin_Acklay/img/alf-aj.jpg" alt="User profile picture">
                            <h3 class="profile-username text-center">Andreas Josefsson</h3>
                            <p class="text-muted text-center">Systemutvecklare</p>
                            <ul class="list-group list-group-unbordered">
                                <li class="list-group-item">
                                    <b>E-post:</b> <a class="pull-right">andreas.josefsson@kulturivast.se</a>
                                </li>
                                <li class="list-group-item">
                                    <b>Tel:</b> <a class="pull-right">0708-183215</a>
                                </li>
                                <li class="list-group-item">
                                    <b>Roll:</b> <a class="pull-right">Admin</a>
                                </li>
                            </ul>                            
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                    <!-- About Me Box -->
                    <div class="box box-primary">
                        <div class="box-header with-border">
                            <h3 class="box-title">Om mej</h3>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">                            
                            <strong><i class="fa fa-file-text-o margin-r-5"></i> Systemutvecklare p&aring; Kultur i V&auml;st</strong>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
                <!-- /.col -->
                <div class="col-md-9">
                    <div class="nav-tabs-custom">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#activity" data-toggle="tab">Senaste h&auml;ndelserna</a></li>                            
                            
                        </ul>
                        <div class="tab-content">
                            <div class="active tab-pane" id="activity">
                                <!-- Post -->
                                <div class="post">
                                    <div class="user-block">
                                        
                                        <h5 class="text-green">Godk&auml;nd och publicerad</h5>
                                        <span class="username">
                                            
                                            <a href="#">Skolbio f&ouml;rskolan: Mustang </a>
                                            <a href="#" class="pull-right btn-box-tool">2017-01-15</a>
                                        </span>
                                        <span class="description">Skolbio f&ouml;rskolan: Mustang </span>
                                    </div>
                                    <!-- /.user-block -->
                                    <h5>Annonstext:</h5>
                                    <p>
                                         Arrangemanget &auml;r bla bla bla bla bla bla bla bla bla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere finibus viverra. Nunc pharetra leo ac ante mollis, sit amet gravida neque egestas. Mauris elit eros, maximus at iaculis in, ullamcorper ac massa. Curabitur erat leo, efficitur ac sapien et, fringilla venenatis lorem. Duis dapibus metus erat, non viverra tortor posuere ac. Nam vel elit bibendum, efficitur arcu vitae, cursus augue. Fusce lobortis facilisis tempor. Suspendisse aliquam sed nunc sed bibendum. Vivamus et dictum risus. Mauris et dolor ac velit faucibus aliquam vel et sapien. Cras euismod, dolor sed congue ornare, neque magna pharetra mi, tristique posuere ex sapien id nulla. Donec pellentesque ipsum in posuere laoreet. Donec sed lectus faucibus, placerat ligula a, placerat nisl. Fusce tincidunt pretium est, vel sodales lectus iaculis ut. 
                                    </p>
                                    <ul class="list-inline">
                                        <li><a href="#" class="link-black text-sm"><i class="fa fa-share margin-r-5"></i> G&aring; till arrangemang</a></li>
                                        
                                    </ul>
                                    
                                </div>
                                <!-- /.post -->
                                <!-- Post -->
                                <div class="post clearfix">
                                    <div class="user-block">

                                        <h5 class="text-danger">Nekad</h5>
                                        <span class="username">

                                            <a href="#">Skapa film & r&ouml;rlig bild  </a>
                                            <a href="#" class="pull-right btn-box-tool">2017-01-12</a>
                                        </span>
                                        <span class="description">Skapa film & r&ouml;rlig bild </span>
                                    </div>
                                    <!-- /.user-block -->
                                    <h5>Annonstext:</h5>
                                    <p>
                                        Lorem ipsum represents a long-held tradition for designers,
                                        typographers and the like. Some people hate it and argue for
                                        its demise, but others ignore the hate as they create awesome
                                        tools to help create filler text for everyone from bacon lovers
                                        to Charlie Sheen fans.
                                    </p>
                                    <ul class="list-inline">
                                        <li><a href="#" class="link-black text-sm"><i class="fa fa-share margin-r-5"></i> G&aring; till arrangemang</a></li>

                                    </ul>
                                </div>
                                <!-- /.post -->
                                
                            </div>
                          
                            <div class="tab-pane" id="settings">
                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <label for="inputName" class="col-sm-2 control-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control" id="inputName" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail" class="col-sm-2 control-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputName" class="col-sm-2 control-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputName" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputExperience" class="col-sm-2 control-label">Experience</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputSkills" class="col-sm-2 control-label">Skills</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="inputSkills" placeholder="Skills">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-10">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox"> I agree to the <a href="#">terms and conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-10">
                                            <button type="submit" class="btn btn-danger">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- /.tab-pane -->
                        </div>
                        <!-- /.tab-content -->
                    </div>
                    <!-- /.nav-tabs-custom -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="pull-right hidden-xs">
      Utvecklare: Andreas Josefsson
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2017 <a href="kulturkatalogen.se">Kulturkatalogen V&auml;st, en del av V&auml;stra G&ouml;talandsregionen</a>.</strong> All rights reserved.
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Create the tabs -->
    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
      <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-users"></i></a></li>
      <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <!-- Home tab content -->
      <div class="tab-pane active" id="control-sidebar-home-tab">
        

        <h3 class="control-sidebar-heading">Anv&auml;ndare</h3>
        <ul class="control-sidebar-menu">
          <li>
            <a href="#">Andreas Josefsson</a>
          </li>
        </ul>
        <!-- /.control-sidebar-menu -->

      </div>
      <!-- /.tab-pane -->
      <!-- Stats tab content -->
      <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
      <!-- /.tab-pane -->
      <!-- Settings tab content -->
      <div class="tab-pane" id="control-sidebar-settings-tab">
          <h3 class="control-sidebar-heading">Roller</h3>
          <ul class="control-sidebar-menu">
              <li>
                  <a href="#">Administrat&ouml;r</a>
              </li>
              <li>
                  <a href="#">Samordnare</a>
              </li>
              <li>
                  <a href="#">Arrang&ouml;r</a>
              </li>
          </ul>
      </div>
      <!-- /.tab-pane -->
    </div>
  </aside>
  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
</div>



<span id="barnensbiblCurrentUserid"><%= UserController.Instance.GetCurrentUserInfo().UserID%></span>


<fortyfingers:STYLEHELPER ID="CookieJS"  AddJsFile="js/exernal/jquery.cookiesdirective.js" runat="server" />
<fortyfingers:STYLEHELPER ID="Bootstrap_js" AddJsFile="bootstrap/js/bootstrap.min.js" runat="server" />
<fortyfingers:STYLEHELPER ID="App_js" AddJsFile="js/app.min.js" runat="server" />

<script>
    jQuery(document).ready(function ($) {
        $('body').addClass('hold-transition skin-black sidebar-mini');
    });
</script>
